import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { EditableProfilePageHeader } from './EditableProfilePageHeader';

const meta = {
    title: 'features/editableProfileCard/EditableProfilePageHeader',
    component: EditableProfilePageHeader,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof EditableProfilePageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
