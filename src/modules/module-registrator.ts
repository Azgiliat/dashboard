import { AppModule } from '@/dto/modules';
import { router } from '@/router';
import { useModulesStore } from '@/stores/modules';

export async function registerModuleInApp(moduleName: string) {
  const modulesStore = useModulesStore();

  let module: null | AppModule;

  try {
    module = (await import(`./${moduleName}`)).default || null;
  } catch {
    module = null;
  }

  if (!module) {
    // eslint-disable-next-line no-console
    console.warn(`Can't register ${moduleName} module!`);
    return;
  }

  modulesStore.registerModule(module);
  module.routes.forEach((route) => {
    router.addRoute(route);
  });
}
