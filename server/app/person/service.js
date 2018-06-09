const fs = require('fs');
const path = require('path');

//our data store will be a text file. This likely would not be located here in a production environment
const SAVE_PATH = path.join(__dirname, 'datastore');
const SAVED_FILE = path.join(SAVE_PATH, 'saved.txt');

if (!fs.existsSync(SAVE_PATH)) {
    fs.mkdirSync(SAVE_PATH);
}

if (!fs.existsSync(SAVED_FILE)) {
    fs.writeFileSync(SAVED_FILE, JSON.stringify({}));
}

module.exports = {
    save: (personStr) => {
        //get person so we can read fields
        let person = JSON.parse(personStr);

        return new Promise((resolve, reject) => {
            getAllPeople().then(data => {
                //this is in a separate repo, and this is a short 'example'
                //but we should really share the models
                let email = person.Email;

                //our current 'db'
                let currentContents = JSON.parse(data);

                if (currentContents.hasOwnProperty(email)) {
                    console.log('replacing ' + email);
                }

                currentContents[email] = person;

                writeDataToFile(currentContents).then(() => {
                    resolve(JSON.stringify(person));
                })
                .catch(err => {
                    handleErr(err, reject);
                });
            })
            .catch(err => {
                handleErr(err, reject);
            });
        });
    },
    delete: (email) => {
        return new Promise((resolve, reject) => {
            getAllPeople().then(data => {
                let currentContents = JSON.parse(data);

                let exists = currentContents.hasOwnProperty(email);

                if (exists) {
                    delete currentContents[email];
                }

                writeDataToFile(currentContents).then(() => {
                    resolve(true);
                })
                .catch(err => {
                    handleErr(err, reject);
                });
            })
            .catch(err => {
                handleErr(err, reject);
            });
        });
    },
    get: (email, query) => {
        if (email) {
            return new Promise((resolve, reject) => {
                getAllPeople().then(data => {
                    let currentContents = JSON.parse(data);

                    if (currentContents.hasOwnProperty(email)) {
                        let person = currentContents[email];
                        resolve(JSON.stringify([person]));
                    }
                    else {
                        //resolve or reject?
                        resolve(null);
                    }
                })
                .catch(err => {
                    handleErr(err, reject);
                });
            });
        }
        else if (query) {
            return new Promise((resolve, reject) => {
                getAllPeople().then(data => {
                    let currentContents = JSON.parse(data);

                    let peopleWhoFitQuery = [];

                    if (currentContents) {
                        for (let email in currentContents) {
                            let person = currentContents[email];
                            let isPerson = true;
                            for (let prop in query) {
                                if (person[prop] != query[prop]) {
                                    isPerson = false;
                                    break;
                                }
                            }
                            if (isPerson) {
                                peopleWhoFitQuery.push(person)
                            }
                        }
                    }

                    resolve(JSON.stringify(peopleWhoFitQuery));
                })
                .catch(err => {
                    handleErr(err, reject);
                });
            })
        }
        else {
            return new Promise((resolve,reject)=>{
                reject('No query or email specified');
            });
        }
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            getAllPeople().then(data => {
                let currentContents = JSON.parse(data);

                let returnedData = [];
                for (let prop in currentContents) {
                    returnedData.push(currentContents[prop]);
                }
                resolve(JSON.stringify(returnedData));
            })
            .catch(err => {
                handleErr(err, reject);
            })
        });
    }
}

//internal functions
const writeDataToFile = (data) => {
    return new Promise((resolve, reject) => {
        //we're replacing the entire file
        fs.writeFile(SAVED_FILE, JSON.stringify(data), (err) => {
            if (err) {
                handleErr(err, reject);
            }
            else {
                resolve();
            }
        })
    });
}

const getAllPeople = function() {
    return new Promise((resolve, reject) => {
        fs.readFile(SAVED_FILE, 'utf-8', (err, data) => {
            if (err) {
                handleErr(err, reject);
            }
            else {
                resolve(data);
            }
        })
    });
}

const handleErr = (err, reject) => {
    console.log(err);
    if (reject) {
        reject(err);
    }
}