// <Адрес страницы, позиция скролла>
export type SrollSchema = Record<string, number>;

export interface UISchema {
    scroll: SrollSchema;
}
