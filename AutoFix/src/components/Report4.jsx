import { useEffect, useState } from "react";
import reportService from "../services/report.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

const Report4 = () => {
  const [repairStats, setRepairStats] = useState([]);

  const init = () => {
    reportService.getRepairTypeStatistics(4)
      .then((response) => {
        setRepairStats(response.data);
        console.log("Estadísticas de reparación:", response.data);
      })
      .catch((error) => {
        console.log("Error al intentar mostrar las estadísticas de reparación:", error);
      });
  };

  const repairTypes = [
    "Reparaciones del Sistema de Frenos",
    "Servicio del Sistema de Refrigeración",
    "Reparaciones del Motor",
    "Reparaciones de la Transmisión",
    "Reparación del Sistema Eléctrico",
    "Reparaciones del Sistema de Escape",
    "Reparación de Neumáticos y Ruedas",
    "Reparaciones de la Suspensión y la Dirección",
    "Reparación del Sistema de Aire Acondicionado y Calefacción",
    "Reparaciones del Sistema de Combustible",
    "Reparación y Reemplazo del Parabrisas y Cristales"
  ];

  useEffect(() => {
    init();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, color: 'text.primary', fontWeight: "bold" }}>
        Reparaciones v/s tipos de motor y monto
      </Typography>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Tipo Reparación
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Gasolina
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Diesel
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Híbrido
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Eléctrico
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Monto
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repairStats.map((stats, index) => (
            <TableRow key={index}>
              <TableCell align="left">
                {repairTypes[stats.repairTypeNumber - 1]}
              </TableCell>
              <TableCell align="center">{stats.Gasolina}</TableCell>
              <TableCell align="center">{stats.Diesel}</TableCell>
              <TableCell align="center">{stats.Hibrido}</TableCell>
              <TableCell align="center">{stats.Electrico}</TableCell>
              <TableCell align="center">{stats.Monto.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report4;
