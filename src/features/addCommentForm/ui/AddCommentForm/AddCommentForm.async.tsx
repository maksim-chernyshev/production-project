import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1000);
}));
