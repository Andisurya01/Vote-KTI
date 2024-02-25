import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function App() {
  const basedListManager = ["manager 1", "manager 2", "manager 3", "manager 4", "manager 5", "manager 6", "manager 7", "manager 8", "manager 9", "manager 10"]
  const [listManager, setListManager] = React.useState([
    "manager 1", "manager 2", "manager 3", "manager 4", "manager 5", "manager 6", "manager 7", "manager 8", "manager 9", "manager 10"
  ])

  const [category2, setCategory2] = React.useState('');

  const lihat = () => {
    console.log("current category : ", category2);
    console.log("current list category : ", listManager);
  }

  const handleChoice = (manager, index) => {
    setCategory2(manager);
    console.log(index);
    setListManager(basedListManager.filter((item) => item !== manager))
  }
  const handleChoice2 = (manager, index) => {
    setCategory2(manager);
    console.log(index);
    setListManager(basedListManager.filter((item) => item !== manager))
  }
  return (
    <section className='max-w-screen-2xl mx-auto bg-slate-100 p-10'>
      <Box sx={{ minWidth: 120 }} >
        <FormControl className='w-full'>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Kategori"
          >
            {listManager.map((manager, index) => {
              return <MenuItem key={index} value={manager} onClick={() => {handleChoice(manager, index)
              console.log(manager)}}>{manager}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }} >
        <FormControl className='w-full'>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Kategori"
          >
            {listManager.map((manager, index) => {
              return <MenuItem key={index} value={manager} onClick={() => {handleChoice2(manager, index)
              console.log(manager)}}>{manager}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
      <div className='py-5'>
        <Button variant="contained" onClick={lihat}>Contained</Button>
      </div>
    </section>
  );
}
