import { StoryFn } from '@storybook/react';
// eslint-disable-next-line mun-a-plugin/layer-imports
import '@/app/styles/index.scss';
// eslint-disable-next-line mun-a-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
