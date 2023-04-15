<template>
<div class="flex">
  <span class="block aspect-video w-1/4 mr-2" :class="bgClass"/> - <span class="ml-2">{{description}}</span>
</div>
</template>

<script setup lang="ts">
import {computed} from "vue";

import {CanvasColors} from "@/modules/canvas/types/canvas-colors";

const props = defineProps<{
  color: CanvasColors,
  description: string
}>()

const bgClasses = {
  [CanvasColors.RED]: 'bg-[red]',
  [CanvasColors.PURPLE]: 'bg-[purple]',
  [CanvasColors.GREEN]: 'bg-[green]',
  [CanvasColors.YELLOW]: 'bg-[yellow]'
}
const bgClass = computed(() => bgClasses[props.color])
</script>
