import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CategorySelect(props) {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategoryId(categoryId);
    props.onSelect(categoryId);
    setAge(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}category`)
      .then((response) => {
        const categories = response.data.message.map((category) => {
          return {
            id: category.id,
            name: category.Name,
            image: `${process.env.REACT_APP_URL}${category.image}`,
          };
        });
        setCategoryList(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">{age}</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={age}
          label="Select a category"
          onChange={handleChange}
        >
          {categoryList.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CategorySelect;
