/**
 * Created by Administrator on 2016/4/13.
 */
var request = require('request')

var Data = { "query" : { "match_phrase" : { "description" : "龙阳路" } }};
var host = 'http://172.16.17.98:9200/scrapyd/_search';

request.post(
    host,
    Data,
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);