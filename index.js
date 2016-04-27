/**
 * Created by Administrator on 2016/4/12.
 */

var express = require('express');
var app = express();

app.configure(function () {
    // set the static files location /public/img will be /img for users
    app.use(express.static(__dirname + '/public'));
    // log every request to the console
    app.use(express.logger());
    // pull information from html in POST
    app.use(express.urlencoded());
    app.use(express.json());
});

// redirect with GET Method
var searchWord = '';

app.get('/redirect', function(req, res) {
    console.log(req.query);
    searchWord = req.query.search;
    res.redirect("/");
});

app.get('/api/todos', function(req, res) {
    console.log(req.query);
    res.send(searchWord);
});

// get the index.html
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


// create Todo and send back all todos after creation
app.post('/api/todos', function (req, res) {

var request = require('request');

var Data = { "query" : { "match_phrase" : { "description" : req.body.search } },
  "sort" : [ { "timestamp" : { "order" : "desc" } } ]
};

if (isNaN(req.body.currentPage)) {
    var page = 0;
} else {
    var page = (req.body.currentPage - 1) * 10;
}
var host = 'http://172.16.17.98:9200/scrapyd/_search?size=10';

    console.log(page);

request({
    url: host + '&from='+ page,
    method: "POST",
    json: true,   // <--Very important!!!
    body: Data
},     function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('search:'+req.body.search);
            res.send(body);
            console.log("total:"+body.hits.total)
        } else {
            console.log(error, response.statusCode, body)
        }
    }
);
});


app.listen(8001);
console.log("App listening on port 8001");