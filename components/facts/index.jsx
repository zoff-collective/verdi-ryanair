import styles from './styles';

export default ({ title, items }) => (
  <section>
    <style jsx>{styles}</style>

    <h2 className="title">{title}</h2>

    <ul>
      {items.map(({ number, text }) => (
        <li key={text}>
          <p>
            <span className="number">{number}</span>
            {text}
          </p>
        </li>
      ))}
    </ul>
  </section>
);
