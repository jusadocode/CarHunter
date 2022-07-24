import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormControlLabel, Checkbox, Link, Paper, TextField, CircularProgress, Card, CardContent, Typography, CardMedia, CardActionArea, Button, ListItemText, OutlinedInput } from '@mui/material';
import '../App.css'
import { LoadingButton } from '@mui/lab';
import Autoplius_scraper from '../helperTools/Autoplius_scraper';


const SearchPage = () => {



    const [advancedSearch, setAdvancedSearch] = useState(false);

    const [cars, setCars] = useState([])

    const [headline, setHeadline] = useState('')

    const [searchProgress, setProgress] = useState(10);

    const [searching, setSearching] = useState(false);

    const [autopliusChecked, setAutopliusCheck] = useState(true);
    const [autogidasChecked, setAutogidasCheck] = useState(true);

    const [searchSuccess, setsearchSuccess] = useState(false);

    const prices = [
        150, 300, 500,
        1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000,
        10000, 11000, 12000, 13000, 14000, 15000, 17500,
        20000, 22500, 25000, 27500,
        30000, 35000, 40000, 45000, 50000, 60000,]


    const [years, setYears] = useState([]);

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    const [makes, setMakes] = useState([])
    const [models, setModels] = useState([])

    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');

    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const [bodyType, setBodyType] = useState([]);
    const [fuelType, setFuelType] = useState([]);

    const [bodyTypes, setBodyTypes] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);

    const [selectedBodyTypes, setselectedBodyTypes] = useState([]);
    const [selectedFuelTypes, setselectedFuelTypes] = useState([]);

    const [text, setText] = useState('');

    const [usedChecked, setusedChecked] = useState(true);
    const [newChecked, setnewChecked] = useState(true);

    const inActiveCooldown = {
        active: false,
        progress: 0
    }

    const [cooldown, setCooldown] = useState(inActiveCooldown);

    const handleChangeMake = (event) => {

        const selectedMake = makes.find((item => item.id === event.target.value))

        setMake(selectedMake)

        setModels(selectedMake.models)

    }

    const handleChangeModel = (event) => {

        const item = models.find((item) => item.id === event.target.value)
        setModel(item)

    };

    const handleChangeYearFrom = (event) => {
        setYearFrom(event.target.value)
    };

    const handleChangeYearTo = (event) => {
        setYearTo(event.target.value)
    };

    const handleChangePriceFrom = (event) => {
        setPriceFrom(event.target.value)
    };

    const handleChangePriceTo = (event) => {
        setPriceTo(event.target.value)
    };

    const handleChangeBodyType = (event) => {

        setselectedBodyTypes([])
        setBodyType(event.target.value)

        setselectedBodyTypes(...selectedBodyTypes, event.target.value)
    };

    const handleChangeFuelType = (event) => {

        setselectedFuelTypes([])
        setFuelType(event.target.value)

        setselectedBodyTypes(...selectedFuelTypes, event.target.value)
    };

    const handleText = (event) => {
        setText(event.target.value)
    };

    const handleChangeUsedCheck = (event) => {

        if (usedChecked && !newChecked)
            setnewChecked(!newChecked)

        setusedChecked(!usedChecked)

    };

    const handleChangeAutopliusCheck = (event) => {

        if (autopliusChecked && !autogidasChecked)
            setAutogidasCheck(!autogidasChecked)

        setAutopliusCheck(!autopliusChecked)

    };

    const handleChangeAutogidasCheck = (event) => {

        if (autogidasChecked && !autopliusChecked)
            setAutopliusCheck(!autopliusChecked)

        setAutogidasCheck(!autogidasChecked)

    };

    const handleChangeNewCheck = (event) => {

        if (newChecked && !usedChecked)
            setusedChecked(!usedChecked)

        setnewChecked(!newChecked)

    }

    const handleSearchClick = (event) => {

        if (cooldown.active) {
            console.log("ON COOLDOWN, NO CLICK")
            return
        }
        setSearching(true)

        handleSearchCircularProgress()

        initiateSearch()

    }

    const getInitialStates = () => {

        var selectedOption = localStorage.getItem('Cooldown')

        if (selectedOption)
            setCooldown(selectedOption)
        else
            setCooldown(inActiveCooldown)
    }


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

        setFuelTypes(res)
    }

    const getLocalBodies = async () => {

        const data = await fetch('../data/autoplius_body.json')

        const res = await data.json()

        setBodyTypes(res)
    }

    const setCooldownState = (element) => {

        console.log("COOLDOWN")
        setCooldown(element)
        localStorage.setItem('Cooldown', element);
    }

    const initiateSearch = async () => {

        const car = {
            make: make,
            model: model,
            yearFrom: yearFrom,
            yearTo: yearTo,
            priceFrom: priceFrom,
            priceTo: priceTo,
            fuelTypes: selectedFuelTypes,
            bodyTypes: selectedBodyTypes,
            textField: text
        }


        const results = await Autoplius_scraper(car)

        if (results) {
            setSearching(false)

            let newCooldown = inActiveCooldown

            newCooldown.active = true;

            setCooldownState(newCooldown)

            handleCooldownCircularProgress()
        }


        //setHeadline(results[0])

        //console.log(results[0])

        setCars(results)



    }
    const handleSearchCircularProgress = () => {

        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
        }, 800);


        return () => {
            if (!searching)
                clearInterval(timer)
        }
    }

    const handleCooldownCircularProgress = () => {

        const timer = setInterval(() => {
            setCooldown((prevState) => (prevState.progress >= 100 ? inActiveCooldown : prevState.progress + 10))
            console.log("UPDATED")
        }, 3000);


        return () => {
            if (!cooldown.active)
                clearInterval(timer)
        }
    }
    useEffect(() => {

        getInitialStates()
        getLocalMakes()
        getLocalYears()
        getLocalFuelTypes()
        getLocalBodies()


    }, [])

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <div style={{ position: 'static' }}>
            <div style={{ marginInline: 500, position: 'static' }} >
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

                        {/* A bit hacky sx solution */}

                        <FormControl sx={{ m: 2, minWidth: 330, maxWidth: 330 }} size="small">
                            <InputLabel id="demo-multiple-checkbox-label">Kėbulo tipas</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={bodyType}
                                onChange={handleChangeBodyType}
                                renderValue={(selected) => selected.join(', ')}
                                label="Kėbulo tipas"
                                MenuProps={MenuProps}
                            >
                                {
                                    bodyTypes.map(element => <MenuItem value={element.name}>
                                        <Checkbox checked={bodyType.indexOf(element.name) > -1} />
                                        <ListItemText primary={element.name} />
                                    </MenuItem>)
                                }
                            </Select>


                        </FormControl>

                        <FormControl sx={{ m: 2, minWidth: 330, maxWidth: 330 }} size="small">
                            <InputLabel id="demo-multiple-checkbox-label">Kuro tipas</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={fuelType}
                                onChange={handleChangeFuelType}
                                renderValue={(selected) => selected.join(', ')}
                                label="Kuro tipas"
                                MenuProps={MenuProps}
                            >
                                {
                                    fuelTypes.map(element => <MenuItem value={element.name}>
                                        <Checkbox checked={fuelType.indexOf(element.name) > -1} />
                                        <ListItemText primary={element.name} />
                                    </MenuItem>)
                                }
                            </Select>


                        </FormControl>

                        <FormControl sx={{ marginBlock: 1, marginInline: 7, minWidth: 280 }} size="small">
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Tekstinė paieška"
                                multiline
                                maxRows={4}
                                value={text}
                                onChange={handleText}
                            />
                        </FormControl>

                        <FormControl sx={{ marginBlockEnd: 2, minWidth: 100, maxHeight: 70 }} size="small">
                            <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeUsedCheck} checked={usedChecked} />} label="Naudoti" />
                            <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeAutopliusCheck} checked={autopliusChecked} />} label="Autoplius" />

                        </FormControl>

                        <FormControl sx={{ marginBlockEnd: 1, minWidth: 100, maxHeight: 70 }} size="small">
                            <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeNewCheck} checked={newChecked} />} label="Nauji" />
                            <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeAutogidasCheck} checked={autogidasChecked} />} label="Autogidas" />
                        </FormControl>

                        <FormControl sx={{ marginInline: 2, marginBlock: 1, minWidth: 10 }} size="small">
                            <LoadingButton
                                onClick={handleSearchClick}
                                variant="contained"
                                loading={searching}
                                loadingIndicator={
                                    <CircularProgress
                                        variant="determinate"
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                                        }}
                                        size={20}
                                        thickness={6}
                                        value={searchProgress}
                                    />
                                    // TODO: change value based on fetching
                                }
                            >
                                Ieškoti
                            </LoadingButton>
                        </FormControl>

                        {/* <FormControl sx={{ marginInline: 2, marginBlock: 1, minWidth: 10 }} size="small">
                            <LoadingButton
                                onClick={handleSearchClick}
                                variant="contained"
                                loading={cooldown.active ? cooldown.active : searching}
                                loadingIndicator={
                                    !cooldown.active ?
                                        <CircularProgress
                                            variant="determinate"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                                            }}
                                            size={20}
                                            thickness={6}
                                            value={searchProgress}
                                        />
                                        :
                                        <CircularProgress
                                            variant="determinate"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.error,
                                            }}
                                            size={20}
                                            thickness={6}
                                            value={cooldown.progress}
                                        />
                                    // TODO: change value based on fetching
                                }
                            >
                                Ieškoti
                            </LoadingButton>
                        </FormControl> */}



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

            < p > Rezultatai teikiami naudojantis
                < Link href="https://autoplius.lt/" underline="hover" target="_blank" rel="noopener" > autoplius.lt </Link >
                bei
                < Link href="https://autogidas.lt/" underline="hover" target="_blank" rel="noopener" > autogidas.lt </Link >
            </p >

            <div style={{ marginInline: 800, position: 'static' }} >
                { // research hover over
                    cars.length > 0 ?
                        cars.map(car => <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href={car.url} target='_blank'>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        image={car.image}
                                        alt={car.name}
                                    />
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {car.title}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {car.price}
                                    </Typography>
                                    <Typography variant="body2">
                                        ⭐{car.stars}
                                        <br />
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {car.date}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {car.fuelType}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {car.gearBox}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {car.power}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {car.mileage}
                                    </Typography>


                                </CardContent>

                            </CardActionArea>
                            <Button size="small" href={`https://www.google.com/maps/search/?api=1&query=${car.city}`} target='_blank'>{car.city}</Button>
                        </Card>)

                        : []
                }
            </div>


        </div >

    )
}

export default SearchPage