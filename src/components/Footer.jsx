import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { fontSize } from "@mui/system";

const Footer = () => {
  return (
    <footer sx={{ width: "100hw"}}>
      <Box
        sx={{ bottom: "0", width: "100hw",marginTop:"auto", fontWeight: "500" }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="rgba(11, 63, 70, 0.85)"
        color="#fff"
        
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  sx={({ textDecoration: "none" }, { fontSize: "28px" })}
                >
                 TEAM RAW NUTS
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Made with ❤️ by
                </Link>
              </Box>
              <Box>
                <Link href="https://github.com/Swatishree-Mahapatra" color="inherit" sx={{ textDecoration: "none" }}>
                  Swatishree Mahapatra    
                </Link>
              </Box>
              <Box>
                <Link href="https://abhas15.netlify.app" color="inherit" sx={{ textDecoration: "none" }}>
                  Abhas Abhirup Behera
                </Link>
              </Box>
              <Box>
                <Link href="https://github.com/120EE0692" color="inherit" sx={{ textDecoration: "none" }}>
                  Aashish Pradhan
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} >
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Drop A Question
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Privacy Ploicy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Terms n Conditions
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  JEE
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  UPSC
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  NEET
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Class 12
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Class 10
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Undergraduate
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Sitemap
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Subscription Policy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Points System
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                  Developers Team
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            GyaanDaan &reg; {new Date().getFullYear()} | Copyright Owned by Team
            RAW NUTS
          </Box>
          <Box textAlign="center" pb={{ xs: 5, sm: 0 }}>
            <FacebookIcon sx={{ fontSize: "40px" }} />
            <TwitterIcon sx={{ fontSize: "40px" }} />
            <InstagramIcon sx={{ fontSize: "40px" }} />
            <LinkedInIcon sx={{ fontSize: "40px" }} />
            <YouTubeIcon sx={{ fontSize: "40px" }} />
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
