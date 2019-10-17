import React from "react";

import { DataGrid } from "tubular-react";
import { ColumnModel } from "tubular-common";

const columns = [
  new ColumnModel("OrderID"),
  new ColumnModel("CustomerName", { Filterable: true }),
  new ColumnModel("ShipperCity"),
  new ColumnModel("Amount")
];

const SampleGrid = () => (
  <DataGrid
    columns={columns}
    dataSource={"https://tubular.azurewebsites.net/api/orders/paged"}
    gridName="Grid"
  />
);

export default SampleGrid;
