
import * as tapTypes from './tap-types'
var csv = require('csv-parser')
var fs = require('fs')
var hold 
fs.createReadStream("/home/ollie/Documents/Internship2018/tap-ts-starter-master/testdata/emails/FL_insurance_sample.csv")
  .pipe(csv())
  .on('data', function (data) {
    //console.log('Statecode: %s County: %s Latitude: %s Longitude: %s', data.statecode, data.county, data.point_latitude, data.point_longitude)
    //statecode,county point_latitude,point_longitude
    //console.log(JSON.stringify(data));
    //var strdat = JSON.stringify(data)
    
   hold = (JSON.stringify(data));
    
   
  })
export function parseItem(csvFS: Buffer) {
  let rec = new tapTypes.streamRecord()
  rec.stream = 'csv'
  //rec.time_extracted = new Date()
  rec.record = hold
  return rec


  
    }
  