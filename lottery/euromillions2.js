var request = require('request');
var cheerio = require('cheerio');

// For use outside of the UK
var options = {
    url: 'http://www.euro-millions.com',
    headers: {
        'User-Agent': 'request',
        'Accept-Language': 'en-US'
    }
};
///
/// Get Jackpot Data
///
function get_prize() {

    request(options, function(err, resp, body) {
        if (err)
            throw err;

        $ = cheerio.load(body);

        var mainblock = $('.next-jackpot');

        if (mainblock.length > 0) 
        {
            var title = mainblock.find('.title').text().trim();
            var prize = mainblock.find('.est-jackpot').text().trim();

            console.log("EuroMillions: " + title + " " + prize);
        } 
        else 
        {
            console.log("ERROR: Could not find EuroMillions Data");
        }
    });
}

get_prize();
