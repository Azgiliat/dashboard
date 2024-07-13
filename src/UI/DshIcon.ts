import type { FunctionalComponent} from 'vue';
import { h } from 'vue';

interface DshIconProps {
  name: string;
}

const DshIcon: FunctionalComponent<DshIconProps> = (props) =>
  h(
    'svg',
    h('use', {
      'xlink:href': `#${props.name}`,
    }),
  );

DshIcon.props = {
  name: {
    type: String,
    required: true,
  },
};

DshIcon.displayName = 'DshIcon';

export default DshIcon;
