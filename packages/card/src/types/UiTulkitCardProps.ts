import { ThemeProp, UiTulkitElements } from '@uitulkit/foundation';
import { UiTulkitHeadingLevelType } from '@uitulkit/text';

export interface UiTulkitCardProps extends UiTulkitElements {
  children?: React.ReactNode;
  text?: string;
  theme?: ThemeProp;
  textAlign?: 'left' | 'right' | 'center';
  image?: string;
  imageHeight?: string;
  header?: string;
  className?: string;
  headerLevel?: UiTulkitHeadingLevelType;
}
