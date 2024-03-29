import React, { Component, useRef, useState } from "react";
import ReactPaginate from 'react-paginate';


const MyPagination = (props) => {
    const handlePageClick = (event) => {
        props.setCurrentPage(+event.selected + 1);
    }

    return (
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            marginPagesDisplayed={3}
            pageCount={props.totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination d-flex justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    );
}

export default MyPagination;