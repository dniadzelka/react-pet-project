import React from 'react';
import { greet } from '../../common/helper';
import { Counter } from '../Counter';
import { If } from '../If';

export function Greet() {
  return (
    <>
      <div>{greet('Hello world')}</div>
      <If condition={true}>Dmitry positive</If>
      <If condition={false}>Dmitry negative</If>
      <Counter></Counter>
    </>
  );
}
