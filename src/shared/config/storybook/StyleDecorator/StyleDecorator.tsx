import { StoryFn } from '@storybook/react';
// eslint-disable-next-line mun-a-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;
