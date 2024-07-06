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
            let verify_items_array = temp_array_rows.toString();
            let strRows = temp_array_rows.toString().split(',');
            
            if (verify_items_array.toString().includes("Fácil")) {
                setPointsEasy(Number(strRows[1]))
            }

            if (verify_items_array.toString().includes("Medio")) {
                setPointsMedium(Number(strRows[3]));
            }

            if (verify_items_array.toString().includes("Difícil")) {
                setPointsHard(Number(strRows[5]))
            }
        }
    }

    const data = [
        { name: 'Fácil', value: pointsEasy },
        { name: 'Medio', value: pointsMedium },
        { name: 'Difícil', value: pointsHard },
    ];

    useEffect(() => {
        getPointsByUsername();
        console.log("Points easy", pointsEasy)
    }, []);

    return (
        <section className="w-full">
            <Card className="pb-5 shadow-2xl">
                <CardContent className="flex justify-center">
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