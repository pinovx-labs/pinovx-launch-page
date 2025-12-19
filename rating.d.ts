declare module 'react-rating-stars-component' {
  import { ComponentType } from 'react';

  interface ReactStarsProps {
    count?: number;
    value?: number;
    char?: string;
    size?: number;
    edit?: boolean;
    isHalf?: boolean;
    emptyIcon?: React.ReactElement;
    halfIcon?: React.ReactElement;
    filledIcon?: React.ReactElement;
    color?: string;
    activeColor?: string;
    onChange?: (newRating: number) => void;
    classNames?: string;
    a11y?: boolean;
    key?: string | number;
  }

  const ReactStars: ComponentType<ReactStarsProps>;
  export default ReactStars;
}