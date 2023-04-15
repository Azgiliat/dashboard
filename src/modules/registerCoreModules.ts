import profileDescriptor from '@/modules/profile/profile.descriptor';
import { registerModuleInApp } from '@/modules/registerModuleInApp';

export function registerCoreModules() {
  registerModuleInApp(profileDescriptor);
}
