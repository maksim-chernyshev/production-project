import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                profile: {
                    form: {
                        first: 'Maksim',
                        lastname: 'Chernyshev',
                        age: 35,
                        currency: Currency.AMD,
                        country: Country.Armenia,
                        city: 'Saint-Petersburg',
                        username: 'mks1312',
                        avatar,
                    },
                },
            }}
            >
                <Story />
            </StoreDecorator>
        )],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator state={{
                profile: {
                    form: {
                        first: 'Maksim',
                        lastname: 'Chernyshev',
                        age: 35,
                        currency: Currency.AMD,
                        country: Country.Armenia,
                        city: 'Saint-Petersburg',
                        username: 'mks1312',
                        avatar,
                    },
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};
