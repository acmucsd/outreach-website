import Link from 'next/link';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

// shared
type Variant = 'display/medium' | 'display/small' | 'subheading' | 'body' | 'label';

type ComponentType = 'p' | 'span' | 'div';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: Variant;
  component?: ComponentType;
  style?: CSSProperties;
  // This is used if/when the component is 'a'.
  href?: string;
}

const variantToCSS = (variant: Variant): CSSProperties => {
  switch (variant) {
    case 'display/medium':
      return {
        fontSize: '3rem',
        fontWeight: 500,
      };
    case 'display/small':
      return {
        fontSize: '2rem',
        fontWeight: 400,
      };
    case 'subheading':
      return {
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: '2rem',
        letterSpacing: '0.015rem',
      };
    case 'body':
      return {
        fontSize: '1.375rem',
        fontWeight: 400,
        lineHeight: '1.75rem',
      };
    case 'label':
      return {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.5rem',
      };
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
  const { variant, component, style, children, ...restProps } = props;

  if (restProps.href) {
    return (
      <Link
        href={restProps.href}
        style={{
          ...variantToCSS(variant),
          ...style, // other styles can be customized via style prop
        }}
        {...restProps}
      >
        {children}
      </Link>
    );
  }

  const Component = component || 'div';

  return (
    <Component
      style={{
        ...variantToCSS(variant),
        ...style, // other styles can be customized via style prop
      }}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Typography;
