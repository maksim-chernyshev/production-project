import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { NotificationList } from './NotificationList';

const meta = {
    title: 'shared/NotificationList',
    component: NotificationList,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
