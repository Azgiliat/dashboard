<template>
  <div>
    <label v-if="label" :for="id" class="mb-3.5 block">
      <span
        class="font-secondary text-base font-bold tracking-wider text-gray2"
      >
        {{ label }}
      </span>
    </label>
    <div class="rounded-xl border-2 border-gray2 px-4 py-2">
      <input
        :id="id"
        v-model="innerValue"
        :type="type"
        class="w-full appearance-none outline-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUid } from '@/UI/id';
import { computed } from 'vue';

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
