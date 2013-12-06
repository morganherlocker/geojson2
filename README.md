geojsonTo
=========

a geojson exporting utility belt


```javascript
geojson2.csv(__dirname+'/in.geojson', __dirname+'/out.csv', function(err){
  if(err) throw err

})
geojson2.shp(__dirname+'/in.geojson', __dirname+'/out.shp', false, function(err){
  if(err) throw err

})
geojson2.kml(__dirname+'/in.geojson', __dirname+'/out.kml', function(err){
  if(err) throw err

})
```

This module is a utility belt wrapper around the following modules:

- geojson2csv
- geojson2shape
- geojson2kml