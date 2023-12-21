import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { data } from './contestData';
const columns = [
    {
        name: "Contest Name",
        key: "contest-name",
        sort: 0,
        align: "center",
    },
    {
        name: "Writers",
        key: "writers",
        sort: 0,
        align: "center",
    },
    {
        name: "",
        key: "final-standing",
        sort: 0,
        align: "center",
    },
];
export const ShowContests = () => {
    const [rowData, setRowData] = useState(data);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const theme = useTheme();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Paper>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow
                            sx={{ bgcolor: "background.headRow" }}
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
                                        {row.contestName}
                                    </Typography>
                                    <Link href={`contest/${row.contestId}`}>
                                        Enter
                                    </Link>
                                </TableCell>
                                <TableCell component="th" scope="row" align="center">
                                    {row.writers.map((writer, i) => {
                                        return (
                                            <>
                                                <Typography
                                                    key={i}
                                                    component="a"
                                                    className={`rated-user user-${writer.color}`}
                                                    sx={{ fontSize: '1em', color: "text.default" }}
                                                    href={`https://codeforces.com/profile/${writer.handle}`} 
                                                    target='_blank'
                                                    fontWeight={600}
                                                >
                                                    {writer.handle}
                                                </Typography>
                                                <br></br>
                                            </>

                                        )
                                    })}
                                </TableCell>
                                <TableCell component="th" scope="row" align="center">
                                    <Link href={`https://codeforces.com/gym/${row.Id}/standings`} target="_blank">
                                        Final Standings
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50, 100, 200, { label: 'All', value: -1 }]}
                component="div"
                count={rowData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>

    )
}
