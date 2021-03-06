var mapnik = require('mapnik');
var assert = require('assert');
var fs = require('fs');
var existsSync = require('fs').existsSync || require('path').existsSync;

describe('Handling unicode paths, filenames, and data', function(){

    it('open csv from folder with unicode', function(){
        var filepath = './test/data/Clément/foo.csv';
        assert.ok(existsSync(filepath));
        var ds = new mapnik.Datasource({type:'csv',file:filepath});
        assert.ok(ds); 
    });

    it('open shape from folder with unicode', function(){
        var filepath = './test/data/Clément/long_lat.shp';
        assert.ok(existsSync(filepath));
        var ds = new mapnik.Datasource({type:'shape',file:filepath});
        assert.ok(ds); 
    });

    it('open csv file with unicode name', function(){
        var filepath = './test/data/你好_points.csv';
        assert.ok(existsSync(filepath));
        var ds = new mapnik.Datasource({type:'csv',file:filepath});
        assert.ok(ds); 
    });

    it('open shape file with unicode name', function(){
        var filepath = './test/data/你好_points.shp';
        assert.ok(existsSync(filepath));
        var ds = new mapnik.Datasource({type:'shape',file:filepath});
        assert.ok(ds); 
    });

});