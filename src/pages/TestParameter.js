import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, testParameterTableHeadings } from '../configData'
import { useDispatch, useSelector } from 'react-redux'
import { getTestParameter } from '../redux/actions/testsActions'

const TestParameter = () => {

  const URL = 'TestParameters';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testParameterList =  useSelector((state) => state.testsReducer.testParameterList);

  useEffect(()=>{
    dispatch(getTestParameter(URL));
  },[])
  
  useEffect(()=>{
    if(testParameterList && testParameterList?.length){
      setData(testParameterList)
    }
  },[testParameterList])

  return (
    <>
     <TableData
        url={URL}
        data={data}
        rerender = {getTestParameter}
        headingName={'Test Parameter'}
        tableHeadings={testParameterTableHeadings}
      />
    </>
  )
}

export default TestParameter