import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('getAddCommentForm', () => {
    test('Test should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { text: 'hey' },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('hey');
    });
    test('Test should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { error: 'error' },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('Test should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});
