import React, { FC, PropsWithChildren } from 'react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator: FC<PropsWithChildren> = ({ children }) => (
    <BrowserRouter>{children}</BrowserRouter>
);

export default RouterDecorator;
