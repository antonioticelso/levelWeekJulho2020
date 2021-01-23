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

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":");

    return Number((hour * 60) + minutes )
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}