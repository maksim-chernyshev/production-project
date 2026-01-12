import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox, ListBoxItem } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options: ListBoxItem[] = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            items={options}
            label={t('Страна')}
            value={value}
            defaultValue={t('Страна')}
            readonly={readonly}
            direction="top right"
            onChange={onChangeHandler}
        />
    );
});
