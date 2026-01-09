import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: Props) => {
  return (
    <section
      id={id}
      className={classNames('py-20 overflow-hidden md:overflow-auto', className)}
    >
      {children}
    </section>
  );
};
