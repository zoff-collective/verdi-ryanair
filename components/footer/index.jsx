import styles from './styles';

export default ({ title }) => (
  <footer>
    <style jsx>{styles}</style>

    <p className="title">{title}</p>
  </footer>
);
