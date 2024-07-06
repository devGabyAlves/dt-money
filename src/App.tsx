import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { AppRoutes } from '../routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <AppRoutes />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
