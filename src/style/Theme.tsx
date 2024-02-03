import { Theme, createTheme } from '@mui/material'
// import type {} from "@mui/x-data-grid/themeAugmentation";

const fontFamily = ['Enriqueta', 'Open Sans', 'sans-serif', 'Helvetica']

declare module '@mui/material/styles' {
  interface Palette {
    Error: {
      main: React.CSSProperties['color']
      dark: React.CSSProperties['color']
      light: React.CSSProperties['color']
    }
  }
  interface PaletteOptions {
    Error: {
      main: React.CSSProperties['color']
      dark: React.CSSProperties['color']
      light: React.CSSProperties['color']
    }
  }
}
declare module '@mui/material/styles' {
  interface Components {
    highcharts: {
      defaultProps: Record<string, React.CSSProperties>
      styleOverrides: {
        chart: {
          backgroundColor: string
          header: string
          borderRadius: string
          border: string
        }
      }
    }
    seriesColors: {
      colors: string[]
      axisLineColor: string
      depthColors: string[]
      rate: {
        Gas_Lift_Injection_Rate: string
        Gas_Rate: string
        Oil_Rate: string
        Water_Rate: string
      }
    }
  }
}

const getTheme = (themeMode: 'light' | 'dark'): Theme =>
  createTheme({
    palette: {
      mode: themeMode,
      background: {
        paper: themeMode === 'dark' ? '#4d4c4c' : '#ffffff',
        default: themeMode === 'dark' ? '#595656' : '#ebeae1',
      },
      primary: {
        main: themeMode === 'dark' ? '#1976d2' : '#fff',
        dark: themeMode === 'dark' ? '#fff' : '#272727',
        light: themeMode === 'dark' ? '#1976d2' : '#272727',
      },
      secondary: {
        main: themeMode === 'dark' ? '#ff9800' : '#1976d2',
        dark: themeMode === 'dark' ? '#1976d2' : '#aaa',
        light: themeMode === 'dark' ? '#272727' : '#5C50E7',
      },
      success: { main: '#2e7d32', dark: '#1b5e20', light: '#4caf50' },
      info: {
        main: '#0288d1',
        dark: '#01579b',
        light: themeMode === 'dark' ? '#272727' : '#fff',
      },
      warning: { main: '#ed6c02', dark: '#e65100', light: '#ff9800' },
      Error: { main: '#d32f2f', dark: '#c62828', light: '#ef5350' },
    },
    typography: {
      fontFamily: fontFamily.join(','),
    },
    components: {
      highcharts: {
        defaultProps: {},
        styleOverrides: {
          chart: {
            backgroundColor: themeMode === 'dark' ? '#4d4c4c' : '#ffffff',
            header: themeMode === 'dark' ? '#6b6565' : '#dbd3d3',
            borderRadius: '12px',
            border: themeMode === 'dark' ? '#6b6565' : '#dbd3d3',
          },
        },
      },
      seriesColors: {
        colors:
          themeMode === 'dark'
            ? [
                '#220576', // darker purple
                '#f7052d', // darker red
                '#006f7c', // darker light blue
                '#2f7821', // darker green
                '#f01ac9', // darker pink
                '#bc950f', // darker yellow
                '#1334f0', // darker blue
                '#7d27sb', // darker salmon
                '#691969', // darker Violet
                '#283e23', // darker aqua
                '#f07313', // dark orange
              ]
            : [
                '#9a7cf2', // lighter purple
                '#ff66a4', // lighter red
                '#99f1fc', // lighter light blue
                '#9ef68d', // lighter green
                '#ed32cb', // lighter pink
                '#ebbd1a', // lighter yellow
                '#1334f0', // lighter blue
                '#fc949a', // lighter salmon
                '#5e215e', // lighter Violet
                '#2bf0e3', // lighter aqua
                '#f07313', // dark orange
              ],
        axisLineColor: '#E0E0E0',
        depthColors: [
          '#D3D3D3', // lighter gray
          '#00FF00', // darker green
        ],
        rate: {
          Gas_Lift_Injection_Rate: '#F5A261',
          Gas_Rate: '#E6194B',
          Oil_Rate: '#3CB44B',
          Water_Rate: '#00B0F0',
        },
      },
      MuiTypography: {
        defaultProps: {
          fontSize: '15px',
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.light,
            '&.Mui-focused': {
              color: '#00f',
            },
          }),
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: 'medium',
        },
        styleOverrides: {
          root: {
            '& path': {
              color: themeMode === 'dark' ? '#ff9800' : '#1976d2',
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          disableElevation: true,
          disableRipple: true,
          size: 'medium',
          color: themeMode === 'dark' ? 'warning' : 'info',
        },
        styleOverrides: {
          root: {
            fontFamily,
            padding: '5px 10px',
            fontSize: '12px',
            fontWeight: 600,
            alignItems: 'center',
            textTransform: 'unset',
            // color: themeMode==="dark"?"#1976d2":"#fff",
            // backgroundColor: themeMode==="dark"?"#fff":"#1976d2",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontFamily,
          },
        },
      },
    },
  })

export default getTheme
