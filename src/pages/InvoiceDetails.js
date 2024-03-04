import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { getInvoiceDetails } from '../redux/actions/invoiceOrderActions';
import { useDispatch, useSelector } from 'react-redux';

const InvoiceDetails = () => {
  const URL = 'InvoiceDetails';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const invoiceDetailsList =  useSelector((state) => state.invoiceOrderReducer.invoiceDetailsList);

  useEffect(()=>{
    dispatch(getInvoiceDetails(URL));
  },[])
  
  useEffect(()=>{
    if(invoiceDetailsList && invoiceDetailsList?.length){
      setData(invoiceDetailsList)
    }
  },[invoiceDetailsList])
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getInvoiceDetails}
        headingName={'InvoiceDetails'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default InvoiceDetails