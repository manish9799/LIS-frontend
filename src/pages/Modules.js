import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getModules } from '../redux/actions/othersActions';

const Modules = () => {
  const URL = 'Modules';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const modulesList =  useSelector((state) => state.othersReducer.modulesList);

  useEffect(()=>{
    dispatch(getModules(URL));
  },[])
  
  useEffect(()=>{
    if(modulesList && modulesList?.length){
      setData(modulesList)
    }
  },[modulesList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getModules}
        headingName={'Modules'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default Modules