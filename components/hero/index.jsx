import styles from './styles';

export default ({ title, image }) => (
  <section>
    <style jsx>{styles}</style>

    <img src={image} alt="" />

    <h1 className="title">{title}</h1>
  </section>
);
