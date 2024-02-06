// import { ThemeOptions } from '@mui/material'

interface TypeText {
  primary: string
  secondary: string
  label: string
  disabled: string
  chart: string
  button: string
}

interface SeriesColors {
  colors: string[]
  axisLineColor: string
  depthColors: string[]
  pressure: Record<string, string>
  rate: Record<string, string>
  reservoir_Property: Record<string, string>
  speed: Record<string, string>
  temperature: Record<string, string>
}

interface CustomTheme  {
  palette: {
    mode: 'light' | 'dark'
    primary: { main: string }
    secondary: { main: string }
    text: TypeText
    background: {
      paper: string
      drawer: string
      screen: string
      hover: string
      tab: string
      header: string
      border: string
      active: string
      chart: string
    }
    seriesColors: SeriesColors
    xecta: Record<number, string>
  }
}

export default CustomTheme
