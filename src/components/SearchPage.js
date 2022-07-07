import React, { useEffect, useState, componentDidUpdate } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormControlLabel, Checkbox, Link, Card, CardActionArea, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { NoMealsRounded } from '@mui/icons-material';
import JSONTools from '../helperTools/JSONTools';


const SearchPage = () => {

    const [advancedSearch, setAdvancedSearch] = useState(false);

    const [searching, setSearching] = useState(false);

    const prices = [
        150,
        300,
        500,
        1000,
        1500,
        2000,
        2500,
        3000,
        3500,
        4000,
        4500,
        5000,
        6000,
        7000,
        8000,
        9000,
        10000,
        11000,
        12000,
        13000,
        14000,
        15000,
        17500,
        20000,
        22500,
        25000,
        27500,
        30000,
        35000,
        40000,
        45000,
        50000,
        60000,]


    const [years, setYears] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);
    const [bodyTypes, setBodyTypes] = useState([]);

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    const [makes, setMakes] = useState([])
    const [models, setModels] = useState([])

    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');

    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const [bodyType, setBodyType] = useState('');
    const [fuelType, setFuelType] = useState('');

    const [text, setText] = useState('');

    const [usedChecked, setusedChecked] = useState(true);
    const [newChecked, setnewChecked] = useState(true);

    const handleChangeMake = (event) => {

        console.log(event.target.value)

        const selectedMake = makes.find((item => item.id === event.target.value))

        setMake(selectedMake)

        setModels(selectedMake.models)

    }

    const handleChangeModel = (event) => {

        const item = models.find((item) => item.id === event.target.value)
        setModel(item)

    };

    const handleChangeYearFrom = (event) => {
        setYearFrom(event.target.value);
    };

    const handleChangeYearTo = (event) => {
        setYearTo(event.target.value);
    };

    const handleChangePriceFrom = (event) => {
        setPriceFrom(event.target.value);
    };

    const handleChangePriceTo = (event) => {
        setPriceTo(event.target.value);
    };

    const handleChangeBodyType = (event) => {
        setBodyType(event.target.value);
    };

    const handleChangeFuelType = (event) => {
        setFuelType(event.target.value);
    };

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleChangeUsedCheck = (event) => {

        if (usedChecked && !newChecked)
            setnewChecked(!newChecked)

        setusedChecked(!usedChecked)

    };

    const handleChangeNewCheck = (event) => {

        if (newChecked && !usedChecked)
            setusedChecked(!usedChecked)

        setnewChecked(!newChecked)

    };


    const getLocalMakes = async () => {

        const res = await fetch('../data/autoplius_data.json')

        const data = await res.json()

        setMakes(data)

    }

    const getLocalYears = () => {

        var years = [];

        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1985; i--) {
            years.push(i);
        }
        years.push(1980, 1970, 1950, 1900);

        setYears(years)
    }

    const getLocalFuelTypes = async () => {

        const data = await fetch('../data/autoplius_fuel.json')



        const res = await data.json()
        console.log(res)

        setFuelTypes(res)
    }

    const getLocalBodies = async () => {

        const data = await fetch('../data/autoplius_body.json')

        const res = await data.json()

        setBodyTypes(res)
    }

    useEffect(() => {

        getLocalMakes()
        getLocalYears()
        getLocalFuelTypes()
        getLocalBodies()

    }, [])

    return (
        <div style={{ position: 'static' }}>
            <div style={{ marginInline: 570, position: 'static' }} >
                <Paper elevation={0} variant="outlined" sx={{ m: 1 }}>
                    <div>
                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Markė</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={make.id}
                                onChange={handleChangeMake}
                                label="Markė"
                            >
                                {
                                    Array.from(makes).map(element => <MenuItem value={element.id}>{element.name}</MenuItem>)
                                }
                            </Select>


                        </FormControl>


                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Modelis</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={model.id}
                                onChange={handleChangeModel}
                                label="Modelis"
                            >
                                {
                                    models.map(element => <MenuItem value={element.id}>{element.name}</MenuItem>)
                                }


                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Metai nuo</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={yearFrom}
                                onChange={handleChangeYearFrom}
                                label="Metai nuo"
                            >
                                {
                                    years.map(element => <MenuItem value={element}>{element}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Metai iki</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={yearTo}
                                onChange={handleChangeYearTo}
                                label="Metai iki"
                            >
                                {
                                    years.map(element => <MenuItem value={element}>{element}</MenuItem>)
                                }
                            </Select>


                        </FormControl>
                        <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kaina iki, €</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={priceFrom}
                                onChange={handleChangePriceFrom}
                                label="Kaina iki, €"
                            >
                                {
                                    prices.map(element => <MenuItem value={element}>{element}</MenuItem>)
                                }
                            </Select>


                        </FormControl>


                        <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kaina iki, €</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={priceTo}
                                onChange={handleChangePriceTo}
                                label="Kaina iki, €"
                            >
                                {
                                    prices.map(element => <MenuItem value={element}>{element}</MenuItem>)
                                }
                            </Select>


                        </FormControl>
                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kėbulo tipas</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={bodyType.id}
                                onChange={handleChangeBodyType}
                                label="Kėbulo tipas"
                            >
                                {
                                    bodyTypes.map(element => <MenuItem value={element.id}>{element.name}</MenuItem>)
                                }
                            </Select>


                        </FormControl>


                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kuro tipas</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={fuelType.id}
                                onChange={handleChangeFuelType}
                                label="Kuro tipas"
                            >
                                {
                                    fuelTypes.map(element => <MenuItem value={element.id}>{element.name}</MenuItem>)
                                }
                            </Select>


                        </FormControl>

                        <FormControl sx={{ marginBlock: 1, marginInlineEnd: 11, minWidth: 330 }} size="small">
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Tekstinė paieška"
                                multiline
                                maxRows={4}
                                value={text}
                                onChange={handleText}
                            />
                        </FormControl>

                        <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeUsedCheck} checked={usedChecked} />} label="Naudoti" />
                        <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeNewCheck} checked={newChecked} />} label="Nauji" />

                        <Button
                            //onClick={setSearching(!searching)}
                            variant="contained"
                        >
                            Ieškoti
                        </Button>


                    </div>


                </Paper>

            </div >

            {/* <Card sx={{ maxWidth: 390 }}>
                <CardActionArea>
                    <p>Rezultatai bus teikiami naudojantis
                        <Link href="https://autoplius.lt/" underline="hover" target="_blank" rel="noopener"> autoplius.lt </Link>
                        bei
                        <Link href="https://autogidas.lt/" underline="hover" target="_blank" rel="noopener"> autogidas.lt </Link>
                    </p>
                </CardActionArea>
            </Card> */}

            <p> Rezultatai teikiami naudojantis
                < Link href="https://autoplius.lt/" underline="hover" target="_blank" rel="noopener" > autoplius.lt </Link >
                bei
                < Link href="https://autogidas.lt/" underline="hover" target="_blank" rel="noopener" > autogidas.lt </Link >
            </p >

        </div >

    )
}

export default SearchPage