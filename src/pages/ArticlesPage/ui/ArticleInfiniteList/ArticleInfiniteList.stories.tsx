import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta = {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
