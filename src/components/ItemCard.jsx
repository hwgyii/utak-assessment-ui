import { useState } from "react";
import { Box, Grid, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import { get } from "lodash";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ItemMenu({}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "50px",
      }}
    >
      <IconButton
        id="basic-button"
        aria-controls={open ? 'simple-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon sx={{ fontSize: "40px", mt: 2, color: "black" }}/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>

      </Menu>
    </Box>
  )
}

function ItemInformation({props}) {
  return (
    <Grid container item 
      columns={{xs: 12, sm: 12, md: 12, lg: 12}} 
      sx={{
        width: "100%",
        height: "calc(40% - 50px)",
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {props.category}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {props.name}
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        Price: {props.price}
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        Cost: {props.cost}
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        Quantity: { props.quantity === 0 ? "Out of Stock" : props.quantity }
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        {
          get(props, "size", false) 
            ?
              `Size: ${props.size}`
            :
              null
        }
      </Grid>
    </Grid>
  );
};

export default function ItemCard({ props }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeDevice = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const cardHeight = isSmallDevice ? "75vh" : isMediumDevice ? "40vh" : isLargeDevice ? "30vh" : "60vh";

  return (
    <Grid
      container
      sx={{
        border: "1px solid black",
        width: "100%",
        height: cardHeight,
        borderRadius: "8px",
        boxShadow: "2px 2px 2px 2px #8E8E8E"
      }}
      columns={{ xs: 6, sm: 6, md: 12, lg: 12 }} 
      columnSpacing={1} 
      rowSpacing={1}
    >
      {/* MENU BUTTON */}
      <ItemMenu />
      {/* IMAGE DIV */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "calc(60% - 50px)",
          backgroundColor: "lightgray",
          margin: "",
        }}
      >

      </Box>
      {/* INFO DIV */}
      <ItemInformation props={props}/>
    </Grid>
  );
}