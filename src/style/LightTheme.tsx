import { createTheme } from '@mui/system'
import CustomTheme from './ThemeType'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#ffffff' },
    secondary: { main: '#000000' },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      label: '#333333',
      disabled: '#909090',
      chart: '#000000',
      button: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      drawer: '#f0f0f0',
      screen: '#ffffff',
      hover: '#dddddd',
      tab: '#eaeaea',
      header: '#E0E0E0',
      border: '#eaeaea',
      active: '#dddddd',
      chart: '#ffffff',
    },
    xecta: {
      25: '#F8F3FF',
      50: '#F2E7FF',
      100: '#DCC3FF',
      200: '#E0E0E0',
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
      ],
      axisLineColor: '#E0E0E0',
      depthColors: [
        '#696969', // dim gray
        '#00FF00', // darker green
      ],
      pressure: {
        Avg_Reservoir_Pressure: '#BA8344',
        Bottomhole_Pressure: '#333333',
        Casing_Pressure: '#4363D8',
        Wellhead_Pressure: '#A0A0A0',
        ESP_Suction_Pressure: '#8F3F8F',
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
        ESP_Frequency: '#F5A261',
        SRP_SPM: '#F5A261',
      },
      temperature: {
        Wellhead_Temperature: '#808000',
        Bottomhole_Temperature: '#D8BFD8',
        Casing_Temperature: '#939393',
      },
    },
  },
} as CustomTheme)

export default lightTheme
