import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Eletronic({eletronicCategory, setEletronicCategory,chargeble, setChargeble,warranty, setWarranty}) {
  return (
    <>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">ITEM</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="ITEM"
          value={eletronicCategory}
          onChange={(e) => setEletronicCategory(e.target.value)}
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
          value={chargeble}
          onChange={(e) => setChargeble(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"CHARGEBLE"}>{"CHARGEBLE"}</MenuItem>
          <MenuItem value={"NOT CHARGEBLE"}>{"NOT CHARGEBLE"}</MenuItem>
        </Select>
      </FormControl>
      <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={warranty} type="number" label='ENTER WARRENTY IN MONTHS' onChange={(e) => setWarranty(e.target.value)}></TextField>
    </>
  )
}
