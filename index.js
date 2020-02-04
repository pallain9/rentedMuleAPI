/*const axios = require('request')

async function createContact(request, response) {
    const response = await axios.post(`https://embroker-test.britecorepro.com/api/v2/policies/create_policy`, {
        auth: {
            api_key: '8d368a8d5ef8384610efaee8c320d3e0aebf052377804f8e90e822e7'
        },
        responseType: 'json',

    })

    return resp
}
document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';

    axios.post(`https://embroker-test.britecorepro.com/api/v2/policies/create_policy`, {
        auth: {
            api_key: '8d368a8d5ef8384610efaee8c320d3e0aebf052377804f8e90e822e7'
        },
        userId: '1',
        title: todoTitle,
        completed: false
    })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });

    e.preventDefault();
}

async function createPolicy(request, response) {

} */

const bodyParser = require('body-parser')
const express = require('express')
const { newContact } = require('./controllers/web')

const app = express()

/*app.get('/movies', getMovies)

app.get('/movies/:id', getMoviesById)

app.get('/genre/:id', matchingGenres)

app.get('/director/:id', getDirectorByID)

app.post('/movies', bodyParser.json(), postMovie)*/

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server