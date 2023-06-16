import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('Test should return data', () => {
        const data = {
            id: '1',
            username: 'asd',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });
    test('Test should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
