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
  const [records, setRecords] = useState({});

  const init = () => {
    reportService
      .getAverageRepairTimes()
      .then((response) => {
        console.log("Mostrando listado de todos los registros.", response.data);
        setRecords(response.data);
      })
      .catch((error) => {
        console.log(
          "Se ha producido un error al intentar mostrar listado de todos los registros.",
          error
        );
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, color: 'text.primary', fontWeight: "bold" }}>
        Marca v/s tiempo promedio
      </Typography>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Marca
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Tiempo promedio
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(records).map(([brand, averageTime]) => (
            <TableRow key={brand}>
              <TableCell align="left">{brand}</TableCell>
              <TableCell align="center">{averageTime.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report2;
