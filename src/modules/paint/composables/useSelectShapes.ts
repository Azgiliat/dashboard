import { onBeforeUnmount, onMounted, Ref, shallowReactive } from 'vue';

import { IShape } from '@/modules/canvas/types/shapes';

export function useSelectShapes(canvas: Ref<HTMLCanvasElement | undefined>) {
  let canvasCtx: CanvasRenderingContext2D | null = null;
  const selectableShapesList = shallowReactive<IShape[]>([]);

  function selectShape(shape: IShape) {
    shape.isSelected = true;
  }
  function unselectShape(shape: IShape) {
    shape.isSelected = false;
  }

  function checkIsShapeSelected(evt: MouseEvent) {
    for (const shape of selectableShapesList) {
      const isShapeClicked = canvasCtx?.isPointInPath(
        shape.path,
        evt.offsetX,
        evt.offsetY,
      );

      if (isShapeClicked) {
        selectShape(shape);
      } else {
        unselectShape(shape);
      }
    }
  }

  onMounted(() => {
    if (!canvas.value) {
      return;
    }

    canvasCtx = canvas.value.getContext('2d');
    canvas.value.addEventListener('click', checkIsShapeSelected);
  });

  onBeforeUnmount(() => {
    if (!canvas.value) {
      return;
    }
    canvas.value.removeEventListener('click', checkIsShapeSelected);
  });

  return {
    selectableShapesList,
  };
}
