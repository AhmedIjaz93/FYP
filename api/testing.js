function megaSet(temperature, pressure, reservoir_level_while_static, reservoir_level_while_flowing, sediments, time_elapsed, energy_released,rainfall){
    probabilityOfEarthquake=""  
    if(((time_elapsed=="low")&&(energy_released=="high")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="low")&&(sediments=="increasing")&& (rainfall=="medium"))){
        probabilityOfEarthquake= "Probable magnitude{ 4.0-5.0"
    }else if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="medium")&&(reservoir_level_while_static=="high")&&(reservoir_level_while_flowing=="low")&&(sediments=="increasing")&& (rainfall=="medium"))||((time_elapsed=="more")&&(energy_released=="high")&&(temperature=="medium")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="low")&&(sediments=="increasing")&& (rainfall=="medium"))||((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="increasing")&& (rainfall=="high"))){
        probabilityOfEarthquake= "Probable magnitude{ 5.0-6.0"
    }else if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="increasing")&& (rainfall=="high"))||((time_elapsed=="more")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="increasing")&& (rainfall=="high"))){
        probabilityOfEarthquake= "Probable magnitude{ 6.0-8.0"
    }else{
       probabilityOfEarthquake="low"
    }
    return probabilityOfEarthquake
}
console.log(megaSet("high","high","low","high","increasing","more","high","high"))