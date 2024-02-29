import { Button, Card, CardHeader, Grid, Stack, TextField, Typography, Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextFieldComponent from '../TextFieldComponent'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../App.css'
import SelectFieldComponent from '../SelectFieldComponent';
import { UpdateData, postData } from '../../fetchServices';
import { schemaData } from '../../schemaData';
import AlertDialog from '../AlertDialog';

const AddEditPopup = ({ modalValue, editDataValue,url,fetchData }) => {

    const [editValue, setEditValue] = editDataValue;
    const [openModal, setOpenModal] = modalValue;
    const [dataKeys,setDataKeys] = useState([])
    const schema = yup.object().shape(schemaData[url]);
    const [open,setOpen] = useState(false);
    const [alertType,setAlertType] = useState({
        type: 'info',
        message:'Data updated successfully'
    })

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
        if(data.length){
            return data.slice(0,1).toUpperCase() + data.slice(1)
        }
    }

    useEffect(()=>{
        setDataKeys(Object.keys(schemaData[url]))
    },[url])

    useEffect(() => {
        if (editValue?.id) {
            // console.log('pp',(Object.keys(schemaData[url])));
            setValue('name', editValue?.name)
            setValue('vendor', editValue?.vendor)
            setValue('isActive', editValue?.isActive)
            // setValue('createdOn', editValue?.createdOn)
            // setValue('updatedOn', editValue?.updatedOn)
            // setValue('createdBy', editValue?.createdBy)
            // setValue('updatedBy', editValue?.updatedBy)
        }
    }, [editValue])

    const Close =()=>{
        setEditValue({})
        reset()
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let data = watch()
        let addData = data;
        // addData.createdBy = 0;
        // addData.updatedBy = 0;
        addData.id = 0;
        if(editValue?.id){
            data.id = editValue.id
            UpdateData(url,editValue.id,data)
            Close()
            setTimeout(() => {
                fetchData()
                setOpen(true)
                setAlertType({type:'info',message:'Data updated successfully'})
            }, 1000);
        }else{
            postData(url,addData)
            Close()
            setTimeout(() => {
                fetchData()
                setOpen(true)
                setAlertType({type:'success',message:'Post data successfully'})
            }, 1000);
        }
    }

    return (
        <> 
        <AlertDialog openAlert={[open,setOpen]} type={alertType.type} message={alertType.message}  />
            <Modal
                open={openModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '10px', width: '80%', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', textAlign: 'center', padding: '10px', fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography>
                        <form onSubmit={onSubmit} >
                            <Grid container spacing={2} sx={{mx:3}}  >
                                {dataKeys?.map((item,i)=>(
                                    <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7}>
                                        {item == 'isActive' ? 
                                        <SelectFieldComponent
                                            name={item}
                                            label={upperCase(item)}
                                            menuOptions={[{ label: 'True', value: true }, { label: 'False', value: false }]}
                                            register={register}
                                            watch={watch}
                                        /> 
                                        : item == 'desc' || item ==  'description' ? 
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