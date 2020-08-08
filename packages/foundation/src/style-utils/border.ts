import { getValueFromTheme, ThemeProp, ThemesCategoriesLevel, ThemesCategories } from '../';

export const OneSideBorder = (
  position: 'top' | 'bottom' | 'left' | 'right',
  size: number,
  type: 'solid' | 'doted',
  theme?: ThemeProp
) =>
  `border-${position}: ${size}px ${type} ${getValueFromTheme(
    ThemesCategories.COLORS,
    ThemesCategoriesLevel.CONTRAST,
    theme?.main
  )}`;
