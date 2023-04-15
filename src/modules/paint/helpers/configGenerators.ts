import { Coords } from '@/dto/coords';
import { CircleConfig, RectConfig } from '@/modules/canvas/types/shapes';

export function generateRectConfig(canvasSize: Coords): RectConfig {
  return {
    coords: {
      x: Math.random() * canvasSize.x,
      y: Math.random() * canvasSize.y,
    },
    width: (Math.random() * canvasSize.x) / 10,
    height: (Math.random() * canvasSize.y) / 10,
    selectable: Math.random() > 0.5,
    draggable: Math.random() > 0.5,
  };
}

export function generateCircleConfig(canvasSize: Coords): CircleConfig {
  return {
    coords: {
      x: Math.random() * canvasSize.x,
      y: Math.random() * canvasSize.y,
    },
    radius: (Math.random() * canvasSize.x) / 10,
    selectable: Math.random() > 0.5,
    draggable: Math.random() > 0.5,
  };
}
