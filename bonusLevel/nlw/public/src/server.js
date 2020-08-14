const proffys = [
    {   name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731",
        whatzapp: "(61) 99754-5576",
        bio: "Entusiasta das melhores tecnologias de quimica avançada." +
            "\nApaixonado por explodir laboratório e por mudar a vida das pessoas através de experiências." +
            " Mais de 200.000 pessoas uma das minhas explosões.",
        subject: "Quimica",
        cost: "250",
        weekday: [0],
        time_form: [720],
        time_to: [1220]
    },
    {   name: "Mayk Brito Lionel",
        avatar: "https://avatars2.githubusercontent.com/u/6643122",
        whatzapp: "(61) 99754-5576",
        bio: "Entusiasta das melhores tecnologias de fisica avançada." +
            "\nApaixonado por explodir laboratório e por mudar a vida das pessoas através de experiências." +
            " Mais de 200.000 pessoas uma das minhas explosões.",
        subject: "Fisica",
        cost: "400",
        weekday: [2],
        time_form: [720],
        time_to: [1220]
    },
    {   name: "Renato Sousa Silva",
        avatar: "https://avatars2.githubusercontent.com/u/2254731",
        whatzapp: "(61) 99754-5576",
        bio: "Entusiasta das melhores tecnologias de artes avançada." +
            "\nApaixonado por explodir laboratório e por mudar a vida das pessoas através de experiências." +
            " Mais de 200.000 pessoas uma das minhas explosões.",
        subject: "Artes",
        cost: "350",
        weekday: [0, 2, 4],
        time_form: [720],
        time_to: [1220]
    }
];
const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educaçao Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica"
 ]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado"
]

function getSubject(subject) {
    const position = +subject - 1;
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render('_index.html')
}
function pageStudy(req, res) {
    const filters = req.query;
    return res.render('_study.html', { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
    const filters = req.query;
    const isNotEmpty = Object.keys(filters).length > 0;
    if (isNotEmpty) {
        filters.subject = getSubject(filters.subject);
        proffys.push(filters);

        return res.redirect('/_study');
    }

    return res.render('_give-classes.html', { filters, subjects, weekdays })
}


const express = require('express');

const server = express();
server
    .use( express.static('public') )
    .get('/', pageLanding)
    .get('/_study', pageStudy)
    .get('/_give-classes', pageGiveClasses)
    .listen(5500);


const nunjucks = require('nunjucks');
nunjucks.configure('public/src/views', {
    express: server,
    noCache: true,
})


console.log(__dirname)

