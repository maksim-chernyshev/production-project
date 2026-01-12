import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
};
