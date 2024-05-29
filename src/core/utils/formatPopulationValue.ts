export const formatPopulationValue = (value: number): string => {
  const stringifyValue = value.toString();

  return stringifyValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
