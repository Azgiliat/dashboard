import { Shape } from '@/modules/paint/types/Shape';
import { CircleConfig, ICircle, ShapeName } from '@/modules/paint/types/shapes';

export class Circle extends Shape implements ICircle {
  radius: number;
  name: ShapeName.CIRCLE;

  constructor(
    config: CircleConfig = {
      coords: {
        x: 0,
        y: 0,
      },
      radius: 100,
    },
  ) {
    super(config);
    this.name = ShapeName.CIRCLE;
    this.radius = config.radius;
    this.setPath();
  }

  setPath() {
    this.path2d = new Path2D();
    this.path2d.arc(this.coords.x, this.coords.y, this.radius, 0, 2 * Math.PI);
  }
}
