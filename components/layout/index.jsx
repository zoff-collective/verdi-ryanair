import styles from './styles';

export default ({ children }) => (
  <>
    <style jsx global>{styles}</style>
    {children}
  </>
);
