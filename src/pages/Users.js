import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/othersActions';

const Users = () => {
  const URL = 'Users';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const usersList =  useSelector((state) => state.othersReducer.usersList);

  useEffect(()=>{
    dispatch(getUsers(URL));
  },[])
  
  useEffect(()=>{
    if(usersList && usersList?.length){
      setData(usersList)
    }
  },[usersList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getUsers}
        headingName={'Users'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default Users

