import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin-bottom: 0;
    margin-left: 4rem;
    margin-top: 0;
    padding-left: 0;
  }

  li + li {
    margin-left: 3rem;
  }

  a,
  span {
    color: currentColor;
    font-family: ${fonts.novel.family.black};
    font-size: 2rem;
    text-decoration: none;
  }

  span {
    text-decoration: underline;
  }
`;
