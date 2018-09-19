import styles from './styles';

export default ({ label, text, title, target }) => (
  <section>
    <style jsx>{styles}</style>

    <h2 className="title">{title}</h2>
    <p className="text">{text}</p>
    <a href={target}>{label}</a>
  </section>
);
