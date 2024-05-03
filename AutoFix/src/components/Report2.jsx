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

const Report2 = () => {
  const [repairStats, setRepairStats] = useState([]);

  const init = () => {
    reportService.getRepairTypeStatistics(2)
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
        Reparaciones v/s tipos de vehiculos y monto
      </Typography>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Tipo Reparación
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Sedan
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Hatchback
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              SUV
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Pickup
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Pickup
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
                <TableCell align="center">{stats.Sedan}</TableCell>
                <TableCell align="center">{stats.Hatchback}</TableCell>
                <TableCell align="center">{stats.SUV}</TableCell>
                <TableCell align="center">{stats.Pickup}</TableCell>
                <TableCell align="center">{stats.Furgoneta}</TableCell>
                <TableCell align="center">{stats.Monto.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report2;
