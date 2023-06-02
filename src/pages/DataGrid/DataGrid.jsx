import React, { useMemo } from "react";
import "./DataGrid.css";
import { MaterialReactTable } from "material-react-table";
import { userData } from "../../data";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const DataGrid = () => {
  const colums = useMemo(() => [
    {
      accessorKey: "name.firstName",
      header: "First Name",
    },
    {
      accessorKey: "name.lastName",
      header: "Last Name",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "state",
      header: "State",
    },
  ]);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
    })
  );

  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={colums} data={userData} />
      </ThemeProvider>
    </div>
  );
};

export default DataGrid;
