import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getUIScorll = (state: StateSchema) => state.ui.scroll;
export const getUIScorllByPath = createSelector(
    getUIScorll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
