import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
    getArticlesPageNum,
    getArticlesPageLimit,
    getArticlesPageHasMore,
} from './articlesPageSelectors';

describe('articlesPageSelectors', () => {
    test('Test should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });
    test('Test should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(
            false,
        );
    });
    test('Test should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });
    test('Test should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });
    test('Test should return page view list', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.LIST,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleView.LIST,
        );
    });
    test('Test should return page view tile', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.TILE,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleView.TILE,
        );
    });
    test('Test should return page num', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 3,
            },
        };
        expect(getArticlesPageNum(state as StateSchema)).toEqual(3);
    });
    test('Test should return page view tile', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 5,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(5);
    });
    test('Test should return page view tile', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
    });
});
