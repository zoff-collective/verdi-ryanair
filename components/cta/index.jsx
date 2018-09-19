import styles from './styles';

export default ({ label, title, target }) => (
  <section>
    <style jsx>{styles}</style>

    <h2 className="title">{title}</h2>
    <a href={target} className="cta">{label}</a>
  </section>
);
