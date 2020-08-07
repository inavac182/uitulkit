import { themes } from '.';

export const getColor = (level: string, selectedTheme = 'dark'): string => {
  const defaultColor = '#000000';
  const theme = themes[selectedTheme];

  if (!level) {
    console.error('THEME NEED TO GET THE DESIRE LEVEL');
    return defaultColor;
  }

  const neededColor = theme[level];

  if (!neededColor) {
    console.error("THEME DOESN'T HAVE SELECTED LEVEL");
    return defaultColor;
  }

  return neededColor;
};
