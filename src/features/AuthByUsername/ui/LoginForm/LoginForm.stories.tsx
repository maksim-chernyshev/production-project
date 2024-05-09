import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';
import 'app/styles/index.scss';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: 'Ваня',
                    password: '123',
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: 'Ваня',
                    password: '123',
                    error: 'Error',
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: 'Ваня',
                    password: '123',
                    isLoading: true,
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};
