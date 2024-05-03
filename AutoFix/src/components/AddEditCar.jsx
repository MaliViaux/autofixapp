import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { InputLabel, Select } from '@mui/material';
import carService from "../services/car.service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";


const AddEditCar = () => {
  const [carPlate, setCarPlate] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carType, setCarType] = useState("");
  const [carModel, setCarModel] = useState("");
  const [engineType, setEngineType] = useState("");
  const [carSeats, setCarSeats] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carMileage, setCarMileage] = useState("");
  const { id } = useParams();
  const [titleCarForm, setTitleCarForm] = useState("");
  const navigate = useNavigate();

  const saveCar = (e) => {
    e.preventDefault();

    if (!carPlate.trim()) {
      console.error('Plate cannot be empty.');
      return;
    }

    const car = { carPlate, carBrand, carType, carModel, engineType, carSeats, carYear, carMileage, id };
    if (id) { //Actualizar Datos Auto
      carService
        .update(car)
        .then((response) => {
          console.log("Vehiculo ha sido actualizado.", response.data);
          navigate("/car/list");
        })
        .catch((error) => {
          console.log(
            "Ha ocurrido un error al intentar actualizar datos del vehiculo.",
            error
          );
        });
    } else { //Crear nuevo Auto
      carService
        .create(car)
        .then((response) => {
          console.log("Vehiculo ha sido añadido.", response.data);
          navigate("/car/list");
        })
        .catch((error) => {
          console.log(
            "Ha ocurrido un error al intentar crear nuevo vehiculo.",
            error
          );
        });
    }
  };

  const handleYeartChange = (event) => {
    const value = parseFloat(event.target.value);
    const currentYear = new Date().getFullYear();
    if (value > 0 && value <= 2024) {
      setCarYear(value);
    } else {
      console.error('year cannot be negative or greater than current year.');
    }
  };

  const handleSeatsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > 0) {
      setCarSeats(value);
    } else {
      console.error('Number of seats cannot be negative.');
    }
  };

  const handleMileageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > 0) {
      setCarMileage(value);
    } else {
      console.error('Mileage cannot be negative.');
    }
  };

  useEffect(() => {
    if (id) {
      setTitleCarForm("Editar Vehiculo");
      carService
        .get(id)
        .then((car) => {
          setCarPlate(car.data.carPlate);
          setCarBrand(car.data.carBrand);
          setCarType(car.data.carType);
          setCarModel(car.data.carModel);
          setEngineType(car.data.engineType);
          setCarYear(car.data.carYear);
          setCarSeats(car.data.carSeats);
          setCarMileage(car.data.carMileage);
        })
        .catch((error) => {
          console.log("Se ha producido un error.", error);
        });
    } else {
      setTitleCarForm("Nuevo Vehiculo");
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      component="form"
      sx={{
        width: 500,
        bgcolor: 'background.paper',
        p: 4,
      }}
    >
      <h3 className="titleColor"> {titleCarForm} </h3>
      <hr />
        <FormControl fullWidth>
          <TextField
            id="carPlate"
            label="Patente"
            value={carPlate}
            variant="standard"
            onChange={(e) => setCarPlate(e.target.value)}
            helperText="Ej. DHJJ99"
          />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Marca</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carBrand}
            label="Marca"
            onChange={(e) => setCarBrand(e.target.value)}
          >
            <MenuItem value={"Audi"}>Audi</MenuItem>
            <MenuItem value={"BMW"}>BMW</MenuItem>
            <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
            <MenuItem value={"Citroen"}>Citroen</MenuItem>
            <MenuItem value={"Ford"}>Ford</MenuItem>
            <MenuItem value={"Honda"}>Honda</MenuItem>
            <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
            <MenuItem value={"Jeep"}>Jeep</MenuItem>
            <MenuItem value={"Kia"}>Kia</MenuItem>
            <MenuItem value={"Mazda"}>Mazda</MenuItem>
            <MenuItem value={"Mercedes Benz"}>Mercedes Benz</MenuItem>
            <MenuItem value={"Renault"}>Renault</MenuItem>
            <MenuItem value={"Subaru"}>Subaru</MenuItem>
            <MenuItem value={"Suzuki"}>Suzuki</MenuItem>
            <MenuItem value={"Toyota"}>Toyota</MenuItem>
            <MenuItem value={"Volvo"}>Volvo</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carType}
            label="Tipo"
            onChange={(e) => setCarType(e.target.value)}
          >
            <MenuItem value={"Pickup"}>Pickup</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
            <MenuItem value={"Hatchback"}>Hatchback</MenuItem>
            <MenuItem value={"Furgoneta"}>Furgoneta</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            id="carModel"
            label="Modelo de auto"
            value={carModel}
            variant="standard"
            onChange={(e) => setCarModel(e.target.value)}
            helperText="Ej: Mazda 3, Morning, etc."
          />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Motor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={engineType}
            label="Tipo de Motor"
            onChange={(e) => setEngineType(e.target.value)}
          >
            <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
            <MenuItem value={"Diesel"}>Diesel</MenuItem>
            <MenuItem value={"Hibrido"}>Hibrido</MenuItem>
            <MenuItem value={"Electrico"}>Electrico</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            id="year"
            label="Año de Fabricación"
            type="number"
            value={carYear}
            variant="standard"
            onChange={handleYeartChange}
            helperText="Ej: 2012"
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="seats"
            label="Numero de asientos"
            type="number"
            value={carSeats}
            variant="standard"
            onChange={handleSeatsChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            id="mileage"
            label="Kilometraje"
            type="number"
            value={carMileage}
            variant="standard"
            onChange={handleMileageChange}
          />
        </FormControl>

        <FormControl>
          <br />
          <Button
            variant="contained"
            color="info"
            onClick={(e) => saveCar(e)}
            style={{ marginLeft: "0.5rem" }}
            startIcon={<SaveIcon />}
          >
            Guardar
          </Button>
        </FormControl>
      <hr />
      <Link to="/car/list">Back to List</Link>
    </Box>
  );
};

export default AddEditCar;
