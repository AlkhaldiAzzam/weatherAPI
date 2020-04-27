


$("#clearBtn").click(()=>{
    // console.log('hgfxgfhgjhyu')
    $("#cityInput").val('')
})



console.log($("input[name='gridRadios']:checked").val())

$("#srchBtn").click(()=>{
    
    let city = $("#cityInput").val()

    let url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a2c0a08575c040b6b54145354202704&q=${city}&format=json`


    
    axios.get(url).then(res=>{
        
        console.log(res.data.data.current_condition[0].cloudcover)
        let cityName = res.data.data.request[0].query
        let temp_C = res.data.data.current_condition[0].temp_C + " C"
        let temp_F = res.data.data.current_condition[0].temp_F + " F"
        let weathDesc = res.data.data.current_condition[0].weatherDesc[0].value
        let weatherIcon = res.data.data.current_condition[0].weatherIconUrl[0].value
        let windSpeed = res.data.data.current_condition[0].windspeedKmph
        let cloudCover = res.data.data.current_condition[0].cloudcover

        let temp 
        let whatTemp = $("input[name='gridRadios']:checked").val()

        whatTemp == 'option1'? temp = temp_C: temp = temp_F

        

        $("#cityName").text(cityName)
        $("#weatherDesc").text(weathDesc)
        $("#weatherIcon").attr('src', weatherIcon)
        $("#temp").text(`Temperture: ${temp}`)
        $("#windSpeed").text(`Wind Speed: ${windSpeed} kmph`)
        $("#cloudCover").text(`Cloud Cover: ${cloudCover}%`)



        $("#card").removeClass('d-none')


    }).catch(err=>console.log(err))



})


