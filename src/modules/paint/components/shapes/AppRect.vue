<script lang="ts">
import {defineComponent, PropType, reactive, toRaw} from 'vue';

import { useShape } from '@/modules/canvas/composables/useShape';
import { Rect } from '@/modules/canvas/shapes/Rect';
import { RectConfig } from '@/modules/canvas/types/shapes';

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<RectConfig>,
      required: true,
    }
  },
  emits: ['select', 'select-shape'],
  setup(props, { emit }) {
    const rect = reactive(new Rect(toRaw(props.config)));

    useShape(props.config, rect, emit);

    return () => undefined;
  },
});
</script>
