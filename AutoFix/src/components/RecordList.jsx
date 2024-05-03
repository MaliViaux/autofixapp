import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import recordService from "../services/record.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Box from '@mui/material/Box';
import TableContainer from "@mui/material/TableContainer";
import Typography from '@mui/material/Typography';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from "@mui/icons-material/Delete";

//https://mui.com/material-ui/react-modal/

const RecordList = () => {
  const [records, setRecords] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState();

  const handleOpen = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const init = () => {
    recordService
      .getAll()
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

  const handleDelete = (id) => {
    console.log("Printing id", id);
    const confirmDelete = window.confirm(
      "¿Esta seguro que desea borrar este registro?"
    );
    if (confirmDelete) {
      recordService
        .remove(id)
        .then((response) => {
          console.log("registro ha sido eliminado.", response.data);
          init();
        })
        .catch((error) => {
          console.log(
            "Se ha producido un error al intentar eliminar al registro",
            error
          );
        });
    }
  };

  const handleFinalizar = (id) => {
    console.log("Printing id", id);
    const confirmFinalizar = window.confirm(
      "¿Esta seguro que desea marcar como finalizada esta reparación?"
    );
    if (confirmFinalizar) {
      recordService
        .finalize(id)
        .then(() => {
          console.log("Reparación marcada como finalizada.");
          init();
        })
        .catch((error) => {
          console.error("Se ha producido un error al finalizar la reparación.", error);
        });
    }
  };

  const handleRetirar = (id) => {
    console.log("Printing id", id);
    const confirmFinalizar = window.confirm(
      "¿Esta seguro que desea marcar como retirada esta reparación?"
    );
    if (confirmFinalizar) {
      recordService
        .pickup(id)
        .then(() => {
          console.log("Reparación marcada como retirada.");
          init();
        })
        .catch((error) => {
          console.error("Se ha producido un error al retirar la reparación.", error);
        });
    }
  };

  const handleApplyVoucher = (id) => {
    console.log("Printing id", id);
    const confirmFinalizar = window.confirm(
      "¿Esta seguro que desea aplicar un bono a esta reparación?"
    );
    if (confirmFinalizar) {
      recordService
        .applyVoucher(id)
        .then(() => {
          console.log("Bono aplicado.");
          init();
        })
        .catch((error) => {
          console.error("Se ha producido un error al aplicar bono.", error);
        });
    }
  };

  const handleRemoveVoucher = (id) => {
    console.log("Printing id", id);
    const confirmFinalizar = window.confirm(
      "¿Esta seguro que desea quitar el bono?"
    );
    if (confirmFinalizar) {
      recordService
        .removeVoucher(id)
        .then(() => {
          console.log("Bono quitado.");
          init();
        })
        .catch((error) => {
          console.error("Se ha producido un error al quitar el bono.", error);
        });
    }
  };

  return (
    <TableContainer component={Paper}>
      <br />
      <Link
        to="/record/add"
        style={{ textDecoration: "none", marginBottom: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Añadir Registro
        </Button>
      </Link>
      <br /> <br />
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Patente
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Fecha Ingreso
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Fecha Salida
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Reparaciones
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Monto
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Operaciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow
              key={record.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{record.carPlate}</TableCell>
              <TableCell align="center">{record.entryDate}</TableCell>
                {record.exitDate === null ? (
                  <TableCell align="center">
                    -
                  </TableCell>
                ) : record.exitDate !== null ? (
                  <TableCell align="center">
                    {record.exitDate}
                    </TableCell>
                ) : null }
              <TableCell align="left">
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {record.repairTypeNames.map((name, index) => (
                    <li key={index}>
                      {`${name}`}
                    </li>
                  ))}
                </ul>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => handleOpen(record)}
                  startIcon={<BarChartIcon />}
                >
                  {record.finalCost}
                </Button>
              </TableCell>
              <TableCell>
                {record.exitDate === null ? (
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => handleFinalizar(record.id)}
                    style={{ marginLeft: "0rem" }}
                    startIcon={<NoCrashIcon />}
                  >
                    Finalizar
                  </Button>
                ) : record.pickupDate === null ? (
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    onClick={() => handleRetirar(record.id)}
                    style={{ marginLeft: "0rem" }}
                    startIcon={<LogoutIcon />}
                  >
                    Retirar
                  </Button>
                ) : (
                  <Button 
                    variant="contained"
                    color="success"
                    size="small"
                    style={{ marginLeft: "0rem" }}
                    disabled>
                    RETIRADO
                  </Button>
                )}
                {record.isVoucherAvailable === null ? (         
                  <Button 
                    variant="contained"
                    color="success"
                    size="small"
                    style={{ marginLeft: "0.5rem" }}
                    disabled>
                    NO APLICA
                  </Button>
                ) : record.pickupDate !== null ? (
                  <Button 
                    variant="contained"
                    color="success"
                    size="small"
                    style={{ marginLeft: "0.5rem" }}
                    disabled>
                    RETIRADO
                  </Button>
                ): record.isVoucherAvailable === true && record.isVoucherApplied === null || record.isVoucherApplied === false ? (
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => handleApplyVoucher(record.id)}
                    style={{ marginLeft: "0.5rem" }}
                    startIcon={<AddIcon />}
                  >
                    bono
                  </Button>
                ) : record.isVoucherApplied === true ? (
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    onClick={() => handleRemoveVoucher(record.id)}
                    style={{ marginLeft: "0.5rem" }}
                    startIcon={<CloseIcon />}
                  >
                    bono
                  </Button>
                ) : null }
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(record.id)}
                  style={{ marginLeft: "0.5rem" }}
                  startIcon={<DeleteIcon />}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'text.primary' }}>
            Desglose del Costo Total
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: 'text.primary' }}>
            Costo de las reparaciones: {selectedRecord ? selectedRecord.totalRepairCost : 'Cargando...'}<br />
            Descuento por número de reparaciones: {selectedRecord ? selectedRecord.discountAmountNumberOfRepairs : 'Cargando...'}<br />
            Descuento por día de atención: {selectedRecord ? selectedRecord.discountAmountEntryDate : 'Cargando...'}<br />
            Descuento por bono: {selectedRecord ? selectedRecord.discountAmountVoucher : 'Cargando...'}<br />
            Recargo por kilometraje: {selectedRecord ? selectedRecord.chargeAmountMileage : 'Cargando...'}<br />
            Recargo por antigüedad del vehículo: {selectedRecord ? selectedRecord.chargeAmountAge : 'Cargando...'}<br />
            Recargo por Retraso en la Recogida del Vehículo: {selectedRecord ? selectedRecord.chargeAmountDelay : 'Cargando...'}<br />
            IVA: {selectedRecord ? selectedRecord.iva : 'Cargando...'}<br />
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default RecordList;
