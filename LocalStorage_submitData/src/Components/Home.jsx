import { useEffect, useState } from 'react';
import { Button, Container, FormGroup, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
export default function Home() {
  const [name, setName] = useState('')
  const [sub, setSub] = useState('')
  const [data, setData] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("Student")) || []
    setData(storedData)
  }, [])


  let handleAddOrUpdate = () => {
    if(editId){
      let editData = data.find((data)=>data.id === editId)
      editData.id = editId
      editData.name = name
      editData.sub = sub
      localStorage.setItem("student",JSON.stringify(data))
      setEditId('')
    }else{
      let newData = [...data,{id:data.length+1,name,sub}]
      setData(newData)
      localStorage.setItem("student",JSON.stringify(newData))
    }
    setName("")
    setSub("")
  }

  const handleDelete = (id) => {
    const deleteData = data.filter((item) => item.id !== id);
    setData(deleteData);
    localStorage.setItem("Student", JSON.stringify(deleteData));
  };

  return (
    <Container>
      <FormGroup sx={{ width: 300 }}>
        <TextField type="text" variant='filled' value={name} label="Name" onChange={(e) => setName(e.target.value)} />
        <TextField type="text" variant='filled' value={sub} label="Subject" onChange={(e) => setSub(e.target.value)} />
        <Button variant='contained' onClick={handleAddOrUpdate} >{editId?"Save Data":'Add Data'}</Button>
      </FormGroup>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? data.map((e, i) => {
              console.log(e)
              return <TableRow key={i}>
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="left">{e.sub}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={()=>{
                    setEditId(e.id)
                    setName(e.name)
                    setSub(e.sub)
                  }}>
                    <EditNoteRoundedIcon color='primary' />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(e.id)}>
                    <DeleteRoundedIcon color='error' />
                  </IconButton>
                </TableCell>
              </TableRow>
            }) : (
              <TableRow>
                <TableCell align='center' colSpan='3'>No data available</TableCell>
              </TableRow>
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
