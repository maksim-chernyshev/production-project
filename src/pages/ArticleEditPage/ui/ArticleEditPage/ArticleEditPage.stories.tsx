import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ArticleEditPage from './ArticleEditPage';
import StoreDecorator from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{}}>
                <Story />
            </StoreDecorator>
        ),
    ],
};
