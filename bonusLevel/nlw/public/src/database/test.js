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
         subject: "Quimica",
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

 })


