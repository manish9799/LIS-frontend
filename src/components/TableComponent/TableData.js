import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TextField, Typography, TablePagination, IconButton, Stack, Button, useMediaQuery, Tooltip, Popover, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AddEditPopup from './AddEditPopup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../Style.css'
import { useDispatch } from 'react-redux';
import { deleteAnalyzers } from '../../redux/actions/servicesActions';
import ConfirmDialog from '../ConfirmDialog';
import DetailViewPopup from './DetailViewPopup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircularProgress from '@mui/material/CircularProgress';
import HISAnalyzerDialog from './HISAnalyzerDialog';
import HISDetailViewPopup from './HISDetailViewPopup';
import SampleIdDetailPopup from './SampleIdDetailPopup';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const TableData = ({ data, headingName, tableHeadings, url, fetchData, LisCodesList, analyzersList, cptList, hisList, rerender, readable, showColor }) => {
    const dispatch = useDispatch()
    const [tableData, setTableData] = useState([])
    const [orderBy, setOrderBy] = useState(null);
    const [order, setOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openModal, setOpenModal] = useState(false);
    const [openHisModal, setOpenHisModal] = useState(false);
    const [editValue, setEditValue] = useState({})
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [hisOpenDetailsModal, setHisOpenDetailsModal] = useState(false);
    const [sampleDetailsModal, setSampleOpenDetailsModal] = useState(false);
    const [deleteId, setDeleteId] = useState(0)
    const [loading, setLoading] = useState(true)
    const isScreenSmall = useMediaQuery('(max-width:945px)');
    const forHIS = ['HisName', 'HisCode', 'HparamName', 'Hunit', 'Hrange'];
    const forAnalyzer = ['AnalyzerCode', 'AnalyzerName', 'AparamName', 'Aunit', 'Arange'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [sampleSearch, setSampleSearch] = useState('');


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    useEffect(() => {
        setTableData(data)
        if (data.length) {
            setLoading(false)
        }
    }, [data])

    // console.log("data", data);



    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrderBy(property);
        setOrder(isAsc ? 'desc' : 'asc');
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = tableData && tableData?.filter((row) =>
        row?.Name?.toLowerCase().includes(searchTerm?.toLowerCase())
        || row?.ID?.toString().includes(searchTerm)
        || row?.Id?.toString().includes(searchTerm)
        // || row?.analyzerName?.toString().includes(searchTerm)
        // || row?.cptName?.toString().includes(searchTerm)
        // || row?.liscodeName?.toString().includes(searchTerm)
        // || row?.categoryName?.toString().includes(searchTerm)
        // || row?.sampleName?.toString().includes(searchTerm)
        // || row?.unit?.toString().includes(searchTerm)
        // || row?.orderId?.toString().includes(searchTerm)
    );

    const sortedData = orderBy
        ? [...filteredData].sort((a, b) => (order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]))
        : filteredData;

    useEffect(()=>{
        if(sampleSearch.length){
            const filteredData = data && data?.filter((row) =>
            row?.SampleId?.toLowerCase().startsWith(sampleSearch?.toLowerCase())) 
            setTableData(filteredData)
        }else{
            setTableData(data)
        }
    },[sampleSearch])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const confirmDelete = (id) => {
        setDeleteId(id)
        setDeleteDialog(true)
    }

    const deleteData = () => {
        dispatch(deleteAnalyzers(url, deleteId, rerender))
        setDeleteDialog(false)
    }

    const editData = (data) => {
        setEditValue(data)
        if (url == 'HisAnalyzer') {
            setOpenHisModal(true)
        } else {
            setOpenModal(true)
        }
    }
    const detailView = (data) => {
        setEditValue(data)
        if (url == 'HisAnalyzer') {
            setHisOpenDetailsModal(true)
        } else {
            setOpenDetailsModal(true)
        }
    }

    const sampleDetailView = (data) => {
        setEditValue(data)
        setSampleOpenDetailsModal(true)

    }
    const openSearchField = () => {
        console.log("samplee");
    }

    return (
        <>
            <ConfirmDialog remove={deleteData} openDialog={[deleteDialog, setDeleteDialog]} />
            <DetailViewPopup
                detailsModalValue={[openDetailsModal, setOpenDetailsModal]}
                editDataValue={[editValue, setEditValue]}
            />
            <SampleIdDetailPopup
                detailsModalValue={[sampleDetailsModal, setSampleOpenDetailsModal]}
                editDataValue={[editValue, setEditValue]}
            />
            <HISDetailViewPopup
                detailsModalValue={[hisOpenDetailsModal, setHisOpenDetailsModal]}
                editDataValue={[editValue, setEditValue]}
            />
            <AddEditPopup
                rerender={rerender}
                modalValue={[openModal, setOpenModal]}
                editDataValue={[editValue, setEditValue]}
                url={url}
                fetchData={fetchData}
                tableHeadings={tableHeadings}
                cptList={cptList}
                analyzersList={analyzersList}
                LisCodesList={LisCodesList}
            />
            <HISAnalyzerDialog
                rerender={rerender}
                modalValue={[openHisModal, setOpenHisModal]}
                editDataValue={[editValue, setEditValue]}
                url={url}
                fetchData={fetchData}
                tableHeadings={tableHeadings}
                analyzersList={analyzersList}
                hisList={hisList}
            />

            <Paper sx={{ borderRadius: '20px', marginX: '30px', mt: 1, height: '80vh', overflow: 'auto' }}>
                <Stack direction={'row'} className='table-header'>
                    <Typography variant="h6" className='table-headingName'>
                        {headingName}
                    </Typography>
                    <Stack direction={'row'} sx={{ width: isScreenSmall ? '100%' : '50%' }} className='table-header-func'>
                        <TextField
                            placeholder='Search here...'
                            type='text'
                            label="Search"
                            variant="outlined"
                            value={searchTerm}
                            className='search-field'
                            onChange={handleSearch}
                        />
                        {!readable &&
                            <>
                                {isScreenSmall ? (
                                    <IconButton
                                        aria-label="Add item"
                                        sx={{ backgroundColor: '#3d5afe', borderRadius: '50%', fontSize: '18px', p: 1, ml: 1 }}
                                        onClick={() => url == 'HisAnalyzer' ? setOpenHisModal(true) : setOpenModal(true)}
                                    >
                                        <AddIcon fontSize='large' sx={{ color: 'white', fontSize: '30px' }} />
                                    </IconButton>
                                ) : (
                                    <Button
                                        component="label"
                                        sx={{ width: "200px", border: '2px solid', borderRadius: '20px', fontSize: '18px', p: 1, ml: 2 }}
                                        variant="outlined"
                                        endIcon={<AddIcon />}
                                        onClick={() => url == 'HisAnalyzer' ? setOpenHisModal(true) : setOpenModal(true)}
                                    >
                                        Add item
                                    </Button>
                                )}
                            </>
                        }
                    </Stack>
                </Stack>

                <TableContainer>
                    <Table size="small">
                        <TableHead >
                            <TableRow>
                                {tableHeadings?.map((item, i) => (
                                    <React.Fragment key={item + i}>
                                        <TableCell key={item.id} sx={{
                                            fontWeight: '600', fontSize: '13px', backgroundColor: 'lightgray',
                                            maxWidth: item.id !== 'id' ? '150px' :
                                                item.id == 'IsActive' ? '100px' : '50px',
                                        }}>
                                            <TableSortLabel
                                                active={orderBy === `${item.id}`}
                                                direction={orderBy === `${item.id}` ? order : 'asc'}
                                                onClick={() => handleSort(item.id)}
                                            >
                                                {item.label}
                                            </TableSortLabel>
                                                {item.id == 'SampleId' &&
                                                    <>
                                                        <IconButton onClick={handleClick} aria-label="edit" id={'sampleSearch'} >
                                                            <SearchIcon  sx={{ ml: 0.5 }} />
                                                        </IconButton>
                                                        <Popover
                                                            id={'sampleSearch'}
                                                            open={open}
                                                            anchorEl={anchorEl}
                                                            onClose={handleClose}
                                                            anchorOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'right',
                                                            }}
                                                            transformOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'left',
                                                              }}
                                                            sx={{ml:2}}
                                                        >
                                                            <TextField
                                                            value={sampleSearch}
                                                            placeholder='Search SampleID here ...'
                                                            onChange={(e)=>setSampleSearch(e.target.value)}
                                                            InputProps={{
                                                                endAdornment: <InputAdornment position="end">
                                                                    <>
                                                                      <IconButton aria-label="cancel"  onClick={(e)=>setSampleSearch('')}>
                                                                    <CloseIcon color='error' />
                                                                        </IconButton>
                                                                    </>
                                                                    </InputAdornment>
                                                              }}
                                                            />
                                                        </Popover>
                                                    </>
                                                }
                                        </TableCell>
                                    </React.Fragment>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={tableHeadings?.length + (!readable ? 1 : 0)} sx={{ paddingY: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>
                                        <CircularProgress color="primary" />
                                    </TableCell>
                                </TableRow>
                            ) : sortedData?.length ? (
                                <>
                                    {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
                                        <TableRow key={row.ID || row.Id} sx={{
                                            '&:hover': {
                                                // scale: '1.03'
                                                // border: '1.5px solid black',
                                                boxSizing: 'border-box',
                                                backgroundColor: '#C0C0C0'

                                            }
                                        }}>
                                            {tableHeadings?.map((item, i) => (
                                                <React.Fragment key={i}>
                                                    {item.id == 'actions' ?
                                                        <>
                                                            <TableCell sx={{ display: "flex", paddingBottom: '5px' }}>
                                                                <IconButton onClick={() => detailView(row)}>
                                                                    <VisibilityIcon />
                                                                </IconButton>
                                                                {!readable && (
                                                                    <>
                                                                        <IconButton aria-label="edit" onClick={() => editData(row)}>
                                                                            <EditIcon />
                                                                        </IconButton>
                                                                        <IconButton onClick={() => confirmDelete(row.ID || row.Id)} aria-label="delete">
                                                                            <DeleteIcon sx={{ color: 'red' }} />
                                                                        </IconButton>
                                                                    </>
                                                                )}
                                                            </TableCell>
                                                        </>
                                                        : item.id === 'IsActive' ? (
                                                            <TableCell sx={{ paddingY: '5px', fontWeight: 600, color: row.IsActive ? 'green' : 'red' }}>{row.IsActive ? 'Active' : 'In Active'}</TableCell>
                                                        ) : item.id === 'id' ? (
                                                            <TableCell sx={{ paddingY: '10px' }}>{(page * rowsPerPage) + rowIndex + 1}</TableCell>
                                                        ) :
                                                            item.id === 'SampleId' ? (
                                                                <Tooltip arrow title="Click for Details" placement="bottom">
                                                                    <TableCell onClick={() => sampleDetailView(row)} sx={{ paddingY: '10px', color: '#27A3B9', fontWeight: '600', cursor: 'pointer' }}>
                                                                        {row[item.id] || '-'}
                                                                    </TableCell>
                                                                </Tooltip>
                                                            ) :
                                                                forHIS.includes(item.id) && showColor ? (
                                                                    <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', backgroundColor: '#f2c6ff !important' }}>{row[item.id] || '-'}</TableCell>
                                                                ) : forAnalyzer.includes(item.id) && showColor ? (
                                                                    <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', backgroundColor: '#94dde8' }}>{row[item.id] || '-'}</TableCell>
                                                                )
                                                                    : (

                                                                        <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', }}>{row[item.id] || '-'}</TableCell>
                                                                    )
                                                    }


                                                </React.Fragment>
                                            ))}
                                        </TableRow>
                                    ))}
                                </>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={tableHeadings?.length + (!readable ? 1 : 0)} sx={{ paddingY: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>No Data Found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={sortedData?.length || 0}
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
