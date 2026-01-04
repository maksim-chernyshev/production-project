import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
