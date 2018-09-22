import styles from './styles';

export default ({ items }) => (
  <ul>
    <style jsx>{styles}</style>

    {items.map(([text, url, active = false]) => (
      <li key={url}>
        {!active && <a href={url}>{text}</a>}

        {active && <span>{text}</span>}
      </li>
    ))}
  </ul>
);
