import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, testParameterTableHeadings } from '../configData'
import { useDispatch, useSelector } from 'react-redux'
import { getTestParameter } from '../redux/actions/testsActions'
import { getCpt, getLisCodes } from '../redux/actions/servicesActions'

const TestParameter = () => {

  const URL = 'TestParameters';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testParameterList =  useSelector((state) => state.testsReducer.testParameterList);
  const {cptList,lisCodesList,} =  useSelector((state) => state.servicesReducer);

  useEffect(()=>{
    dispatch(getTestParameter(URL));
    dispatch(getCpt('Cpts'));
    dispatch(getLisCodes('LisCodes'));
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
        cptList={cptList}
        LisCodesList={lisCodesList}
      />
    </>
  )
}

export default TestParameter