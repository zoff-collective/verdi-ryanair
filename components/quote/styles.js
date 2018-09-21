import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

  blockquote {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2.7rem;
    line-height: 1.4;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    text-align: center;
  }
`;
