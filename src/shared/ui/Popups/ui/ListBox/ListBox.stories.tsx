import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {},
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { value: 'Раз', content: 'Раз' },
    { value: 'Два', content: 'ДваДва' },
    { value: 'Три', content: 'ТриТриТри' },
];

export const Primary: Story = {
    args: {
        items,
        label: 'Укажите хоть что-то',
        value: 'Что-то',
        defaultValue: 'Что-то',
        readonly: false,
        onChange: () => {},
    },
};

export const TopLeft: Story = {
    args: {
        items,
        label: 'Укажите хоть что-то',
        value: 'Что-то',
        defaultValue: 'Что-то',
        readonly: false,
        direction: 'top left',
        onChange: () => {},
    },
};

export const TopRight: Story = {
    args: {
        items,
        label: 'Укажите хоть что-то',
        value: 'Что-то',
        defaultValue: 'Что-то',
        readonly: false,
        direction: 'top right',
        onChange: () => {},
    },
};

export const BottomLeft: Story = {
    args: {
        items,
        label: 'Укажите хоть что-то',
        value: 'Что-то',
        defaultValue: 'Что-то',
        readonly: false,
        direction: 'bottom left',
        onChange: () => {},
    },
};

export const BottomRight: Story = {
    args: {
        items,
        label: 'Укажите хоть что-то',
        value: 'Что-то',
        defaultValue: 'Что-то',
        readonly: false,
        direction: 'bottom right',
        onChange: () => {},
    },
};
