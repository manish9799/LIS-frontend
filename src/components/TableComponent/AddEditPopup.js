import { Button, Card, Grid, Stack, TextField, Typography, Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextFieldComponent from '../TextFieldComponent'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../App.css'
import SelectFieldComponent from '../SelectFieldComponent';
import { schemaData } from '../../schemaData';
import { useDispatch } from 'react-redux';
import { addDataAction, updateDataAction } from '../../redux/actions/servicesActions';

const AddEditPopup = ({ modalValue, editDataValue,url,fetchData,LisCodesList,analyzersList,cptList,rerender }) => {

    const dispatch = useDispatch()
    const [editValue, setEditValue] = editDataValue;
    const [openModal, setOpenModal] = modalValue;
    const [dataKeys,setDataKeys] = useState([])
    const schema = yup.object().shape(schemaData[url]);
    const currentDateTime = new Date().toISOString();
    const [analyzerMenuOptions,setAnalyzerMenuOptions] = useState([]);
    const [liscodeMenuOptions,setLiscodeMenuOptions] = useState([]);
    const [cptMenuOptions,setCptMenuOptions] = useState([]);
    const [typeMenuOptions,setTypeMenuOptions] = useState([
        {label:'CHAR',value:'Char'},
        {label:'NUM',value:'Num'},
    ])

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    // console.log("errors", errors);

    const upperCase =(data)=>{
        if(data?.length){
            return data.slice(0,1).toUpperCase() + data.slice(1)
        }
    }

    useEffect(()=>{
        setDataKeys(Object.keys(schemaData[url]))
    },[url])

    useEffect(()=>{
        if(analyzersList?.length){
            let data = []
            analyzersList && analyzersList?.map((item,i)=>{
                data.push({label: item?.name, value: item.id})
            })  
            setAnalyzerMenuOptions(data)
        }
        if(LisCodesList?.length){
            let data = []
            LisCodesList.map((item,i)=>{
                data.push({label: item?.name, value: item.id})
            })  
            setLiscodeMenuOptions(data)
        }
        if(cptList?.length){
            let data = []
            cptList.map((item,i)=>{
                data.push({label: item?.name, value: item.id})
            })  
            setCptMenuOptions(data)
        }
    },[analyzersList,LisCodesList,cptList])

    useEffect(() => {
        if (editValue?.id) {
            Object.keys(editValue).forEach(key => {
                // console.log("pp",key);
                // if(key == '')
                    setValue(key, editValue[key]); 
            });
        }
    }, [editValue]);

    console.log("getValue",watch());

    const Close =()=>{
        setEditValue({})
        reset()
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let data = watch()
        let addData = data;
        addData.createdBy = 1;
        addData.updatedBy = 1;
        addData.createdOn = currentDateTime;
        addData.updatedOn = currentDateTime;
        addData.isActive = true
        addData.id = 0;
        
        if(url === 'Cpts'){
            addData.unitId = 0;
            addData.categoryId = 0;
        }
        if(editValue?.id){
            data.id = editValue.id
            dispatch(updateDataAction(url,editValue.id,data,rerender))
            Close()
        }else{
            dispatch(addDataAction(url,addData,rerender))
            Close()
        }
    }

    return (
        <> 
            <Modal
                open={openModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '10px', maxWidth:'80%', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', textAlign: 'center', padding: '10px', fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography>
                        <form onSubmit={onSubmit} >
                            <Grid container spacing={2} sx={{mx:3}}  >
                                {dataKeys?.map((item,i)=>(
                                    <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7}>
                                        {item === "analyzerId" || item === "liscodeId" || item === "cptid"|| item === "type"? 
                                        <SelectFieldComponent
                                            name={item}
                                            label={ item === "analyzerId" ? 'Analyzers' : item === "liscodeId" ? 'Liscodes' : item === "cptid" ? 'CptId': 'Type' }
                                            menuOptions={item === "analyzerId" ? analyzerMenuOptions :
                                                         item === "liscodeId" ? liscodeMenuOptions :
                                                         item === "cptid" ? cptMenuOptions :
                                                         typeMenuOptions
                                                        }
                                            register={register}
                                            watch={watch}
                                        /> 
                                        : item === 'desc' || item ===  'description' ? 
                                        <TextFieldComponent
                                        multiline
                                        rows={3}
                                            name={item}
                                            label={upperCase(item)}
                                            register={register}
                                        />
                                        :
                                        <TextFieldComponent
                                            name={item}
                                            label={upperCase(item)}
                                            register={register}
                                        />
                                    }
                                 </Grid> 
                                ))}
                                <Box sx={{ width: '100%', m: 2, }}>
                                    <Grid item xs={12}
                                        md={9}>
                                        <Stack direction={'row'} gap={3} sx={{ width: '50%' }}>
                                            <Button fullWidth variant="contained" type='submit'> {editValue.id ? 'Update':'Add'}</Button>
                                            <Button fullWidth variant="contained" color='error' onClick={Close} > Cancel</Button>
                                        </Stack>
                                    </Grid>
                                </Box>
                            </Grid>
                        </form>
                    </Card>
                </Box>
            </Modal>
        </>

    )
}

export default AddEditPopup