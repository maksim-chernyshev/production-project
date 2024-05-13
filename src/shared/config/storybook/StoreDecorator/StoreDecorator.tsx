import React, { FC } from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<StateSchema>
}

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

const StoreDecorator = (props: Props) => {
    const {
        children,
        state,
        asyncReducers,
    } = props;

    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            {children}
        </StoreProvider>
    );
};

export default StoreDecorator;
