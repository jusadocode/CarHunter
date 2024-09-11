# Welcome to CarHunter

React Web application used for car search in Lithuania.

It works by pulling together multiple car market site results in one place in parallel for an easier search of a new (used) car.

# Tools used

* Web scraping section is accomplished using Scraping Ant and their headless browser integration for gathering site html.
* Giphy for cool car pictures/gifs (obviously).
* Cheerio for extracting the needed information from gathered html.

# Currently working on
* Transitioning to periodical headless browsing (using tools like Playwright) with the idea of greatly increasing scraping speeds, and reducing reliance on ScrapingAnt.
* Building an application backend to efficiently manage and process larger amounts of data.
* Updating the UI/UX for better user experience.

# Installation and Setup
Coming soon

# How to use

After opening the site you are prompted with the search section:

![carhunter1](https://github.com/jusadocode/CarHunter/assets/77744027/fa6ccf3d-e82c-4e77-8f48-0761fc7ad368)


You can fill in the needed filters using the dropdown menu's for the car of your choice:

![carhunter22](https://github.com/jusadocode/CarHunter/assets/77744027/107522d3-4668-450f-b3af-f8c288bfaa74)

You can initiate the scraping process by clicking the search button (Ieškoti)

The time from the start of scraping to results on your screen depend on the filters and the chuck of data extracted (3-15 secs on average).

![carhunter 2](https://github.com/jusadocode/CarHunter/assets/77744027/6dcde607-42fb-4672-8cf3-63e20ca52e4c)

After the search operation, there is a small cooldown on the search initiation to avoid the overload of requests for the ScrapingAnt.

After the process finishes, you can see the results portrayed in parallel:

![carhunter 3](https://github.com/jusadocode/CarHunter/assets/77744027/d6f71e2f-7823-41b2-8971-e2bf5f7a885a)

for now the info is gathered using autoplius and autogidas results.


The project is still in development and there is quite a bit of features to be implemented in the future, such as:
* Support for more variety of car sites
* Sorting of results
* Advanced search
* Price trend of the car in question


