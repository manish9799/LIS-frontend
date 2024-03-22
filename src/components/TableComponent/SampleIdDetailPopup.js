import { Card, Stack, Typography, Box, Modal, IconButton, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'
import { useSelector } from 'react-redux';
import { SampleDetailsTableHeadings } from '../../configData';

const SampleIdDetailPopup = ({ detailsModalValue, editDataValue,sampleFilterId }) => {

  const [editValue, setEditValue] = editDataValue;
  const [openDetailsModal, setOpenDetailsModal] = detailsModalValue;
  const [dataKeys, setDataKeys] = useState([])
  const pathologyResultDetailsList = useSelector((state) => state.pathologyReducer.pathologyResultDetailsList);
  const [detailsList, setDetailsList] = useState([]);
  const [loading, setLoading] = useState(true)
  const detailsData = [
    {label:'OrderDetail ID',value:'OrderDetailId'},
    {label:'Sent',value:'Sent'},
    {label:'Sample ID',value:'SampleId'},
    {label:'CPT Name',value:'CPTName'},
    {label:'Name',value:'Patient'},
    {label:'MRN',value:'MRN'},
  ]

  const upperCase = (data) => {
    if (data?.length) {
      return data.slice(0, 1).toUpperCase() + data.slice(1)
    }
  }

  useEffect(() => {
    if (pathologyResultDetailsList?.length) {
      let data;
      if( sampleFilterId == 'MRN'){
        data = pathologyResultDetailsList.filter((item, i) => item.MRN == editValue.MRN)
      }else{
        data = pathologyResultDetailsList.filter((item, i) => item.SampleID == editValue.SampleId)
      }
      setDetailsList(data)
      setLoading(false)
    }
  }, [pathologyResultDetailsList,editValue])

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
                            <Card sx={{ width: '100%', margin: '0 auto', my: 0,mb:2, p: 2 }}>
                            {detailsData.map((item, i) => (
                                <Stack  direction={'row'} gap={1} sx={{ 
                                  textAlign: 'justify',
                                  backgroundColor: item.label == 'Name'? 'black': item.label == 'MRN'?'black':'white',
                                  color: item.label == 'Name'? 'white': item.label == 'MRN'?'white':'black',
                                  padding: item.label == 'Name'? '3px': item.label == 'MRN' ? '3px':'0px',
                                  }}
                                  >
                                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: item.label == 'Name'? 'white': item.label == 'MRN'?'white': '#666', width: '120px' }}>{item.label}</Typography> :
                                    <Typography sx={{ fontSize: '14px', color: item.label == 'Name'? 'white': item.label == 'MRN'?'white': '#444', fontWeight: '600', ml: 1 }}>
                                       { `${editValue[item.value] || '-'}`}
                                    </Typography>
                                </Stack>
                            ))}

                        </Card>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {SampleDetailsTableHeadings.map((column) => (
                          <TableCell
                            key={column.id}
                            sx={{ color: 'black' }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={SampleDetailsTableHeadings?.length} sx={{ paddingY: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>
                            <CircularProgress color="primary" />
                          </TableCell>
                        </TableRow>
                      ) : (

                        detailsList.map((row, rowId) => {
                          return (
                            <TableRow hover
                              key={row.id}>
                              {SampleDetailsTableHeadings?.map((column) => {
                                const value = row[column.id];
                                if (column == 'id') {
                                  return (
                                    <TableCell key={column.id} >
                                      {rowId + 1}
                                    </TableCell>
                                  )
                                } else {
                                  return (
                                    <TableCell key={column.id} >
                                      {value || 'null'}
                                    </TableCell>
                                  );
                                }
                              })}
                            </TableRow>
                          );
                        })
                      )}

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