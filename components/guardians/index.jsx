import 'core-js';

import styles from './styles';

export default ({ people }) => (
  <section>
    <style jsx>{styles}</style>

    <ol>
      {people.map(({ name, role, quote }) => (
        <li key={name}>
          <img
            src={require(`../../static/images/guardians/${name.replace(' ', '_')}.jpg`)}
            alt={`Portrait of ${name}`}
            height="100"
            width="100"
          />

          <div className="content">
            <h3 className="title">{name}</h3>
            <small className="role">{role}</small>
            <blockquote>
              &quot;
              {quote.trimStart().trimEnd()}
              &quot;
            </blockquote>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
