import { BottomNavigation, Paper, Link, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box sx={{ display: "flex", justifyContent: "center", padding: 1 }}>
        <Typography variant="body2" color="textSecondary">
          © CarHunt {new Date().getFullYear()} | jusadocode | All rights
          reserved |
          <Link
            href="https://github.com/jusadocode"
            underline="hover"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            {" "}
            Github{" "}
          </Link>
          |
          <Link
            href="https://www.linkedin.com/in/justas-adomaitis-7bb024213/"
            underline="hover"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            {" "}
            LinkedIn{" "}
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}
