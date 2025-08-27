import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
