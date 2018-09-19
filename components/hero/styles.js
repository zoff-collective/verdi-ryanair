import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  section {
    background-color: ${colors.blue};
    color: ${colors.yellow};
    padding-bottom: 6rem;
    padding-top: 6rem;
    text-align: center;
  }

  .title {
    display: inline-block;
    font-family: ${fonts.novel.family.ultraBlack};
    font-size: 8rem;
    line-height: 1;
    margin: 0 auto;
    max-width: 1100px;
  }
`;
