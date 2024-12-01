import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface datacell {
  name: string,
  uv: number,
  pv: number,
  amt: number
}

interface props {
  data: datacell[],
  firstKey: string,
  secondKey: string
  thirdKey: string
}

export default function Chart({ firstKey, secondKey, thirdKey,data }: props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={firstKey} stroke="black" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={secondKey} stroke="green" />
          <Line type="monotone" dataKey={thirdKey} stroke="orange" />
        </LineChart>
      </ResponsiveContainer>
    )
}