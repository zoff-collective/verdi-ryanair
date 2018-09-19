import styles from './styles';

export default ({ name }) => (
  <header>
    <style jsx>{styles}</style>
    <p className="name">{name}</p>
  </header>
);
