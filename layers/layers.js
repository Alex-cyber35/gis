var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_polygon_1 = new ol.format.GeoJSON();
var features_boundary_polygon_1 = format_boundary_polygon_1.readFeatures(json_boundary_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_polygon_1.addFeatures(features_boundary_polygon_1);
var lyr_boundary_polygon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_polygon_1, 
                style: style_boundary_polygon_1,
                interactive: false,
                title: '<img src="styles/legend/boundary_polygon_1.png" /> boundary_polygon'
            });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_polygon_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_polygon_1];
lyr_boundary_polygon_1.set('fieldAliases', {'qc_id': 'qc_id', 'osm_id': 'osm_id', 'name': 'district', 'admin_lvl': 'admin_lvl', 'union dataset_salary': 'average salary', 'union dataset_retired': 'retired', 'union dataset_pension': 'pension', 'union dataset_unemployed': 'unemployed', 'union dataset_ecology': 'ecological costs', 'salary': 'salary', 'label': 'label', });
lyr_boundary_polygon_1.set('fieldImages', {'qc_id': 'Hidden', 'osm_id': 'Hidden', 'name': 'TextEdit', 'admin_lvl': 'Hidden', 'union dataset_salary': 'Range', 'union dataset_retired': 'Range', 'union dataset_pension': 'Range', 'union dataset_unemployed': 'Range', 'union dataset_ecology': 'Range', 'salary': 'Hidden', 'label': 'Hidden', });
lyr_boundary_polygon_1.set('fieldLabels', {'name': 'inline label', 'union dataset_salary': 'inline label', 'union dataset_retired': 'inline label', 'union dataset_pension': 'inline label', 'union dataset_unemployed': 'inline label', 'union dataset_ecology': 'inline label', });
lyr_boundary_polygon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});