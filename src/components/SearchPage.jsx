import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  TextField,
  CircularProgress,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Button,
  ListItemText,
  Stack,
  Pagination,
} from "@mui/material";
import "../App.css";
import { LoadingButton } from "@mui/lab";
import Autoplius_scraper from "../helperTools/Autoplius_scraper";
import Autogidas_scraper from "../helperTools/Autogidas_scraper";
import useStyles from "../Styles";

const SearchPage = () => {
  let searchTimer;

  const [page, setPage] = useState(1);

  const [advancedSearch, setAdvancedSearch] = useState(false);

  const [autopliusTime, setAutopliusTime] = useState(0);
  const [autogidasTime, setAutogidasTime] = useState(0);
  const [autopliusCars, setAutopliusCars] = useState([]);
  const [autogidasCars, setAutogidasCars] = useState([]);

  const [headline, setHeadline] = useState("");

  const [searchProgress, setProgress] = useState(10);

  const [searching, setSearching] = useState(false);

  let border = "";

  const [autopliusChecked, setAutopliusCheck] = useState(true);
  const [autogidasChecked, setAutogidasCheck] = useState(true);

  const [status, setStatus] = useState("");

  const prices = [
    150, 300, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000,
    7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 17500, 20000,
    22500, 25000, 27500, 30000, 35000, 40000, 45000, 50000, 60000,
  ];

  const [years, setYears] = useState([]);

  const [make, setMake] = useState({});
  const [model, setModel] = useState({});

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const [bodyType, setBodyType] = useState([]);
  const [fuelType, setFuelType] = useState([]);

  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);

  const [text, setText] = useState("");

  const [usedChecked, setUsedChecked] = useState(true);
  const [newChecked, setNewChecked] = useState(true);

  const inActiveCooldown = {
    active: false,
    progress: 0,
  };

  const [cooldown, setCooldown] = useState(inActiveCooldown);

  const handleChangeMake = (event) => {
    const selectedMake = makes.find((item) => item.id === event.target.value);

    setMake(selectedMake);

    setModels(selectedMake.models);

    setModel("");
  };

  const handleChangeModel = (event) => {
    const item = models.find((item) => item.id === event.target.value);
    setModel(item);
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
    //setSelectedBodyTypes([])
    console.log(event.target.value);
    //const selectedBodies = bodyTypes.find((item => item.id === event.target.value))
    setBodyType(event.target.value);

    setSelectedBodyTypes(event.target.value);

    //console.log(selectedBodyTypes)
  };

  const handleChangeFuelType = (event) => {
    console.log(event.target.value);
    //setSelectedFuelTypes([])
    setFuelType(event.target.value);

    setSelectedFuelTypes(event.target.value);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleChangeUsedCheck = (event) => {
    if (usedChecked && !newChecked) setNewChecked(!newChecked);

    setUsedChecked(!usedChecked);
  };

  const handleChangeAutopliusCheck = (event) => {
    if (autopliusChecked && !autogidasChecked)
      setAutogidasCheck(!autogidasChecked);

    setAutopliusCheck(!autopliusChecked);
  };

  const handleChangeAutogidasCheck = (event) => {
    if (autogidasChecked && !autopliusChecked)
      setAutopliusCheck(!autopliusChecked);

    setAutogidasCheck(!autogidasChecked);
  };

  const handleChangeNewCheck = (event) => {
    if (newChecked && !usedChecked) setUsedChecked(!usedChecked);

    setNewChecked(!newChecked);
  };

  const handleSearchClick = (event) => {
    if (cooldown.active) {
      return;
    }
    setSearching(true);

    initiateSearch();

    handleSearchCircularProgress();
  };

  const getInitialStates = () => {
    var selectedOption = localStorage.getItem("Cooldown");

    if (selectedOption) setCooldown(selectedOption);
    else setCooldown(inActiveCooldown);
  };

  const getLocalMakes = async () => {
    const res = await fetch("../data/autoplius_data.json");

    const data = await res.json();

    setMakes(data);
  };

  const getLocalYears = () => {
    var years = [];

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1985; i--) {
      years.push(i);
    }
    years.push(1980, 1970, 1950, 1900);

    setYears(years);
  };

  const getLocalFuelTypes = async () => {
    const data = await fetch("../data/autoplius_fuel.json");

    const res = await data.json();

    setFuelTypes(res);
  };

  const getLocalBodies = async () => {
    const data = await fetch("../data/autoplius_body.json");

    const res = await data.json();

    setBodyTypes(res);
  };

  const setCooldownState = (element) => {
    console.log("COOLDOWN");
    setCooldown(element);
    localStorage.setItem("Cooldown", element);
  };

  const initiateSearch = async () => {
    setStatus("scraping data..");
    let offers = [];

    if (usedChecked) offers.push({ name: "Naudotas", id: 0 });

    if (newChecked) offers.push({ name: "Naujas", id: 1 });

    console.log(selectedBodyTypes);
    console.log(selectedFuelTypes);

    const bds = [];

    selectedBodyTypes.forEach((item) => {
      const body = bodyTypes.find((element) => element.name === item);
      if (body) bds.push(body);
    });

    const fts = [];

    selectedFuelTypes.forEach((item) => {
      const fuel = fuelTypes.find((element) => element.name === item);
      if (fuel) fts.push(fuel);
    });

    console.log("FTS " + fts);

    const car = {
      make: make,
      model: model,
      yearFrom: yearFrom,
      yearTo: yearTo,
      priceFrom: priceFrom,
      priceTo: priceTo,
      fuelTypes: fts,
      bodyTypes: bds,
      offerTypes: offers,
      textField: text,
    };

    // const timeout = async (ms) => {

    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    // const delay = async () => {

    //     let text = ''
    //     await timeout(5000)
    //     text += 'a'

    //     return text
    // }

    //const results = await delay()

    const autopliusResults = await Autoplius_scraper(car);

    const autogidasResults = await Autogidas_scraper(car);

    if (autogidasResults) {
      // console.log(autopliusResults.carList)
      // console.log(autogidasResults.carList)

      setSearching(false);

      let newCooldown = inActiveCooldown;

      newCooldown.active = true;

      setCooldownState(newCooldown);

      handleCooldownCircularProgress();

      setStatus("cooldown");

      if (autopliusResults) {
        setAutopliusCars(autopliusResults.carList);
        setAutopliusTime(autopliusResults.requestTime);
      }

      if (autogidasResults) {
        setAutogidasCars(autogidasResults.carList);
        setAutogidasTime(autogidasResults.requestTime);
      }
    }

    //setHeadline(results[0])

    //console.log(results[0])
  };

  const handleSearchCircularProgress = () => {
    searchTimer = setInterval(() => {
      setProgress((prevState) => {
        if (prevState >= 100) {
          return 0;
        } else {
          return prevState + 10;
        }
      });
    }, 800);
  };

  const handleCooldownCircularProgress = () => {
    clearInterval(searchTimer);

    const timer = setInterval(() => {
      setCooldown((prevState) => {
        if (prevState.progress >= 100) {
          setStatus("Ready");
          clearInterval(timer);

          const newCooldown = {
            active: false,
            progress: 0,
          };
          return newCooldown;
        } else {
          const newCooldown = {
            active: prevState,
            progress: prevState.progress + 5,
          };
          return newCooldown;
        }
      });
    }, 1000);
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getInitialStates();
    getLocalMakes();
    getLocalYears();
    getLocalFuelTypes();
    getLocalBodies();
  }, []);

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

  const getLoading = () => {
    if (cooldown.active || searching) return true;
    return false;
  };

  return (
    <div>
      <div>
        {/* <Typography>Page : {page}</Typography> */}
        {/* <Box>
                    <Pagination
                        count={Math.max(autogidasCars.count, autopliusCars.count) / 5}
                        page={page}
                        onChange={handlePagination}
                        sx={{ border: '1px solid' }} />
                </Box> */}

        <Paper elevation={0} variant="outlined">
          <div className="searchForm">
            <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
              <InputLabel id="demo-simple-select-standard-label">
                Markė
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={make.id || ""}
                onChange={handleChangeMake}
                label="Markė"
              >
                {Array.from(makes).map((element) => (
                  <MenuItem key={element.id} value={element.id}>
                    {element.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 2, minWidth: 330 }} size="small">
              <InputLabel id="demo-simple-select-standard-label">
                Modelis
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={model.id || ""}
                onChange={handleChangeModel}
                label="Modelis"
              >
                {models.map((element) => (
                  <MenuItem key={element.id} value={element.id}>
                    {element.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
              <InputLabel id="demo-simple-select-standard-label">
                Metai nuo
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={yearFrom || ""}
                onChange={handleChangeYearFrom}
                label="Metai nuo"
              >
                {years.map((element) => (
                  <MenuItem key={element} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
              <InputLabel id="demo-simple-select-standard-label">
                Metai iki
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={yearTo || ""}
                onChange={handleChangeYearTo}
                label="Metai iki"
              >
                {years.map((element) => (
                  <MenuItem key={element} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
              <InputLabel id="demo-simple-select-standard-label">
                Kaina nuo, €
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={priceFrom || ""}
                onChange={handleChangePriceFrom}
                label="Kaina nuo, €"
              >
                {prices.map((element) => (
                  <MenuItem key={element} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
              <InputLabel id="demo-simple-select-standard-label">
                Kaina iki, €
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={priceTo || ""}
                onChange={handleChangePriceTo}
                label="Kaina iki, €"
              >
                {prices.map((element) => (
                  <MenuItem key={element} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* A bit hacky sx solution */}

            <FormControl
              sx={{ m: 2, minWidth: 330, maxWidth: 330 }}
              size="small"
            >
              <InputLabel id="demo-multiple-checkbox-label">
                Kėbulo tipas
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={bodyType}
                onChange={handleChangeBodyType}
                renderValue={(selected) => selected.join(", ")}
                label="Kėbulo tipas"
                MenuProps={MenuProps}
              >
                {bodyTypes.map((element) => (
                  <MenuItem key={element.id} value={element.name}>
                    <Checkbox checked={bodyType.indexOf(element.name) > -1} />
                    <ListItemText primary={element.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              sx={{ m: 2, minWidth: 330, maxWidth: 330 }}
              size="small"
            >
              <InputLabel id="demo-multiple-checkbox-label">
                Kuro tipas
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={fuelType}
                onChange={handleChangeFuelType}
                renderValue={(selected) => selected.join(", ")}
                label="Kuro tipas"
                MenuProps={MenuProps}
              >
                {fuelTypes.map((element) => (
                  <MenuItem key={element.id} value={element.name}>
                    <Checkbox checked={fuelType.indexOf(element.name) > -1} />
                    <ListItemText primary={element.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              sx={{ marginBlock: 1, marginInline: 7, minWidth: 280 }}
              size="small"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Tekstinė paieška"
                multiline
                maxRows={4}
                value={text}
                onChange={handleText}
              />
            </FormControl>

            <FormControl
              sx={{ marginBlockEnd: 2, minWidth: 100, maxHeight: 70 }}
              size="small"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeUsedCheck}
                    checked={usedChecked}
                  />
                }
                label="Naudoti"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeAutopliusCheck}
                    checked={autopliusChecked}
                  />
                }
                label="Autoplius"
              />
            </FormControl>

            <FormControl
              sx={{ marginBlockEnd: 1, minWidth: 100, maxHeight: 70 }}
              size="small"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeNewCheck}
                    checked={newChecked}
                  />
                }
                label="Nauji"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeAutogidasCheck}
                    checked={autogidasChecked}
                  />
                }
                label="Autogidas"
              />
            </FormControl>

            <FormControl
              sx={{ marginInline: 2, marginBlock: 1, minWidth: 10 }}
              size="small"
            >
              <LoadingButton
                onClick={handleSearchClick}
                variant="contained"
                loading={getLoading()}
                loadingIndicator={
                  !cooldown.active ? (
                    <CircularProgress
                      variant="determinate"
                      sx={{
                        color: (theme) =>
                          theme.palette.grey[
                            theme.palette.mode === "light" ? 200 : 800
                          ],
                      }}
                      size={20}
                      thickness={8}
                      value={searchProgress}
                    />
                  ) : (
                    <CircularProgress
                      variant="determinate"
                      sx={{
                        color: "#ffc400",
                      }}
                      size={20}
                      thickness={8}
                      value={cooldown.progress}
                    />
                  )
                  // TODO: change value based on fetching
                }
              >
                Ieškoti
              </LoadingButton>

              <Typography
                sx={{ fontSize: 15, marginTop: 1 }}
                color="text.secondary"
              >
                {status}
              </Typography>
            </FormControl>
          </div>
        </Paper>
      </div>

      <p>
        {" "}
        Rezultatai teikiami naudojantis
        <Link
          href="https://autoplius.lt/"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          {" "}
          autoplius.lt{" "}
        </Link>
        bei
        <Link
          href="https://autogidas.lt/"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          {" "}
          autogidas.lt{" "}
        </Link>
      </p>

      <Paper elevation={0} sx={{ m: 4, marginInline: 50, color: "green" }}>
        {autopliusTime !== 0
          ? `Info gathered in ${autopliusTime} and ${autogidasTime} secs accordingly.`
          : ""}
      </Paper>

      <div style={{ marginInline: 650, display: "flex" }}>
        <div>
          {autopliusCars.length > 0 ? (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Autoplius
            </Typography>
          ) : (
            ""
          )}
          {
            // research hover over
            autopliusCars.length > 0
              ? autopliusCars.map((car, index) => (
                  <Card key={index} className="card">
                    <CardActionArea href={car.url} target="_blank">
                      <CardContent>
                        <CardMedia
                          sx={{
                            maxHeight: 300,
                            maxWidth: 255,
                            border:
                              car.stars >= 10
                                ? "5px solid yellow"
                                : "5px solid grey",
                          }}
                          component="img"
                          image={car.image}
                          alt={car.name}
                        />
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.title}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {car.price}
                        </Typography>
                        <Typography variant="body2">
                          ⭐{car.stars}
                          <br />
                        </Typography>
                        <Typography className={useStyles.weee}>
                          {car.date}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.fuelType}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.bodyType}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.gearBox}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.power}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.mileage}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Button
                      size="small"
                      href={`https://www.google.com/maps/search/?api=1&query=${car.city}`}
                      target="_blank"
                    >
                      {car.city}
                    </Button>
                  </Card>
                ))
              : []
          }
        </div>
        <div>
          {autogidasCars.length > 0 ? (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Autogidas
            </Typography>
          ) : (
            ""
          )}

          {
            // research hover over
            autogidasCars.length > 0
              ? autogidasCars.map((car, index) => (
                  <Card key={index} className="card">
                    <CardActionArea href={car.url} target="_blank">
                      <CardContent>
                        <CardMedia
                          sx={{
                            maxHeight: 300,
                            maxWidth: 255,
                            border:
                              car.stars >= 10
                                ? "5px solid yellow"
                                : "5px solid grey",
                          }}
                          component="img"
                          image={car.image}
                          alt={car.name}
                        />
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.title}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {car.price}
                        </Typography>
                        <Typography variant="body2">
                          ⭐{car.stars}
                          <br />
                        </Typography>
                        <Typography className="typography-info">
                          {car.date}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.fuelType}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.bodyType}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.gearBox}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.power}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {car.mileage}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Button
                      size="small"
                      href={
                        car.city === ""
                          ? car.city
                          : `https://www.google.com/maps/search/?api=1&query=${car.city}`
                      }
                      target="_blank"
                    >
                      {car.city}
                    </Button>
                  </Card>
                ))
              : []
          }
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
