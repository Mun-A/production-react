import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data = {
    username: 'admin',
    age: 25,
    country: Country.Uzbekistan,
    lastname: 'mun',
    first: 'asd',
    city: 'fdsfs',
    currency: Currency.USD,
};

describe('validateProfileData', () => {
    test('Test success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('Test without first and lastname', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('Test incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });
    test('Test incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });
    test('Test incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
