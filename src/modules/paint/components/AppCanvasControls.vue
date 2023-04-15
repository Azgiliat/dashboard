<template>
  <div class="p-8 shadow-lg bg-white">
    <dsh-button class="w-full mb-4" text="Add rect" @click="$emit('add-rect')" />
    <dsh-button
      class="w-full mb-4"
      text="Add circle"
      @click="$emit('add-circle')"
    />
    <dsh-button
      class="w-full mb-4"
      v-bind="removeButtonBindings"
      @click="$emit('remove-selected-shape')"
    />
    <div class="mb-4">
      <dsh-input v-model="xCoord" class="mb-4" label="X" type="number" />
      <dsh-input v-model="yCoord" label="Y" type="number" />
    </div>
    <app-canvas-legend />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import DshButton from '@/UI/DshButton';
import DshInput from '@/UI/DshInput.vue';
import AppCanvasLegend from "@/modules/canvas/components/AppCanvasLegend.vue";
import {Shape} from "@/modules/canvas/types/Shape";

const emit = defineEmits([
  'add-rect',
  'add-circle',
  'remove-selected-shape',
  'update:x',
  'update:y',
]);
const props = withDefaults(
  defineProps<{
    selectedShape?: Shape | null;
  }>(),
  {
    selectedShape: null,
  },
);

const xCoord = computed({
  get() {
    return props.selectedShape?.coords.x || 0;
  },
  set(newVal) {
    emit('update:x', newVal);
  },
});
const yCoord = computed({
  get() {
    return props.selectedShape?.coords.y || 0;
  },
  set(newVal) {
    emit('update:y', newVal);
  },
});
const removeButtonBindings = computed(() => ({
  text: props.selectedShape
    ? `Remove selected ${props.selectedShape.name}`
    : 'Nothing to remove',
  disabled: !props.selectedShape,
}));
</script>
