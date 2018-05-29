
import * as tapTypes from './tap-types'
var csv = require('csv-parser')
var fs = require('fs')
var hold 
var sold
var cold = new Array()
var i = 0
var j = 0

fs.createReadStream("/home/ollie/Documents/Internship2018/tap-ts-starter-master/testdata/emails/FL_insurance_sample.csv")
  .pipe(csv())
  .on('data', function (data) {
    //console.log('Statecode: %s County: %s Latitude: %s Longitude: %s', data.statecode, data.county, data.point_latitude, data.point_longitude)
    //statecode,county point_latitude,point_longitude
    //console.log(JSON.stringify(data));
    //var strdat = JSON.stringify(data)
    
   hold = (JSON.stringify(data));
   //console.log(data)
   //console.log('------------------')

  sold = data;
  //data = sold;
  //i++;
//      console.log(sold)
  })
export function parseItem(csvFS: Buffer) {
  
  csvFS = sold
  let rec = new tapTypes.streamRecord()
  rec.stream = 'csv'
  //rec.time_extracted = new Date()
  hold = (JSON.stringify(sold));
  rec.record = csvFS;
  return rec


  
    }
  