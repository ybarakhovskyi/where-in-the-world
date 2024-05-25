const MINIMAL_OFFSET_IN_PX = 4;

const offsetValue = (multiplier: number) => multiplier * MINIMAL_OFFSET_IN_PX;

const offsetSize = (multiplier: number) => `${offsetValue(multiplier)}px`;

// Jesus Christ, how I wish this could be automatized, but TypeScript is so static...
export const spacing = {
  x1: offsetSize(1),
  x2: offsetSize(2),
  x3: offsetSize(3),
  x4: offsetSize(4),
  x5: offsetSize(5),
  x6: offsetSize(6),
  x7: offsetSize(7),
  x8: offsetSize(8),
  x9: offsetSize(9),
  x10: offsetSize(10),
  x11: offsetSize(11),
  x12: offsetSize(12),
};
