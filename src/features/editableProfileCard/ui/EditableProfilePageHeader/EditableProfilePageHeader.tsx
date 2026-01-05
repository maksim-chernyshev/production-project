import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfilePageHeaderProps {
    className?: string;
}

export const EditableProfilePageHeader = memo((props: EditableProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div>
                    { readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfilePageHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfilePageHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfilePageHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
