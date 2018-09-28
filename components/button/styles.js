import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  a {
    border-radius: 5px;
    font-family: ${fonts.novel.family.black};
    font-size: 0.9rem;
    padding: 0.8rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a {
      font-size: 1.1rem;
      padding: 1.2rem 3.25rem;
    }
  }
`;
