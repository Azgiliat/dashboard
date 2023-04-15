import { IShape } from '@/modules/canvas/types/shapes';

export type RegisterShape = (shape: IShape) => void;
export type UnregisterShape = (shape: IShape) => void;
export const registerShapeKey = Symbol('registerShape');
export const unregisterShapeKey = Symbol('unregisterShape');
