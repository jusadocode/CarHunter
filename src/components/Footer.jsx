
import { BottomNavigation, Paper, Link } from '@mui/material';

export default function Footer() {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <p >
                    © CarHunt {new Date().getFullYear()} | jusadocode | All rights reserved | Terms of Servive | Privacy |
                    < Link href="https://github.com/jusadocode" underline="hover" target="_blank" rel="noopener" > Github </Link >
                    |
                    < Link href="https://www.linkedin.com/in/justas-adomaitis-7bb024213/" underline="hover" target="_blank" rel="noopener" > LinkedIn </Link >
                </p>
            </BottomNavigation>
        </Paper>

    )
}