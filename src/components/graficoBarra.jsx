import { BarChart, Bar,XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,Legend } from "recharts";
import TotalDespesas from "../functions/totalDespesas";

const GraficoBarra = ({historicoDespesas}) => {
    console.log("dados garficos barra", historicoDespesas);
    return(
        <div className="divGraficoBarra" style={{width:"90%", height:250}}>
            <ResponsiveContainer>
                <BarChart data={historicoDespesas}>
                    <CartesianGrid strokeDasharray= "3 3"/>
                        <XAxis dataKey="mes"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalDespesas" name= "Gasto Total" fill="#8884d8" />
                        <Bar dataKey="meta" name="Meta" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoBarra;