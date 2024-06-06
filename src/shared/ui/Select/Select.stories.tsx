import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'Пункт 1' },
            { value: '2', content: 'Пункт 2' },
            { value: '3', content: 'Пункт 3' },
        ],
    },
};
