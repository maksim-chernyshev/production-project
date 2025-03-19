import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import 'app/styles/index.scss';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
};
