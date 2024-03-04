import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { getPathologyResultMasters } from '../redux/actions/pathologyActions';
import { useDispatch, useSelector } from 'react-redux';

const PathologyResultMasters = () => {
  const URL = 'PathologyResultMasters';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const pathologyResultMastersList =  useSelector((state) => state.pathologyReducer.pathologyResultMastersList);

  useEffect(()=>{
    dispatch(getPathologyResultMasters(URL));
  },[])
  
  useEffect(()=>{
    if(pathologyResultMastersList && pathologyResultMastersList?.length){
      setData(pathologyResultMastersList)
    }
  },[pathologyResultMastersList])
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getPathologyResultMasters}
        headingName={'PathologyResultMasters'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default PathologyResultMasters