$(document).ready(function() {
    let url = "https://api.covid19india.org/data.json"

    $.getJSON(url,function(data){
        console.log(data);
        let total_active,total_deaths,total_recovered,total_confirmed 
        total_active = data.statewise[0].active
        total_deaths = data.statewise[0].deaths
        total_confirmed = data.statewise[0].confirmed
        total_recovered = data.statewise[0].recovered

        $("#active").append(total_active)
        $("#deaths").append(total_deaths)
        $("#recovered").append(total_recovered)
        $("#confirmed").append(total_confirmed)
        console.log(data.statewise.length);
        let states = [] ,confirmed = [] ,recovered = [] ,deaths = []

        for (let i=1;i<data.statewise.length;i++){
            states.push(data.statewise[i].state)
            confirmed.push(data.statewise[i].confirmed)
            recovered.push(data.statewise[i].recovered)
            deaths.push(data.statewise[i].deaths)
        }
        
        console.log(states,confirmed,recovered,deaths);

        let mychart = document.getElementById('myChart').getContext('2d')
        let chart = new Chart(mychart,{
            type : 'bar',
            data : {
                labels : states,
                datasets : [{
                    label : "Confirmed Cases",
                    data : confirmed,
                    backgroundColor : "#f1c40f",
                },
                {
                    label : "Recovered Cases",
                    data : recovered,
                    backgroundColor : "#2ecc71",
                },
                {
                    label : "Death Cases",
                    data : deaths,
                    backgroundColor : "#e74c3c",
                }]
            },
            options : {}
        })
    })
})