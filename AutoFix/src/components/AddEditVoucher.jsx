import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { InputLabel, Select } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import voucherService from "../services/voucher.service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";


const AddEditVoucher = () => {
    const [brand, setBrand] = useState("");
    const [discountAmount, setDiscountAmount] = useState("");
    const [numberOfVouchers, setNumberOfVouchers] = useState("");
    const [voucherMonth, setVoucherMonth] = useState("");
    const [voucherYear, setVoucherYear] = useState("");
    const { id } = useParams();
    const [titleVoucherForm, setTitleVoucherForm] = useState("");
    const navigate = useNavigate();

    const saveVoucher = (e) => {
        e.preventDefault();

        const voucher = { brand, discountAmount, numberOfVouchers, voucherMonth, voucherYear, id };
        if (id) { //Actualizar Datos Bono
            voucherService
              .update(voucher)
              .then((response) => {
                console.log("Bono ha sido actualizado.", response.data);
                navigate("/voucher/list");
              })
              .catch((error) => {
                console.log(
                  "Ha ocurrido un error al intentar actualizar datos del Bono.",
                  error
                );
              });
          } else { //Crear nuevo Bono
            voucherService
              .create(voucher)
              .then((response) => {
                console.log("Bono ha sido añadido.", response.data);
                navigate("/voucher/list");
              })
              .catch((error) => {
                console.log(
                  "Ha ocurrido un error al intentar crear nuevo Bono.",
                  error
                );
              });
          }
    };

    const handleDiscountChange = (event) => {
        const value = parseFloat(event.target.value); 
        if (value > 0) {
          setDiscountAmount(value);
        } else {
          console.error('descuento no puede ser negativo.');
          }
    };
    
    const handleVoucherChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value > 0) {
            setNumberOfVouchers(value);
        } else {
            console.error('cantidad no puede ser negativo.');
        }
    };

    const handleVoucherYearChange = (event) => {
        const value = parseFloat(event.target.value);
        const currentYear = new Date().getFullYear();
        if (value > 0 && value <= 2024) {
            setVoucherYear(value);
        } else {
          console.error('el año no puede ser negativo o mayor que el año actualr.');
        }
      };

    useEffect(() => {
        if (id) {
            setTitleVoucherForm("Editar Bono");
            voucherService
                .get(id)
                .then((voucher) => {
                    setBrand(voucher.data.brand);
                    setDiscountAmount(voucher.data.discountAmount);
                    setNumberOfVouchers(voucher.data.numberOfVouchers);
                    setVoucherMonth(voucher.data.voucherMonth);
                    setVoucherYear(voucher.data.voucherYear);
                })
                .catch((error) => {
                    console.log("Se ha producido un error.", error);
                });
        } else {
            setTitleVoucherForm("Nuevo Bono");
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
            width: 800,
            bgcolor: 'background.paper',
            p: 2,
        }}
        >
        <h3 className="titleColor"> {titleVoucherForm} </h3>
        <hr />
            <DemoContainer components={['DatePicker', 'DatePicker']}>
            <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">Marca</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                value={brand}
                label="Marca"
                onChange={(e) => setBrand(e.target.value)}
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

            <FormControl fullWidth>
            <TextField
                id="monto"
                label="Monto del Bono"
                type="number"
                value={discountAmount}
                variant="standard"
                onChange={handleDiscountChange}
            />
            </FormControl>

            <FormControl fullWidth>
            <TextField
                id="cantidad"
                label="Cantidad de Bonos"
                type="number"
                value={numberOfVouchers}
                variant="standard"
                onChange={handleVoucherChange}
            />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">Mes</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={voucherMonth}
                label="Mes"
                onChange={(e) => setVoucherMonth(e.target.value)}
            >
                <MenuItem value={"Enero"}>Enero</MenuItem>
                <MenuItem value={"Febrero"}>Febrero</MenuItem>
                <MenuItem value={"Marzo"}>Marzo</MenuItem>
                <MenuItem value={"Abril"}>Abril</MenuItem>
                <MenuItem value={"Mayo"}>Mayo</MenuItem>
                <MenuItem value={"Junio"}>Junio</MenuItem>
                <MenuItem value={"Julio"}>Julio</MenuItem>
                <MenuItem value={"Agosto"}>Agosto</MenuItem>
                <MenuItem value={"Septiembre"}>Septiembre</MenuItem>
                <MenuItem value={"Octubre"}>Octubre</MenuItem>
                <MenuItem value={"Noviembre"}>Noviembre</MenuItem>
                <MenuItem value={"Diciembre"}>Diciembre</MenuItem>
            </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
            <TextField
                id="year"
                label="Año"
                type="number"
                value={voucherYear}
                variant="standard"
                onChange={handleVoucherYearChange}
                helperText="Ej: 2022"
            />
            </FormControl>
            </DemoContainer>

            <FormControl>
            <br />
            <Button
                variant="contained"
                color="info"
                onClick={(e) => saveVoucher(e)}
                style={{ marginLeft: "0.5rem" }}
                startIcon={<SaveIcon />}
            >
                Guardar
            </Button>
            </FormControl>
        <Link to="/voucher/list">Back to List</Link>
        </Box>
    );
};

export default AddEditVoucher;
