import { Pie, PieChart, Sector } from "recharts";
import { Card, CardContent } from "../../../components/ui/card";
import { useCallback, useEffect, useState } from "react";

export const Chart = () => {
    const [pointsEasy, setPointsEasy] = useState(0);
    const [pointsMedium, setPointsMedium] = useState(0);
    const [pointsHard, setPointsHard] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    async function getPointsByUsername() {
        let username = localStorage.getItem('usernameFromURL')
        const url = `http://localhost:8080/usr/data/getpointsandcategory?username=${username}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain"
            }
        });

        if (response.ok) {
            const data = await response.text();

            let temp_array_rows = data.split('-');
            
            temp_array_rows.forEach(row => {
                let [categoría, puntos] = row.split(',');
                puntos = Number(puntos);

                switch (categoría.trim()) {
                    case "Fácil":
                        setPointsEasy(puntos);
                        break;
                    case "Medio":
                        setPointsMedium(puntos);
                        break;
                    case "Difícil":
                        setPointsHard(puntos);
                        break;
                }
            })
        }
    }

    const data = [
        { name: 'Fácil', value: pointsEasy },
        { name: 'Medio', value: pointsMedium },
        { name: 'Difícil', value: pointsHard },
    ];

    useEffect(() => {
        getPointsByUsername();
    }, [data]);

    return (
        <section className="w-full">
            <Card className="pb-5 shadow-2xl">
                <CardContent className="flex justify-center">
                    {
                        !data ? (
                            <div className="flex justify-center font-bold">
                                Sin Stats
                            </div>
                        ) :
                            (
                                <PieChart width={500} height={300}>
                                    <Pie
                                        activeIndex={activeIndex}
                                        activeShape={renderActiveShape}
                                        data={data}
                                        cx={250}
                                        cy={150}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        onMouseEnter={onPieEnter}
                                    />
                                </PieChart>
                            )
                    }

                </CardContent>
            </Card>
        </section>
    );
}

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`Puntos ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};