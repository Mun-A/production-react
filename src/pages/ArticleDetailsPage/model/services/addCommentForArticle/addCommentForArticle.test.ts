import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from 'entities/Article';
import {
    ArticleBlockType,
    ArticleType,
} from 'entities/Article/model/types/article';
import { addCommentForArticle } from './addCommentForArticle';

const userData = { id: '1', username: 'asd' };
const article: Article = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: 'img',
    views: 0,
    createdAt: '1',
    type: [ArticleType.IT],
    blocks: [{ id: '1', code: 'code', type: ArticleBlockType.CODE }],
};
const comment = {
    articleId: article.id,
    userId: userData.id,
    text: 'comment 1123',
};

describe('addCommentForArticle', () => {
    test('Test success add comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: userData, _inited: true },
            articleDetails: { data: article, isLoading: false },
            articleDetailsComments: {},
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk('comment 1123');

        // expect(thunk.dispatch).toHaveBeenCalledWith(
        //     fetchCommentsByArticleId(article.id),
        // );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(comment);
    });
    test('Test error add comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: userData, _inited: true },
            articleDetails: { data: article, isLoading: false },
            articleDetailsComments: {},
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('comment 12');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
