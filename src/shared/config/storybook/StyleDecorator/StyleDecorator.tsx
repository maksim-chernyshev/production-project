import '../../../../app/styles/index.scss';
import React, { FC } from 'react';

type StyleDecoratorProps = {
    children: React.ReactNode
}

const StyleDecorator: FC<StyleDecoratorProps> = ({ children }) => <div>{children}</div>;
export default StyleDecorator;
