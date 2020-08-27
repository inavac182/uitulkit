import { themes } from '.';

export const getValueFromTheme = (
  category: string,
  level: string,
  selectedTheme = 'dark',
  innerLevel?: string
): string => {
  const defaultColor = '#000000';
  const theme = themes[selectedTheme];
  const categorySelected = theme[category];

  if (!categorySelected) {
    console.error('THEME CATEGORY NOT FOUND ->', categorySelected);
    return defaultColor;
  }

  let color = '';

  if (innerLevel) {
    color = categorySelected[level][innerLevel];
  } else {
    color = categorySelected[level];
  }

  if (!color) {
    console.error("THEME DOESN'T HAVE SELECTED LEVEL ->", level);
    return defaultColor;
  }

  return color;
};
