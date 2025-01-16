import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'app/styles/index.scss';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        (Story) => (
            <StoreDecorator state={{}}>
                <Story />
            </StoreDecorator>
        ),
    ],
};
