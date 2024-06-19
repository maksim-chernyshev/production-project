import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return data', () => {
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
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
