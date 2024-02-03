import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import Highcharts from "highcharts";
import { useTheme } from "@mui/material/styles";
import HighchartsReact from "highcharts-react-official";
import ProductionData from "./BhpModelInput";

// Styled components for Box and HeaderBox
const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: "8px",
  border: `2px solid ${theme.palette.background.default}`,
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.components?.highcharts.styleOverrides.chart.borderRadius,
  overflow: "hidden",
}));

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "8px",
}));

interface ProductionData {
  datetime: number[];
  qo: number[];
  qw: number[];
  qg: number[];
  pres_casing: number[];
  pres_tubing: number[];
  measured_bhp: number[];
  qg_lift: number[];
}

interface ChartData {
  name: string;
  data: Array<[number, number | null]>;
  yAxis: number;
  unit: string;
}
interface ChartTypes {
  chart: {
    type: string;
    zooming: {
      mouseWheel: boolean;
    };
    backgroundColor?: string;
  };
  title: {
    text: string;
  };
  tooltip: {
    shared: boolean;
  };
  yAxis: Array<{
    gridLineWidth: number;
    lineWidth: number;
    title: {
      text: string;
    };
    autoFormatAxis: {
      minValue: number;
      maxValue: number;
    };
    max: number;
    endOnTick?: boolean;
    lineColor?: string;
    opposite?: boolean;
  }>;
  xAxis: Array<{
    gridLineWidth: number;
    attribute: string;
    type: string;
    lineColor: string;
    lineWidth: number;
    crosshair: boolean;
  }>;
  plotOptions: {
    series: {
      lineWidth: number;
      marker: {
        enabled: boolean;
      };
    };
  };
  series: ChartData[];
}

const Bhp: React.FC = () => {
  const theme = useTheme();

  const [rateChartOptions, setRateChartOptions] = useState<
    ChartTypes | undefined
  >();

  const productionChartData: ProductionData = ProductionData;
  const dateTime: number[] = ProductionData?.datetime;

  useEffect(() => {
    const rateSeriesData: ChartData[] = [];
    if (productionChartData) {
      if (ProductionData.qo?.length) {
        rateSeriesData.push({
          name: "Oil Rate",
          data: (dateTime || []).map((e: number, i: number) => [
            e,
            productionChartData.qo[i] || null,
          ]),
          yAxis: 0,
          unit: "STB/d",
        });
      }

      if (ProductionData.qw?.length) {
        rateSeriesData.push({
          name: "Water Rate",
          data: (dateTime || []).map((e: number, i: number) => [
            e,
            productionChartData.qw[i] || null,
          ]),
          yAxis: 0,
          unit: "STB/d",
        });
      }
    }
    const updatedRateChartOptions: ChartTypes = {
      chart: {
        type: "line",
        zooming: {
          mouseWheel: false,
        },
        backgroundColor: `${theme.components?.highcharts.styleOverrides.chart.backgroundColor}`,
      },
      title: {
        text: "",
      },
      yAxis: [
        {
          gridLineWidth: 0,
          lineWidth: 0,
          title: {
            text: "Oil Rate, Water Rate (STB/d)",
          },
          autoFormatAxis: {
            minValue: 0,
            maxValue: 999,
          },
          max: 5000,
        },
        {
          endOnTick: false,
          gridLineWidth: 0,
          lineColor: "#9e9e9e",
          lineWidth: 1,
          title: {
            text: "Gas Rate (MMscf/d)",
          },
          opposite: true,
          autoFormatAxis: {
            minValue: 0,
            maxValue: 999,
          },
          max: 11,
        },
      ],
      xAxis: [
        {
          gridLineWidth: 0,
          attribute: "datetime",
          type: "datetime",
          lineColor: "#9e9e9e",
          lineWidth: 1,
          crosshair: true,
        },
      ],
      plotOptions: {
        series: {
          lineWidth: 1.5,
          marker: {
            enabled: false,
          },
        },
      },
      series: rateSeriesData,
      tooltip: {
        shared: true,
      },
    };

    setRateChartOptions(updatedRateChartOptions);
  }, [ProductionData, theme]);
  Highcharts.setOptions({
    accessibility: {
      enabled: false,
    },
  });

  return (
    <Box
      sx={{
        m: 1,
        mt: -1.7,
        width: "100%",
        height: "100%",
      }}
    >
      <h1 style={{ color: theme.palette.text.primary }}>BHP</h1>
      <Box mb={1}>
        <StyledBox>
          <StyledHeaderBox>Rate</StyledHeaderBox>
          <HighchartsReact
            highcharts={Highcharts}
            options={rateChartOptions || {}}
          />
        </StyledBox>
      </Box>
    </Box>
  );
};

export default Bhp;
