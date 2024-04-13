
import '../src/index.css'

import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
  actions: {
    argTypesRegex: "on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];


export default preview