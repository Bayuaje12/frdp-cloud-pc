export type InstanceStatus =
  | "CREATED"
  | "QUEUED"
  | "PROVISIONING"
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "RESTORING"
  | "ERROR"
  | "DELETED";

export interface CloudInstanceSpec {
  name: string;
  os: "windows" | "linux";
  preset?: string;
}

export interface ProvisioningResult {
  providerInstanceId: string;
  status: InstanceStatus;
  message?: string;
}

export interface InfrastructureProvider {
  name: string;
  createInstance(spec: CloudInstanceSpec): Promise<ProvisioningResult>;
  startInstance(providerInstanceId: string): Promise<ProvisioningResult>;
  stopInstance(providerInstanceId: string): Promise<ProvisioningResult>;
  getInstanceStatus(providerInstanceId: string): Promise<InstanceStatus>;
}
