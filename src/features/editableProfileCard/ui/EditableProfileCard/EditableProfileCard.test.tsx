import { componentRender, ComponentRenderOptions } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    city: 'Ереван',
    first: 'Максим',
    lastname: 'Чернышев',
    age: 12,
    username: 'broforce',
    avatar: 'https://img.nbc.com/files/images/2013/11/12/dwight-500x500.jpg',
    country: Country.Armenia,
    currency: Currency.USD,
};

const options: ComponentRenderOptions = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));
        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Максим');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Чернышев');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен отправить PUT запрос', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
        expect(mockPutRequest).toHaveBeenCalled();
    });
});
