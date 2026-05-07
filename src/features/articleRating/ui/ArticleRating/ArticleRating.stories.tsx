import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import ArticleRating from './ArticleRating';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        articleId: '1',
    },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: { authData: { id: '1' } },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [{ rate: 2 }],
            },
        ],
    },
};

export const WithoutRate: Story = {
    args: {
        articleId: '1',
    },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: { authData: { id: '1' } },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
