import scrapy

class ScholarshipSpider(scrapy.Spider):
    name = 'scholarship_data'
    start_urls = ['http://www.collegescholarships.org/financial-aid/?page=1']

    def parse(self, response):
        scholarships = response.css('div.scholarship-list > div.row')

        for scholarship in scholarships:
            location=scholarship.xpath('/html/body/section/div/div/div[2]/div[1]/div[2]/div/ul/li[1]/span/text()').get()
            normalized_location=location.strip()
            eligibility=scholarship.xpath('/html/body/section/div/div/div[2]/div[1]/div[2]/div/ul/li[3]/span/text()').get()
            normalized_eligibility=eligibility.strip()

            item = {
                'Scholarship Name': scholarship.css('h4.text-uppercase a::text').get(),
                'Deadline': scholarship.xpath('/html/body/section/div/div/div[2]/div[1]/div[1]/div/p[2]/strong/text()').get(),
                'Amount': scholarship.xpath('/html/body/section/div/div/div[2]/div[1]/div[1]/div/p[1]/span[2]/strong/text()').get(),
                'Description': scholarship.xpath('/html/body/section/div/div/div[2]/div[1]/div[2]/div/p[2]/text()').get(),
                'Location': normalized_location,
                'Eligibility': normalized_eligibility,
                'Link': scholarship.css('h4.text-uppercase a::attr(href)').get(),
            }
            yield item

        # Follow pagination link
        next_page = response.css('ul.pagination li:last-child a::attr(href)').get()
        if next_page:
            yield scrapy.Request(url=next_page, callback=self.parse)
