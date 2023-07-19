import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line mun-a-plugin/layer-imports
import '@/app/styles/index.scss';

export const RouterDecorator = (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
