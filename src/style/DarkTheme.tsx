import { createTheme } from '@mui/system'
import CustomTheme from './ThemeType'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#cccccc' }, // "#6c69db"
    secondary: { main: '#419f9f' },
    text: {
      primary: '#cccccc',
      secondary: '#EBEBEB',
      label: '#999999',
      disabled: '#606060',
      chart: '#cccccc',
      button: '#000000',
    },
    background: {
      paper: '#ffffff',
      drawer: '#1d1d1d',
      screen: '#2a2a2d', // screen background color
      hover: '#575252', // #d5c9c9",
      tab: '#2a2a2d',
      header: '#404040',
      border: '#404040',
      active: '#747171', // "#424242",
      chart: '#262626',
    },
    xecta: {
      50: '#F2E7FF',
      100: '#DCC3FF',
      200: '#424242',
      300: '#AC6CFF',
      400: '#9744FF',
      500: '#8000FF',
      600: '#7300F8',
      700: '#6100F0',
      800: '#4D00EC',
      900: '#1D00E7',
    },
    seriesColors: {
      colors: [
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
      pressure: {
        Avg_Reservoir_Pressure: '#BA8344',
        Bottomhole_Pressure: '#EEEEEE',
        Casing_Pressure: '#4363D8',
        Wellhead_Pressure: '#808080',
        ESP_Suction_Pressure: '#AF5FAF',
        ESP_Discharge_Pressure: '#FABED4',
      },
      rate: {
        Gas_Lift_Injection_Rate: '#F5A261',
        Gas_Rate: '#E6194B',
        Oil_Rate: '#3CB44B',
        Water_Rate: '#00B0F0',
      },
      reservoir_Property: {
        kh_Permeability_Thickness: '#800080',
        Productivity_Index: '#AAFFC3',
        Skin: '#FFB6C1',
      },
      speed: {
        SRP_SPM: '#F5A261',
      },
      temperature: {
        Wellhead_Temperature: '#808000',
        Bottomhole_Temperature: '#D8BFD8',
        Casing_Temperature: '#FFE699',
      },
    },
  },
} as CustomTheme)

export default darkTheme
