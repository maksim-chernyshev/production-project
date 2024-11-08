import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'text text text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'text text text',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
        size: TextSize.L,
    },
};
