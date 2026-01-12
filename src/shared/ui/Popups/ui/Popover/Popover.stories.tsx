import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Popover } from './Popover';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
