import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { RatingCard } from './RatingCard';

const meta = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
