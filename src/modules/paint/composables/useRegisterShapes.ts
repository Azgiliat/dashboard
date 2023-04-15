import { provide } from 'vue';

import {
  registerShapeKey,
  unregisterShapeKey,
} from '@/modules/canvas/components/di';
import { IShape } from '@/modules/canvas/types/shapes';

export function useRegisterShapes(
  shapesList: IShape[],
  selectableShapesList: IShape[],
  draggableShapesList: IShape[],
) {
  function registerShape(shape: IShape) {
    shapesList.push(shape);
    if (shape.selectable) {
      selectableShapesList.push(shape);
    }
    if (shape.draggable) {
      draggableShapesList.push(shape);
    }
  }

  function unregisterShape(shape: IShape) {
    const shapeIndex = shapesList.findIndex((item) => item === shape);

    if (shapeIndex === -1) {
      return;
    }

    shapesList.splice(shapeIndex, 1);

    if (shape.selectable) {
      const shapeIndex = selectableShapesList.findIndex(
        (item) => item === shape,
      );

      if (shapeIndex === -1) {
        return;
      }

      selectableShapesList.splice(shapeIndex, 1);
    }

    if (shape.draggable) {
      const shapeIndex = draggableShapesList.findIndex(
        (item) => item === shape,
      );

      if (shapeIndex === -1) {
        return;
      }

      draggableShapesList.splice(shapeIndex, 1);
    }
  }

  provide(registerShapeKey, registerShape);
  provide(unregisterShapeKey, unregisterShape);
}
