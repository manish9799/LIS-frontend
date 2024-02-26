import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TextField, Typography, TablePagination, IconButton, Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { data, tableHeadings } from '../../configData';


const TableData = () => {
    const [tableData,setTableData] = useState([])
    const [orderBy, setOrderBy] = useState(null);
    const [order, setOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(()=>{
        setTableData(data)
    },[data])

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrderBy(property);
        setOrder(isAsc ? 'desc' : 'asc');
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = tableData?.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = orderBy
        ? [...filteredData].sort((a, b) => (order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]))
        : filteredData;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const AddData =((data)=>{
        // const newData = tableData?.filter((item,i)=> item?.id !== id)
        // setTableData(newData)
    })
    const deleteData =((id)=>{
        const newData = tableData?.filter((item,i)=> item?.id !== id)
        setTableData(newData)
    })

    return (
        <>
        <Paper sx={{ borderRadius: '20px',margin:'30px' }}>
            <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" style={{ padding: '16px', minWidth: '300px' }}>
                    My Table
                </Typography>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ margin: '16px',width:'50%' }}
                />
                <Button sx={{width:'200px',p:1,fontSize:'16px',boxSizing:'border-box'}} variant='contained'>Add Data</Button>
            </Stack>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {tableHeadings?.map((item, i) => (
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === `${item.id}`}
                                        direction={orderBy === `${item.id}` ? order : 'asc'}
                                        onClick={() => handleSort(item.id)}
                                    >
                                        {item.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{paddingY:'0px'}}>{row.id}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.name}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.vendor}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.isActive}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.createdOn}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.updatedOn}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.createdBy}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.updatedBy}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={()=>deleteData(row.id)} aria-label="delete">
                                        <DeleteIcon sx={{color:'red'}} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </>
    );
};

export default TableData;
