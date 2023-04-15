import { AppModule, AppModuleName } from '@/dto/modules';
import { router } from '@/router';
import { useModulesStore } from '@/stores/modules';

function checkModuleAvailability(moduleName: AppModuleName) {
  switch (moduleName) {
    case AppModuleName.CONTACTS:
      return false;
    default:
      return true;
  }
}

export function registerModuleInApp(moduleDescriptor: AppModule) {
  const isModuleAvailable = checkModuleAvailability(
    moduleDescriptor.storeModule.name,
  );
  if (!isModuleAvailable) {
    if (import.meta.env.MODE === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`Module ${moduleDescriptor.storeModule.name} is disabled`);
    }
    return;
  }

  const modulesStore = useModulesStore();
  modulesStore.registerModule(moduleDescriptor.storeModule);
  moduleDescriptor.routes.forEach((route) => {
    router.addRoute(route);
  });
}

export async function registerAsyncModuleInApp(moduleName: AppModuleName) {
  let module: null | AppModule;

  try {
    // calendar.descriptor.ts for vite will be able to make static analyze
    module =
      (await import(`./${moduleName}/${moduleName}.descriptor.ts`)).default ||
      null;
  } catch {
    module = null;
  }

  if (!module) {
    // eslint-disable-next-line no-console
    console.warn(`Can't register ${moduleName} module!`);
    return;
  }

  registerModuleInApp(module);
}
