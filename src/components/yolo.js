

export default function Post(){

    return(
       
        <h1>
        alert("Complete");
        </h1>
    );
}
export async function getServerSideProps({res,query}){
   
    console.log(query);


    
    // res.statusCode=302;
    // res.setHeader('location',"/table")
    return{
      props: {
        
    }
    }
;



}









// function megaSet(temperature, pressure, reservoir_level_while_static, reservoir_level_while_flowing, sediments, time_elapsed, energy_released,rainfall){
 
// probabilityOfEarthquake=""
   
//  probabilityOfEarthquake2=""



// if(((time_elapsed=="low")&&(energy_released=="low"))||
// ((time_elapsed=="low")&&(energy_released=="high"))||
// ((temperature=="medium")&&(pressure=="medium")&&(reservoir_level_while_static=="medium")&&(reservoir_level_while_flowing=="same")&&(sediments=="increasing") &&
// (time_elapsed=="low")&&(energy_released=="high")))
// {

//         probabilityOfEarthquake= "low"
 
        
    
// }     
//     console.log(probabilityOfEarthquake)


// if(((time_elapsed=="medium")&&(energy_released=="high")&&(pressure=="Low")&&(reservoir_level_while_static=="Low")&&(reservoir_level_while_flowing=="Low")&&(sediments=="High")&& (rain=="medium"))){
//         probabilityOfEarthquake2= "Probable magnitude: 4.0-5.0"
// }
//  else
// { 
//        probabilityOfEarthquake2="low"
// }   
//        console.log(probabilityOfEarthquake2) 


// if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="medium")&&(reservoir_level_while_static=="High")&&(reservoir_level_while_flowing=="Low")&&(sediments=="High")&& (rain=="medium"))
// ||((time_elapsed=="high")&&(energy_released=="high")&&(temperature=="medium")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="Low")&&(sediments=="High")&& (rain=="medium"))
// ||((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="High")&& (rain=="high"))){

//         probabilityOfEarthquake2= "Probable magnitude: 5.0-6.0"
// }
//  else{
 
//        probabilityOfEarthquake2="low"
//  }   
//        console.log(probabilityOfEarthquake2)
 

// if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="High")&& (rain=="high"))
// ||((time_elapsed=="high")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="High")&& (rain=="high"))){

//         probabilityOfEarthquake2= "Probable magnitude: 6.0-8.0"
// }

//  else{
 
//        probabilityOfEarthquake2="low"
//  }  
//        console.log(probabilityOfEarthquake2)
 

// }