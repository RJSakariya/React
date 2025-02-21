import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProject } from "../Features/Slice"
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import AddIcon from '@mui/icons-material/Add';
import AddNewProject from "./AddNewProject";

export default function Projects() {
  const { projects, users, user } = useSelector((state) => state.slice)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (projects.length > 0) {
      dispatch(setProject(projects[0]))
    }
  }, [projects])
  return (
    <>{
      user && <>
        <Typography content="body2" sx={{ fontWeight: 'bold' }}>
          Projects List
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Project Name</TableCell>
                <TableCell align="left">Summary</TableCell>
                <TableCell align="left">Admin</TableCell>
                <TableCell align="left">Developers</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Epic Links</TableCell>
                <TableCell align="left">Issues</TableCell>
                <TableCell align="left">Who can change?</TableCell>
                <TableCell align="left">See</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((row, ind) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {ind + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.summary}</TableCell>
                  <TableCell align="left">{users.filter((el) => el.id === row.admin).map(el => el.name)}</TableCell>
                  <TableCell align="left">{users.filter((el) => row.developers.includes(el.id)).map(el => el.name).join(', ')}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">{row.epicLink}</TableCell>
                  <TableCell align="left">{row.issues?.length || 0}</TableCell>
                  <TableCell align="left">{row.canChanges}</TableCell>
                  <TableCell align="left">
                    <Tooltip title={`See ${row.name}`}><IconButton size="small" onClick={() => {
                      dispatch(setProject(row))
                      navigate('/dashboard/board')
                    }} ><PreviewIcon /></IconButton></Tooltip>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow hover onClick={() => setOpen(true)}>
                <TableCell align="center" colSpan={10} sx={{ cursor: 'pointer' }}>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                    <AddIcon />
                    Add New Project
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <AddNewProject open={open} setOpen={setOpen} />
      </>
    }</>
  )
}
