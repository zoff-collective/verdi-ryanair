import styles from './styles';

export default ({ title, groups }) => (
  <section>
    <style jsx>{styles}</style>

    <div className="content">
      <h2 className="title">{title}</h2>

      <ul className="list">
        {groups.map(({ groupTitle, items }) => (
          <li key={groupTitle}>
            <h3 className="group-title">{groupTitle}</h3>
            {items.map(demand => (
              <p key={demand} className="demand-text">
                {demand}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
