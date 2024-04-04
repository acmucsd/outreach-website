import Link from 'next/link';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './style.module.scss';

// shared
type Variant = 'display/medium' | 'display/small' | 'subheading' | 'body' | 'label';

type ComponentType = 'p' | 'span' | 'div';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: Variant;
  component?: ComponentType;
  // This is used if/when the component is 'a'.
  href?: string;
  className?: string;
}

const variantToCSS = (variant: Variant): string => {
  switch (variant) {
    case 'display/medium':
      return styles.displayMedium;
    case 'display/small':
      return styles.displaySmall;
    case 'subheading':
      return styles.subheading;
    case 'body':
      return styles.body;
    case 'label':
      return styles.label;
  }
};

/**
 * Typography component applies h1-h6 styles from Diamond Design System.
 *
 * https://www.figma.com/file/ihJGLgfFTURKCgl9KNUPcA/Website-%26-Portal%3A-Design-System?node-id=1561%3A263&mode=dev
 * @param props
 * @param props.variant - variant as specified by Diamond Design System, e.g. `h1/bold`, `title/large`, `display/light/small`
 * @param props.component - the actual semantic element, e.g. `h1`, `p`, `div`
 * @param props.style - style prop for JSX component
 * @returns styled typography component
 */
const Typography = (props: PropsWithChildren<TypographyProps>) => {
  const { variant, component, children, className, ...restProps } = props;

  if (restProps.href) {
    return (
      <Link
        href={restProps.href}
        className={`${variantToCSS(variant)} ${className || ''}`}
        {...restProps}
      >
        {children}
      </Link>
    );
  }

  const Component = component || 'div';

  return (
    <Component className={`${variantToCSS(variant)} ${className || ''}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Typography;
