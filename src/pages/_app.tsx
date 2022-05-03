import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';
import themeStyled from '../styles/theme';

function MyApp({ Component, pageProps }: any) {
  const theme = createTheme({
    palette: {
      ...themeStyled.colors
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderStyled theme={themeStyled}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProviderStyled>
    </ThemeProvider>
  );
}

export default MyApp;
