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
      {items.map(({ itemTitle, description, link, date }) => (
        <li key={getText(itemTitle)}>
          <h3 className="title">
            <small className="date">{getText(date)}</small>
            {getText(itemTitle)}
          </h3>

          <p className="text">{getText(description)}</p>

          <div className="button-container">
            <Button href={getText(link)} backgroundColor="blue" color="yellow">
              Weiterlesen
            </Button>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
