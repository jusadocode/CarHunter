import React from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import ScrapingAntClient from '@scrapingant/scrapingant-client'
import api from '../assets/api.json'
import testHtml from './test'


const Autogidas_scraper = async (vehicle) => {


    let cars = []

    let headline = 'Automobilių nerasta'

    const client = new ScrapingAntClient({ apiKey: api.scrapingAnt })





    const scrapeSiteForCars = (html) => {
        const $ = cheerio.load(html)

        $('.article-item', html).each((index, element) => {

            console.log(element)
            // Need this because the full href isnt located in article item
            const url = `https://autogidas.lt${$(element).children('a').attr('href')}`

            //console.log(url)
            const image = $(element).children('a').find('[data-src]').attr('data-src');

            //console.log(image)
            const stars = $(element).children('a').find('.up').text()
            const title = $(element).children('a').find('.item-title').text().trim()
            const price = $(element).children('a').find('.item-price').text().trim()
            //console.log(price)

            let date = $(element).find('.icon.param-year b').text().trim();
            let fuelType = $(element).find('.icon.param-fuel-type b').text().trim();
            let gearBox = $(element).find('.icon.param-gearbox b').text().trim();
            let power = $(element).find('.icon.param-engine b').text().trim();
            let mileage = $(element).find('.icon.param-mileage b').text().trim();
            let bodyType = $(element).find('.icon.param-body b').text().trim(); // Assuming you have a class .param-body
            let city = $(element).find('.icon.param-location b').text().trim();



            const car = {
                title: title,
                price: price,
                url: url,
                stars: stars,
                image: image,
                date: date,
                fuelType: fuelType,
                bodyType: bodyType,
                gearBox: gearBox,
                power: power,
                mileage: mileage,
                city: city
            }

            // console.log(car)
            if (car.title !== '')
                cars.push(car)
            // const searchTitle = $(element).children('h1').children('.js-search-title').text().trim()
            // const resultCount = $(element).children('h1').children('.result-count').text()

            // headline = `${searchTitle} " : " ${resultCount}`

            // console.log(headline)
        })




    }

    console.log(vehicle)

    let url = ''

    //fuel_id%5B32%5D=${vehicle.fuelType.id}&
    //body_type_id%5B4%5D=${vehicle.bodyType.id}&

    // if (vehicle.make.name === '')
    //     url = `https://autogidas.lt/skelbimai/automobiliai/`
    // else {
    //     url = `https://autogidas.lt/skelbimai/automobiliai/?
    //     ${vehicle.offerTypes.length > 1 ? '' : `f_434[]=${vehicle.offerTypes[0].name}&`}
    //     f_1%5B0%5D=${vehicle.make.name ? vehicle.make.name : ''}&
    //     f_model_14%5B0%5D=${vehicle.model.name ? vehicle.model.name : ''}&
    //     f_215=${vehicle.priceFrom}&
    //     f_216=${vehicle.priceTo}&
    //     f_41=${vehicle.yearFrom}&
    //     f_42=${vehicle.yearTo}&
    //     ${vehicle.bodyTypes.map((element, index) => `f_3%5B${index}%5D=${element}&`)}
    //     ${vehicle.fuelTypes.map((element, index) => `f_2%5B${index}%5D=${element}&`)}
    //     f_376=${vehicle.textField}`
    // }


    url = `https://autogidas.lt/skelbimai/automobiliai/?
        ${vehicle.offerTypes.length > 1 ? '' : `f_434%5B%5D=${vehicle.offerTypes[0].name}&`}
        f_1%5B0%5D=${vehicle.make.name ? vehicle.make.name : ''}&
        f_model_14%5B0%5D=${vehicle.model.name ? vehicle.model.name : ''}&
        f_215=${vehicle.priceFrom}&
        f_216=${vehicle.priceTo}&
        f_41=${vehicle.yearFrom}&
        f_42=${vehicle.yearTo}&
        ${vehicle.bodyTypes.map((element, index) => `f_3%5B${index}%5D=${element.name}&`)}
        ${vehicle.fuelTypes.map((element, index) => `f_2%5B${index}%5D=${element.name}&`)}
        f_376=${vehicle.textField}`

    console.log(url)

    // }
    // else {
    // url = `https://autoplius.lt/skelbimai/naudoti-automobiliai?
    //     make_id=${vehicle.make.id}&
    //     model_id=${vehicle.model.id}&
    //     make_date_from=${vehicle.yearFrom}&
    //     make_date_to=${vehicle.yearTo}&
    //     sell_price_from=${vehicle.priceFrom}&
    //     sell_price_to=${vehicle.priceTo}&
    //     qt=${vehicle.text}`

    // }

    // const scraperCall = async () => {
    //     await axios(`https://api.apify.com/v2/actor-tasks/jusadocode~url-list-download-html-task/run-sync-get-dataset-items?token=apify_api_Ii5JCFmHTI6ZJAaqhzjlKa6VzcIDMq0SAAya`)
    //         .then(response => {
    //             console.log(response)
    //             scrapeSiteForCars(response.data[0].fullHtml)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    let timer
    let seconds = 0

    const scraperCall = async () => {

        // Tracks how much time the query took
        timer = setInterval(() => {
            seconds++
        }, 1000);

        await client.scrape(url, { proxy_country: 'PL', wait_for_selector: ".all-items-block", proxy_type:"residential" }) // IT, FR, DE, SA, UK, CZ
            .then(response => {
                console.log(response)
                scrapeSiteForCars(response.content)
                clearInterval(timer)
            })
            .catch(error => {
                console.log(error)
            })

    }


    // Scrape autoplius site.

    await scraperCall()

    return (
        {
            carList: cars,
            requestTime: seconds
        }
    )
}

export default Autogidas_scraper