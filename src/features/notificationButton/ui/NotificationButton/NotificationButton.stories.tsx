import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { NotificationButton } from './NotificationButton';

const meta = {
    title: 'shared/NotificationButton',
    component: NotificationButton,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
