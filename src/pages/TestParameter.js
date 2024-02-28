import React, { useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, testParameterTableHeadings } from '../configData'
import { GetData } from '../fetchServices'

const TestParameter = () => {

  const URL = 'TestParameters';
  const [data,setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await GetData(URL);
      setData(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // useEffect(() => {
  //   GetData('TestParameters')
  // }, [])

  return (
    <>
     <TableData
        url={URL}
        data={data}
        tableHeadings={testParameterTableHeadings}
      />
    </>
  )
}

export default TestParameter