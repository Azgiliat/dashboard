import { SetupContext, watch } from 'vue';

import { useProvideForShapes } from '@/modules/canvas/composables/useProvideForShapes';
import { Shape } from '@/modules/canvas/types/Shape';
import { ShapeConfig } from '@/modules/canvas/types/shapes';

export function useShape(
  config: ShapeConfig,
  shape: Shape,
  emit: SetupContext<['select', 'select-shape']>['emit'],
) {
  watch(
    () => config.coords,
    (newCoords) => {
      shape.setNewCoords(newCoords);
    },
    {
      deep: true,
    },
  );

  watch(
    () => shape.isSelected,
    (newSelectedState) => {
      if (newSelectedState) {
        emit('select');
        emit('select-shape', shape);
      }
    },
  );

  useProvideForShapes(shape);

  return () => undefined;
}
