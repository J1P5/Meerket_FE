type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type SpacingSize = Size;

export type ShadowSize = Extract<Size, "sm" | "md" | "lg">;

export type RadiusSize = Extract<Size, "sm" | "md" | "lg" | "xl"> | "round";