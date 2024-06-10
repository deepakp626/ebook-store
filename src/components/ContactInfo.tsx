import { Box, Stack, Typography } from "@mui/material"

const ContactInfo = () => {
  return (
    <>
      <Stack sx={{ marginY: "1rem", gap: "1rem",padding:"1rem" }}>
        <Box>
          <Typography variant="h5">Contact Information</Typography>
          <Box>
            <Typography>Address : </Typography>
            <Typography>Mobile Number : <a href="tel:555000111" >+91 999000111</a> </Typography>
            <Typography> Email :<a href="mailto:info@yourdomain.com">info@your </a> </Typography>
          </Box>
        </Box>
        {Process()}
        {About()}
      </Stack>
    </>
  )
}

function Process() {
  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>OUR PROCESS: ACQUIRE, REFINE, DELIVER</Typography>
        <Typography paragraph sx={{ fontWeight: "bold" }}>1. Acquire: Direct from Students</Typography>
        <Typography paragraph sx={{ fontWeight: "bold" }}>2. Refine: Ensuring Quality and Relevance</Typography>

        <Typography paragraph sx={{ fontWeight: "bold" }}>3. Deliver: Quick and Secure</Typography>
      </Box>
    </>
  )
}

function About() {
  return (
    <>
      <Box sx={{gap: "1rem" }}>
        <Typography variant="h4">About Us</Typography>
        <Typography paragraph>
          Welcome to Coaching, your ultimate destination for all your study material needs for competitive exams like JEE and NEET. We are proud to offer the lowest prices on  study materials and the most important books for JEE and NEET exams, without compromising on quality.
        </Typography>
      </Box>
    </>
  )
}


export default ContactInfo