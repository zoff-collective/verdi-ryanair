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
    font-size: 3rem;
    justify-content: center;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  .title {
    line-height: 1.2;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    text-align: center;
  }

  .cta {
    background-color: ${colors.yellow};
    border-radius: 5px;
    color: ${colors.blue};
    font-family: ${fonts.novel.family.bold};
    font-size: 1.4rem;
    margin-top: 3rem;
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
