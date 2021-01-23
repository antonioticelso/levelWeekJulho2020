const Database = require('./database/db')
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format');

function pageLanding(req, res) {
    return res.render('_index.html')
}

async function pageStudy(req, res) {
    const filters = req.query;

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render('_study.html', {filters, subjects, weekdays});

    }

    // convercao de horas em minutos
    const timeToMinutes = convertHoursToMinutes(filters.time);


    // console.log('nao tem campo vazio.')

    const query = `
        SELECT proffys.*, classes.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
        `
    try {
        const db = await Database;
        const proffys = await db.all(query);

        return res.render('_study', {proffys, subjects, filters, weekdays})
    } catch (error) {
        console.log(error);
    }

    // return res.render('_study.html', { proffys, filters, subjects, weekdays })

}
function pageGiveClasses(req, res) {
    const filters = req.body;
    const isNotEmpty = Object.keys(filters).length > 0;
    if (isNotEmpty) {
        filters.subject = getSubject(filters.subject);
        proffys.push(filters);

        return res.redirect('/_study');
    }

    return res.render('_give-classes.html', { filters, subjects, weekdays })
}

function saveClasses(req, res) {}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}
