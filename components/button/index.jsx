import styles from './styles';

import { colors } from '../../tokens';

export default ({ children, href, backgroundColor = 'yellow', color = 'blue', size = 'small' }) => (
  <a href={href}>
    <style jsx>{styles}</style>
    <style jsx>{`
      background-color: ${colors[backgroundColor]};
      color: ${colors[color]};
      font-size: ${size === 'small' ? '1rem' : '1.4rem'};
    `}</style>
    {children}
  </a>
);
