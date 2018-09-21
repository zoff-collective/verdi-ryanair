import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  article {
    color: ${colors.blue};
  }

  .content {
    display: flex;
    flex-direction: column;
    font-family: ${fonts.novel.family.semibold};
    font-feature-settings: normal;
    font-variant-ligatures: contextual;
    font-size: 1.45rem;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    max-width: ${textMaxWidth};
    padding-bottom: 4rem;
  }
`;
