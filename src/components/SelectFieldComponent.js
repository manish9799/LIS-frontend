import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectFieldComponent = ({ menuOptions, name, label,register,watch }) => {
    return (
            <>
                <FormControl fullWidth>
                    <InputLabel id={name}>{label}</InputLabel>
                    <Select
                        name={name}
                        labelId={name}
                        variant="outlined"
                        label={label}
                        value={watch(`${name}`)}
                        {...register(`${name}`)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >
                        {menuOptions?.length && menuOptions.map((list) => {
                            return (
                                <MenuItem value={list.value}> {list.label} </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </>
    )
}

export default SelectFieldComponent