import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Pagination({ categories }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        minWidth: { xs: '25%', sm: "15%", md: 260 },
        height: '100%',
        flexGrow: 1,
        pt: 2,
        borderRight: "1px solid #eeeeee",
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {
        // eslint-disable-next-line react/prop-types
        categories.length > 0 && categories.map((el, ind) => (
          <Box key={ind}>
            {location.pathname === `/${el.category}` ?
              <Button
                variant="contained"
                sx={{
                  borderBottom: "1px solid #eeeeee",
                  borderLeft: { md: "5px solid #3d8321" },
                  boxShadow: 'none',
                  padding: "12px",
                  width: "100%",
                  background: '#ebfeef',
                  color: 'black',
                  display: 'flex',
                  justifyContent: 'left',
                  flexDirection: { xs: 'column', md: 'row' },
                  textTransform: 'capitalize',
                  borderRadius: 0,
                  gap: 2,
                  fontSize: { xs: 12, md: 15 },
                  position: 'relative',
                  "&:hover": {
                    boxShadow: 'none',
                    background: '#ebfeef',
                  },
                }}
                onClick={() => navigate(`/${el.category}`)}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    overflow: 'hidden',
                    background: '#eeeeee',
                    borderRadius: 1,
                  }}
                >
                  <img
                    src={el.image}
                    alt=""
                    style={{
                      width: "100%",
                      aspectRatio: "2/3",
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                {el.category}
                <Box sx={{
                  height: '100%',
                  width: 5,
                  background: '#3d8321',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: 0,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  display: { xs: 'block', md: 'none' }
                }} >
                </Box>
              </Button>
              : <Button
                variant="contained"
                sx={{
                  borderBottom: "1px solid #eeeeee",
                  boxShadow: 'none',
                  padding: "12px",
                  width: "100%",
                  background: 'white',
                  color: 'black',
                  display: "flex",
                  justifyContent: 'left',
                  flexDirection: { xs: 'column', md: 'row' },
                  textTransform: 'capitalize',
                  borderRadius: 0,
                  fontSize: { xs: 12, md: 15 },
                  gap: 2,
                  "&:hover": {
                    boxShadow: 'none',
                    background: '#ebfeef',
                  },
                }}
                onClick={() => navigate(`/${el.category}`)}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    overflow: 'hidden',
                    background: '#eeeeee',
                    borderRadius: 1,
                  }}
                >
                  <img
                    src={el.image}
                    alt=""
                    style={{
                      width: "100%",
                      aspectRatio: "2/3",
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                {el.category}
              </Button>
            }
          </Box>
        ))
      }
    </Box >
  );
}
