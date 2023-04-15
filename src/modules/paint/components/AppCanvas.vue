<template>
  <div ref="container">
    <canvas ref="canvas" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  shallowReactive,
  watchPostEffect,
} from 'vue';

import { useDragShape } from '@/modules/canvas/composables/useDragShape';
import { useRegisterShapes } from '@/modules/canvas/composables/useRegisterShapes';
import { useSelectShapes } from '@/modules/canvas/composables/useSelectShapes';
import { IShape } from '@/modules/canvas/types/shapes';

const emit = defineEmits(['set-size']);

const container = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const canvasCtx = computed(() => canvas.value?.getContext('2d'));

const shapesList = shallowReactive<IShape[]>([]);
const { selectableShapesList } = useSelectShapes(canvas);
const { draggableShapesList } = useDragShape(canvas);
useRegisterShapes(shapesList, selectableShapesList, draggableShapesList);

function clear() {
  if (!canvasCtx.value || !canvas.value) {
    console.warn("Can't clear canvas");
    return;
  }

  canvasCtx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
}
function drawShapes() {
  if (!canvasCtx.value) {
    console.warn("Can't get canvas ctx to draw shapes");
    return;
  }

  clear();

  for (const shape of shapesList) {
    shape.draw(canvasCtx.value);
  }
}
function setCanvasSize() {
  if (!container.value || !canvas.value) {
    console.warn('Container for canvas not exist');
    return;
  }

  canvas.value.removeAttribute('width');
  canvas.value.removeAttribute('height');

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  canvas.value.width = width;
  canvas.value.height = height;

  emit('set-size', {
    x: width,
    y: height,
  });

  drawShapes();
}

onMounted(() => {
  setCanvasSize();

  window.addEventListener('resize', setCanvasSize);

  drawShapes();
});

onUnmounted(() => {
  window.removeEventListener('resize', setCanvasSize);
});

watchPostEffect(() => {
  if (shapesList) {
    drawShapes();
  }
});
</script>
