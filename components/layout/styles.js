import css from 'styled-jsx/css';

export default css`
  :global(*),
  :global(*::after),
  :global(*::before) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-display: swap;
    font-family: "Novel Display SemiBold";
    src: url("/static/fonts/novel-display/semibold.eot?#iefix");
    src: url("/static/fonts/novel-display/semibold.eot?#iefix") format("eot"),
         url("/static/fonts/novel-display/semibold.woff2") format("woff2"),
         url("/static/fonts/novel-display/semibold.woff") format("woff"),
         url("/static/fonts/novel-display/semibold.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Novel Display Black";
    src: url("/static/fonts/novel-display/black.eot?#iefix");
    src: url("/static/fonts/novel-display/black.eot?#iefix") format("eot"),
         url("/static/fonts/novel-display/black.woff2") format("woff2"),
         url("/static/fonts/novel-display/black.woff") format("woff"),
         url("/static/fonts/novel-display/black.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Novel Display ExtraBlack";
    src: url("/static/fonts/novel-display/extra-black.eot?#iefix");
    src: url("/static/fonts/novel-display/extra-black.eot?#iefix") format("eot"),
         url("/static/fonts/novel-display/extra-black.woff2") format("woff2"),
         url("/static/fonts/novel-display/extra-black.woff") format("woff"),
         url("/static/fonts/novel-display/extra-black.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Novel Display UltraBlack";
    src: url("/static/fonts/novel-display/ultra-black.eot?#iefix");
    src: url("/static/fonts/novel-display/ultra-black.eot?#iefix") format("eot"),
         url("/static/fonts/novel-display/ultra-black.woff2") format("woff2"),
         url("/static/fonts/novel-display/ultra-black.woff") format("woff"),
         url("/static/fonts/novel-display/ultra-black.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Novel Display Bold";
    src: url("/static/fonts/novel-display/bold.eot?#iefix");
    src: url("/static/fonts/novel-display/bold.eot?#iefix") format("eot"),
         url("/static/fonts/novel-display/bold.woff2") format("woff2"),
         url("/static/fonts/novel-display/bold.woff") format("woff"),
         url("/static/fonts/novel-display/bold.ttf") format("truetype");
  }
`;
