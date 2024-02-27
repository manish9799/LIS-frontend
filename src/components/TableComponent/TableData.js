import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TextField, Typography, TablePagination, IconButton, Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { data, tableHeadings } from '../../configData';
import AddIcon from '@mui/icons-material/Add';
import AddEditPopup from './AddEditPopup';
import '../Style.css'



const TableData = () => {
    const [tableData,setTableData] = useState([])
    const [orderBy, setOrderBy] = useState(null);
    const [order, setOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openModal,setOpenModal] = useState(false);
    const [editValue,setEditValue] = useState({})

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

    const editData =(data)=>{
        setEditValue(data)
        setOpenModal(true)
    }

    const Open =()=>{
        setEditValue({})
        setOpenModal(false)
    }


    return (
        <>
        <AddEditPopup setOpenModal={setOpenModal} openModal={openModal} editDataValue={[editValue,setEditValue]}   />
        <Paper sx={{ borderRadius: '20px',margin:'30px',minHeight:'70vh' }}>
            <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-around' }}>
                <Typography className='table-heading'>
                Analyzer Parameter
                </Typography>
                <TextField
                placeholder='Search here...'
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ margin: '16px',width:'40%' }}
                />
                <Button 
              component="label" 
              sx={{width:"200px",border:'2px solid',fontSize:'18px',p:1}} 
              variant="outlined" 
              endIcon={<AddIcon />}
              onClick={()=>setOpenModal(true)}
            >
              Add item
            </Button>
            </Stack>
            <TableContainer>
                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            {tableHeadings?.map((item, i) => (
                                <TableCell sx={{fontWeight:'600',fontSize:'14px',backgroundColor:'lightgray'}}>
                                    <TableSortLabel
                                        active={orderBy === `${item.id}`}
                                        direction={orderBy === `${item.id}` ? order : 'asc'}
                                        onClick={() => handleSort(item.id)}
                                    >
                                        {item.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell sx={{fontWeight:'600',fontSize:'14px',backgroundColor:'lightgray'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{paddingY:'0px'}}>{row.id}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.name}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.vendor}</TableCell>
                                <TableCell sx={{paddingY:'0px',fontWeight:600,color: row.isActive?'green':'red'}}>{row.isActive ? 'Active':'In Active'}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.createdOn}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.updatedOn}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.createdBy}</TableCell>
                                <TableCell sx={{paddingY:'0px'}}>{row.updatedBy}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit" onClick={()=>editData(row)}>
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
