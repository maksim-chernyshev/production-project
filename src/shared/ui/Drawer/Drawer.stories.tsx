import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Drawer } from './Drawer';

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
