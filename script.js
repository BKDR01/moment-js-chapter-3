let hours = document.querySelector('#hours');
let secund = document.querySelector('#secund');
let milS = document.querySelector('#milS');
let mon = document.querySelector('#mon')
let yer = document.querySelector('#yers')
let day = document.querySelector('#day')


function time(params) {
    setInterval(() => {
        let hourse = moment().hour();
        let Pm = moment().minute()
        let sec = moment().second();
        let month = moment().format('MM')
        let yers = moment().format('YYYY')
        let daynum = moment().format('DD')

        day.innerHTML = daynum
        yer.innerHTML = yers
        mon.innerHTML = month
        secund.innerHTML = Pm
        hours.innerHTML = hourse
        milS.innerHTML = sec
    }, 1000);
    }
    time()
    

