import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import voucherService from "../services/voucher.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const VoucherList = () => {
  const [vouchers, setVouchers] = useState([]);

  const navigate = useNavigate();

  const init = () => {
    voucherService
      .getAll()
      .then((response) => {
        console.log("Mostrando listado de todos los vehiculos.", response.data);
        setVouchers(response.data);
      })
      .catch((error) => {
        console.log(
          "Se ha producido un error al intentar mostrar listado de todos los vehiculos.",
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
      "¿Esta seguro que desea borrar este vehiculo?"
    );
    if (confirmDelete) {
      voucherService
        .remove(id)
        .then((response) => {
          console.log("vehiculos ha sido eliminado.", response.data);
          init();
        })
        .catch((error) => {
          console.log(
            "Se ha producido un error al intentar eliminar al vehiculo",
            error
          );
        });
    }
  };

  const handleEdit = (id) => {
    console.log("Printing id", id);
    navigate(`/voucher/edit/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <br />
      <Link
        to="/voucher/add"
        style={{ textDecoration: "none", marginBottom: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Añadir Bono
        </Button>
      </Link>
      <br /> <br />
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Marca
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Monto
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Cantidad
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Mes
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Año
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Operaciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vouchers.map((voucher) => (
            <TableRow
              key={voucher.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{voucher.brand}</TableCell>
              <TableCell align="left">{voucher.discountAmount}</TableCell>
              <TableCell align="right">{voucher.numberOfVouchers}</TableCell>
              <TableCell align="right">{voucher.voucherMonth}</TableCell>
              <TableCell align="right">{voucher.voucherYear}</TableCell>
              <TableCell>
                {voucher.numberOfRecords === 0 ? (
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => handleEdit(voucher.id)}
                    style={{ marginLeft: "0.5rem" }}
                    startIcon={<EditIcon />}
                  >
                    Editar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    style={{ marginLeft: "0.5rem" }}
                    disabled
                  >
                    NO APLICA
                  </Button>
                )}
                {voucher.numberOfRecords === 0 ? (
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(voucher.id)}
                    style={{ marginLeft: "0.5rem" }}
                    startIcon={<DeleteIcon />}
                  >
                    Eliminar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    style={{ marginLeft: "0.5rem" }}
                    disabled
                  >
                    NO APLICA
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VoucherList;
