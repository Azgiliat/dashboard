import { Coords } from '@/dto/coords';

export enum ShapeName {
  NO_NAME = 'NoName',
  CIRCLE = 'Circle',
  RECT = 'Rect',
}

export interface IShape {
  name: ShapeName;
  path2d: Path2D;
  readonly config: ShapeConfig;
  selectable?: boolean;
  isSelected: boolean;
  draggable?: boolean;
  isDragging: boolean;
  get path(): Path2D;
  draw(ctx: CanvasRenderingContext2D): void;
  setNewCoords(coords: Partial<Coords>): void;
  addCoords(coords: Partial<Coords>): void;
  setPath(): void;
}

export interface IRect extends IShape {
  name: ShapeName.RECT;
  width: number;
  height: number;
}

export interface ICircle extends IShape {
  name: ShapeName.CIRCLE;
  radius: number;
}

export type ShapeConfig = {
  coords: Coords;
  selectable?: boolean;
  draggable?: boolean;
};

export type RectConfig = ShapeConfig & {
  width: number;
  height: number;
};

export type CircleConfig = ShapeConfig & {
  radius: number;
};

export type ConfigWithId<T = any> = {
  config: T,
  id: string
}
