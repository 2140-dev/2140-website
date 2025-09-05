import React, { ReactNode } from 'react';
import styles from './section.module.scss'
interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: Props) => {
  return (
    <section
      id={id}
      className={[styles.section, className].join(' ')}
    >
      {children}
    </section>
  );
};
