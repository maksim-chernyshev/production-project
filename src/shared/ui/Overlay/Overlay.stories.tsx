import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Overlay } from './Overlay';

const meta = {
    title: 'shared/Overlay',
    component: Overlay,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
