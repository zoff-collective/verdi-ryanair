import styles from './styles';

export default ({ title }) => (
  <footer>
    <style jsx>{styles}</style>

    <p className="title">{title}</p>

    <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 434">
      <path fill="#D91D4B" d="M213 .3L.5 26.9 27 239.5l212.6-26.6L213 .3"/>
      <path fill="#FFF" d="M32.1 152.8h12.4l9 23.9h.2l9-23.9h11.5l-14.4 33.5H46.6l-14.5-33.5M86.2 173c.7 4.6 4.2 6.4 9.9 6.4 3.1 0 6.8-.8 10.2-2.6v8.2c-3.7 1.4-8 2-12.3 2-11 0-19.5-6.4-19.5-17.5 0-11 7.5-17.5 18-17.5 12.4 0 17 8.8 17 18.8v2.1H86.1zm12.8-6.6c0-4-1.8-7-6.5-7-4.2 0-6.2 3-6.4 7H99zM139.2 162c-1.3-.3-2.6-.3-4-.3-5.4 0-8.4 3.9-8.4 10.4v14.2h-11.6v-33.5h10.6v6.1h.1c2-4.2 5-7 10-7 1.3 0 2.7.3 3.9.5l-.6 9.6M193.8 186.3H183v-6h-.2c-1.5 3.8-6.2 6.8-11.5 6.8-10 0-15.4-8.3-15.4-18.2 0-8.2 5.1-17 14.4-17 4.7 0 8.6 1.3 11.6 5.2v-19h11.8v48.2zm-18.7-8.1c3.8 0 7-3.7 7-8.6 0-5-2.8-8.7-7-8.7-4.6 0-7 3.8-7 8.3 0 5.3 2.6 9 7 9zM201.4 186.3H213v-33.5h-11.6v33.5zm0-39H213v-8.5h-11.6v8.5z"/>
      <path fill="#000" d="M151.9 187.4l-1.6-13.5-13.5 1.7 1.7 13.5 13.4-1.7M134.8 292.5h7.3l5.7 20.1 5.8-20.1h7l-8.8 25.6h-8.4l-8.6-25.6M166.8 310.5c.3 2.6 2.4 3.7 5.6 3.7 1.8 0 3.9-.4 5.8-1.5v4.7c-2 .8-4.5 1.2-7 1.2-6.3 0-11.1-3.7-11.1-10 0-6.4 4.3-10 10.2-10 7.1 0 9.7 5 9.7 10.7v1.2h-13.2zm7.3-3.8c0-2.2-1-4-3.7-4-2.4 0-3.6 1.8-3.7 4h7.4zM197.1 304.3c-.7-.2-1.4-.2-2.2-.2-3 0-4.8 2.2-4.8 6v8h-6.6V299h6v3.5c1.2-2.4 2.9-4 5.7-4 .8 0 1.6.1 2.3.3l-.4 5.5M205 310.5c.3 2.6 2.3 3.7 5.5 3.7 1.8 0 3.9-.4 5.9-1.5v4.7c-2.1.8-4.6 1.2-7 1.2-6.4 0-11.2-3.7-11.2-10 0-6.4 4.3-10 10.3-10 7 0 9.7 5 9.7 10.7v1.2h-13.3zm7.2-3.8c0-2.2-1-4-3.7-4-2.4 0-3.5 1.8-3.7 4h7.4zM222.4 295.9h6.6V291h-6.6v4.9zm0 22.2h6.6V299h-6.6V318zM233.9 299h6v3.5c1.4-2.8 4-4 7-4 5.3 0 7.4 3.7 7.4 7.7v12h-6.6v-9.3c0-3.6-1.3-4.8-3-4.8-2.8 0-4.2 1.8-4.2 6v8H234V299M256.7 299h4v-4.3l6.4-2v6.3h4.7v4.6H267v7c0 2.4.6 3.6 2.7 3.6l2-.3.2 4.3c-1.2.2-2.5.4-4.1.4-6 0-7.4-2.6-7.4-7.2v-7.8h-3.8V299M280.5 310.5c.4 2.6 2.4 3.7 5.6 3.7 1.8 0 4-.4 5.9-1.5v4.7c-2.1.8-4.6 1.2-7 1.2-6.4 0-11.2-3.7-11.2-10 0-6.4 4.3-10 10.3-10 7 0 9.7 5 9.7 10.7v1.2h-13.3zm7.3-3.8c0-2.2-1-4-3.7-4-2.4 0-3.5 1.8-3.7 4h7.4zM136.8 346.3h9.3c9 0 15.2 2.8 15.2 12.7 0 9.6-6.4 13-15.2 13h-9.3v-25.7zm6.8 20.6h2.7c5.1 0 8-2.6 8-7.8 0-5-3-7.7-8-7.7h-2.7v15.5zM165.8 349.7h6.7v-4.9h-6.7v4.9zm0 22.3h6.7v-19.2h-6.7V372zM183.1 364.3c.4 2.7 2.4 3.7 5.7 3.7 1.8 0 3.8-.4 5.8-1.5v4.7c-2.1.9-4.6 1.2-7 1.2-6.3 0-11.2-3.7-11.2-10s4.3-10 10.3-10c7.1 0 9.7 5 9.7 10.7v1.2H183zm7.3-3.7c0-2.2-1-4-3.7-4-2.4 0-3.5 1.8-3.6 4h7.3zM199.8 352.8h6v3.6h.1c1.4-2.8 4-4 7-4 5.2 0 7.3 3.7 7.3 7.6v12h-6.6v-9.3c0-3.6-1.2-4.8-3-4.8-2.8 0-4.2 1.9-4.2 6v8h-6.6v-19M224 366.7c1.5.6 3.8 1.3 6.2 1.3 1.4 0 2.7-.2 2.7-1.5 0-3.3-9.4-1-9.4-7.9 0-4.4 4.3-6.2 8.1-6.2 2.3 0 4.6.2 6.8 1l-.5 4.7c-1.4-.9-3.5-1.3-5.2-1.3-1.4 0-3 .2-3 1.3 0 3 9.8.6 9.8 8 0 5-4.6 6.3-9 6.3-3 0-5-.3-6.9-.9l.4-4.8M241 352.8h4v-4.3l6.5-2v6.3h4.6v4.7h-4.6v7c0 2.3.5 3.5 2.6 3.5l2-.2.3 4.3c-1.3.1-2.5.3-4.2.3-6 0-7.4-2.6-7.4-7.1v-7.8h-3.7v-4.7M259.8 372h6.7v-27.6h-6.7zM277.1 364.3c.4 2.7 2.4 3.7 5.7 3.7 1.8 0 3.8-.4 5.8-1.5v4.7c-2.1.9-4.6 1.2-7 1.2-6.3 0-11.2-3.7-11.2-10s4.3-10 10.3-10c7 0 9.7 5 9.7 10.7v1.2H277zm7.3-3.7c0-2.2-1-4-3.7-4-2.4 0-3.5 1.8-3.6 4h7.3zM294.6 349.7h6.6v-4.9h-6.6v4.9zm0 22.3h6.6v-19.2h-6.6V372zM305.7 366.7c1.6.6 3.9 1.3 6.3 1.3 1.3 0 2.6-.2 2.6-1.5 0-3.3-9.4-1-9.4-7.9 0-4.4 4.4-6.2 8.2-6.2 2.3 0 4.6.2 6.7 1l-.5 4.7c-1.4-.9-3.5-1.3-5.1-1.3-1.5 0-3.1.2-3.1 1.3 0 3 9.9.6 9.9 8 0 5-4.6 6.3-9 6.3-3 0-5-.3-7-.9l.4-4.8M322.8 352.8h3.9v-4.3l6.5-2v6.3h4.6v4.7h-4.6v7c0 2.3.6 3.5 2.7 3.5l2-.2.2 4.3c-1.3.1-2.5.3-4.2.3-5.9 0-7.3-2.6-7.3-7.1v-7.8h-3.8v-4.7M361.2 372h-6v-3.6c-1.4 2.8-4 4-7 4-5.3 0-7.4-3.7-7.4-7.6v-12h6.6v9.3c0 3.6 1.3 4.8 3 4.8 2.8 0 4.2-1.9 4.2-6v-8h6.6v19M365.3 352.8h6v3.6h.2c1.3-2.8 4-4 7-4 5.2 0 7.3 3.7 7.3 7.6v12H379v-9.3c0-3.6-1.2-4.8-3-4.8-2.7 0-4.1 1.9-4.1 6v8h-6.7v-19M410.2 369.7c0 8-3.8 10.4-11.6 10.4-3.1 0-5.7-.6-7.3-1.2l.3-5.2c2 1 3.8 1.6 6.5 1.6 3.8 0 5.9-1.8 5.9-5.6v-1a7.5 7.5 0 0 1-6.5 3.3c-5.3 0-8.5-4-8.5-9.7 0-5.7 2.6-10 8.6-10 2.8 0 5.1 1.6 6.5 4v-3.5h6v17zm-10.7-2.8c2.4 0 4.3-2 4.3-5 0-2-1.3-4.4-4.3-4.4-2.4 0-3.7 2.1-3.7 4.7 0 3 1.8 4.7 3.7 4.7zM414 366.7c1.6.6 3.9 1.3 6.3 1.3 1.3 0 2.7-.2 2.7-1.5 0-3.3-9.4-1-9.4-7.9 0-4.4 4.3-6.2 8.1-6.2 2.3 0 4.6.2 6.8 1l-.6 4.7c-1.4-.9-3.5-1.3-5.1-1.3-1.4 0-3 .2-3 1.3 0 3 9.8.6 9.8 8 0 5-4.6 6.3-9 6.3-3 0-5-.3-6.9-.9l.4-4.8M431.9 364.5h10v-4.8h-10zM156.8 422.7c0 8-3.9 10.5-11.6 10.5-3.1 0-5.8-.7-7.3-1.3l.3-5.2c2 1 3.7 1.6 6.5 1.6 3.8 0 5.9-1.8 5.9-5.6v-1a7.5 7.5 0 0 1-6.5 3.3c-5.3 0-8.6-4-8.6-9.6 0-5.7 2.7-10 8.7-10 2.8 0 5.1 1.5 6.5 3.9v-3.5h6v17zM146 420c2.4 0 4.3-2 4.3-5 0-2-1.3-4.4-4.3-4.4-2.4 0-3.7 2.1-3.7 4.7 0 3 1.8 4.7 3.7 4.7zM166.8 417.3c.4 2.7 2.4 3.7 5.6 3.7 1.8 0 3.9-.4 5.9-1.5v4.7c-2.2.9-4.6 1.2-7 1.2-6.4 0-11.2-3.7-11.2-10s4.3-10 10.3-10c7 0 9.6 5 9.6 10.7v1.2h-13.2zm7.3-3.7c0-2.2-1-4-3.7-4-2.4 0-3.5 1.8-3.7 4h7.4zM181.8 405.8h6.9l3.1 13.8 3.4-13.8h7.9l3.2 13.8h.1l3-13.8h6.4L210 425h-7.7l-3.2-13.9h-.1l-3.7 13.9h-7.6l-5.9-19.2M224 417.3c.4 2.7 2.4 3.7 5.6 3.7 1.8 0 3.9-.4 5.9-1.5v4.7c-2.2.9-4.6 1.2-7 1.2-6.4 0-11.2-3.7-11.2-10s4.3-10 10.3-10c7 0 9.6 5 9.6 10.7v1.2H224zm7.3-3.7c0-2.2-1-4-3.7-4-2.4 0-3.5 1.8-3.7 4h7.4zM254.4 411.1c-.8-.2-1.5-.2-2.3-.2-3 0-4.8 2.2-4.8 6v8h-6.6v-19h6v3.5c1.2-2.5 2.9-4 5.8-4l2.2.2-.3 5.5M257 397.4h6.6v16.5h.1l5.5-8.1h7.3l-6.7 8.8L277 425h-8l-5.3-9.5h-.1v9.5H257v-27.6M279.1 419.7c1.6.7 3.8 1.3 6.2 1.3 1.4 0 2.7-.2 2.7-1.5 0-3.3-9.4-1-9.4-7.9 0-4.4 4.3-6.2 8.2-6.2 2.2 0 4.6.2 6.7 1l-.5 4.7c-1.4-.9-3.5-1.3-5.2-1.3-1.4 0-3 .3-3 1.3 0 3 9.8.6 9.8 8 0 5-4.6 6.3-9 6.3-2.9 0-5-.3-6.9-.9l.4-4.8M312.9 411.3c-1.2-.7-2.5-1-4-1-2.9 0-5.1 2-5.1 5.2 0 3 2.6 5 5.4 5a9 9 0 0 0 4.2-.8l.1 4.9c-1.7.5-3.6.8-5.4.8-6.3 0-11.2-3.6-11.2-10 0-6.3 4.9-10 11.2-10 2 0 3.7.3 5.3 1l-.5 5M316.3 397.4h6.6v11.3c1.5-2 3.6-3.3 6.4-3.3 5.3 0 7.4 3.7 7.4 7.6v12H330v-9.3c0-3.6-1.2-4.8-3-4.8-2.7 0-4.1 1.9-4.1 6v8h-6.6v-27.5M353.3 425l-.1-3h-.1c-1.5 2.4-3.3 3.4-6 3.4-3.9 0-7.2-1.8-7.2-6 0-5.8 6.3-6.5 9.9-6.5 1 0 2.2 0 3 .2 0-2.6-2-3.3-4.3-3.3-2.2 0-4.3.4-6.1 1.4l-.1-4.5c2.3-1 4.8-1.3 7.6-1.3 4.9 0 9.1 2 9.1 8v7c0 1.6.1 3 .4 4.6h-6zm-4.5-4c2.5 0 4-2.3 4-4.5l-2.8-.1c-2.2 0-4 .7-4 2.5 0 1.3 1.2 2.1 2.8 2.1zM365.6 410.5h-4v-4.7h4v-1.1c0-5.7 2.8-7.7 8-7.7 1.5 0 2.6.2 3.4.3l-.4 4.6a6 6 0 0 0-2-.3c-1.8 0-2.4 1.2-2.4 3v1.2h4.7v4.7h-4.7V425h-6.6v-14.5M377.9 405.8h3.9v-4.3l6.5-2v6.3h4.6v4.7h-4.6v7c0 2.3.5 3.5 2.6 3.5l2-.2.3 4.3c-1.3.1-2.5.3-4.2.3-5.9 0-7.3-2.6-7.3-7.1v-7.8h-3.8v-4.7"/>
    </svg>

  </footer>
);
