
import * as tapTypes from './tap-types'
var csv = require('csv-parser')
var fs = require('fs')

export function parseItem(csvFS: Buffer) {

 
fs.createReadStream("/home/ollie/Documents/Internship2018/tap-ts-starter-master/testdata/emails/FL_insurance_sample.csv")
  .pipe(csv())
  .on('data', function (data) {
    console.log('Statecode: %s County: %s Latitude: %s Longitude: %s', data.statecode, data.county, data.point_latitude, data.point_longitude)
    //statecode,county point_latitude,point_longitude
  })
    }
  