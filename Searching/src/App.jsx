import { Table, TableBody, TableCell, TableHead, TableRow, Container, TextField, FormControl, InputLabel, Select, MenuItem, Slider, Box } from '@mui/material';
import './App.css';
import { useEffect, useState } from 'react';

function valuetext(value) {
  return `${value}$`;
}

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const product = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Headphones", price: 150, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 75, category: "Electronics" },
    { id: 4, name: "Monitor", price: 300, category: "Electronics" },
    { id: 5, name: "Mouse", price: 50, category: "Electronics" },
    { id: 6, name: "Chair", price: 250, category: "Furniture" },
    { id: 7, name: "Desk", price: 500, category: "Furniture" },
    { id: 8, name: "Sofa", price: 900, category: "Furniture" },
    { id: 9, name: "Bookshelf", price: 180, category: "Furniture" },
    { id: 10, name: "Lamp", price: 60, category: "Furniture" },
    { id: 11, name: "Shoes", price: 120, category: "Apparel" },
    { id: 12, name: "Jacket", price: 200, category: "Apparel" },
    { id: 13, name: "T-shirt", price: 30, category: "Apparel" },
    { id: 14, name: "Jeans", price: 80, category: "Apparel" },
    { id: 15, name: "Hat", price: 40, category: "Apparel" },
    { id: 16, name: "Bicycle", price: 600, category: "Sports" },
    { id: 17, name: "Tennis Racket", price: 150, category: "Sports" },
    { id: 18, name: "Basketball", price: 30, category: "Sports" },
    { id: 19, name: "Football", price: 40, category: "Sports" },
    { id: 20, name: "Yoga Mat", price: 25, category: "Sports" },
    { id: 21, name: "Watch", price: 300, category: "Accessories" },
    { id: 22, name: "Sunglasses", price: 100, category: "Accessories" },
    { id: 23, name: "Backpack", price: 90, category: "Accessories" },
    { id: 24, name: "Belt", price: 45, category: "Accessories" },
    { id: 25, name: "Wallet", price: 75, category: "Accessories" },
    { id: 26, name: "Tablet", price: 800, category: "Electronics" },
    { id: 27, name: "Smartphone", price: 1000, category: "Electronics" },
    { id: 28, name: "Fridge", price: 1200, category: "Appliances" },
    { id: 29, name: "Microwave", price: 150, category: "Appliances" },
    { id: 30, name: "Washing Machine", price: 700, category: "Appliances" }
  ];

  const [name, setName] = useState('');
  const [categories, setCategories] = useState(['All']);
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState([100, 500]);
  const [filteredItems, setFilteredItems] = useState(product);
  const minDistance = 100;

  useEffect(() => {
    setFilteredItems(
      product.filter(
        (el) =>
          el.name.toLowerCase().includes(name.toLowerCase()) &&
          (category !== 'All' ? el.category === category : true) &&
          el.price >= price[0] && el.price <= price[1]
      )
    );
  }, [name, category, price, product]);

  useEffect(() => {
    const uniqueCategories = product
      .map((el) => el.category)
      .filter((category, index, array) => array.indexOf(category) === index);
    setCategories(['All', ...uniqueCategories]);
  }, [product]);

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };

  return (
    <Container>
      <TextField
        variant="filled"
        label="Search with Item Name"
        value={name}
        onChange={handleSearch}
      />
      <FormControl sx={{ ml: 1, minWidth: 120 }} variant="filled">
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((el, ind) => (
            <MenuItem value={el} key={ind}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Price Range'}
          value={price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          min={0}
          max={1200}
        />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, ind) => (
              <TableRow
                key={item.id}
                sx={{ background: ind % 2 === 0 ? '#cccccc' : '#ffffff' }}
              >
                <TableCell sx={{ p: 1 }}>{item.name}</TableCell>
                <TableCell sx={{ p: 1 }}>{item.price}</TableCell>
                <TableCell sx={{ p: 1 }}>{item.category}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No products found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;