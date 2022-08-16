export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type ValueOf<T> = T[keyof T];
