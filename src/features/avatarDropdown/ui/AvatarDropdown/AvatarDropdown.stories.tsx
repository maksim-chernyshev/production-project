import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { AvatarDropdown } from './AvatarDropdown';

const meta = {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
