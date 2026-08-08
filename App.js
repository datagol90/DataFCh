import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("Proximas");
  
  const fecha18 = [
    {local: "Universidad Católica", visita: "Cobresal", hora: "Finalizado 2-0", estadio: "San Carlos", cL: 1.65, cE: 3.80, cV: 5.00, estado: "Finalizado"},
    {local: "Colo Colo", visita: "U. de Chile", hora: "Sáb 18:00", estadio: "Monumental", cL: 2.10, cE: 3.20, cV: 3.50, estado: "Proximas"},
    {local: "Coquimbo Unido", visita: "Huachipato", hora: "Sáb 15:00", estadio: "Francisco Sánchez", cL: 1.80, cE: 3.40, cV: 4.20, estado: "Proximas"},
    {local: "O'Higgins", visita: "Palestino", hora: "Dom 12:00", estadio: "El Teniente", cL: 2.30, cE: 3.10, cV: 3.10, estado: "Proxim
