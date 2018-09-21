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
    padding: 1.5rem 1rem;
  }

  .inner {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
  }

  .logo {
    height: 3.8rem;
    margin-bottom: -0.5rem;
    margin-right: 2rem;
    margin-top: -0.5rem;
    position: relative;
    top: 0.25rem;
    width: 3.8rem;
  }

  .name {
    font-family: ${fonts.novel.family.black};
    font-size: 2.35rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
