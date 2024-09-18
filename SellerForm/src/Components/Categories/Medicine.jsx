import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Medicine(medicineCategory, setMedicineCategory, medicineExpired, setMedicineExpired, medicineSet, setMedicineSet) {
  return (
    <>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">MEDICINE CATEGORY</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="MEDICINE CATEGORY"
          value={medicineCategory}
          onChange={(e) => setMedicineCategory(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"MOUTH"}>MOUTH</MenuItem>
          <MenuItem value={"FEAER"}>FEVAR</MenuItem>
          <MenuItem value={"LEG PAIN"}>LEG PAIN</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          value={medicineExpired}
          disablePast
          label="EXPIRY DATE"
          onChange={(e) => setMedicineExpired(e.target.value)}
          sx={{ marginTop: 2 }}
        />
      </LocalizationProvider>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">TABLET PER PACKET</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="TABLET PER PACKET"
          value={medicineSet}
          onChange={(e) => setMedicineSet(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"8 TABLATES"}>8 TABLATES</MenuItem>
          <MenuItem value={"10 TABLETS"}>10 TABLETS</MenuItem>
          <MenuItem value={"12 TABLATES"}>12 TABLATES</MenuItem>
          <MenuItem value={"15 TABLATES"}>15 TABLATES</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
