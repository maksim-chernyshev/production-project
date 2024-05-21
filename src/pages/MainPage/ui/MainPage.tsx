import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
