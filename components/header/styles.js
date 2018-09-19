import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  header {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
    padding: 1rem;
  }

  .inner {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
  }

  .name {
    font-family: ${fonts.novel.family.black};
    font-size: 2.5rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
