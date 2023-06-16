import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const comments: Comment[] = [
    {
        id: '1',
        user: { id: '1', username: 'asd' },
        text: 'comment 1',
    },
    {
        id: '2',
        user: { id: '1', username: 'asd' },
        text: 'comment 2',
    },
];

describe('fetchCommentsByArticleId', () => {
    test('Test success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data: comments,
            }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comments);
    });
    test('Test error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
