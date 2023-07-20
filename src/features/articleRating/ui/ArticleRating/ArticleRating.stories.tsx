import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: '123',
                    roles: [UserRole.ADMIN],
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = { articleId: '1' };
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 0 }],
        },
        {
            url: `${__API__}/article-ratings`,
            method: 'POST',
            payload: {
                userId: '1',
                articleId: '1',
                rate: 2,
                feedback: 'not bad',
            },
        },
    ],
};

export const Rated = Template.bind({});
Rated.args = { articleId: '1' };
Rated.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 2, feedback: 'not bad' }],
        },
    ],
};
