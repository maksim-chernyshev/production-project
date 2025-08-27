import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { action } from '@storybook/addon-actions';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '../../model/types/article';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'desc',
        onChangeOrder: action('onChangeOrder'),
        onChangeSort: action('onChangeSort'),
    },
};
