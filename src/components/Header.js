import React from 'react'
import { Typography } from '@mui/material';


function getRandomColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}
const Header = () => {
    return (

        <div>
            <Typography variant="h2" component="h2" padding='15px'>
                CarHunt
            </Typography>
            <Typography variant="h6" component="h6" color={getRandomColor()} padding='10px'>
                Lengvesnė automobilių paieška
            </Typography>
        </div>
    )
}

export default Header