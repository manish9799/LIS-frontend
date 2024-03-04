import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../redux/actions/invoiceOrderActions';

const OrderDetails = () => {
  const URL = 'OrderDetails';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const orderDetailsList =  useSelector((state) => state.invoiceOrderReducer.orderDetailsList);

  useEffect(()=>{
    dispatch(getOrderDetails(URL));
  },[])
  
  useEffect(()=>{
    if(orderDetailsList && orderDetailsList?.length){
      setData(orderDetailsList)
    }
  },[orderDetailsList])
  
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getOrderDetails}
        headingName={'OrderDetails'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default OrderDetails