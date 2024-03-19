import { Button, Card, Grid, Stack, Typography, Box, Modal, Paper, IconButton } from '@mui/material'
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
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

const HISAnalyzerDialog = ({ modalValue, editDataValue, url, LisCodesList, analyzersList, hisList, rerender }) => {

    const dispatch = useDispatch()
    const [editValue, setEditValue] = editDataValue;
    const [openHisModal, setOpenHisModal] = modalValue;
    const [dataKeys, setDataKeys] = useState({})
    // const schema = yup.object().shape(schemaData[url]);
    const currentDateTime = new Date().toISOString();
    const [analyzerMenuOptions, setAnalyzerMenuOptions] = useState([]);
    const [hisMenuOptions, setHisMenuOptions] = useState([]);
    const [typeMenuOptions, setTypeMenuOptions] = useState([
        { label: 'CHAR', value: 'Char' },
        { label: 'NUM', value: 'Num' },
    ])


    const hisSchema = {
        hisId: yup.number().required('required'),
        hiscode: yup.string().required('required'),
        analyzerId: yup.number().required('required'),
        analyzerCode: yup.string().required('required'),
        aparamName: yup.string().required('required'),
        parameterName: yup.string().required('required'),
        hunit: yup.string().required('required'),
        aunt: yup.string().required('required'),
        hrange: yup.string().required('required'),
        arange: yup.string().required('required'),
    }

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(hisSchema),
    });
    // console.log("errors", errors);

    const upperCase = (data) => {
        if (data?.length) {
            return data.slice(0, 1).toUpperCase() + data.slice(1)
        }
    }

    useEffect(() => {
        setDataKeys({
            'HIS': Object.keys(schemaData['HISAnalyzer']['HIS']),
            'Analyzer': Object.keys(schemaData['HISAnalyzer']['Analyzer']),
        }
        )
    }, [url])

    useEffect(() => {
        if (analyzersList?.length) {
            let data = []
            analyzersList && analyzersList?.map((item, i) => {
                data.push({ label: item?.name, value: item.id })
            })
            setAnalyzerMenuOptions(data)
        }
        if (hisList?.length) {
            let data = []
            hisList.map((item, i) => {
                data.push({ label: item?.name, value: item.id })
            })
            setHisMenuOptions(data)
        }
    }, [analyzersList, LisCodesList, hisList])

    useEffect(() => {
        if (editValue?.id) {
            Object.keys(editValue).forEach(key => {
                const name = editValue[key];
                if (key == 'hisName') {
                    const defaultValue = hisMenuOptions.find(option => option.label === name);
                    if (defaultValue) setValue('hisId', defaultValue);
                }
                if (key == 'analyzerName') {
                    const defaultValue = analyzerMenuOptions.find(option => option.label === name);
                    if (defaultValue) setValue('analyzerId', defaultValue);
                }
                else {
                    setValue(key, editValue[key]);
                }
            });
        }
    }, [editValue]);

    const Close = () => {
        setEditValue({})
        reset()
        setOpenHisModal(false)
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
        addData.aunt = data.aunit;

        delete data.aunit

        if (editValue?.id) {
            data.id = editValue.id
            if (data.analyzerId) {
                delete data.analyzerName;

                if (data.analyzerId?.label) {
                    data.analyzerId = data.analyzerId.value
                }
            }
            if (data.hisId) {
                delete data.analyzerName;
                if (data.hisId?.label) {
                    data.hisId = data.hisId.value
                }
            }
            dispatch(updateDataAction(url, editValue.id, data, rerender))
            Close()
        } else {
            dispatch(addDataAction(url, addData, rerender))
            Close()
        }
    }

    return (
        <>
            <Modal
                open={openHisModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80%', height: '90%', border: 'none !important' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '20px', minWidth: '90%', borderRadius: '20px', overflowY: 'scroll', }}>
                        {/* <Typography sx={{ fontSize: '24px', textAlign: 'center', padding: '10px', pb: 0, fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography> */}
                        <Typography sx={{ fontSize: '24px', padding: '10px', ml: 4, fontWeight: '600' }}> HIS-Analyzer Mapping</Typography>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <Stack spacing={2} gap={2} sx={{ mt: 3, mx: 3, display: 'flex', flexDirection: ['column', 'row', 'row'] }}>
                                <Grid container spacing={2} lg={6} md={6} sm={12} sx={{ mx: 1, }}>
                                    <Box sx={{ backgroundColor: '#f2c6ff', margin: '0 auto', width: '100%', borderRadius: '20px', p: 2,boxShadow:'3px 3px 10px'  }}>
                                        <Grid item xs={12} sx={{ px: 3, pb: 2 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>HIS</Typography>
                                            <Paper sx={{ p: 2 }}>
                                                {dataKeys.HIS?.map((item, i) => (
                                                    <Stack spacing={2} sx={{ mt: i == 0 ? 0 : 2.5 }} key={item + i}>
                                                        {item === "hisId" ? (
                                                            <SelectFieldComponent
                                                                name={item}
                                                                label={'HIS ID'}
                                                                menuOptions={hisMenuOptions}
                                                                register={register}
                                                                watch={watch}
                                                                setValue={setValue}
                                                            />
                                                        ) : (
                                                            <>
                                                                {item === 'desc' || item === 'description' ? (
                                                                    <TextFieldComponent
                                                                        // fullWidth
                                                                        multiline
                                                                        rows={3}
                                                                        name={item}
                                                                        label={upperCase(item)}
                                                                        register={register}
                                                                    />)
                                                                    :
                                                                    (
                                                                        <TextFieldComponent
                                                                            name={item}
                                                                            label={upperCase(
                                                                                item == 'hunit' ? 'Unit Of Measure' :
                                                                                        item == 'hparamName' ? 'Test Name' :
                                                                                                item == 'hrange' ? 'Range' :
                                                                                                    item == 'hisCode' ? 'Test ID' :
                                                                                                        item)}
                                                                            register={register}
                                                                        />
                                                                    )}
                                                            </>
                                                        )}
                                                    </Stack>
                                                ))}
                                            </Paper>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid container lg={1} md={1} sm={1} sx={{ mt: 4 }} >
                                    <Paper sx={{ p: 2 }}>
                                        {[1, 2, 3, 4, 5]?.map((item, i) => (
                                            <Stack spacing={2} sx={{ mt: 4.5 }} direction={'coloumn'} key={item + i}>
                                                <IconButton sx={{
                                                    backgroundColor: '#1976d2',
                                                    '&:hover': {
                                                        backgroundColor: '#1565c0',
                                                    }
                                                }} >
                                                    <SettingsEthernetIcon sx={{ color: 'white' }} />
                                                </IconButton>
                                            </Stack>
                                        ))}
                                    </Paper>
                                </Grid>
                                <Grid container spacing={2} lg={6} md={6} sm={12} sx={{ mx: 1, marginTop: '0px !important' }}>
                                    <Box sx={{ backgroundColor: '#94dde8', margin: '0 auto', width: '100%', borderRadius: '20px', p: 2 ,boxShadow:'3px 3px 10px' }}>
                                        <Grid item xs={12} sx={{ px: 3, pb: 2 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>Analyzer</Typography>
                                            <Paper sx={{ p: 2 }}>
                                                {dataKeys.Analyzer?.map((item, i) => (
                                                    <Stack spacing={2} sx={{ mt: i == 0 ? 0 : 2.5 }} key={item + i}>
                                                        {item === "analyzerId" ? (
                                                            <SelectFieldComponent
                                                                name={item}
                                                                label={'Analyzer ID'}
                                                                menuOptions={analyzerMenuOptions}
                                                                register={register}
                                                                watch={watch}
                                                                setValue={setValue}
                                                            />
                                                        ) : (
                                                            <>
                                                                {item === 'desc' || item === 'description' ? (
                                                                    <TextFieldComponent
                                                                        // fullWidth
                                                                        multiline
                                                                        rows={3}
                                                                        name={item}
                                                                        label={upperCase(item)}
                                                                        register={register}
                                                                    />)
                                                                    :
                                                                    (
                                                                        <TextFieldComponent
                                                                            name={item}
                                                                            label={upperCase(
                                                                                    item == 'aunit' ? 'Unit Of Measure' :
                                                                                            item == 'aparamName' ? 'Parameter Name' :
                                                                                                    item == 'arange' ? 'Range' :
                                                                                                    item == 'analyzerCode' ? 'Host Code' :
                                                                                                        item)}
                                                                            register={register}
                                                                        />
                                                                    )}
                                                            </>
                                                        )}
                                                    </Stack>
                                                ))}
                                            </Paper>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Stack>

                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Grid item xs={12} md={9}>
                                    <Stack direction={'row'} gap={3} sx={{ width: '100%' }}>
                                        <Button sx={{ width: '200px' }} fullWidth variant="contained" type="submit">
                                            {editValue.id ? 'Update' : 'Add'}
                                        </Button>
                                        <Button sx={{ width: '200px' }} fullWidth variant="contained" color="error" onClick={Close}>
                                            Cancel
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Box>
                        </form>

                    </Card>
                </Box>
            </Modal>
        </>

    )
}

export default HISAnalyzerDialog