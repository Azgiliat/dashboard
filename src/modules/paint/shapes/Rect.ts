import { Shape } from '@/modules/paint/types/Shape';
import { IRect, RectConfig, ShapeName } from '@/modules/paint/types/shapes';

export class Rect extends Shape implements IRect {
  name: ShapeName.RECT;
  width: number;
  height: number;

  constructor(
    config: RectConfig = {
      coords: {
        x: 0,
        y: 0,
      },
      width: 100,
      height: 100,
    },
  ) {
    super(config);
    this.name = ShapeName.RECT;
    this.width = config.width;
    this.height = config.height;
    this.setPath();
  }

  setPath() {
    this.path2d = new Path2D();
    this.path2d.rect(this.coords.x, this.coords.y, this.width, this.height);
  }
}
