import React from 'react'
import TableComponent from './TableComponent'
import MainContainer from './MainContainer';

const Analyzer = () => {

  const columns = ['Name','Info','Actions']
  const data = [
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
    {id:1,name:'manish',info:'ppppppppppp'},
  ];
  
  return (
    <>
    <MainContainer>
    {/* <div style={{width:'100%',display:'flex',alignItems:'center'}}> */}

    <TableComponent 
      columns={columns}
      data={data}
    />
    {/* </div> */}

    </MainContainer>
    </>
  )
}

export default Analyzer