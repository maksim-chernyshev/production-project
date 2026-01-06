import React, { FC, PropsWithChildren, Suspense } from 'react';
import 'app/styles/index.scss';

const SuspenseDecorator: FC<PropsWithChildren> = ({ children }) => (
    <Suspense>{children}</Suspense>
);

export default SuspenseDecorator;
