import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { NotificationList } from './NotificationList';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{}}>
                <Story />
            </StoreDecorator>
        ),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [{
                    id: '1',
                    title: 'Уведомление',
                    description: 'О чем-то',
                    userId: '1',
                }, {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'О чем-то',
                    userId: '1',
                }, {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'О чем-то',
                    userId: '1',
                }],
            },
        ],
    },
};
