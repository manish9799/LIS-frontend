import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { GetData } from '../fetchServices';
import AlertDialog from '../components/AlertDialog';

const InvoiceDetails = () => {
  const URL = 'InvoiceDetails';
  const [data,setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await GetData(URL);
      setData(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  // useEffect(() => {
  //   GetData('InvoiceDetails')
  // }, [])
  return (
    <>
    {/* <AlertDialog /> */}
      <TableData
        url={URL}
        data={data}
        headingName={'InvoiceDetails'}
        tableHeadings={analyzerTableHeadings}
        fetchData={fetchData}
      />
    </>
  )
}

export default InvoiceDetails