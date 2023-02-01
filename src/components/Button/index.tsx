import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { children } = props;

  return <button>{children}</button>;
}
