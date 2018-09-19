import styles from './styles';

export default ({ text }) => (
  <section>
    <style jsx>{styles}</style>
    <blockquote>"{text}"</blockquote>
  </section>
);
