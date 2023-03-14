<template>
  <div>
    <label v-if="label" :for="id" class="block mb-3.5">
      <span
        class="font-bold font-secondary text-gray2 text-base tracking-wider"
      >
        {{ label }}
      </span>
    </label>
    <div class="border-gray2 border-2 rounded-xl py-2 px-4">
      <input
        :id="id"
        v-model="innerValue"
        :type="type"
        class="appearance-none outline-none w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { getUid } from '@/UI/id';

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: string;
    type?: string;
  }>(),
  {
    label: '',
    modelValue: '',
    type: 'text',
  },
);
const emit = defineEmits(['update:modelValue']);

const id = getUid();
const innerValue = computed({
  get: () => props.modelValue,
  set: (newVal) => {
    emit('update:modelValue', newVal);
  },
});
</script>
