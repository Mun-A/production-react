import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getUIScorll = (state: StateSchema) => state.ui.scroll;
export const getUIScorllByPath = createSelector(
    getUIScorll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
