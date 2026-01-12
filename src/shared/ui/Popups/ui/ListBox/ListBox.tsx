import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
   value: string;
   content: ReactNode;
   disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    label?: string;
    className?: string;
    value?: string;
    defaultValue?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    onChange: <T extends string>(value: T) => void;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        label,
        value,
        defaultValue,
        className,
        readonly,
        direction = 'bottom right',
        onChange,
    } = props;

    const optionsClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <HStack gap="4">
            {label
                && (
                    <span className={classNames('', {
                        [cls.disabled]: readonly,
                    })}
                    >
                        {`${label}>`}
                    </span>
                )}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                disabled={readonly}
                onChange={onChange}
            >
                <HListBox.Button as={Fragment}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '> '}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
};
