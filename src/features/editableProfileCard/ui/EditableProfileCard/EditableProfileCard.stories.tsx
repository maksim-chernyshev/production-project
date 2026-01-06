import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { EditableProfileCard } from './EditableProfileCard';
import StoreDecorator from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{ profile: {} }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};
