import styles from './styles';

import Navigation from './navigation';

export default ({ name, navigation }) => (
  <header>
    <style jsx>{styles}</style>

    <div className="inner">
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
        <path fill="#D91D4B" d="M213 .3L.5 26.9 27 239.5l212.6-26.6L213 .3"/>
        <path fill="#FFF" d="M32.1 152.8h12.4l9 23.9h.2l9-23.9h11.5l-14.4 33.5H46.6l-14.5-33.5M86.2 173c.7 4.6 4.2 6.4 9.9 6.4 3.1 0 6.8-.8 10.2-2.6v8.2c-3.7 1.4-8 2-12.3 2-11 0-19.5-6.4-19.5-17.5 0-11 7.5-17.5 18-17.5 12.4 0 17 8.8 17 18.8v2.1H86.1zm12.8-6.6c0-4-1.8-7-6.5-7-4.2 0-6.2 3-6.4 7H99zM139.2 162c-1.3-.3-2.6-.3-4-.3-5.4 0-8.4 3.9-8.4 10.4v14.2h-11.6v-33.5h10.6v6.1h.1c2-4.2 5-7 10-7 1.3 0 2.7.3 3.9.5l-.6 9.6M193.8 186.3H183v-6h-.2c-1.5 3.8-6.2 6.8-11.5 6.8-10 0-15.4-8.3-15.4-18.2 0-8.2 5.1-17 14.4-17 4.7 0 8.6 1.3 11.6 5.2v-19h11.8v48.2zm-18.7-8.1c3.8 0 7-3.7 7-8.6 0-5-2.8-8.7-7-8.7-4.6 0-7 3.8-7 8.3 0 5.3 2.6 9 7 9zM201.4 186.3H213v-33.5h-11.6v33.5zm0-39H213v-8.5h-11.6v8.5z"/>
      </svg>

      <p className="name">{name}</p>

      <Navigation items={navigation} />
    </div>
  </header>
);
