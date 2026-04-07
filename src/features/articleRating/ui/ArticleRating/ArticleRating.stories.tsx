import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ArticleRating from './ArticleRating';

const meta = {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
