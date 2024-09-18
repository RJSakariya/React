import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Book({ bookAuthor, setBookAuthor, bookColor, setBookColor, bookPages, setBookPages }) {
  return (
    <>
      <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={bookAuthor} type="text" label='ENTER AUTHOR NAME' onChange={(e) => setBookAuthor(/^[a-zA-Z,'.\-\s]*$/.test(e.target.value) ? e.target.value.toUpperCase() : e.target.value.slice(0, e.target.value.length - 1))}></TextField>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">BOOK COLOR</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="BOOK COLOR"
          value={bookColor}
          onChange={(e) => setBookColor(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"RED"}>RED</MenuItem>
          <MenuItem value={"YELLOW"}>YELLOW</MenuItem>
          <MenuItem value={"BLUE"}>BLUE</MenuItem>
          <MenuItem value={"BLACK"}>BLACK</MenuItem>
          <MenuItem value={"PINK"}>PINK</MenuItem>
        </Select>
      </FormControl>
      <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={bookPages} type="number" label='ENTER BOOK PAGES' onChange={(e) => setBookPages(e.target.value)}></TextField>
    </>
  )
}
