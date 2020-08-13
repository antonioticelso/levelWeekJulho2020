const proffys = [
    {   name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731",
        whatzapp: "(61) 99754-5576",
        bio: "Entusiasta das melhores tecnologias de qu&iacute;mica avançada." +
            "<br><br>Apaixonado por explodir laboratório e por mudar a vida das pessoas através de experiências." +
            " Mais de 200.000 pessoas uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_form: [720],
        time_to: [1220]
    },
    {   name: "Tavares Lionel",
        avatar: "https://avatars2.githubusercontent.com/u/2254731",
        whatzapp: "(61) 99754-5576",
        bio: "Entusiasta das melhores tecnologias de qu&iacute;mica avançada." +
            "<br><br>Apaixonado por explodir laboratório e por mudar a vida das pessoas através de experiências." +
            " Mais de 200.000 pessoas uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [2],
        time_form: [720],
        time_to: [1220]
    }
];

function pageLanding(req, res) {
    return res.sendFile(__dirname + '/views/_index.html')
}
function pageStudy(req, res) {
    return res.sendFile(__dirname + '/views/_study.html')
}
function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + '/views/_give-classes.html')
}
// function pageStudy(req, res) {}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

// 45:19

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

console.log(__dirname)

server
    .use( express.static('public') )
    .get('/', pageLanding)
    .get('/_study', pageStudy)
    .get('/_give-classes', pageGiveClasses)
    .listen(5500);


