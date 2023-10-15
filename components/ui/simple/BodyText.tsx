import React from 'react';

interface BodyTextProps extends React.HTMLProps<HTMLParagraphElement> {
  text?: string;
  //size
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  //text:
  bold?: boolean;
}

export const BodyText: React.FC<BodyTextProps> = (props) => {
  const size = props.xs ? 'fs-2xs lh-2xs'
    : props.sm ? 'fs-xs lh-xs'
      : props.md ? 'fs-sm lh-sm'
        : props.lg ? 'fs-md lh-md'
          : props.xl ? 'fs-lg lh-lg'
            : 'fs-sm lh-sm';

  const fontWeight = props.bold ? 'fw-bold' : 'fw-medium';

  const { className, ...restProps } = props;

  return (
    <p className={`${size} p-0 m-0 color-text font-family-primary ${fontWeight} ${props.className ? props.className : ''}`} {...restProps} >
      {props.text || props.children}
    </p>
  );
};