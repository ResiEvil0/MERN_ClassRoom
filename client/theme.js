import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#45d994',
      main: '#04db9c',
      dark: '#4848f0',
      contrastText: '#ed9d80',
    },
    secondary: {
      light: '#45d994',
      main: '#04db9c',
      dark: '#4848f0',
      contrastText: '#ed9d80',
    },
      openTitle: '#04db9c',
      protectedTitle: '#94e68e',
      type: 'light'
    }
  })

  export default theme