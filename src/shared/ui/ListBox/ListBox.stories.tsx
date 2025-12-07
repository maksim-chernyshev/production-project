import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { value: 'Раз', content: 'Раз' },
    { value: 'Два', content: 'Два' },
    { value: 'Три', content: 'Три' },
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
