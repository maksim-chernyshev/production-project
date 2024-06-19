import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Maksim',
    lastname: 'Chernyshev',
    age: 35,
    currency: Currency.AMD,
    country: Country.Armenia,
    city: 'Saint-Petersburg',
    username: 'mks1312',
};

describe('validateProfileData', () => {
    test('success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect city', () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });

    test('incorrect all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
});
