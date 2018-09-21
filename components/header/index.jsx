import styles from './styles';

import Navigation from './navigation';

export default ({ name, navigation }) => (
  <header>
    <style jsx>{styles}</style>

    <div className="inner">
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 244">
        <path fill="#D91D4B" d="M213 0L1 27l26 213 213-27L213 0"/>
        <path fill="#FFF" d="M32 153h13l9 24 9-24h11l-14 33H47l-15-33M86 173c1 5 4 6 10 6 3 0 7 0 10-2v8l-12 2c-11 0-19-6-19-18s7-17 18-17c12 0 17 9 17 19v2H86zm13-7c0-3-2-7-6-7-5 0-7 4-7 7h13zM139 162h-4c-5 0-8 3-8 10v14h-12v-33h11v6c2-4 5-7 10-7h4l-1 10M194 186h-11v-6c-1 4-6 7-11 7-10 0-16-8-16-18 0-8 5-17 15-17 4 0 8 1 11 5v-19h12v48zm-19-8c4 0 7-4 7-8 0-6-3-9-7-9s-7 4-7 8c0 6 3 9 7 9zM201 186h12v-33h-12v33zm0-39h12v-8h-12v8z"/>
        <path d="M152 187l-2-13-13 2 2 13 13-2"/>
      </svg>

      <p className="name">{name}</p>

      <Navigation items={navigation} />
    </div>
  </header>
);
