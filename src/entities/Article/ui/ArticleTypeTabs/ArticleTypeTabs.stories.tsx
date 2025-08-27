import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
