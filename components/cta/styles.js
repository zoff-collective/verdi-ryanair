import css from 'styled-jsx/css';

import { colors, fonts, mq, textMaxWidth } from '../../tokens';

export default css`
  section {
    align-items: center;
    background-color: ${colors.blue};
    color: white;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2rem;
    justify-content: center;
    overflow: hidden;
    padding: 4rem 1.5rem;
    position: relative;
  }

  @media ${mq.tablet} {
    section {
      font-size: 2.9rem;
      padding-bottom: 6rem;
      padding-top: 6rem;
    }
  }

  .title {
    line-height: 1.2;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    text-align: center;
  }

  .button-container {
    margin-top: 3rem;
  }

  @media ${mq.tablet} {
    .button-container {
      margin-top: 5rem;
    }
  }

  .title,
  .button-container {
    position: relative;
  }

  img {
    height: auto;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
