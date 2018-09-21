import styles from './styles';

import { colors } from '../../tokens';

export default ({ children, href, backgroundColor = 'yellow', color = 'blue' }) => (
  <a href={href}>
    <style jsx>{styles}</style>
    <style jsx>{`
      background-color: ${colors[backgroundColor]};
      color: ${colors[color]};
    `}</style>
    {children}
  </a>
);
