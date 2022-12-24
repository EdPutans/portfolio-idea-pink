import { darkTheme, lightTheme, ThemeType } from '.'
import { DefaultTheme, ThemeProvider, ThemeProviderProps } from 'styled-components'

const Provider = ({ children, ...props }: Omit<ThemeProviderProps<ThemeType>, 'theme'> & { children?: React.ReactNode }) => {

  // TODO: add zustand and use this
  const theme = lightTheme;

  return <ThemeProvider  {...props} theme={theme}>
    {children}
  </ThemeProvider>
}
export default Provider;