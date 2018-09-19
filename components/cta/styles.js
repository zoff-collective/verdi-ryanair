import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  section {
    align-items: center;
    background-color: ${colors.blue};
    color: ${colors.yellow};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin-bottom: 0;
    margin-top: 0;
  }

  .text {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
