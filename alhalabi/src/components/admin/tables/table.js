import * as React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import {
  DataGrid,
  GridAddIcon,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
export default function Table(props) {

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <Button
          sx={{
            bgcolor: "#e2eaf2",
            transform: "translateX(52pc)",
            color: "#06023B",
          }}
        >
          <GridAddIcon />
          Add Admin
        </Button>
      </GridToolbarContainer>
    );
  }
  return (
    <div style={{ height: 700, width: "80%" }} className="Table">
      <DataGrid
        columns={props.columns}
        rows={props.rows}
        getRowId={(row) => row._id}
        slots={{
          toolbar: CustomToolbar,
        }}
        sx={{
          color: "#06023B",
          fontSize:"20px" ,
     borderRadius:"50"       }}
      />
    </div>
  );
}
