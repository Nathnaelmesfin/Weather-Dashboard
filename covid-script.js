document.addEventListener('DOMContentLoaded',()=>{
    const selectDrop=document.querySelector('#countries');
    fetch('https://disease.sh/v3/covid-19/countries')
    .then((response)=>response.json())
    .then(data=>{
    
        let output="";
         data=JSON.stringify(data)
        data=JSON.parse(data);
       
       data.forEach(function(Country){
            output+=`<option>${Country.country}</option>`;
           
            
    })
    
     selectDrop.innerHTML=output;
     ok(output);
   
       
    }).catch(err=>{
        console.log(err);
    })
});

function one(){
    fetch('https://api.covid19api.com/world/total')
    .then ((response)=>response.json())
    .then ((data)=>{
       
        const ko=
       `<div>${data.TotalConfirmed}</div>` 
       document.getElementById(`comfirmed`).innerHTML +=ko;
       const kot=
       `<div>${data.TotalDeaths}</div>` 
       document.getElementById(`deceased`).innerHTML +=kot;
       const kos=
       `<div>${data.TotalRecovered}</div>` 
       document.getElementById(`active`).innerHTML +=kos;
       
    
   })

}
    one();
   
    async function getData(){
        const records= await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await records.json();
    
        let tab='';
        data.forEach(function(values){
            tab += `<tr>
                <td>${values.country}</td>
                <td>${values.continent}</td>
                <td>${values.cases}</td>
                <td>${values.deaths}</td>
                <td>${values.active}</td>
                <td>${values.recovered}</td>
               </tr>`;
        });
        document.getElementById('table').innerHTML=tab;
    
        $('#userTable').DataTable({
            "data":data,
            "columns":[
                {"data":'country'},
                {"data":'continent'},
                {"data":'cases'},
                {"data":'deaths'},
                {"data":'active'},
                {"data":'recovered'},
            ]
        })
    } 

