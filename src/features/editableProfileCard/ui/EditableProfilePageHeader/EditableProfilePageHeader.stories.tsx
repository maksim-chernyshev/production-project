import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { EditableProfilePageHeader } from './EditableProfilePageHeader';
import StoreDecorator from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

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
    decorators: [
        (Story) => (
            <StoreDecorator state={{ profile: { data: {} } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};
