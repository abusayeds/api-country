   

   const loadData = () => {
    const url = 'https://restcountries.com/v3.1/all'

   fetch(url)
   .then(res => res.json())
   .then(data => displayData(data))
   }


   const displayData = (coutrise) => {
      const countryContainer = document.getElementById("countris-display")

    coutrise.forEach( country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('singlecountry')
        countryDiv.innerHTML = `
        <h1>Country:${country.name.common}</h1>
        <p>Area:${country.area}</p>
        <p> Capital:${country.capital}</p>
        <button onclick =" showDetails('${country.cca2}') " >Details</button>
        
        `
        countryContainer.appendChild(countryDiv)
    });
      
   }

   const showDetails = (code) => {
       const url = `https://restcountries.com/v3.1/alpha/${code}`
       fetch(url)
       .then ( res => res.json())
       .then ( data => detailsDesply(data[0]) )
   }
   const detailsDesply = (country) => {
    console.log(country)
    const countrydetails = document.getElementById('countrydetails')

    countrydetails.innerHTML= `
<h2>Name:${country.name.common}</h2>
<h3>Capital:${country.capital}</h3>
<img src="${country.flags.png}" alt="" srcset="">


`
   }

    
   loadData()