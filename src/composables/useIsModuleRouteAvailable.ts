import { AppModuleName } from '@/dto/modules';
import { useModulesStore } from '@/stores/modules';

export function useIsModuleRouteAvailable(moduleName: AppModuleName) {
  const modulesStore = useModulesStore();

  return modulesStore.visibleModules.some(
    (module) => module.name === moduleName,
  );
}
