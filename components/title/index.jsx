import styles from './styles';

export default ({ children }) => (
  <header>
    <style jsx>{styles}</style>

    <h1>{children}</h1>
  </header>
);
