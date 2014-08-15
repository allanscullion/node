var request = require('request');
var cheerio = require('cheerio');
var commaIt = require('comma-it');

var root_url = "http://www.national-lottery.co.uk/player/p/lotterydrawgames/euromillions.ftl"

///
/// Get Jackpot Data
///
function get_prize() {

    request(root_url, function(err, resp, body) {
        if (err)
            throw err;

        $ = cheerio.load(body);

        var drawdate = $('.countdownBot').find('span').text();
        var mainblock = $('.cdtext');

        if (mainblock.length > 0) 
        {
            var prize = mainblock.find('.cdamount').text().replace(/[^\d.-]/g, '');

            console.log("The next EuroMillions draw is on " + drawdate + " and the estimated prize fund is £" + commaIt(prize, {precision:0, thousandSeperator:',', decimalSeperator:'.'}));
        } 
        else 
        {
            console.log("ERROR: Could not find EuroMillions Data");
        }
    });
}

get_prize();
