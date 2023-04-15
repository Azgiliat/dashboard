import { inject, onMounted, onUnmounted } from 'vue';

import {
  RegisterShape,
  registerShapeKey,
  UnregisterShape,
  unregisterShapeKey,
} from '@/modules/canvas/components/di';
import {Shape} from "@/modules/canvas/types/Shape";

export function useProvideForShapes(shape: Shape) {
  const registerShape = inject<RegisterShape>(registerShapeKey);
  const unregisterShape = inject<UnregisterShape>(unregisterShapeKey);

  onMounted(() => {
    if (!registerShape) {
      console.warn('Register shape injection failed');
      return;
    }

    registerShape(shape);
  });

  onUnmounted(() => {
    if (!unregisterShape) {
      console.warn('Unregister shape injection failed');
      return;
    }

    unregisterShape(shape);
  });
}
