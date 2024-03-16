import {Card, Stack, Typography, Box, Modal, IconButton, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'
import { useSelector } from 'react-redux';
import { SampleDetailsTableHeadings } from '../../configData';

const SampleIdDetailPopup = ({ detailsModalValue, editDataValue }) => {

    const [editValue, setEditValue] = editDataValue;
    const [openDetailsModal, setOpenDetailsModal] = detailsModalValue;
    const [dataKeys, setDataKeys] = useState([])
    const pathologyResultDetailsList =  useSelector((state) => state.pathologyReducer.pathologyResultDetailsList);

    const upperCase = (data) => {
        if (data?.length) {
            return data.slice(0, 1).toUpperCase() + data.slice(1)
        }
    }

    // useEffect(() => {
    //     setDataKeys(Object.keys(editValue))
    // }, [editValue])

    const Close = () => {
        setOpenDetailsModal(false)
    }

    return (
        <>
            <Modal
                open={openDetailsModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Card sx={{ position: 'relative', backgroundColor: '#f5f5f5', pb: '5px', minWidth: '40%', maxHeight: '80vh', borderRadius: '20px', overflowY: 'scroll', textAlign: 'center', border: '1px solid black', boxShadow: '1px 2px 15px black' }}>
                        <Typography sx={{ fontSize: '28px', textAlign: 'center', padding: '10px', fontWeight: 'bold', color: 'white', backgroundColor: 'gray' }}>Details</Typography>
                        <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                            <IconButton onClick={Close} sx={{ color: '#ffffff', backgroundColor: 'black' }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', padding: '0 20px', mt: 2 }}>
                            {/* <Box >
                                {dataKeys?.map((item, i) => (
                                    <Stack key={i} direction={'row'} gap={1} sx={{ textAlign: 'justify', paddingBottom: '8px' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: 'bold', color: '#666' }}>{upperCase(item)}</Typography> : <Typography sx={{ fontSize: '17px', color: '#444' }}>{editValue[item] || '-'}</Typography>
                                    </Stack>
                                ))}
                            </Box> */}
                              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{backgroundColor:'black !important'}}>
              {SampleDetailsTableHeadings.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{color:'black'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pathologyResultDetailsList.map((row,rowId) => {
                return (
                  <TableRow hover 
                //   role="checkbox" tabIndex={-1}
                   key={row.id}>
                    {SampleDetailsTableHeadings?.map((column) => {
                      const value = row[column.id];
                      if(column == 'id'){
                          return (
                            <TableCell key={column.id} >
                              {rowId+1}
                            </TableCell>
                        ) 
                      }else{
                        return (
                            <TableCell key={column.id} >
                              {value}
                            </TableCell>
                          );
                      }
                    })}
                  </TableRow>
                );
              })}
                  </TableBody>
        </Table>
      </TableContainer>
      </Paper>
                        </Box>
                    </Card>
                </Box>
            </Modal>
        </>
    )
}

export default SampleIdDetailPopup;