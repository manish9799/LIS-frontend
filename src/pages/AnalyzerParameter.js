import React, { useEffect, useState } from 'react'
import { analyzerParameterTableHeadings, data } from '../configData'
import TableData from '../components/TableComponent/TableData'
import { GetData } from '../fetchServices'

const AnalyzerParameter = () => {

  const URL = 'AnalyzerParameters';
  const [data,setData] = useState([]);
  const [analyzers,setAnalyzers] = useState([])
  const [LisCodes,setLisCodes] = useState([])

  const fetchData = async () => {
    try {
      const result = await GetData(URL);
      setData(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const analyzersData = async () => {
    try {
      const result = await GetData('Analyzers');
      setAnalyzers(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const LisCodesData = async () => {
    try {
      const result = await GetData('LisCodes');
      setLisCodes(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
    analyzersData()
    LisCodesData()
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TableData
        url={URL}
        data={data}
        headingName={'Analyzer Parameters'}
        tableHeadings={analyzerParameterTableHeadings}
        fetchData={fetchData}
        analyzersList={analyzers}
        LisCodesList={LisCodes}
      />
    </>
  )
}

export default AnalyzerParameter