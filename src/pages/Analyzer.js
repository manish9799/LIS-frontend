import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { GetData } from '../fetchServices';
import AlertDialog from '../components/AlertDialog';

const Analyzer = () => {
  const URL = 'Analyzers';
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
  //   GetData('Analyzers')
  // }, [])
  return (
    <>
    <AlertDialog />
      <TableData
        url={URL}
        fetchData={fetchData}
        data={data}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default Analyzer