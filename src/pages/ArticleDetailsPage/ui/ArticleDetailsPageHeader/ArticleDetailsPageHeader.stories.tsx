import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import StoreDecorator from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

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
