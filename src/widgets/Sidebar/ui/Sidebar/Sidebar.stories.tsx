import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: { authData: {} } }}>
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
            <StoreDecorator state={{ user: { authData: {} } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const NoAuth: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: {} }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};
