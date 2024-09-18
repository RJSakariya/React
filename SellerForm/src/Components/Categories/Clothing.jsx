import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Clothing({size, setSize,clothCategory, setClothCategory,clothMaterial, setClothMaterial}) {
  return (
    <>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">SIZE</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="SIZE"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"XXS"}>XXS</MenuItem>
          <MenuItem value={"XS"}>XS</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
          <MenuItem value={"S/M"}>S/M</MenuItem>
          <MenuItem value={"M"}>M</MenuItem>
          <MenuItem value={"M/L"}>M/L</MenuItem>
          <MenuItem value={"L"}>L</MenuItem>
          <MenuItem value={"L/XL"}>L/XL</MenuItem>
          <MenuItem value={"XL"}>XL</MenuItem>
          <MenuItem value={"XL/XXL"}>XL/XXL</MenuItem>
          <MenuItem value={"XXXL"}>XXXL</MenuItem>
          <MenuItem value={"XXXXL"}>XXXXL</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">WEAR</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="WEAR"
          value={clothCategory}
          onChange={(e) => setClothCategory(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"CHILDREN"}>{"CHILDREN"}</MenuItem>
          <MenuItem value={"MEN'S"}>{"MEN'S"}</MenuItem>
          <MenuItem value={"WOMEN'S"}>{"WOMEN'S"}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">METERIAL</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="METERIAL"
          value={clothMaterial}
          onChange={(e) => setClothMaterial(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={"SILK"}>SILK</MenuItem>
          <MenuItem value={"LINEN"}>LINEN</MenuItem>
          <MenuItem value={"POLYESTER"}>POLYESTER</MenuItem>
          <MenuItem value={"COTTON"}>COTTON</MenuItem>
          <MenuItem value={"WOOL"}>WOOL</MenuItem>
          <MenuItem value={"DENIM"}>DENIM</MenuItem>
          <MenuItem value={"NYLON"}>NYLON</MenuItem>
          <MenuItem value={"VISCOSE"}>VISCOSE</MenuItem>
          <MenuItem value={"FUR"}>FUR</MenuItem>
          <MenuItem value={"VELVET"}>VELVET</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
