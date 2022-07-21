import React from 'react'
import { TextField,Grid,InputAdornment,IconButton } from '@material-ui/core'
const Input = ({half}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
        name={name}
        />
    </Grid>
  )
}

export default Input