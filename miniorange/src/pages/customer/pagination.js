// components/PaginationComponent.js

import React, { useState } from "react";
import { Button, Stack, Pagination, PaginationItem } from "@mui/material";

const itemsPerPage = 10;

const PaginationComponent = ({ totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Pagination
        count={totalPages - 1}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        size="large"
      />
    </Stack>
  );
};

export default PaginationComponent;
