import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import SuspenseDecorator from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <RouterDecorator>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <StyleDecorator>
                        <SuspenseDecorator>
                            <Story />
                        </SuspenseDecorator>
                    </StyleDecorator>
                </ThemeDecorator>
            </RouterDecorator>
        ),
    ],
};

export default preview;
