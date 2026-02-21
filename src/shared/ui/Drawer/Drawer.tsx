import { memo, PropsWithChildren } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps extends PropsWithChildren {
    className?: string;
    isOpen?: boolean;
    onClose: VoidFunction;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, children, isOpen, lazy, onClose,
    } = props;

    const { theme } = useTheme();
    const { isClosing, isMounted, close } = useModal({ onClose, isOpen, animationDelay: 300 });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
