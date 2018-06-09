const personService = require('./person/service');
const http = require('http');

const port = 3000;
const base = '/api/';

var server = http.createServer((req, res) => {
    if (req.url.startsWith(base)) {
        var path = req.url.substring(base.length, req.url.length);
        if (path.startsWith('people')) {
            //we only have people service
            handlePersonRequest(path, req, res);
        }
        else {
            console.log("unknown path " + path);
            conclude("Unknown path", 500, res);
        }
    }
});

const handlePersonRequest = (path, req, res) => {
    switch (req.method) {
        case 'POST':
            //posting to person service
            let dataArray = [];
            req.on('data', function(chunk) {
                dataArray.push(chunk);
            });
            req.on('end', function() {
                let stringified = dataArray.join('');
                personService.save(stringified).then(data => {
                    conclude(data, 200, res);
                })
                .catch(err => {
                    conclude(null, 500, res);
                });
            });
            break;
        case 'GET':
            if (path.indexOf('?') != -1) {
                //there's a query parameter - fetch it!
                let query = getQueryParams(req);
                personService.get(null, query).then(data => {
                    conclude(data, 200, res);
                })
                .catch(err => {
                    conclude(null, 500, res);
                });
            }
            else {
                let lastIndexOfSlash = path.lastIndexOf('/');
                if (lastIndexOfSlash != -1) {
                    let email = path.substring(lastIndexOfSlash + 1, path.length);
                    personService.get(email, null).then(data => {
                        conclude(data, 200, res);
                    })
                    .catch(err => {
                        conclude(null, 500, res);
                    });
                }
                else {
                    personService.getAll().then(data => {
                        conclude(data, 200, res);
                    })
                    .catch(err => {
                        conclude(null, 500, res);
                    });
                }
            }
            break;
        case 'DELETE':
            //delete
            //TODO - implement
            break;
        default:
            conclude(null, 500, res);
            break;
    }
}

const getQueryParams = (req) => {
    let q = req.url.split('?');
    let result = {};
    if (q.length >= 2) {
        q[1].split('&').forEach((item) => {
            try {
                result[item.split('=')[0]] = unescape(item.split('=')[1]);
            }
            catch (e) {
                result[item.split('=')[0]] = '';
            }
        });
    }
    return result;
}

const conclude = function(data, code, res) {
    res.writeHead(code, {
        "Content-Type": "application/json"
    });
    if (data && code == 200)
        res.end(data);
    else
        res.end();
};

server.listen(port);
console.log("server is listening on " + port);