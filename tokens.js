const colors = {
  blue: 'rgb(12, 56, 141)',
  yellow: 'rgb(254, 244, 55)'
};

const fonts = {
  novel: {
    family: {
      black: 'Novel Display Black',
      bold: 'Novel Display Bold',
      extraBlack: 'Novel Display ExtraBlack',
      semibold: 'Novel Display SemiBold',
      ultraBlack: 'Novel Display UltraBlack'
    }
  }
};

const SCREEN_SIZES = [
  ['phone', 400],
  ['tabletPortrait', 767],
  ['tablet', 820],
  ['desktop', 1270],
  ['desktopWide', 1590]
];

const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

const textMaxWidth = '940px';

export { colors, fonts, mq, textMaxWidth };
