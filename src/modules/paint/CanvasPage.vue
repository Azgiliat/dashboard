<template>
  <div class="flex flex-grow">
    <app-canvas class="flex-grow" @set-size="setSize">
      <app-rect
        v-for="rect of rects"
        :key="rect.id"
        :config="rect.config"
        @select-shape="selectShape"
      />
      <app-circle
        v-for="circle of circles"
        :key="circle.id"
        :config="circle.config"
        @select-shape="selectShape"
      />
    </app-canvas>
    <app-canvas-controls
      class="w-1/4"
      :selected-shape="selectedShape"
      @update:x="updateCoords('x', $event)"
      @update:y="updateCoords('y', $event)"
      @add-rect="addRect"
      @add-circle="addCircle"
      @remove-selected-shape="removeSelectedShape"
    />
  </div>
</template>

<script setup lang="ts">
import {nanoid} from "nanoid";
import { reactive, ref } from 'vue';

import { Coords } from '@/dto/coords';
import AppCanvas from '@/modules/canvas/components/AppCanvas.vue';
import AppCanvasControls from '@/modules/canvas/components/AppCanvasControls.vue';
import AppCircle from '@/modules/canvas/components/shapes/AppCircle.vue';
import AppRect from '@/modules/canvas/components/shapes/AppRect.vue';
import {
  generateCircleConfig,
  generateRectConfig,
} from '@/modules/canvas/helpers/configGenerators';
import {Shape} from "@/modules/canvas/types/Shape";
import {
  CircleConfig, ConfigWithId,
  RectConfig,
  ShapeName,
} from '@/modules/canvas/types/shapes';

let canvasSize: Coords = {
  x: 300,
  y: 150,
};
const selectedShape = ref<Shape | null>(null);
const rects = reactive<ConfigWithId<RectConfig>[]>([]);
const circles = reactive<ConfigWithId<CircleConfig>[]>([]);

function setSize(size: Coords) {
  canvasSize = size;
}

function addRect() {
  rects.push({
    id: nanoid(),
    config: generateRectConfig(canvasSize)
  })
}
function addCircle() {
  circles.push({
    id: nanoid(),
    config: generateCircleConfig(canvasSize)
  });
}

function selectShape(shape: Shape) {
  selectedShape.value = shape;
}

function updateCoords(direction: keyof Coords, newVal: number) {
  if (!selectedShape.value) {
    return;
  }

  selectedShape.value.setNewCoords({
    [direction]: newVal
  });
}

function removeSelectedShape() {
  if (!selectedShape.value) {
    return;
  }

  const shapesList =
    selectedShape.value.name === ShapeName.CIRCLE ? circles : rects;
  const shapeIndex = shapesList.findIndex(
    (shape) => shape.config === selectedShape.value?.config,
  );

  if (shapeIndex === -1) {
    return;
  }

  shapesList.splice(shapeIndex, 1);
  selectedShape.value = null;
}
</script>
