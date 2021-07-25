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
  }else if(req.body.year_id==="2016"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2017"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2018"){
    res.render('earthquake', { prob: 'low'});
  }else if(req.body.year_id==="2019"){
    res.render('earthquake', { prob: 'moderate', mag: '4.0-6.0'});
  }else if(req.body.year_id==="2020"){
    res.render('earthquake', { prob: 'moderate', mag: '6.0-8.0'});
  }else if(parseInt(req.body.year_id)-2020<2.5){
    res.render('earthquake', { prob: 'low'});
  }else if((parseInt(req.body.year_id)-2020)<5){
    res.render('earthquake', { prob: 'moderate', mag: 'Exepected is 4.0-6.0'});
  }else if(parseInt(req.body.year_id)-2020>=5){
    res.render('earthquake', { prob: 'high', mag: 'Expected is 6.0-8.0'});
  }
  return("sgfsvdfc")
});


router.post("/prediction", function (req, res, next) {
  let time_elapsed=""
  if(req.body.year==="1984"||req.body.year==="1986"){
    time_elapsed="low"
  }else if(parseInt(req.body.year)-parseInt(req.body.lastEarthQuake)<3){
    time_elapsed= "low"
  }else if(parseInt(req.body.year)-parseInt(req.body.lastEarthQuake)>=3&&parseInt(req.body.year)-parseInt(req.body.lastEarthQuake)<6){
    time_elapsed="medium"
  }else{
    time_elapsed="more"
  }
  console.log(time_elapsed)
  let result=megaSet(req.body.temp,req.body.pressure, req.body.rstatic,req.body.rflow,req.body.sediment,time_elapsed,req.body.erelease,
    req.body.rain)
  console.log(result)
  if(result==="low"){
    res.render('earthquake', { prob: 'low'});
  }else{
    res.render('earthquake', { prob: "high" , mag: result});
  }
})


function megaSet(temperature, pressure, reservoir_level_while_static, reservoir_level_while_flowing, sediments, time_elapsed, energy_released,rainfall){
  probabilityOfEarthquake=""  
  if(((time_elapsed=="low")&&(energy_released=="high")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="low")&&(sediments=="increasing")&& (rainfall=="medium"))){
      probabilityOfEarthquake= "4.0-5.0"
  }else if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="medium")&&(reservoir_level_while_static=="high")&&(reservoir_level_while_flowing=="low")&&(sediments=="increasing")&& (rainfall=="medium"))||((time_elapsed=="more")&&(energy_released=="high")&&(temperature=="medium")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="low")&&(sediments=="increasing")&& (rainfall=="medium"))||((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="low")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="increasing")&& (rainfall=="high"))){
      probabilityOfEarthquake= "5.0-6.0"
  }else if(((time_elapsed=="medium")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="increasing")&& (rainfall=="high"))||((time_elapsed=="more")&&(energy_released=="high")&&(temperature=="high")&&(pressure=="high")&&(reservoir_level_while_static=="low")&&(reservoir_level_while_flowing=="high")&&(sediments=="increasing")&& (rainfall=="high"))){
      probabilityOfEarthquake= "6.0-8.0"
  }else{
     probabilityOfEarthquake="low"
  }
  return probabilityOfEarthquake
}
/*
megaSet("medium","low","low", "low", "decreasing","low", "low", "medium")
 */

module.exports = router;
