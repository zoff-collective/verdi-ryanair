import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.blue};
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  ul {
    list-style: none;
    max-width: ${textMaxWidth};
    margin: 0 auto;
    padding-left: 0;
  }

  .title {
    color: white;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 4.4rem;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  p {
    color: white;
    display: flex;
    flex-direction: row;
    font-family: ${fonts.novel.family.black};
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .number {
    color: ${colors.yellow};
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 4rem;
    margin-right: 2rem;
  }
`;
