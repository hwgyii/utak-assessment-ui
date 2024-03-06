import { Box, Grid } from "@mui/material";

import ItemCard from "../components/ItemCard";

import { items } from "../constants/items";

export default function Merchant() {

  return(
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid 
        container 
        columns={{ xs: 3, sm: 6, md: 12, lg: 15 }} 
        columnSpacing={2} 
        rowSpacing={4}
        sx={{
          width: "100vw",
          height: "100vh",
          margin: "auto",
          overflowX: "hidden",
        }}
      >
        {
          items.map((item, index) => {
            return (
              <Grid item xs={3} sm={2} md={3} lg={3} key={index}>
                <ItemCard props={item} />
              </Grid>
            );
          })
        }
      </Grid>
    </Box>
  )
}