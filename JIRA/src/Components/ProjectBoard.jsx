import { AccountCircle, Edit, People, Link as EpicLink } from "@mui/icons-material"
import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export default function ProjectBoard() {
  const navigate = useNavigate()
  const { project, projects, users } = useSelector((state) => state.slice)
  useEffect(() => {
    projects.length < 1 && navigate('/dashboard/projectlist')
  }, [projects])
  return (
    <Box>
      <Typography content="body2">
        <Link to="/dashboard/projectlist" style={{ fontWeight: 'bold', textDecoration: 'none', color: "black" }}>Projects List </Link>{" > " + project.name}
      </Typography>
      <Card sx={{ margin: '0px auto', boxShadow: 0 }}>
        <CardContent>
          <Grid container>
          <Box>
            <Typography variant="h5" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {project.summary}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description || 'No description available.'}
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <AccountCircle color="disabled" />
              </Grid>
              <Grid item xs>
                <Typography variant="body1">{users.find(el => el.id == project.admin).name}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <EpicLink color="disabled" />
              </Grid>
              <Grid item xs>
                <Typography variant="body2">{project.epicLink || 'No link provided.'}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <People color="disabled" />
              </Grid>
              <Grid item xs>
                <Typography variant="body2">{users.filter((el) => project.developers.includes(el.id)).map((el) => el.name).join(', ')}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Edit color="disabled" />
              </Grid>
              <Grid item xs>
                <Typography variant="body2">{project.canChanges}</Typography>
              </Grid>
            </Grid>
          </Box>
          </Grid>
          <Divider sx={{ my: 2 }} />
        </CardContent>
      </Card>
      <Box>
        
      </Box>
    </Box>
  )
}
