import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getTestSamples } from '../redux/actions/testsActions';

const TestSamples = () => {
  const URL = 'TestSamples';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testSamplesList =  useSelector((state) => state.testsReducer.testSamplesList);

  useEffect(()=>{
    dispatch(getTestSamples(URL));
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
        rerender = {getTestSamples}
        headingName={'TestSamples'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default TestSamples