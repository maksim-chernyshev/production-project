module.exports = (layer, componentName) => `
import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ${componentName} } from './${componentName}';

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
}`;
