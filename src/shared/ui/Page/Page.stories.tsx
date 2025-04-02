import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Page } from './Page';

const meta = {
    title: 'shared/Page',
    component: Page,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
