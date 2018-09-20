import styles from './styles';

import Title from '../title';

export default ({ title, children }) => (
  <article>
    <style jsx>{styles}</style>

    <Title>{title}</Title>

    <div className="content">
      {children}
    </div>
  </article>
);
