import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{}}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator state={{}}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const AuthNavbar: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: { authData: {} },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};
