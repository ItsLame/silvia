import * as migration_20250608_072319_add_draft_state from './20250608_072319_add_draft_state';
import * as migration_20250608_123947_remove_metadata_order from './20250608_123947_remove_metadata_order';

export const migrations = [
  {
    up: migration_20250608_072319_add_draft_state.up,
    down: migration_20250608_072319_add_draft_state.down,
    name: '20250608_072319_add_draft_state',
  },
  {
    up: migration_20250608_123947_remove_metadata_order.up,
    down: migration_20250608_123947_remove_metadata_order.down,
    name: '20250608_123947_remove_metadata_order'
  },
];
