import styles from './styles';

export default ({ text }) => (
  <section>
    <style jsx>{styles}</style>
    <blockquote>
      &quot;
      {text.trimStart().trimEnd()}
      &quot;
    </blockquote>
  </section>
);
