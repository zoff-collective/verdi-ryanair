import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  a {
    border-radius: 5px;
    font-family: ${fonts.novel.family.black};
    font-size: 1rem;
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq} {
    a {
      font-size: 1.1rem;
      padding: 1.2rem 3.25rem;
    }
  }
`;
