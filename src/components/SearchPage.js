import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormControlLabel, Checkbox, Link, Card, CardActionArea, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';


const SearchPage = () => {

    const [advancedSearch, setadvancedSearch] = useState(false);

    const [searching, setSearching] = useState(false);

    let autoplius_models = []
    let autoplius_makes = []

    const [usedChecked, setusedChecked] = useState(true);
    const [newChecked, setnewChecked] = useState(true);

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');

    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const [bodyType, setBodyType] = useState('');
    const [fuelType, setFuelType] = useState('');

    const [text, setText] = useState('');

    const handleChangeMake = (event) => {
        setMake(event.target.value);

    };

    const handleChangeModel = (event) => {
        setModel(event.target.value);
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

    const getLocalModels = () => {

        fetch('.data/raw_autoplius_models.json')
            .then(data => {
                const models = data.json()

                autoplius_models = models
            })
            .catch(console.error())
    }

    const getLocalMakes = () => {

        fetch('.data/raw_autoplius_makes.json')
            .then(data => {
                const res = data.json()

                autoplius_makes = res.makes
            })
            .catch(console.error())
    }

    useEffect(() => {

        getLocalModels()

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
                                value={make}
                                onChange={handleChangeMake}
                                label="Markė"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <script type='text/javascript' src='./data/raw_autoplius_makes.html'></script>
                            </Select>


                        </FormControl>


                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Modelis</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={model}
                                onChange={handleChangeModel}
                                label="Modelis"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>

                                {
                                    autoplius_makes.forEach(element => {
                                        <MenuItem value={element.id}>{element.name}</MenuItem>
                                    })
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
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>


                        </FormControl>
                        <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kaina nuo</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={priceFrom}
                                onChange={handleChangePriceFrom}
                                label="Kaina nuo"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>


                        </FormControl>


                        <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kaina iki</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={priceTo}
                                onChange={handleChangePriceTo}
                                label="Kaina iki"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>


                        </FormControl>
                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kėbulo tipas</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={bodyType}
                                onChange={handleChangeBodyType}
                                label="Kėbulo tipas"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>


                        </FormControl>


                        <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Kuro tipas</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={fuelType}
                                onChange={handleChangeFuelType}
                                label="Kuro tipas"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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