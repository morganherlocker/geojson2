var geojsonTo = require('../index.js'),
    should = require('should')

describe('geojsonTo', function(){
  it('should take a geojson file and output a csv file', function(done){
    geojsonTo.csv(__dirname+'/in.geojson', __dirname+'/out.csv', function(err){
      if(err) throw err
      fs.exists(__dirname+'/out.csv', function(exists){
        exists.should.be.true
        done()
      })
    })
  })
  it('should take a geojson file and output a shape file', function(done){
    geojsonTo.shp(__dirname+'/in.geojson', __dirname+'/out.shp', false, function(err){
      if(err) throw err
      fs.exists(__dirname+'/out.shp', function(exists){
        exists.should.be.true
        done()
      })
    })
  })
  it('should take a geojson file and output a kml file', function(done){
    geojsonTo.kml(__dirname+'/in.geojson', __dirname+'/out.kml', function(err){
      if(err) throw err
      fs.exists(__dirname+'/out.kml', function(exists){
        exists.should.be.true
        done()
      })
    })
  })
})