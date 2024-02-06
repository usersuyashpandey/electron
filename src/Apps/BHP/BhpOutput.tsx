import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Highcharts from 'highcharts'
import { styled, useTheme } from '@mui/system'
import HighchartsReact from 'highcharts-react-official'
import { ModelInputData } from './BhpJsonType'

// Styled components for Box and HeaderBox
const StyledBox = styled(Box)(({ theme }) => ({
    paddingTop: '8px',
    border: `2px solid ${theme.palette.background.border}`,
    backgroundColor: theme.palette.background.header,
    borderRadius: '12px',
    margin: 5,
    overflow: 'hidden',
    width: "100%",
    height: "clac(50vh-100px)"
}))

const StyledHeaderBox = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: "8px",
}));

type ProductionData = {
    datetime: number[];
    qo: number[];
    qw: number[];
    qg: number[];
    pres_casing: number[];
    pres_tubing: number[];
    measured_bhp: number[];
    qg_lift: number[];
};

type ChartData = {
    name: string;
    data: Array<[number, number | null]>;
    yAxis: number;
    unit: string;
    color: string;
};

type ChartTypes = {
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
            style?: {
                color?: string;
            };
        };
        labels?: {
            style?: {
                color?: string;
            };
        };
        autoFormatAxis: {
            minValue: number;
            maxValue: number;
        };
        crosshair: boolean;
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
        labels?: {
            style?: {
                color?: string;
            };
        };
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
    legend: {
        itemStyle?: {
            color: string;
        };
    };
};

