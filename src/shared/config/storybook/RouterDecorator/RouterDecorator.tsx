import React, { FC } from 'react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

interface Props {
    children?: React.ReactNode;
}
const RouterDecorator: FC<Props> = ({ children }) => (
    <BrowserRouter>{children}</BrowserRouter>
);
export default RouterDecorator;
