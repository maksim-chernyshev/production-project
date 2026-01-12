import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
