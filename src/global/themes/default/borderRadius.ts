const MINIMAL_RADIUS_IN_PX = 4;

const radiusValue = (multiplier: number) => multiplier * MINIMAL_RADIUS_IN_PX;

const borderRadiusSize = (multiplier: number) => `${radiusValue(multiplier)}px`;

export const borderRadius = {
  x1: borderRadiusSize(1),
  x2: borderRadiusSize(2),
  x3: borderRadiusSize(3),
  x4: borderRadiusSize(4),
};
