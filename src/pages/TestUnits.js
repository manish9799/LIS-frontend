import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getTestUnits } from '../redux/actions/testsActions';

const TestUnits = () => {
  const URL = 'TestUnits';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testSamplesList =  useSelector((state) => state.testsReducer.testSamplesList);

  useEffect(()=>{
    dispatch(getTestUnits(URL));
  },[])
  
  useEffect(()=>{
    if(testSamplesList && testSamplesList?.length){
      setData(testSamplesList)
    }
  },[testSamplesList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getTestUnits}
        headingName={'TestUnits'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default TestUnits