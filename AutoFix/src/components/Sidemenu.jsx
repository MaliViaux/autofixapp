import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from '@mui/icons-material/BarChart';
import { useNavigate } from "react-router-dom";

export default function Sidemenu({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const listOptions = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItemButton onClick={() => navigate("/home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <Divider />

        <ListItemButton onClick={() => navigate("/car/list")}>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary="Vehiculos" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/voucher/list")}>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Bonos" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/record/list")}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Registros" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/report2")}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reporte 2" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/report3")}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reporte 3" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/report4")}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reporte 4" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
        {listOptions()}
      </Drawer>
    </div>
  );
}
