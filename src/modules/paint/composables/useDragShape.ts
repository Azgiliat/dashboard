import { onBeforeUnmount, onMounted, ref, Ref, shallowReactive } from 'vue';

import {Shape} from "@/modules/canvas/types/Shape";

export function useDragShape(canvas: Ref<HTMLCanvasElement | undefined>) {
  let canvasCtx: CanvasRenderingContext2D | null = null;
  const draggableShapesList = shallowReactive<Shape[]>([]);
  const draggingShape = ref<Shape | null>(null);

  function onMouseDown(evt: MouseEvent) {
    for (const shape of draggableShapesList) {
      const isShapeClicked = canvasCtx?.isPointInPath(
        shape.path,
        evt.offsetX,
        evt.offsetY,
      );

      if (isShapeClicked) {
        shape.isDragging = true;
        shape.isSelected = true;
        draggingShape.value = shape;

        return;
      }
    }
  }
  function onMouseMove(evt: MouseEvent) {
    if (!draggingShape.value) {
      return;
    }

    draggingShape.value.addCoords({
      x: evt.movementX,
      y: evt.movementY,
    });
  }
  function onMouseUp() {
    if (draggingShape.value) {
      draggingShape.value.isDragging = false;
      draggingShape.value = null;
    }
  }

  onMounted(() => {
    if (!canvas.value) {
      return;
    }

    canvasCtx = canvas.value.getContext('2d');
    canvas.value.addEventListener('mousedown', onMouseDown);
    canvas.value.addEventListener('mousemove', onMouseMove);
    canvas.value.addEventListener('mouseup', onMouseUp);
  });

  onBeforeUnmount(() => {
    if (!canvas.value) {
      return;
    }
    canvas.value.removeEventListener('mousedown', onMouseDown);
    canvas.value.removeEventListener('mousemove', onMouseMove);
    canvas.value.removeEventListener('mouseup', onMouseUp);
  });

  return {
    draggableShapesList,
  };
}
