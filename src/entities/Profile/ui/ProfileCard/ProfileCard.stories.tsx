import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
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
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
