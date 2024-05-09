import React, { FC } from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>
}

const StoreDecorator: FC<Props> = ({ children, state }) => (
    <StoreProvider initialState={state}>
        {children}
    </StoreProvider>
);

export default StoreDecorator;
