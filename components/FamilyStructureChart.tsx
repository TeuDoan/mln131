import React from 'react';

const FamilyStructureChart: React.FC = () => {
    const data = [
      { year: 1989, nuclear: 65, traditional: 35, avgSize: 4.8 },
      { year: 1999, nuclear: 70, traditional: 30, avgSize: 4.5 },
      { year: 2009, nuclear: 71.1, traditional: 28.9, avgSize: 3.8 },
      { year: 2019, nuclear: 74.9, traditional: 25.1, avgSize: 3.6 },
      { year: 2020, nuclear: 75, traditional: 24.3, avgSize: 3.5 },
    ];

    const width = 800;
    const height = 450;
    const margin = { top: 40, right: 60, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const minYear = Math.min(...data.map(d => d.year));
    const maxYear = Math.max(...data.map(d => d.year));

    // Scales
    const xScale = (year: number) => ((year - minYear) / (maxYear - minYear)) * innerWidth;
    const yScalePercent = (percent: number) => innerHeight - (percent / 100) * innerHeight;
    const yScaleSize = (size: number) => innerHeight - ((size - 3) / (5 - 3)) * innerHeight; // Scale domain from 3 to 5

    // Path generators
    const createLinePath = (dataKey: 'nuclear' | 'traditional') => 
        data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.year)} ${yScalePercent(d[dataKey])}`).join(' ');

    const createSizeLinePath = () =>
        data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.year)} ${yScaleSize(d.avgSize)}`).join(' ');

    const lineColors = {
        nuclear: 'stroke-sky-400',
        traditional: 'stroke-violet-400',
        avgSize: 'stroke-emerald-400',
    };
     const pointFillColors = {
        nuclear: 'fill-sky-400',
        traditional: 'fill-violet-400',
        avgSize: 'fill-emerald-400',
    };

    return (
        <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg border border-slate-700 mt-8">
            <h4 id="chart-title" className="text-lg font-bold text-white mb-1 text-center">Sự Chuyển Dịch Cấu Trúc Hộ Gia Đình (1989-2020)</h4>
            <p className="text-sm text-slate-400 text-center mb-6">Biểu đồ thể hiện sự gia tăng của hộ gia đình hạt nhân và sự suy giảm của hộ truyền thống.</p>
            <div className="relative">
                <svg role="img" aria-labelledby="chart-title" viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                    <g transform={`translate(${margin.left}, ${margin.top})`}>
                        {/* Grid Lines */}
                        {[0, 25, 50, 75, 100].map(tick => (
                            <g key={`y-grid-${tick}`} className="text-slate-500">
                                <line
                                    x1={0}
                                    x2={innerWidth}
                                    y1={yScalePercent(tick)}
                                    y2={yScalePercent(tick)}
                                    stroke="currentColor"
                                    strokeDasharray="2,2"
                                    strokeOpacity={0.3}
                                />
                            </g>
                        ))}
                        
                        {/* Y Axis Left (Percentage) */}
                        <g className="text-slate-400 text-xs">
                            <line y2={innerHeight} stroke="currentColor" strokeOpacity={0.5} />
                            {[0, 25, 50, 75, 100].map(tick => (
                                <text
                                    key={`y-tick-${tick}`}
                                    x={-10}
                                    y={yScalePercent(tick)}
                                    textAnchor="end"
                                    alignmentBaseline="middle"
                                    fill="currentColor"
                                >
                                    {tick}%
                                </text>
                            ))}
                            <text
                                transform={`translate(-45, ${innerHeight / 2}) rotate(-90)`}
                                textAnchor="middle"
                                className="text-sm fill-slate-300 font-medium"
                            >
                                Tỷ lệ hộ gia đình (%)
                            </text>
                        </g>

                        {/* Y Axis Right (Average Size) */}
                        <g transform={`translate(${innerWidth}, 0)`} className="text-slate-400 text-xs">
                             <line y2={innerHeight} stroke="currentColor" strokeOpacity={0.5} />
                             {[3, 3.5, 4, 4.5, 5].map(tick => (
                                <text
                                    key={`y-right-tick-${tick}`}
                                    x={10}
                                    y={yScaleSize(tick)}
                                    textAnchor="start"
                                    alignmentBaseline="middle"
                                    fill="currentColor"
                                >
                                    {tick.toFixed(1)}
                                </text>
                             ))}
                            <text
                                transform={`translate(50, ${innerHeight / 2}) rotate(90)`}
                                textAnchor="middle"
                                className="text-sm fill-slate-300 font-medium"
                            >
                                Quy mô (người/hộ)
                            </text>
                        </g>

                        {/* X Axis (Year) */}
                        <g transform={`translate(0, ${innerHeight})`} className="text-slate-400 text-xs">
                            <line x2={innerWidth} stroke="currentColor" strokeOpacity={0.5} />
                            {data.map(d => (
                                <g key={`x-tick-${d.year}`} transform={`translate(${xScale(d.year)}, 0)`}>
                                    <text
                                        y={20}
                                        textAnchor="middle"
                                        fill="currentColor"
                                    >
                                        {d.year}
                                    </text>
                                </g>
                            ))}
                             <text
                                x={innerWidth / 2}
                                y={45}
                                textAnchor="middle"
                                className="text-sm fill-slate-300 font-medium"
                            >
                                Năm
                            </text>
                        </g>

                        {/* Lines */}
                        <path d={createLinePath('nuclear')} fill="none" className={lineColors.nuclear} strokeWidth={2.5} />
                        <path d={createLinePath('traditional')} fill="none" className={lineColors.traditional} strokeWidth={2.5} />
                        <path d={createSizeLinePath()} fill="none" className={lineColors.avgSize} strokeWidth={2.5} />

                        {/* Points */}
                        {data.map(d => (
                            <React.Fragment key={`points-${d.year}`}>
                                <circle cx={xScale(d.year)} cy={yScalePercent(d.nuclear)} r={4} className={pointFillColors.nuclear} stroke="#0f172a" strokeWidth={2} />
                                <circle cx={xScale(d.year)} cy={yScalePercent(d.traditional)} r={4} className={pointFillColors.traditional} stroke="#0f172a" strokeWidth={2} />
                                <circle cx={xScale(d.year)} cy={yScaleSize(d.avgSize)} r={4} className={pointFillColors.avgSize} stroke="#0f172a" strokeWidth={2} />
                            </React.Fragment>
                        ))}
                    </g>
                </svg>
            </div>
             {/* Legend */}
            <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-sky-400"></span>
                    <span>Hộ hạt nhân</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-violet-400"></span>
                    <span>Hộ truyền thống</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                    <span>Quy mô trung bình</span>
                </div>
            </div>
        </div>
    );
};

export default FamilyStructureChart;
