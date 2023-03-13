import { h } from 'vue';

import { UITypes } from '@/UI/UITypes';

import type { FunctionalComponent, PropType } from 'vue';

type Props = {
  type: UITypes;
  text: string;
};

const BaseButton = <FunctionalComponent<Props>>function (props) {
  return h(
    'button',
    {
      class: [
        'rounded-xl',
        'px-8',
        'py-4',
        'text-white',
        {
          'bg-primary': props.type === UITypes.PRIMARY,
          'bg-secondary': props.type === UITypes.SECONDARY,
          'bg-accent': props.type === UITypes.ACCENT,
        },
      ],
    },
    h('p', props.text),
  );
};

BaseButton.props = {
  text: {
    type: String,
    required: true,
  },
  type: {
    type: Number as PropType<UITypes>,
    required: false,
    default: UITypes.PRIMARY,
  },
};

export default BaseButton;
