import styles from './styles';

export default ({ title, groups }) => (
  <section>
    <style jsx>{styles}</style>

    <div className="content">
      <h2 className="title">{ title }</h2>

      <ul className="list">
        {groups.map(({ title, items }) => (
          <li key={title}>
            <h3>{title}</h3>
            {items.map(demand => (
              <div key={demand}>{demand}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
