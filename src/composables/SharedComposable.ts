import type { EffectScope } from 'vue';
import { effectScope } from 'vue';
import { onScopeDispose } from 'vue';

// eslint-disable-next-line
export function useSharedComposable<T extends (...args: any[]) => any>(
  composable: T,
): T {
  let scope: EffectScope | undefined = undefined;
  let state: ReturnType<T> | undefined = undefined;
  let subs = 0;

  function stop() {
    subs--;

    if (subs <= 0) {
      scope?.stop();
    }
  }

  return ((...args) => {
    subs++;
    if (state) {
      return state;
    }

    scope = effectScope(true);
    state = scope.run(() => composable(...args));

    onScopeDispose(stop);

    return state;
  }) as T;
}
