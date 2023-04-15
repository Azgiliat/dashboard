import { Coords } from '@/dto/coords';
import { CanvasColors } from '@/modules/paint/types/canvas-colors';
import { IShape, ShapeConfig, ShapeName } from '@/modules/paint/types/shapes';

export class Shape implements IShape {
  name = ShapeName.NO_NAME;
  path2d = new Path2D();
  coords = {
    x: 0,
    y: 0,
  };
  readonly config: ShapeConfig;
  selectable = false;
  isSelected = false;
  draggable = false;
  isDragging = false;

  constructor(
    config: ShapeConfig = {
      coords: {
        x: 0,
        y: 0,
      },
    },
  ) {
    this.config = config;
    if (config.selectable) {
      this.selectable = config.selectable;
    }
    if (config.draggable) {
      this.draggable = config.draggable;
      this.selectable = true;
    }

    this.coords.x = config.coords.x;
    this.coords.y = config.coords.y;
  }

  get path() {
    return this.path2d;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    if (this.selectable) {
      ctx.strokeStyle = CanvasColors.PURPLE;
    }
    if (this.isSelected) {
      ctx.strokeStyle = CanvasColors.RED;
    }
    if (this.draggable) {
      ctx.strokeStyle = CanvasColors.GREEN;
    }
    if (this.isDragging) {
      ctx.strokeStyle = CanvasColors.YELLOW;
    }
    ctx.stroke(this.path);
    ctx.restore();
  }

  setNewCoords(coords: Partial<Coords>) {
    if (coords.x !== undefined) {
      this.coords.x = coords.x;
    }
    if (coords.y !== undefined) {
      this.coords.y = coords.y;
    }

    this.setPath();
  }

  addCoords(coords: Partial<Coords>) {
    if (coords.x !== undefined) {
      this.coords.x += coords.x;
    }
    if (coords.y !== undefined) {
      this.coords.y += coords.y;
    }

    this.setPath();
  }

  setPath() {
    throw new Error('setPath method must be implemented!');
  }
}
