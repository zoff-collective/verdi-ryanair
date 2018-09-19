import styles from './styles';

export default ({ title }) => (
  <section>
    <style jsx>{styles}</style>

    <h1 className="title">{title}</h1>

  </section>
);
