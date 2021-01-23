const express = require('express');
const server = express();
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


server
    .use(express.urlencoded({ extended: true }))
    .use( express.static('public') )
    .get('/', pageLanding)
    .get('/_study', pageStudy)
    .get('/_give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen(5500);


const nunjucks = require('nunjucks');
nunjucks.configure('public/src/views', {
    express: server,
    noCache: true,
})


console.log(__dirname)

