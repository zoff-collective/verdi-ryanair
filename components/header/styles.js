import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  header {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
    padding: 1.5rem 1.5rem;
  }

  .inner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
  }

  .logo {
    height: 2.25rem;
    margin-bottom: -0.5rem;
    margin-right: 1rem;
    margin-top: -0.5rem;
    position: relative;
    top: 0.25rem;
    width: 2.25rem;
  }

  @media ${mq.tablet} {
    .logo {
      height: 3.8rem;
      margin-right: 2rem;
      width: 3.8rem;
    }
  }

  .name {
    font-family: ${fonts.novel.family.black};
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .name {
      font-size: 2.35rem;
    }
  }
`;
