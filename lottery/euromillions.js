var request = require('request');
var cheerio = require('cheerio');
var commaIt = require('comma-it');

var root_url = "https://www.national-lottery.co.uk/games/euromillions"

///
/// Get Jackpot Data
///
function get_prize() {

    request(root_url, function(err, resp, body) {
        if (err)
            throw err;

        $ = cheerio.load(body);

        var mainblock = $('.jackpots');

        if (mainblock.length > 0) 
        {
            var prize = mainblock.find('h2').text().trim().replace(/\s+/g, ' ');
            console.log('Euromillions: ' + prize);
        } 
        else 
        {
            console.log("ERROR: Could not find EuroMillions Data");
        }
    });
}

get_prize();
