var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Consoole working")
  res.render('index', { title: 'Express', yolo:"Dvdzx"  });
});

router.post("/year", function (req, res, next) {

  
  if(req.body.year_id==="1984"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1985"){
    res.render('earthquake', { prob: 'high', mag: '4.0-5.0'});
  }else if(req.body.year_id==="1986"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1987"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1988"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1989"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1990"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1991"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1992"){
    res.render('earthquake', { prob: 'high', mag: '5.0-6.0'});
  }else if(req.body.year_id==="1993"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1994"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1995"){
    res.render('earthquake', { prob: 'high', mag: '5.0-6.0'});
  }else if(req.body.year_id==="1996"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1997"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="1998"){
    res.render('earthquake', { prob: 'high', mag: '5.0-6.0'});
  }else if(req.body.year_id==="1999"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2000"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2001"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2002"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2003"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2004"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2005"){
    res.render('earthquake', { prob: 'high', mag: '6.0-8.0'});
  }else if(req.body.year_id==="2006"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2007"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2008"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2009"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2010"){
    res.render('earthquake', { prob: 'high', mag: '5.0-6.0'});
  }else if(req.body.year_id==="2011"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2012"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2013"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2014"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2015"){
    res.render('earthquake', { prob: 'high', mag: '6.0-8.0'});
  }else if(parseInt(req.body.year_id)-2020<2.5){
    res.render('earthquake', { prob: 'low'});
  }else if((parseInt(req.body.year_id)-2020)<5){
    res.render('earthquake', { prob: 'moderate', mag: 'Exepected is 4.0-6.0'});
  }else if(parseInt(req.body.year_id)-2020>=5){
    res.render('earthquake', { prob: 'high', mag: 'Expected is 6.0-8.0'});
  }
  return("sgfsvdfc")
});

function testFunc(paramet){
  console.log("Yoollop:::",paramet)
}
router.post("/prediction", function (req, res, next) {
  testFunc(req.body)
  res.render('earthquake', { prob: 'high', mag: 'Expected is 6.0-8.0'});
})


/*function megaSet(temperature, pressure, reservoir_level_while_static, reservoir_level_while_flowing, sediments, time_elapsed, energy_released,rainfall){
 
    probabilityOfEarthquake=""
       
    probabilityOfEarthquake2=""
    
    
    
    if(((time_elapsed=="low")&&(energy_released=="low"))||
    ((time_elapsed=="low")&&(energy_released=="high"))||
    ((temperature=="medium")&&(pressure=="medium")&&(reservoir_level_while_static=="medium")&&(reservoir_level_while_flowing=="same")&&(sediments=="increasing") &&
    (time_elapsed=="low")&&(energy_released=="high")))
    
    {
    
        probabilityOfEarthquake= "low"
     
            
        
         
        print(probabilityOfEarthquake)
    }
    
    if(((time_elapsed=="medium")&&(energy_released=="high")&&(pressure=="Low")&&(reservoir_level_while_static=="Low")&&(reservoir_level_while_flowing=="Low")&&(sediments=="High")&& (rain=="medium")))
   {     probabilityOfEarthquake2= "Probable magnitude 4.0-5.0"
     } 
    else{
     
        probabilityOfEarthquake2="low"
       
        print(probabilityOfEarthquake2) 
    }
    
    if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="medium")&&(reservoir_level_while_static=="High")&&(reservoir_level_while_flowing=="Low")&&(sediments=="High")&& (rain=="medium"))
    ||((time_elapsed=="high")&&(energy_released=="high")&&(temperature=="medium")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="Low")&&(sediments=="High")&& (rain=="medium"))
    ||((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="High")&& (rain=="high")))
    {
        probabilityOfEarthquake2= "Probable magnitude 5.0-6.0"
       }
    else
     {
        probabilityOfEarthquake2="low"
       
        print(probabilityOfEarthquake2)
    }
    
    if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="High")&& (rain=="high"))
    ||((time_elapsed=="high")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="High")&& (rain=="high")))
    {
        probabilityOfEarthquake2= "Probable magnitude 6.0-8.0"
       }
    
    else
     {
       probabilityOfEarthquake2="low"
    
       print(probabilityOfEarthquake2)}
    }

megaSet("medium","low","low", "low", "decreasing","low", "low", "medium")
 */

module.exports = router;
