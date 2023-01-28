import React from 'react';
import { greet } from '../../common/helper';

export function Greet() {
  return <div>{greet('Hello world')}</div>;
}
