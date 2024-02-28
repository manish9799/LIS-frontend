import React, { useEffect, useState } from 'react'
import { analyzerParameterTableHeadings, data } from '../configData'
import TableData from '../components/TableComponent/TableData'
import { GetData } from '../fetchServices'

const AnalyzerParameter = () => {

  const URL = 'AnalyzerParameter';
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
  //   GetData('AnalyzerParameter')
  // }, [])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        tableHeadings={analyzerParameterTableHeadings}
      />
    </>
    
  )
}

export default AnalyzerParameter