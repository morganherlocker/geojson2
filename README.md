geojson2
=========

a geojson exporting utility belt

**Installation**

```bash
npm install geojson2
```

**Use**

```javascript
geojson2.csv(__dirname+'/in.geojson', __dirname+'/out.csv', function(err){

})
geojson2.shp(__dirname+'/in.geojson', __dirname+'/out.shp', false, function(err){

})
geojson2.kml(__dirname+'/in.geojson', __dirname+'/out.kml', function(err){

})
geojson2.topojson(__dirname+'/in.geojson', __dirname+'/out.topojson', function(err){

})
```

**Test**

```bash
cd test
mocha .
```

**Modules**

This module is a utility belt wrapper around the following modules:

- [geojson2csv](https://github.com/morganherlocker/geojson2csv)
- [geojson2shape](https://github.com/morganherlocker/geojson2shape)
- [geojson2kml](https://github.com/morganherlocker/geojson2kml)
- [geojson2topojson](https://github.com/morganherlocker/geojson2topojson)