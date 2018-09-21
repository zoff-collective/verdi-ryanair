import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  section {
    align-items: center;
    background-color: ${colors.blue};
    color: white;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2.9rem;
    justify-content: center;
    overflow: hidden;
    padding-bottom: 8rem;
    padding-top: 8rem;
    position: relative;
  }

  .title {
    line-height: 1.2;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    text-align: center;
  }

  .button-container {
    margin-top: 2.5rem;
  }

  .title,
  .button-container {
    position: relative;
  }

  img {
    height: auto;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
`;
