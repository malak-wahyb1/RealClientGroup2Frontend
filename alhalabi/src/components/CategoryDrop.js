import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';
import SubCategory from './subCategory';

export default function NativeSelectDemo() {
  const [subCategoryProps, setSubCategoryProps] = useState([]);

  const handleSubCategory = () => {
    setSubCategoryProps(["sub1", "sub2", "sub3"]);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color: "#0097B2" }}>
          Categories
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          sx={{ color: "hsl(244, 93%, 12%)" }}
          onChange={(e) => {
            if (e.target.value === '20') {
              handleSubCategory();
            } else {
              setSubCategoryProps([]);
            }
          }}
        >
          <option value={10}>All Product</option>
          <option value={20}>Food</option>
          <option value={30}>Electronic</option>
        </NativeSelect>
      </FormControl>
      <SubCategory subCategory={subCategoryProps} />
    </Box>
  );
}
