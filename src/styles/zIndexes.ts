type ZIndexKey =
  | 'RootLayout'
  | 'KebabMenu'
  | 'TopSheet'
  | 'BottomSheet'
  | 'ControlBar'
  | 'Modal'
  | 'Toast';

export const zIndexes: Record<ZIndexKey, number> = {
  RootLayout: 100,
  KebabMenu: 200,
  TopSheet: 300,
  BottomSheet: 300,
  ControlBar: 400,
  Modal: 500,
  Toast: 600,
};
