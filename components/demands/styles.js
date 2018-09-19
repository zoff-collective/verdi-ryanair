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
    transform: rotate(-12deg);
  }

  .title {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 6rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .group-title {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 3rem;
    line-height: 1.45;
    margin-bottom: 0;
    margin-top: 0;
  }

  .demand-text {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 1.6rem;
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
