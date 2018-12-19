// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

const API_TOKEN = '3235f0a877d0e53652c6d0167c95bdff89d2a930';

const url = 'https://api.github.com/users/jenniferludwiczak/events';

function checkForErrors(response) {
    if(response.status !== 200) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
}

function parseToJSON(response) {
    const jsonResponse = response.json();
    return jsonResponse
}

function latestCommit(data) {
    return data[0];
}

function printDate(data) {
    console.log(data.created_at);
}


fetch(url, {headers: {'Authorization': `token ${API_TOKEN}`}})
    .then(checkForErrors)
    .then(parseToJSON)
    .then(latestCommit)
    .then(printDate);








/**
 * Promises Review
 *
 * 1. what does asynchronous mean?
 * 2. what is a promise?
 * 3. what is a fetch?
 * 4. demo: abstract error checking and json parsing
 *    1. "bare" fetch with hardcoded url + error checking and json functions
 *    2. Review control flow, add console.logs
 *    3. abstract error checking and json parsing
 *    4. abstract url
 *    5. es6 refactor
 */

const fetchOptions = {
    headers: {'Authorization': `token ${API_TOKEN}`}
};

const checkResponseForErrors = response => {
    console.group('checkResponseForErrors');
    console.log(response);
    console.groupEnd();
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
};

const parseResponseAsJson = response => {
    console.group('parseResponseAsJson');
    console.log(response);
    console.groupEnd();
    const jsonResponse = response.json();
    return jsonResponse;
};

// es5
// function getSecondElement(data) {
//     return data[1];
// }
//
// es6 arrow function
// const getSecondElement = (data) => {
//     return data[1];
// }
//
// es6 arrow function with implicit return
// const getSecondElement = (data) => data[1];
//
// es6 arrow function with implicit return and destructuring syntax
    const getSecondElement = ([first, second]) => second;

function getId(githubApiObject) {
    console.group('getId');
    console.log(githubApiObject);
    console.groupEnd();
    return githubApiObject.id;
}

function logData(data) {
    console.group('logData');
    console.log(data);
    console.groupEnd();
}

function fetchJson(url) {
    return fetch(url, fetchOptions)
        .then(checkResponseForErrors)
        .then(parseResponseAsJson)
}

fetchJson('https://api.github.com/users/zgulde/events')
    .then(getSecondElement)
    .then(getId)
    .then(logData);

// const fetchPromise = fetch('https://api.github.com/users/zgulde/events', fetchOptions)
// const errorFreeResponse = fetchPromise.then(checkResponseForErrors)
// const jsonResponse = errorFreeResponse.then(parseResponseAsJson);
// const secondElementPromise = jsonResponse.then(getSecondElement);
// secondElementPromise.then(logData)



// .then(getId)
// .then(logData);

console.log('When will you see this?')

















// function makeFetchRequestAndReturnJson(url) {
//     const fetchPromise = fetch(url)
//     const jsonPromise = fetchPromise.then(response => response.json())
//     return jsonPromise
// }

// function checkResponseForErrors(response) {
//     if (response.status == 200) {
//         return Promise.resolve(response)
//     } else {
//         return Promise.reject(response)
//     }
// }

// function parseResponseAsJson(response) {
//     return response.json()
// }


// fetch('https://api.github.com/users/zgulde/events')
//     .then(checkResponseForErrors)
//     .then(parseResponseAsJson)
//     .then(function(data) {
//         console.log(data)
//         /* use data to do some DOM manipulation */
//         /* show an alert to a user */
//     })

// console.log('When do we see this?')
}