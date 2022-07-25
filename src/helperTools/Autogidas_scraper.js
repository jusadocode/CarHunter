import React from 'react'
import axios from 'axios'
import Constants from '../assets/constants'
import cheerio from 'cheerio'
import ScrapingAntClient from '@scrapingant/scrapingant-client'

const Autogidas_scraper = async (vehicle) => {

    let cars = []

    let headline = 'Automobilių nerasta'

    const client = new ScrapingAntClient({ apiKey: 'dbcd5a71a3004a54bed04d4bf9d2a3f6' })

    const scrapeSiteForCars = (html) => {
        const $ = cheerio.load(html)

        $('.all-items-block content-section', html).children('article').children('article').each((index, element) => {

            const url = $(element).children('a').attr('href')
            const image = $(element).children('.right').children('.image').children('img').attr('src')
            const stars = $(element).children('.right').children('.description').children('.up').text()
            const title = $(element).children('.right').children('.description').children('.item-title').text()
            const price = $(element).children('.right').children('.description').children('.item-price').text()

            var parameters1 = $(element).children('.right').children('.description').children('item-description').children('primary').text().split(', ')
            var parameters2 = $(element).children('.right').children('.description').children('item-description').children('secondary').text().split(', ')

            // console.log(title + " " + parameters1)

            let date = parameters1[2].slice(0, parameters1[2].length - 1).trim()
            let fuelType = parameters1[1].trim()
            let gearBox = parameters1[3].trim()
            let power = parameters1[4].trim()
            let mileage = parameters2[0].trim()
            let bodyType = parameters2[1].trim()
            let city = parameters2[2].trim()



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

            //console.log(car)
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

    if (vehicle.make === '')
        url = `https://autogidas.lt/skelbimai/automobiliai/`
    else {
        url = `https://autogidas.lt/skelbimai/automobiliai/?
        ${vehicle.offerTypes.length > 1 ? '' : `f_434[]=${vehicle.offerTypes[0].name}&`}
        f_1%5B0%5D=${vehicle.make.name}&
        f_model_14%5B0%5D=${vehicle.model.name}&
        f_215=${vehicle.priceFrom}&
        f_216==${vehicle.priceTo}&
        f_41==${vehicle.yearFrom}&
        f_42=2020=${vehicle.yearTo}&
        ${vehicle.bodyTypes.map((element, index) => `f_3%5B${index}%5D=${element}&`)}
        ${vehicle.fuelTypes.map((element, index) => `f_2%5B${index}%5D=${element}&`)}
        f_376=${vehicle.textField}`
    }

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

    const scraperCall = async () => {

        const parameters = {
            browser: true,
            cookies: '',
            headers: {
                "x-api-key": "dbcd5a71a3004a54bed04d4bf9d2a3f6",
                "useQueryString": true
            },
            js_snippet: '',
            proxy_type: 'datacenter',
            proxy_country: 'FR',
            wait_for_selector: '',
            return_text: false
        }

        await client.scrape(url, parameters)
            .then(response => {
                console.log(response)
                scrapeSiteForCars(response.content)
            })
            .catch(error => {
                console.log(error)
            })
    }


    // Scrape autoplius site.

    await scraperCall()

    return (
        cars
    )
}

export default Autogidas_scraper