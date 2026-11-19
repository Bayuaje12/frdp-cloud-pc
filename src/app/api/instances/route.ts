import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Database is not configured (DATABASE_URL missing)." },
      { status: 503 }
    );
  }

  try {
    const instances = await prisma.cloudInstance.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        os: true,
        status: true,
        host: true,
        port: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ instances });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Unable to fetch instances. Verify database connectivity and that migrations have been applied.",
      },
      { status: 503 }
    );
  }
}
