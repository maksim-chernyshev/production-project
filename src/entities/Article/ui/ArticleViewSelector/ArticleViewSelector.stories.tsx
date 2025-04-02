import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/types/article';

const meta = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
