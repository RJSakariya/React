import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DateField} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// eslint-disable-next-line react/prop-types
export default function Food({foodCategory, setFoodCategory, vagOrNon, setVagOrNon, foodExpired, setFoodExpired}) {
  return (
    <>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">FOOD CATAGORY</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="FOOD CATAGORY"
          value={foodCategory}
          onChange={(e) => setFoodCategory(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"PIZZA"}>PIZZA</MenuItem>
          <MenuItem value={"BURGER"}>BURGER</MenuItem>
          <MenuItem value={"VADA-PAW"}>VADA PAW</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">VEG OR NON VEG</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="VEG OR NON VEG"
          value={vagOrNon}
          onChange={(e) => setVagOrNon(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"VEG"}>VEG</MenuItem>
          <MenuItem value={"NON-VEG"}>NON VEG</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          value={foodExpired}
          disablePast
          label="EXPIRY DATE"
          onChange={(e) => setFoodExpired(e.target.value)}
          sx={{marginTop:2}}
        />
      </LocalizationProvider>
    </>
  )
}
