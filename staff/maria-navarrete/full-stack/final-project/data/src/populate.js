const { connect, disconnect } = require('mongoose')
const { User, Action, Schedule } = require('./models')

let users
let actions

connect('mongodb://localhost:27017/bHooman-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        Action.deleteMany(),
        Schedule.deleteMany()
    ]))
    .then(() => {
        const anonymous = new User({ username: 'anonymous', email: 'anonymous@mail.com', password: '123123123' })
        const bHooman = new User({ username: 'bHooman', email: 'bhooman@mail.com', password: '123123123' })
        const gio = new User({ username: 'gio123', email: 'gio@mail.com', password: '123123123' })
        const pau = new User({ username: 'pau123', email: 'pau@mail.com', password: '123123123', notifications: true })
        const ju = new User({ username: 'ju123', email: 'ju@mail.com', password: '123123123' })
        const arvi = new User({ username: 'arvi123', email: 'arvi@mail.com', password: '123123123' })
        const mati = new User({ username: 'mati123', email: 'mati@mail.com', password: '123123123' })

        ju.friends.push(mati.id, pau.id)
        mati.friends.push(gio.id, arvi.id)

        return Promise.all([anonymous.save(), bHooman.save(), gio.save(), pau.save(), ju.save(), arvi.save(), mati.save()])
    })
    .then(_users => {
        users = _users
        const [, bHooman, , , , ,] = users

        const action1 = new Action({
            description: 'Recoge la basura que veas en la calle hoy',
            public: true,
            reqTime: 10,
            reqBudget: 0,
            author: bHooman.id
        })

        const action2 = new Action({
            description: 'Haz las compras a un anciano',
            public: true,
            reqTime: 90,
            reqBudget: 0,
            author: bHooman.id
        })

        const action3 = new Action({
            description: 'Dale algo de comer a una persona que lo necesite',
            public: true,
            reqTime: 15,
            reqBudget: 5,
            author: bHooman.id
        })

        const action4 = new Action({
            description: 'Dona sangre',
            public: true,
            reqTime: 120,
            reqBudget: 0,
            author: bHooman.id
        })

        const action5 = new Action({
            description: 'Da un buen abrazo a alguien que lo necesite',
            public: true,
            reqTime: 1,
            reqBudget: 0,
            author: bHooman.id
        })

        const action6 = new Action({
            description: 'Regala ropa que no uses a alguien que lo necesite',
            public: true,
            reqTime: 10,
            reqBudget: 0,
            author: bHooman.id
        })

        const action7 = new Action({
            description: 'Llama a alguien que extrañes y déjaselo saber',
            public: true,
            reqTime: 5,
            reqBudget: 0,
            author: bHooman.id
        })

        const action8 = new Action({
            description: 'Sonríele a las personas que se crucen en tu camino hoy',
            public: true,
            reqTime: 0,
            reqBudget: 0,
            author: bHooman.id
        })

        const action9 = new Action({
            description: 'Haz una jornada de limpieza de una playa',
            public: true,
            reqTime: 60,
            reqBudget: 0,
            author: bHooman.id
        })

        const action10 = new Action({
            description: 'Visita un ancianato y comparte tiempo con los abuelos',
            public: true,
            reqTime: 180,
            reqBudget: 0,
            author: bHooman.id
        })

        const action11 = new Action({
            description: 'Haz una donación a una fundación que te inspire',
            public: true,
            reqTime: 5,
            reqBudget: 20,
            author: bHooman.id
        })

        const action12 = new Action({
            description: 'Ten una conversación con un habitante de la calle',
            public: true,
            reqTime: 5,
            reqBudget: 0,
            author: bHooman.id
        })

        const action13 = new Action({
            description: 'Escríbele una carta a alguien que quieras mucho y entregársela',
            public: true,
            reqTime: 30,
            reqBudget: 0,
            author: bHooman.id
        })

        const action14 = new Action({
            description: 'Dile te quiero a alguien que no se lo hayas dicho hace mucho tiempo',
            public: true,
            reqTime: 1,
            reqBudget: 0,
            author: bHooman.id
        })

        const action15 = new Action({
            description: 'Adopta una mascota',
            public: true,
            reqTime: 120,
            reqBudget: 200,
            author: bHooman.id
        })

        const action16 = new Action({
            description: 'Participa en un voluntariado',
            public: true,
            reqTime: 180,
            reqBudget: 0,
            author: bHooman.id
        })

        const action17 = new Action({
            description: 'No comas alimentos de origen animal por hoy',
            public: true,
            reqTime: 0,
            reqBudget: 0,
            author: bHooman.id
        })

        const action18 = new Action({
            description: 'Dale las gracias a alguien importante en tu vida',
            public: true,
            reqTime: 10,
            reqBudget: 0,
            author: bHooman.id
        })

        const action19 = new Action({
            description: 'Visita a alguien que lo necesite',
            public: true,
            reqTime: 90,
            reqBudget: 0,
            author: bHooman.id
        })

        const action20 = new Action({
            description: 'Pide disculpas por algo que hayas hecho en el pasado',
            public: true,
            reqTime: 20,
            reqBudget: 0,
            author: bHooman.id
        })

        const action21 = new Action({
            description: 'Regala flores de manera anónima',
            public: true,
            reqTime: 15,
            reqBudget: 10,
            author: bHooman.id
        })

        const action22 = new Action({
            description: 'Dona tiempo a una caridad',
            public: true,
            reqTime: 120,
            reqBudget: 0,
            author: bHooman.id
        })

        return Promise.all([
            action1.save(), 
            action2.save(), 
            action3.save(), 
            action4.save(), 
            action5.save(),
            action6.save(),
            action7.save(),
            action8.save(),
            action9.save(),
            action10.save(),
            action11.save(),
            action12.save(),
            action13.save(),
            action14.save(),
            action15.save(),
            action16.save(),
            action17.save(),
            action18.save(),
            action19.save(),
            action20.save(),
            action21.save(),
            action22.save()
        ])
    })
    .then(_actions => {
        actions = _actions
        const [action1, action2, action3, action4, action5] = actions
        const [anonymous, bHooman, gio, pau, ju, arvi, mati] = users

        const date1 = new Date('March 10, 2020 14:00:00')

        const schedule1 = new Schedule({ user: gio.id, action: action1.id, date: date1, repeat: "weekly" })
        const schedule2 = new Schedule({ user: pau.id, action: action3.id, date: date1, repeat: "monthly" })
        const schedule3 = new Schedule({ user: mati.id, action: action5.id, date: date1 })

        return Promise.all([schedule1.save(), schedule2.save(), schedule3.save()])
    })
    .then(schedules => {
        const [action1, action2, action3, action4, action5] = actions
        const [anonymous, bHooman, gio, pau, ju, arvi, mati] = users

        gio.favs.push(action4.id, action3.id)
        arvi.favs.push(action2.id, action3.id)

        return Promise.all([gio.save(), arvi.save()])
    })

    .then(() => disconnect())

    .then(() => console.log('disconnected'))
