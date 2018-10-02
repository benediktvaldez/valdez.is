export const colors = {
  red: '#BF1313',
  blue: '#00A1E4',
  dark: '#272727',
  gray: '#696773',
  light: '#EFF1F3',
  variations: {
    light: {
      function: 'lighten',
      parameters: '15%'
    },
    dark: {
      function: 'darken',
      parameters: '10%'
    },
    fade: {
      function: 'rgba',
      parameters: '.7'
    },
    tint: {
      function: 'rgba',
      parameters: '.1'
    },
    gray: {
      function: 'grayscale'
    },
    shade: {
      function: 'mix',
      parameters: 'white 80%'
    }
  }
}
