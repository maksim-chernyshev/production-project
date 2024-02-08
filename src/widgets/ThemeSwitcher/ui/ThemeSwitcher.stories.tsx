import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
