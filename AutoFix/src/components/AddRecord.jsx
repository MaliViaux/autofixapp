import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { OutlinedInput, InputLabel, Select } from '@mui/material';
import recordService from "../services/record.service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import * as React from 'react';
import SaveIcon from "@mui/icons-material/Save";
import { DatePicker } from '@mui/x-date-pickers';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//https://muhimasri.com/blogs/mui-multiselect/

const names = [
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

const AddRecord = () => {
    const [carPlate, setCarPlate] = useState("");
    const [repairTypeNames, setRepairTypeNames] = useState([]);
    const [entryDate, setEntryDate] = React.useState(dayjs('2024-04-10'));
    const [entryTime, setEntryTime] = React.useState(dayjs('2022-04-17T12:00'));
    //const [isVoucherApplied, setIsVoucherApplied] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const saveRecord = (e) => {
        e.preventDefault();

        const record = { carPlate, repairTypeNames, entryDate, entryTime, id };
        //Crear nuevo bono
        recordService
            .create(record)
            .then((response) => {
            console.log("Registro ha sido añadido.", response.data);
            navigate("/record/list");
            })
            .catch((error) => {
                console.log("Ha ocurrido un error al intentar crear nuevo registro.",error);
                setErrorMessage("Ha ocurrido un error al intentar realizar la acción.");
            });
    };

    const isDateDisabled = (date) => {
        const today = dayjs(); // Get the current date using dayjs
        return dayjs(date).isAfter(today); // Check if date is after today
    };

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
        <h3 className="titleColor"> Añadir Registro </h3>
        {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>} {/* Mensaje de error aquí */}
        <hr />
            <FormControl sx={{ m: 1, width: 250 }}>
            <TextField
                id="carPlate"
                label="Patente"
                value={carPlate}
                variant="standard"
                onChange={(e) => setCarPlate(e.target.value)}
                helperText="Ej. DHJJ99"
            />
            </FormControl>

            <FormControl sx={{ m: 1, width: 250 }}>
            <InputLabel>Reparaciones</InputLabel>
            <Select
                multiple
                value={repairTypeNames}
                onChange={(e) => setRepairTypeNames(e.target.value)}
                input={<OutlinedInput label="Reparaciones" />}
            >
                {names.map((name) => (
                <MenuItem key={name} value={name}>
                    {name}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
            
            <FormControl sx={{ mt: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                id="date"
                label="Fecha de ingreso"
                value={entryDate}
                onChange={(e) => setEntryDate(e)}
                shouldDisableDate = {isDateDisabled}
            />
            </LocalizationProvider>
            </FormControl>
            
            <FormControl sx={{ mt: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
                id="time"
                label="Hora de ingreso"
                value={entryTime}
                onChange={(e) => setEntryTime(e)}
            />
            </LocalizationProvider>
            </FormControl>

            <FormControl>
            <br />
            <Button
                variant="contained"
                color="info"
                onClick={(e) => saveRecord(e)}
                style={{ marginLeft: "0.5rem" }}
                startIcon={<SaveIcon />}
            >
                Guardar
            </Button>
            </FormControl>
        <hr />
        <Link to="/record/list">Back to List</Link>
        </Box>
    );
};

export default AddRecord;
