import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  a {
    border-radius: 5px;
    font-family: ${fonts.novel.family.bold};
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;