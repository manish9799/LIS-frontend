import React, { useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, liscodesTableHeadings } from '../configData'
import { GetData } from '../fetchServices'

const LISCode = () => {

  const URL = 'LisCodes';
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
  //   GetData('LisCodes')
  // }, [])

  return (
    <>
     <TableData
        url={URL}
        data={data}
        tableHeadings={liscodesTableHeadings}
      />
    </>
  )
}

export default LISCode