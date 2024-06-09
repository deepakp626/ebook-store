import { Box } from "@mui/material"
import Navbar from "./Navbar"

interface prop {
    children: React.ReactNode
}

const DashBoardLayout = ({children}:prop) => {
  return (
    <>
    <Box sx={{marginX:"0.5rem"}}>
        <Navbar />
        {children}
    </Box>
    </>
  )
}

export default DashBoardLayout