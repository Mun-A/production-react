jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
    test('Test dispatches called when articles page not inited', async () => {
        // const thunk = new TestAsyncThunk(initArticlesPage, {
        //     articlesPage: {
        //         _inited: false,
        //     },
        // });
        //
        // // await thunk.callThunk({});
        //
        // expect(thunk.dispatch).toBeCalledTimes(4);
        // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });
    test('Test dispatches not called when articles page inited', async () => {
        // const thunk = new TestAsyncThunk(initArticlesPage, {
        //     articlesPage: {
        //         _inited: true,
        //     },
        // });
        //
        // // await thunk.callThunk({});
        //
        // expect(thunk.dispatch).toBeCalledTimes(2);
        // expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
