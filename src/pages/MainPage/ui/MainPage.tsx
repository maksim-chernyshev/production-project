import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
