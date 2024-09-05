
import cheerio from 'cheerio'
import ScrapingAntClient from '@scrapingant/scrapingant-client'

const Autoplius_scraper = async (vehicle) => {

    const cars = []

    let headline = 'Automobilių nerasta'

    const client = new ScrapingAntClient({ apiKey: import.meta.env.VITE_APP_SCRAPINGANT_API })

    const scrapeSiteForCars = (html) => {
        const $ = cheerio.load(html)

        $('.search-list-title', html).each((index, element) => {

            const searchTitle = $(element).children('h1').children('.js-search-title').text().trim()
            const resultCount = $(element).children('h1').children('.result-count').text()

            headline = `${searchTitle} " : " ${resultCount}`

            //console.log(headline)
        })


        $('.announcement-item', html).each((index, element) => {


            const url = $(element).attr('href')
            let image = $(element).children('.announcement-content').find('img').attr('data-src')
            if (!image)
                image = $(element).children('.announcement-content').find('img').attr('src')
            const stars = $(element).children('.announcement-content').find(".announcement-badge badge-rise").text().trim()
            const title = $(element).children('.announcement-content').find('.announcement-title').text().trim()

            const paramTuple = $(element).children('.announcement-content').find('.announcement-parameters ').children("span")
            const date = $(paramTuple[0]).text().trim()
            const bodyType = $(paramTuple[1]).text().trim()

            //const title = $(element).children('.announcement-content').children('.announcement-body ').children('.announcement-title').text().trim()
            const price = $(element).children('.announcement-content').find('.announcement-pricing-info').children('strong').text().trim()

            var parameters = $(element).children('.announcement-content').find('.announcement-parameters ').children('span')
            //console.log(title + " " + parameters.length)

            let fuelType = ''

            let gearBox = ''
            let power = ''
            let mileage = ''
            let city = ''

            // parameters.each((index, elem) => {
            //     const titleAttr = $(elem).attr('title')
            //     const value = $(elem).text().trim()

            //     switch (titleAttr) {
            //         case 'Pagaminimo data':
            //             date = value
            //             break
            //         case 'Kuro tipas':
            //             fuelType = value
            //             break
            //         case 'Kėbulo tipas':
            //             bodyType = value
            //             break
            //         case 'Pavarų dėžė':
            //             gearBox = value
            //             break
            //         case 'Galia':
            //             power = value
            //             break
            //         case 'Rida':
            //             mileage = value
            //             break
            //         case 'Miestas':
            //             city = value
            //             break
            //         default:
            //             break
            //     }
            // })


            let trimmedParams = []

            parameters.each((index, elem) => {
                const value = $(elem).text().trim()
                trimmedParams.push(value)
            }
            )

            //console.log(trimmedParams)


            const car = {
                title: title,
                price: price,
                url: url,
                stars: stars,
                image: image,
                date: date,
                fuelType: trimmedParams[0],
                bodyType: bodyType,
                gearBox: trimmedParams[1],
                power: trimmedParams[2],
                mileage: trimmedParams[3],
                city: trimmedParams[4]
            }

            console.log(car)
            cars.push(car)

        })

    }


    let url = ''

    
    url = `https://autoplius.lt/skelbimai/naudoti-automobiliai?
        ${vehicle.offerTypes.length > 1 ? '' : `offer_type=${vehicle.offerTypes[0].id}&`}
        ${vehicle.make.name ? `make_id=${vehicle.make.id}&` : ''}
        ${vehicle.model.name ? `model_id=${vehicle.model.id}&` : ''}
        ${vehicle.yearFrom ? `make_date_from=${vehicle.yearFrom}&` : ''}
        ${vehicle.yearTo ? `make_date_to=${vehicle.yearTo}&` : ''}
        ${vehicle.priceFrom ? `sell_price_from=${vehicle.priceFrom}&` : ''}
        ${vehicle.priceTo ? `sell_price_to=${vehicle.priceTo}&` : ''}
        ${vehicle.bodyTypes.map((element) => `body_type_id%5B${element.id}%5D=${element.id}&`)}
        ${vehicle.fuelTypes.map((element) => `fuel_id%5B${element.id}%5D=${element.id}&`)}
        qt=${vehicle.textField}`.trim()

    url = url.trim()

    console.log(url)

    let timer = 0
    let seconds = 0

    const scraperCall = async () => {

        // Tracks how much time the query took
        timer = setInterval(() => {
            seconds++
        }, 1000);

        await client.scrape(url, { proxy_country: 'PL', wait_for_selector: ".auto-lists", proxy_type:"residential" }) // IT, FR, DE, SA, UK, CZ
            .then(response => {
                console.log(response)
                console.log(cars)
                scrapeSiteForCars(response.content)
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

export default Autoplius_scraper