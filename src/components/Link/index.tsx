import React from "react";

import styles from "./styles.module.scss";

export type Props = {
  children: string | JSX.Element;
  href: string;
};

export const Link: React.FC<Props> = ({ children, href }) => (
  <a className={styles.link} href={href}>
    {children}
  </a>
);
