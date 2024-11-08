import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'const meta = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {},\n'
            + '    argTypes: {},\n'
            + '} satisfies Meta<typeof Code>;\n'
            + '\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof meta>;',
    },
};
