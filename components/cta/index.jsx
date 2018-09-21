import styles from './styles';

import Button from '../button';

export default ({ label, title, target, image }) => (
  <section>
    <style jsx>{styles}</style>

    <img src={image} alt="" />

    <h2 className="title">{title}</h2>

    <div className="button-container">
      <Button href={target}>
        {label}
      </Button>
    </div>
  </section>
);
