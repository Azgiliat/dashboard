<template>
  <div class="flex items-center">
    <input
      :id="id"
      v-model="value"
      type="checkbox"
      class="peer hidden"
      :disabled="disabled"
    />
    <div
      class="mr-2 aspect-square h-[24px] w-[24px] rounded border-2 transition duration-300 peer-disabled:cursor-not-allowed"
      :class="boxBindings.boxClasses"
      @click="boxBindings.onClick"
    >
      <transition name="check" appear>
        <dsh-icon
          v-show="value"
          width="20"
          height="20"
          name="check"
          class="check-icon stroke-current text-white"
        />
      </transition>
    </div>
    <label class="block" :for="id">
      <slot>
        <span class="text-lg font-bold">
          {{ text }}
        </span>
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import DshIcon from '@/UI/DshIcon';
import { getUid } from '@/UI/id';

const id = getUid();
const props = withDefaults(
  defineProps<{
    text?: string;
    disabled?: boolean;
    modelValue: boolean;
  }>(),
  {
    text: '',
    disabled: false,
  },
);
const emit = defineEmits(['update:modelValue']);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
const boxBindings = computed(() => {
  if (props.disabled) {
    return {
      boxClasses: {
        'bg-gray1 border-gray1': true,
      },
      onClick(evt: MouseEvent) {
        evt.stopPropagation();
      },
    };
  }

  return {
    boxClasses: {
      'bg-primary border-primary': value.value,
      'bg-transparent border-gray1': !value.value,
    },
    onClick() {
      value.value = !value.value;
    },
  };
});
</script>

<style>
.check-icon {
  stroke-dasharray: 15.239;
}

.check-enter-active {
  animation: show-check forwards 0.3s;
}

.check-leave-active {
  animation: show-check forwards 0.3s reverse;
}

@keyframes show-check {
  0% {
    stroke-dashoffset: 15.239;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>
