import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';


const columns = [
    {
        name: "#",
        align: "center",
    },
    {
        name: "Name",
        align: "left",
    },
    {
        name: "Date",
        align: "center",
    },
    {
        name: "Rank",
        align: "center",
    },
    {
        name: "Δ",
        align: "center",
    },
    {
        name: "=",
        align: "center",
    },
    {
        name: null,
        align: "center",
    }
];


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 1, ml: 1, width: "100%", backgroundColor: "background.default", overflowX: "none", position: "relative" }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function MakeTable({ userData }) {
    const [rowData, setRowData] = useState(userData);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(()=>{
        const init = ()=>{
            setRowData(userData);
            // setRowData(userData);
        }
        init();
    }, []);

    return (
        <Box>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow
                            sx={{ bgcolor: "background.headRow"}}
                        >
                            {columns.map((column, i) => {
                                return (
                                    <TableCell align={column.align} key={i}>
                                        <Typography sx={{ fontWeight: "700", fontSize: "1.1em" }}>{column.name}</Typography>
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rowData
                        ).map((row, i) => (
                            <TableRow 
                                key={row.num} 
                                component={'paper'}
                                sx={{ bgcolor: `${i % 2 === 0 ? "background.rowDark" : "background.rowLight"}` }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    <Typography sx={{ fontSize: '1.2em', color: "text.default" }}>
                                        {rowData.length - row.num + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography
                                        sx={{
                                            fontSize: '1.2em',
                                            color: "text.default"
                                        }}
                                    >
                                        {row.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ fontSize: '1.2em', color: "text.default" }}>
                                        {row.date}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ fontSize: '1.2em', color: "text.default" }}>
                                        {row.rank}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    {row.delta > 0 ?
                                        <Typography sx={{ fontWeight: '600', color: "text.deltaPositive" }}>
                                            {"+" + row.delta}
                                        </Typography> :
                                        <Typography sx={{ fontWeight: '600', color: "text.deltaNegative" }}>
                                            {row.delta}
                                        </Typography>
                                    }
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ fontSize: '1.2em', color: "text.default" }}>
                                        {row.newRating}
                                    </Typography>
                                </TableCell>
                                {row.hasChange ?
                                    <TableCell align='center'>
                                        <Typography component={'div'} sx={{ color: "text.default" }}>
                                            {`Became `}
                                            <Typography className={`rated-user user-${row.color}`} sx={{ fontWeight: '700' }}>
                                                {row.hasChange}
                                            </Typography>
                                        </Typography>
                                    </TableCell>

                                    :
                                    <TableCell colSpan={1}></TableCell>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 15, 20, 30, { label: 'All', value: -1 }]}
                component="div"
                count={rowData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>

    );
}

export default MakeTable;

