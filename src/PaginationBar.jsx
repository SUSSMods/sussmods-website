import React from "react";
import { Pagination } from "@mui/material";

// TODO: Might need to add page range
export default function PaginationBar(props) {
  const currentPage = (props.currentPage);
  const pagesCount = Math.ceil(props.totalMods / props.modsPerPage);
  
  const changePage = (e, v) => {
    const newPageNumber = v;
    console.log(newPageNumber);
    if (currentPage === newPageNumber) return;
    props.setCurrentPage(newPageNumber);
  };

  return (
    <>
      <Pagination
        color="primary"
        count={pagesCount}
        defaultPage={1}
        siblingCount={0}
        page={currentPage}
        onChange={(e, v)=> changePage(e, v)}
      />
    </>
  );
}