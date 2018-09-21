import Button from '../button';
import styles from './styles';
import Title from '../title';

// eslint-disable-next-line no-underscore-dangle
const getText = node => node[0]._text;

export default ({ title, items }) => (
  <section>
    <style jsx>{styles}</style>

    <Title>{title}</Title>

    <ol>
      {/* eslint-disable-next-line no-shadow */}
      {items.map(({ title, description, link, date }) => (
        <li key={getText(title)}>
          <h3 className="title">
            <small className="date">{getText(date)}</small>
            {getText(title)}
          </h3>

          <p className="text">{getText(description)}</p>

          <div className="button-container">
            <Button href={getText(link)} backgroundColor="blue" color="white">
              Weiterlesen
            </Button>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
