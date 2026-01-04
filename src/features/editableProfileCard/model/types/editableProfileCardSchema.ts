import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'Incorrect user data',
    INCORRECT_AGE = 'Incorrect age',
    INCORRECT_CITY = 'Incorrect city',
    SERVER_ERROR = 'Server error',
    NO_DATA = 'No data',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
