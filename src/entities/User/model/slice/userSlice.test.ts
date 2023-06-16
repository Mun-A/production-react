import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const data = {
    id: '1',
    username: 'asd',
    avatar: 'avatar',
};
describe('userSlice', () => {
    test('Test set AuthData', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {},
        };

        expect(
            userReducer(state as UserSchema, userActions.setAuthData(data)),
        ).toEqual({ authData: data });
    });
    test('Test init AuthData', () => {
        const state: DeepPartial<UserSchema> = {
            _inited: false,
        };

        expect(
            userReducer(state as UserSchema, userActions.initAuthData()),
        ).toEqual({
            _inited: true,
        });
    });
    test('Test logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: data,
        };

        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
