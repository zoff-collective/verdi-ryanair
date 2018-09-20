import styles from './styles';

export default ({ children }) => (
  <h1>
    <style jsx>{styles}</style>
    {children}
  </h1>
);
