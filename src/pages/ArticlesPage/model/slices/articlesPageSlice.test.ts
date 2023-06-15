// import { Comment } from 'entities/Comment';
// import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
// import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
// import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

// const comments: Comment[] = [
//     {
//         id: '1',
//         user: { id: '1', username: 'asd' },
//         text: 'comment 1',
//     },
//     {
//         id: '2',
//         user: { id: '1', username: 'asd' },
//         text: 'comment 2',
//     },
// ];
// describe('articleDetailsCommentsSlice', () => {
//     test('Test articleDetailsCommentsSlice service pending', () => {
//         const state: DeepPartial<ArticleDetailsCommentsSchema> = {
//             isLoading: false,
//         };

//         expect(
//             articleDetailsCommentsReducer(
//                 state as ArticleDetailsCommentsSchema,
//                 fetchCommentsByArticleId.pending,
//             ),
//         ).toEqual({
//             isLoading: true,
//         });
//     });
//     test('Test articleDetailsCommentsSlice service fulfilled', () => {
//         const state: DeepPartial<ArticleDetailsCommentsSchema> = {
//             isLoading: true,
//         };

//         expect(
//             articleDetailsCommentsReducer(
//                 state as ArticleDetailsCommentsSchema,
//                 fetchCommentsByArticleId.fulfilled(comments, '', ''),
//             ),
//         ).toEqual({
//             isLoading: false,
//             error: undefined,
//             ids: ['1', '2'],
//             entities: {
//                 1: {
//                     id: '1',
//                     user: { id: '1', username: 'asd' },
//                     text: 'comment 1',
//                 },
//                 2: {
//                     id: '2',
//                     user: { id: '1', username: 'asd' },
//                     text: 'comment 2',
//                 },
//             },
//         });
//     });
// });
