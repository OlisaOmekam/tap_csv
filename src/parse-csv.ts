import * as tapTypes from './tap-types'

var csv = require('csvtojson')
var csvFilePath =
  '/home/ollie/Documents/Internship2018/tap-ts-starter-master/testdata/emails/FL_insurance_sample.csv'

export function parseItem(csvFile: Buffer) {
  return new Promise(function(resolve, reject) {
    csv()
      .fromFile(csvFilePath)
      .then(jsonObj => {
        console.log(jsonObj)
        if (jsonObj != null) {
          let rec = new tapTypes.streamRecord()
          rec.stream = 'csv'
          rec.time_extracted = new Date()
          rec.record = jsonObj
          resolve(rec)
        } else {
          reject(Error('It broke'))
        }
      })
  })
}

// Async / await usage
//const jsonArray=await csv().fromFile(csvFilePath);
