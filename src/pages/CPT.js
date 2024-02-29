import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { cptsTableHeadings, data } from '../configData'
import { GetData } from '../fetchServices'

const CPT = () => {

  const URL = 'Cpts';
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
    fetchData()
  }, [])

  return (
    <>
     <TableData 
       url={URL}
       data={data}
       headingName={'CPT'}
       tableHeadings={cptsTableHeadings}
       fetchData={fetchData}
     />
    </>
  )
}

export default CPT