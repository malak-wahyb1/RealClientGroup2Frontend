import * as React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Table(props) {
  return (
    <div style={{ height: 630, width: "80%" }} className="Table">
      <DataGrid
        columns={props.columns}
        rows={props.rows}
        getRowId={(row) => row._id}
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          color: "#06023b",
          fontSize: "20px",
          borderRadius: "50",
        }}
      />
    </div>
  );
}
