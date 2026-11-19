import type { CloudInstanceSpec, InfrastructureProvider, InstanceStatus, ProvisioningResult } from "./types";

export class NoopInfrastructureProvider implements InfrastructureProvider {
  name = "noop";

  async createInstance(_spec: CloudInstanceSpec): Promise<ProvisioningResult> {
    throw new Error(
      "No infrastructure provider configured. Set up a real provider implementation before creating instances."
    );
  }

  async startInstance(_providerInstanceId: string): Promise<ProvisioningResult> {
    throw new Error("No infrastructure provider configured.");
  }

  async stopInstance(_providerInstanceId: string): Promise<ProvisioningResult> {
    throw new Error("No infrastructure provider configured.");
  }

  async getInstanceStatus(_providerInstanceId: string): Promise<InstanceStatus> {
    throw new Error("No infrastructure provider configured.");
  }
}

export function getInfrastructureProvider(): InfrastructureProvider {
  return new NoopInfrastructureProvider();
}
