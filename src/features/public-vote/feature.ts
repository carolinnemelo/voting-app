import { createService } from "./service";

export function createFeature() {
  const service = createService();
  return {
    service,
  };
}
