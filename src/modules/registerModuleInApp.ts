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

function isDescriptorJustName(
  moduleName: AppModuleName | AppModule,
): moduleName is AppModuleName {
  return (
    typeof moduleName === 'string' &&
    Object.values(AppModuleName).includes(moduleName)
  );
}

export async function registerModuleInApp(
  moduleDescriptor: AppModuleName | AppModule,
) {
  const modulesStore = useModulesStore();
  let module: null | AppModule;
  const isDescriptorFull = !isDescriptorJustName(moduleDescriptor);
  const moduleName = isDescriptorFull
    ? moduleDescriptor.storeModule.name
    : moduleDescriptor;
  const isModuleAvailable = checkModuleAvailability(moduleName);

  if (!isModuleAvailable) {
    if (import.meta.env.MODE === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`Module ${moduleName} is disabled`);
    }
    return;
  }

  if (isDescriptorFull) {
    module = moduleDescriptor;
  } else {
    try {
      // calendar.descriptor.ts for vite will be able to make static analyze
      module =
        (
          await import(
            `./${moduleDescriptor}/${moduleDescriptor}.descriptor.ts`
          )
        ).default || null;
    } catch {
      module = null;
    }
  }

  if (!module) {
    // eslint-disable-next-line no-console
    console.warn(`Can't register ${moduleName} module!`);
    return;
  }

  modulesStore.registerModule(module.storeModule);
  module.routes.forEach((route) => {
    router.addRoute(route);
  });
}
