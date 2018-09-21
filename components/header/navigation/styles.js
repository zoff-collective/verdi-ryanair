import css from 'styled-jsx/css';

import { colors, fonts } from '../../../tokens';

export default css`
  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin-bottom: 0;
    margin-left: 12rem;
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
    font-size: 1.9rem;
    line-height: 1;
    text-decoration: none;
  }

  span {
    border-bottom: 5px solid ${colors.blue};
  }
`;
