// @flow

'use strict'

// Global CSS variables passed via precss > postcss-custom-properties
// Also used throughout JS files in the site
// https://github.com/postcss/postcss-custom-properties#variables

const variables = {

  appTitle: 'CitrusAdmin',
  appDescription: 'Citrus Admin is an app for home automation.',
  appIcon: '/static/images/logo.png',
  appLogo: '/static/images/logo@2x.png',
  appLogoWidth: '128',
  appLogoHeight: '128',

  baseRemSize: '16', // CAUTION: Think twice before changing!
  borderRadius: '3px',

  colorDark: '#404041',
  colorDarkFaded: 'RGBA(64, 64, 65, 0.5)',
  colorTheme: '#0277BD',
  colorThemeFaded: 'RGBA(0, 51, 160, 0.5)',
  colorThemeSecondary: '#82E5D2',
  colorThemeTertiary: '#FF3857',
  colorGrayDark: '#898989',
  colorGray: '#C4C4C4',
  colorGrayLight: '#E6EAE6',
  colorWhite: '#ffffff',
  colorWhiteFaded: 'rgba(255, 255, 255, 0.5)',
  colorBlue: '#64daff', // cartoonblue
  colorGreen: '#84c500', // green
  colorRed: '#d32626', // brick
  colorFacebookBlue: '#335092', // facebook blue
  colorTitleBlue: '#2d7aac', // strongblue
  colorTitleGreen: '#3b9737', // mediumgreen
  colorWarmGray: '#898989',

  fontFamily: 'MyApp, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
  fontWeight: 300,

  navLogoTopPadding: '6rem',
  navLogoTopPaddingSm: '4rem',

  screenLgMax: '1199px',
  screenLgMaxHeight: '800px',
  screenLgMin: '1200px',
  screenMdMax: '1023px',
  screenMdMin: '1024px',
  screenSmMax: '767px',
  screenSmMin: '768px',
  screenXsMax: '320px',
  screenXsMin: '321px',

  zModal: 50,
  zModalBackdrop: 40,

  // Standard sizes based on REMs
  s1: '.25rem',
  s2: '.5rem',
  s3: '1rem',
  s4: '2rem',
  s5: '4rem',
  s6: '8rem',
  s7: '16rem',

}

module.exports = variables
