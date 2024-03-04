import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../redux/actions/othersActions';

const Roles = () => {
  const URL = 'Roles';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const rolesList =  useSelector((state) => state.othersReducer.rolesList);

  useEffect(()=>{
    dispatch(getRoles(URL));
  },[])
  
  useEffect(()=>{
    if(rolesList && rolesList?.length){
      setData(rolesList)
    }
  },[rolesList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getRoles}
        headingName={'Analyzers'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}
export default Roles