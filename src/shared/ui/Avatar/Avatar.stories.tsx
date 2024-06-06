import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/2899912abf206b95a97b2e2696defb5e.png',
        alt: 'Avatar',
    },
};

export const Small: Story = {
    args: {
        src: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/2899912abf206b95a97b2e2696defb5e.png',
        alt: 'Avatar',
        size: 50,
    },
};
