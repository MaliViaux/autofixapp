import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import carService from "../services/car.service";
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

const CarList = () => {
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  const init = () => {
    carService
      .getAll()
      .then((response) => {
        console.log("Mostrando listado de todos los vehiculos.", response.data);
        setCars(response.data);
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
      carService
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
    navigate(`/car/edit/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <br />
      <Link
        to="/car/add"
        style={{ textDecoration: "none", marginBottom: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Añadir Vehiculo
        </Button>
      </Link>
      <br /> <br />
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Patente
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Marca
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Tipo
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Modelo
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Motor
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Asientos
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Año
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Kilometraje
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Operaciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow
              key={car.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{car.carPlate}</TableCell>
              <TableCell align="left">{car.carBrand}</TableCell>
              <TableCell align="right">{car.carType}</TableCell>
              <TableCell align="right">{car.carModel}</TableCell>
              <TableCell align="right">{car.engineType}</TableCell>
              <TableCell align="right">{car.carSeats}</TableCell>
              <TableCell align="right">{car.carYear}</TableCell>
              <TableCell align="right">{car.carMileage}</TableCell>
              <TableCell>
                {car.numberOfRecords === 0 ? (
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => handleEdit(car.id)}
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
                {car.numberOfRecords === 0 ? (
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(car.id)}
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

export default CarList;