const BhpOutput: React.FC<{ data: ModelInputData }> = ({ data }) => {
    const theme = useTheme();

    const [rateChartOptions, setRateChartOptions] = useState<
        ChartTypes | undefined
    >();
    const [pressureChartOptions, setPressureChartOptions] = useState<
        ChartTypes | undefined
    >();

    const ProductionData: ProductionData = data.modelInput.productionData;
    const dateTime: number[] = data?.modelInput?.productionData?.datetime;


    useEffect(() => {
        const rateSeriesData: ChartData[] = [];
        const pressureSeriesData: ChartData[] = [];
        if (ProductionData) {
            if (ProductionData.qo?.length) {
                rateSeriesData.push({
                    name: "Oil Rate",
                    data: (dateTime || []).map((e: number, i: number) => [
                        e,
                        ProductionData.qo[i] || null,
                    ]),
                    yAxis: 0,
                    unit: 'STB/d',
                    color: theme.palette.seriesColors.colors[1],
                })
            }

            if (ProductionData.qw?.length) {
                rateSeriesData.push({
                    name: "Water Rate",
                    data: (dateTime || []).map((e: number, i: number) => [
                        e,
                        ProductionData.qw[i] || null,
                    ]),
                    yAxis: 0,
                    unit: 'STB/d',
                    color: theme.palette.seriesColors.colors[6],
                })
            }

            if (ProductionData.qg?.length) {
                rateSeriesData.push({
                    name: "Gas Rate",
                    data: (dateTime || []).map((e: number, i: number) => [
                        e,
                        ProductionData.qg[i] / 1000000 || null,
                    ]),
                    yAxis: 1,
                    unit: 'STB/d',
                    color: theme?.palette?.seriesColors?.rate?.Gas_Rate,
                })
            }
            if (ProductionData.qg_lift?.length) {
                rateSeriesData.push({
                    name: "Gas Lift Injection Rate",
                    data: (dateTime || []).map((e: number, i: number) => [
                        e,
                        ProductionData.qg_lift[i] / 1000000 || null,
                    ]),
                    yAxis: 1,
                    unit: 'STB/d',
                    color: theme?.palette?.seriesColors?.rate?.Gas_Lift_Injection_Rate,
                })
            }
            if (ProductionData.pres_tubing?.length) {
                pressureSeriesData.push({
                    name: "THP",
                    data: (dateTime || []).map((e: number, i: number) => [
                        e,
                        ProductionData.pres_tubing[i] || null,
                    ]),
                    yAxis: 1,
                    unit: 'psia',
                    color: theme?.palette?.seriesColors?.colors[5],
                })
            }
            if (ProductionData.pres_casing?.length) {
                pressureSeriesData.push({
                    name: "CHP",
                    data: (dateTime || []).map((e: number, i: number) => [
                        e,
                        ProductionData.pres_casing[i] || null,
                    ]),
                    yAxis: 1,
                    unit: 'psia',
                    color: theme?.palette?.seriesColors?.colors[4],
                })
            }
        }

        const updatedRateChartOptions: ChartTypes = {
            chart: {
                type: "line",
                zooming: {
                    mouseWheel: false,
                },
                backgroundColor: theme.palette.background.chart,
            },
            title: {
                text: "",
            },
            yAxis: [
                {
                    gridLineWidth: 0,
                    lineWidth: 1,
                    title: {
                        text: 'Oil Rate, Water Rate (STB/d)',
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    labels: {
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    autoFormatAxis: {
                        minValue: 0,
                        maxValue: 999,
                    },
                    crosshair: false,
                },
                {
                    endOnTick: false,
                    gridLineWidth: 0,
                    lineColor: "#9e9e9e",
                    lineWidth: 1,
                    title: {
                        text: 'Gas Rate (MMscf/d)',
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    labels: {
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    opposite: true,
                    autoFormatAxis: {
                        minValue: 0,
                        maxValue: 999,
                    },
                    crosshair: false,
                },
            ],
            xAxis: [
                {
                    gridLineWidth: 0,
                    attribute: "datetime",
                    type: "datetime",
                    lineColor: "#9e9e9e",
                    lineWidth: 1,
                    crosshair: false,
                    labels: {
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
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
            legend: {
                itemStyle: {
                    color: theme.palette.text.label,
                },
            },
        }
        const updatedPressureChartOptions: ChartTypes = {
            chart: {
                type: "line",
                zooming: {
                    mouseWheel: false,
                },
                backgroundColor: theme.palette.background.chart,
            },
            title: {
                text: "",
            },
            yAxis: [
                {
                    gridLineWidth: 0,
                    lineWidth: 1,
                    title: {
                        text: 'BHP, THP, CHP (psia)',
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    labels: {
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    autoFormatAxis: {
                        minValue: 0,
                        maxValue: 999,
                    },
                    crosshair: false,
                },
                {
                    endOnTick: false,
                    gridLineWidth: 0,
                    lineColor: "#9e9e9e",
                    lineWidth: 1,
                    title: {
                        text: 'Gas Rate (MMscf/d)',
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    labels: {
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
                    opposite: true,
                    autoFormatAxis: {
                        minValue: 0,
                        maxValue: 999,
                    },
                    crosshair: false,
                },
            ],
            xAxis: [
                {
                    gridLineWidth: 0,
                    attribute: "datetime",
                    type: "datetime",
                    lineColor: "#9e9e9e",
                    lineWidth: 1,
                    crosshair: false,
                    labels: {
                        style: {
                            color: theme.palette.text.label,
                        },
                    },
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
            series: pressureSeriesData,
            tooltip: {
                shared: true,
            },
            legend: {
                itemStyle: {
                    color: theme.palette.text.label,
                },
            },
        }

        setRateChartOptions(updatedRateChartOptions);
        setPressureChartOptions(updatedPressureChartOptions);
    }, [ProductionData, theme]);

    Highcharts.setOptions({
        accessibility: {
            enabled: false,
        },
    });


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "rows",
                m: 1,
                mt: -1.7,
                width: "100%",
            }}
        >
            <Box mb={1} sx={{ width: "48%", }}>
                <StyledBox>
                    <StyledHeaderBox>Prussure</StyledHeaderBox>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={pressureChartOptions || {}}
                    />
                </StyledBox>
                <StyledBox>
                    <StyledHeaderBox>Rate</StyledHeaderBox>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={rateChartOptions || {}}
                    />
                </StyledBox>
            </Box>
            <Box ml={1} mb={1} sx={{ width: "48%", height: "calc(100vh-100px)", }}>
                <StyledBox>
                    <StyledHeaderBox>Prussure</StyledHeaderBox>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{}}
                    />
                </StyledBox>
            </Box>
        </Box>
    );
};

export default BhpOutput;
