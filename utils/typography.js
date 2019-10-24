import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Merriweather',
      styles: [
        '300',
        '400',
        '400i',
        '700'
      ]
    },
    {
      name: 'Roboto Condensed',
      styles: [
        '700'
      ]
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  baseFontSize: '16px',
  baseLineHeight: 1.65,
  scale: 3,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
