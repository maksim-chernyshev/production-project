import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return form data', () => {
        const data = {
            first: 'Maksim',
            lastname: 'Chernyshev',
            age: 35,
            currency: Currency.AMD,
            country: Country.Armenia,
            city: 'Saint-Petersburg',
            username: 'mks1312',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
