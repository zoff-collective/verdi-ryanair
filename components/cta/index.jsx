import styles from './styles';

import Button from '../button';

export default ({ label, title, target }) => (
  <section>
    <style jsx>{styles}</style>

    <h2 className="title">{title}</h2>

    <Button href={target} size="big">
      {label}
    </Button>
  </section>
);
