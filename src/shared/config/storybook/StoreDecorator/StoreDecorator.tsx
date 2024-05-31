import React from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface Props {
    children?: React.ReactNode;
    state: DeepPartial<StateSchema>
    asyncReducers?: ReducersList
}

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
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
