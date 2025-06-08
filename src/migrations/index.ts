import * as migration_20250608_072319_add_draft_state from './20250608_072319_add_draft_state';

export const migrations = [
  {
    up: migration_20250608_072319_add_draft_state.up,
    down: migration_20250608_072319_add_draft_state.down,
    name: '20250608_072319_add_draft_state'
  },
];
