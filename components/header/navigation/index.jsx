import Link from 'next/link';

import styles from './styles';

export default ({ items }) => (
  <ul>
    <style jsx>{styles}</style>

    {items.map(([ text, url, active = false ]) => (
      <li key={url}>
        {!active && (
          <Link href={url}>
            <a>{text}</a>
          </Link>
        )}

        {active && (
          <span>{text}</span>
        )}
      </li>
    ))}
  </ul>
);
