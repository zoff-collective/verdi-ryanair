import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  a {
    border-radius: 5px;
    font-family: ${fonts.novel.family.black};
    font-size: 1.1rem;
    padding: 1.2rem 3.25rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
