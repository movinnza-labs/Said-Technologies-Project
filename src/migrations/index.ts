import * as migration_20261102_080136_initial from './20261102_080136_initial';
import * as migration_20261102_082941_industry_icons from './20261102_082941_industry_icons';

export const migrations = [
  {
    up: migration_20261102_080136_initial.up,
    down: migration_20261102_080136_initial.down,
    name: '20261102_080136_initial',
  },
  {
    up: migration_20261102_082941_industry_icons.up,
    down: migration_20261102_082941_industry_icons.down,
    name: '20261102_082941_industry_icons'
  },
];
