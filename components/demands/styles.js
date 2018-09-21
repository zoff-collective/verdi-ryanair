import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

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
    transform: rotate(-10deg);
  }

  .title {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 6.2rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .group-title {
    font-family: ${fonts.novel.family.ultraBlack};
    font-size: 2rem;
    line-height: 1.45;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  .demand-text {
    font-family: ${fonts.novel.family.bold};
    font-size: 1.55rem;
    line-height: 1.45;
    margin-bottom: 0;
    margin-top: 0;
  }

  .list {
    list-style: none;
    margin-left: 14rem;
    margin-top: 0;
    padding-left: 0;
  }
`;
