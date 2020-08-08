import { themes } from '.';

export const getValueFromTheme = (category: string, level: string, selectedTheme = 'dark'): string => {
  const defaultColor = '#000000';
  const theme = themes[selectedTheme];
  const categorySelected = theme[category];

  if (!categorySelected) {
    console.error('THEME CATEGORY NOT FOUND ->', categorySelected);
    return defaultColor;
  }

  const neededColor = categorySelected[level];

  if (!neededColor) {
    console.error("THEME DOESN'T HAVE SELECTED LEVEL ->", level);
    return defaultColor;
  }

  return neededColor;
};
