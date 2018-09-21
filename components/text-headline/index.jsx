import styles from './styles';

export default ({ children }) => (
  <div>
    <h2>
      <style jsx>{styles}</style>
      {children}
    </h2>
  </div>
);
