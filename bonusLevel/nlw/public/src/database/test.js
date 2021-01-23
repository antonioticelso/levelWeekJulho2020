const db = require('./db')
const createProffy = require('./createProffy')

 db.then( async (db) => {

     proffyValue = {
         name: "Diego Fernandes",
         avatar: "https://avatars2.githubusercontent.com/u/2254731",
         whatzapp: "(61) 99754-5576",
         bio: "Entusiasta das melhores tecnologias de quimica avançada." +
             "\nApaixonado por explodir laboratório e por mudar a vida das pessoas através de experiências." +
             " Mais de 200.000 pessoas uma das minhas explosões."
     }

     classValue = {
         subject: "1",
         cost: "250"
     }

     classScheduleValues = [
         {
             weekday: 0,
             time_from: 720,
             time_to: 1220
         },
         {
             weekday: 1,
             time_from: 520,
             time_to: 1220
         }
     ]

     // await createProffy(db, { proffyValue, classValue, classScheduleValues})

     // 50:01 tempo da aula 5

     const selectedProffys = await db.all("SELECT * FROM proffys");

     const selectClassesAndProffys = await db.all(`
        SELECT proffys.*, classes.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = proffys.id;
     `);

     const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "20"
        ;
     `);

     console.log(selectClassesAndProffys);

 })


