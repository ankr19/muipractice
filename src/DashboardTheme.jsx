import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
export const DashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1.2rem',
        },
        contained: {
          backgroundColor: 'goldenrod',
        },
      },
    },

  },
});
