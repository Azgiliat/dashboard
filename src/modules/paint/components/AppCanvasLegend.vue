<template>
<ul>
  <li v-for="(description, color) in dictionary" :key="description" class="mb-2">
    <app-canvas-legend-item v-bind="{description, color}" />
  </li>
</ul>
</template>

<script setup lang="ts">
import AppCanvasLegendItem from "@/modules/canvas/components/AppCanvasLegendItem.vue";
import {CanvasColors} from "@/modules/canvas/types/canvas-colors";

const dictionary: Record<CanvasColors, string> = {
  [CanvasColors.PURPLE]: 'Selectable',
  [CanvasColors.RED]: 'Selected',
  [CanvasColors.GREEN]: 'Draggable',
  [CanvasColors.YELLOW]: 'Dragging'
}
</script>
