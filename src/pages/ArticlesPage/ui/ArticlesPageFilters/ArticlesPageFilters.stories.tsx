import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import StoreDecorator from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ArticlesPageFilters>;

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
