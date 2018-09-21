import styles from './styles';

export default ({ children }) => (
  <h2>
    <style jsx>{styles}</style>
    <span>{children}</span>
  </h2>
);
