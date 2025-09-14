import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const marksData = [
        { "id": 1, "name": "Rahim", "math": 78, "physics": 85, "chemistry": 80 },
        { "id": 2, "name": "Karim", "math": 88, "physics": 79, "chemistry": 92 },
        { "id": 3, "name": "Anika", "math": 95, "physics": 91, "chemistry": 89 },
        { "id": 4, "name": "Sajid", "math": 67, "physics": 72, "chemistry": 70 },
        { "id": 5, "name": "Nabila", "math": 82, "physics": 88, "chemistry": 85 },
        { "id": 6, "name": "Hasan", "math": 74, "physics": 69, "chemistry": 72 },
        { "id": 7, "name": "Mitu", "math": 90, "physics": 93, "chemistry": 95 },
        { "id": 8, "name": "Imran", "math": 85, "physics": 76, "chemistry": 80 },
        { "id": 9, "name": "Shila", "math": 92, "physics": 89, "chemistry": 90 },
        { "id": 10, "name": "Tanvir", "math": 70, "physics": 75, "chemistry": 78 },
    ]

    return (



        <div>
            <LChart width={650} height={400} data={marksData}>
                <XAxis dataKey={"name"}/>
                <YAxis/>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;