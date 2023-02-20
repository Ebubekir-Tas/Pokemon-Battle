const colorToTypes = {
  grass: 'green',
  fire: 'red',
  water: 'blue',
  poison: 'purple',
  flying: 'gray',
};

export function typeColor(type) {
  // defaults to pink if type is not found in colorToTypes oject
  return colorToTypes[type] || 'pink';
};
