/* eslint-disable import/prefer-default-export */
export const options = {
  title:
      'This Table shows the Correlation between Time and Supply rate '
      + 'of fruits (2022)',
  hAxis: { title: 'Time' },
  vAxis: { title: 'Supply Rate', minValue: 0, maxValue: 100 },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: 'Times-Roman',
      color: 'green',
      bold: true,
      italic: true,
      auraColor: 'none',
    },
  },
};
