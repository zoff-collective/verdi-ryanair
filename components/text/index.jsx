import styles from './styles';

export default ({ title, children }) => (
  <article>
    <style jsx>{styles}</style>

    <h1 className="title">{title}</h1>

    <div className="content">
      {children}
    </div>
  </article>
);
