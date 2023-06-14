import { AddCommentFormSchema } from '../types/addCommentForm';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
    test('Test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };

        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('hey111'),
            ),
        ).toEqual({ text: 'hey111' });
    });
});
