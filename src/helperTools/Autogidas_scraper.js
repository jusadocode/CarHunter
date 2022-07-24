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

        $('.search-list-title', html).each((index, element) => {

            const searchTitle = $(element).children('h1').children('.js-search-title').text().trim()
            const resultCount = $(element).children('h1').children('.result-count').text()

            headline = `${searchTitle} " : " ${resultCount}`

            console.log(headline)
        })


        $('.announcement-item', html).each((index, element) => {


            const url = $(element).attr('href')
            const image = $(element).children('.announcement-media').children('.announcement-photo').children('img').attr('data-src')
            const stars = $(element).children('.announcement-body').children('.stars-badge').text().trim()
            const title = $(element).children('.announcement-body').children('.announcement-title').text().trim()
            const price = $(element).children('.announcement-body').children('.announcement-pricing-info').children('strong').text().trim()

            var parameters = $(element).children('.announcement-body').children('.announcement-parameters ').children('.bottom-aligner').children()
            console.log(title + " " + parameters.length)

            let date = ''
            let fuelType = ''
            let gearBox = ''
            let power = ''
            let mileage = ''
            let city = ''

            parameters.each((index, elem) => {
                const titleAttr = $(elem).attr('title')
                const value = $(elem).text().trim()

                switch (titleAttr) {
                    case 'Pagaminimo data':
                        date = value
                        break
                    case 'Kuro tipas':
                        fuelType = value
                        break
                    case 'Pavarų dėžė':
                        gearBox = value
                        break
                    case 'Galia':
                        power = value
                        break
                    case 'Rida':
                        mileage = value
                        break
                    case 'Miestas':
                        city = value
                        break
                    default:
                        break
                }



            })

            const car = {
                title: title,
                price: price,
                url: url,
                stars: stars,
                image: image,
                date: date,
                fuelType: fuelType,
                gearBox: gearBox,
                power: power,
                mileage: mileage,
                city: city
            }

            //console.log(car)
            cars.push(car)

        })

    }

    console.log(vehicle)

    let url = ''

    //fuel_id%5B32%5D=${vehicle.fuelType.id}&
    //body_type_id%5B4%5D=${vehicle.bodyType.id}&

    if (vehicle.make === '')
        url = `https://autoplius.lt/skelbimai/naudoti-automobiliai`
    else {
        url = `https://autoplius.lt/skelbimai/naudoti-automobiliai?
        make_id=${vehicle.make.id}&
        model_id=${vehicle.model.id}&
        make_date_from=${vehicle.yearFrom}&
        make_date_to=${vehicle.yearTo}&
        sell_price_from=${vehicle.priceFrom}&
        sell_price_to=${vehicle.priceTo}&
        ${vehicle.fuelTypes.map((element => element))}&
        ${vehicle.bodyTypes.map((element => element))}&
        qt=${vehicle.textField}`
    }

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