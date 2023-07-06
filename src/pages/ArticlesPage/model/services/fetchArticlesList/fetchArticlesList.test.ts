import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from '@/entities/Article';
import { fetchArticlesList } from './fetchArticlesList';

const data = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.TILE,
    page: 2,
    hasMore: true,
};

describe('fetchArticlesList', () => {
    test('Test success', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPage: {
                limit: 5,
            },
        });
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data,
            }),
        );
        const result = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('Test error', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({});

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
