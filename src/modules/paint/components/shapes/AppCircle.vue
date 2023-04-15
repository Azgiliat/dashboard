<script lang="ts">
import {defineComponent, PropType, reactive, toRaw} from 'vue';

import { useShape } from '@/modules/canvas/composables/useShape';
import { Circle } from '@/modules/canvas/shapes/Circle';
import { CircleConfig } from '@/modules/canvas/types/shapes';

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<CircleConfig>,
      required: true,
    },
  },
  emits: ['select', 'select-shape'],
  setup(props, { emit }) {
    const circle = reactive(new Circle(toRaw(props.config)));

    useShape(props.config, circle, emit);

    return () => undefined;
  },
});
</script>
