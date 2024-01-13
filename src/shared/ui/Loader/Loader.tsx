import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('spinner-rolling', {}, [className])}>
        <div className="spinner-rolling__inner">
            <div />
        </div>
    </div>
);
