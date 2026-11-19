import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");
  const isLoginRoute = nextUrl.pathname.startsWith("/login");

  if (isDashboardRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", nextUrl.origin);
    return Response.redirect(loginUrl);
  }

  if (isLoginRoute && isLoggedIn) {
    const dashUrl = new URL("/dashboard", nextUrl.origin);
    return Response.redirect(dashUrl);
  }

  return;
});

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
