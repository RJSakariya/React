import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers';

export default function Food(foodCategory, setFoodCategory, vagOrNon, setVagOrNon, foodExpired, setFoodExpired) {
  return (
    <>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">ITEM</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="ITEM"
          value={foodCategory}
          onChange={(e) => setFoodCategory(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"TV"}>TV</MenuItem>
          <MenuItem value={"REFRIGERATOR"}>REFRIGERATOR</MenuItem>
          <MenuItem value={"WASHING MUCHINE"}>WASHING MUCHINE</MenuItem>
          <MenuItem value={"AC"}>AC</MenuItem>
          <MenuItem value={"FAN"}>FAN</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">CHARGEBLE OR NOT</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="CHARGEBLE"
          value={vagOrNon}
          onChange={(e) => setVagOrNon(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"CHARGEBLE"}>{"CHARGEBLE"}</MenuItem>
          <MenuItem value={"NOT CHARGEBLE"}>{"NOT CHARGEBLE"}</MenuItem>
        </Select>
      </FormControl>
      <DatePicker
        defaultValue={foodExpired}
        disablePast
        views={['day', 'month', 'year']}
        onChange={(e)=>setFoodExpired(e.target.value)}
      />
    </>
  )
}
