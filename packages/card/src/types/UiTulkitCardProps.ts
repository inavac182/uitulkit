import { UiTulkitElements } from '@uitulkit/foundation';

export interface UiTulkitCardProps extends UiTulkitElements {
  className?: string;
  content?: React.ReactNode;
  externalLink?: string;
  extendHeight?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  identifier?: string;
  image?: string;
  imageHeight?: string;
  link?: string;
  onClick?: (identifier?: string) => void;
}
