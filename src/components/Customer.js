import React from "react";
import { TableRow, TableCell } from "@mui/material";

const Customer = ({ name, birthday, job, gender, id, image }) => {
  return (
    <div>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt="profile" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
    </div>
  );
};

export default Customer;
