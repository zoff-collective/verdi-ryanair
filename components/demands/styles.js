import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  section {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    display: flex;
    justify-content: center;
    padding-bottom: 6rem;
    padding-top: 6rem;
  }

  .content {
    display: inline-block;
    transform: rotate(-15deg);
  }

  .title {
    font-size: 4rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .list {
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }
`;
