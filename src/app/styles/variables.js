module.exports = {
  colors: {
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
  },
  fonts: {
    sans: '"Overpass, \'Helvetica Neue\', Arial, sans-serif"',
    serif: '"Merriweather, serif"',
    sizes: {
      mobile: {
        h1: '60px',
        h2: '48px',
        h3: '32px',
        h4: '32px',
        p: '16px'
      },
      tablet: {
        h1: '120px',
        h2: '95px',
        h3: '76px',
        h4: '61px',
        p: '18px'
      },
      desktop: {
        h1: '220px',
        h2: '140px',
        h3: '95px',
        h4: '76px',
        p: '20px'
      }
    }
  },
  breakpoints: {
    mobileMin: '320px',
    mobileMax: '649px',
    tabletMin: '650px',
    tabletMax: '999px',
    desktopMin: '1000px',
    desktopMax: '2000px'
  }
}
