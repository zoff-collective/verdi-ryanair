import styles from './styles';

import Navigation from './navigation';

export default ({ name, navigation }) => (
  <header>
    <style jsx>{styles}</style>

    <div className="inner">
      <p className="name">{name}</p>

      <Navigation items={navigation} />
    </div>
  </header>
);
