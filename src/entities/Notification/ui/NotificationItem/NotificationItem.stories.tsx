import type { Meta, StoryObj } from '@storybook/react';

import '@/app/styles/index.scss';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: {
            id: '1',
            title: 'Уведомление',
            description: 'О чем-то',
            userId: '1',
        },
    },
};
