import { Button, Card, CardHeader, Grid, Stack, TextField, Typography, Box, Modal } from '@mui/material'
import React, { useEffect } from 'react'
import TextFieldComponent from '../TextFieldComponent'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../App.css'
import SelectFieldComponent from '../SelectFieldComponent';

const AddEditPopup = ({ openModal, setOpenModal, editDataValue }) => {

    const [editValue, setEditValue] = editDataValue;

    const schema = yup.object().shape({
        name: yup.string().required('required'),
        vendor: yup.string().required('required'),
        isActive: yup.boolean().required('required'),
        createdOn: yup.string().required('required'),
        updatedOn: yup.string().required('required'),
        createdBy: yup.string().required('required'),
        updatedBy: yup.string().required('required'),
    });

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
    console.log("errors", errors);

    useEffect(() => {
        if (editValue?.id) {
            console.log("jjj", editValue);
            setValue('name', editValue?.name)
            setValue('vendor', editValue?.vendor)
            setValue('isActive', editValue?.isActive)
            setValue('createdOn', editValue?.createdOn)
            setValue('updatedOn', editValue?.updatedOn)
            setValue('createdBy', editValue?.createdBy)
            setValue('updatedBy', editValue?.updatedBy)
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
        console.log("data", data);
    }



    return (
        <>
            <Modal
                open={openModal}
                onClose={Close}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '10px', width: '80%', borderRadius: '20px' }}>
                        {/* <CardHeader title="Add Data" /> */}
                        <Typography sx={{ fontSize: '30px', textAlign: 'center', padding: '10px', fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography>
                        <form onSubmit={onSubmit} >
                            <Grid container spacing={2} sx={{mx:3}}  >

                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7} >
                                    <TextFieldComponent
                                        name={'name'}
                                        label={'Name'}
                                        register={register}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7} >
                                    <TextFieldComponent
                                        name={'vendor'}
                                        label={'Vendor'}
                                        register={register}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7}>
                                    <SelectFieldComponent
                                        name={'isActive'}
                                        label={'IsActive'}
                                        menuOptions={[{ label: 'True', value: true }, { label: 'False', value: false }]}
                                        register={register}
                                        watch={watch}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7} >
                                    <TextFieldComponent
                                        name={'createdOn'}
                                        label={'CreatedOn'}
                                        register={register}
                                        type='date'
                                    />
                                </Grid>
                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7} >
                                    <TextFieldComponent
                                        name={'updatedOn'}
                                        label={'UpdatedOn'}
                                        register={register}
                                        type='date'
                                    />
                                </Grid>
                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7}>
                                    <TextFieldComponent
                                        name={'createdBy'}
                                        label={'CreatedBy'}
                                        register={register}
                                        type='date'
                                    />
                                </Grid>
                                <Grid item xs={10.5} sm={5.5} md={3.7} lg={3.7}>
                                    <TextFieldComponent
                                        name={'updatedBy'}
                                        label={'UpdatedBy'}
                                        register={register}
                                        type='date'
                                    />
                                </Grid>
                                <Box sx={{ width: '100%', m: 2 }}>
                                    <Grid item xs={12}
                                        md={9}>
                                        <Stack direction={'row'} gap={3} sx={{ width: '50%' }}>
                                            <Button fullWidth variant="contained" type='submit'>Add</Button>
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