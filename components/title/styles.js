import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  h1 {
    color: currentColor;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 6.1rem;
    margin: 4rem auto;
    text-align: center;
    transform: rotate(-10deg);
  }
`;
