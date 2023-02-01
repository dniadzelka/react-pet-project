import React from 'react';

type IfProps = {
  condition: boolean;
  children: React.ReactNode;
};

export function If(props: IfProps): JSX.Element | null {
  const { condition, children } = props;

  if (!condition) {
    return null;
  }

  return <>{children}</>;
}
