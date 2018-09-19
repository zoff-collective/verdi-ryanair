import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  article {
    color: ${colors.blue};
  }

  .title {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 5rem;
    margin: 4rem auto;
    text-align: center;
    transform: rotate(-15deg);
  }

  .content {
    font-family: ${fonts.novel.family.bold};
    font-size: 1.4rem;
    line-height: 1.45;
    margin-left: auto;
    margin-right: auto;
    max-width: ${textMaxWidth};
    padding-bottom: 4rem;
  }
`;
