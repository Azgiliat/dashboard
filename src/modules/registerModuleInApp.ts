import { AppModule } from '@/dto/modules';
import { router } from '@/router';
import { useModulesStore } from '@/stores/modules';

export function registerModuleInApp(moduleDescriptor: string): Promise<void>;
export function registerModuleInApp(moduleDescriptor: AppModule): void;

export async function registerModuleInApp(
  moduleDescriptor: string | AppModule,
) {
  const modulesStore = useModulesStore();

  let module: null | AppModule;

  if (typeof moduleDescriptor === 'string') {
    try {
      // index.ts for vite will be able to make static analyze
      module = (await import(`./${moduleDescriptor}/index.ts`)).default || null;
    } catch {
      module = null;
    }
  } else {
    module = moduleDescriptor;
  }

  if (!module) {
    // eslint-disable-next-line no-console
    console.warn(`Can't register ${moduleDescriptor} module!`);
    return;
  }

  modulesStore.registerModule(module);
  module.routes.forEach((route) => {
    router.addRoute(route);
  });
}
