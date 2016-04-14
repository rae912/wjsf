/**
 * Created by Administrator on 2016/4/13.
 */
var request = require('request');

var Data = { "query" : { "match_phrase" : { "description" : "龙阳路" } },
  "sort" : [ { "timestamp" : { "order" : "desc" } } ]
};
var host = 'http://172.16.17.98:9200/scrapyd/_search?size=10';

request({
    url: host,
    method: "POST",
    json: true,   // <--Very important!!!
    body: Data
},     function (error, response, body) {
    console.log(Data);
        if (!error && response.statusCode == 200) {
            console.log(body)
        } else {
            console.log(error, response.statusCode, body)
        }
    }
);