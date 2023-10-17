ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([80.499432, 16.458371, 80.518126, 16.467972]);
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
var format_QQQQQtrees_1 = new ol.format.GeoJSON();
var features_QQQQQtrees_1 = format_QQQQQtrees_1.readFeatures(json_QQQQQtrees_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_QQQQQtrees_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QQQQQtrees_1.addFeatures(features_QQQQQtrees_1);
var lyr_QQQQQtrees_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QQQQQtrees_1, 
                style: style_QQQQQtrees_1,
                interactive: true,
                title: 'QQQQQ — trees'
            });
var format_WWWWsrmap_2 = new ol.format.GeoJSON();
var features_WWWWsrmap_2 = format_WWWWsrmap_2.readFeatures(json_WWWWsrmap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WWWWsrmap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWWWsrmap_2.addFeatures(features_WWWWsrmap_2);
var lyr_WWWWsrmap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWWWsrmap_2, 
                style: style_WWWWsrmap_2,
                interactive: true,
                title: 'WWWW — srm ap'
            });
var format_cla2_3 = new ol.format.GeoJSON();
var features_cla2_3 = format_cla2_3.readFeatures(json_cla2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cla2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cla2_3.addFeatures(features_cla2_3);
var lyr_cla2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cla2_3, 
                style: style_cla2_3,
                interactive: true,
                title: '<img src="styles/legend/cla2_3.png" /> cla 2'
            });
var format_TREEtree_4 = new ol.format.GeoJSON();
var features_TREEtree_4 = format_TREEtree_4.readFeatures(json_TREEtree_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TREEtree_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TREEtree_4.addFeatures(features_TREEtree_4);
var lyr_TREEtree_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TREEtree_4, 
                style: style_TREEtree_4,
                interactive: true,
                title: 'TREE — tree'
            });
var format_TREEtree_5 = new ol.format.GeoJSON();
var features_TREEtree_5 = format_TREEtree_5.readFeatures(json_TREEtree_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TREEtree_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TREEtree_5.addFeatures(features_TREEtree_5);
var lyr_TREEtree_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TREEtree_5, 
                style: style_TREEtree_5,
                interactive: true,
                title: 'TREE — tree'
            });
var format_trees_6 = new ol.format.GeoJSON();
var features_trees_6 = format_trees_6.readFeatures(json_trees_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_trees_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trees_6.addFeatures(features_trees_6);
var lyr_trees_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trees_6, 
                style: style_trees_6,
                interactive: true,
                title: 'trees'
            });
var format_cla1_7 = new ol.format.GeoJSON();
var features_cla1_7 = format_cla1_7.readFeatures(json_cla1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cla1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cla1_7.addFeatures(features_cla1_7);
var lyr_cla1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cla1_7, 
                style: style_cla1_7,
                interactive: true,
                title: '<img src="styles/legend/cla1_7.png" /> cla 1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_QQQQQtrees_1.setVisible(true);lyr_WWWWsrmap_2.setVisible(true);lyr_cla2_3.setVisible(true);lyr_TREEtree_4.setVisible(true);lyr_TREEtree_5.setVisible(true);lyr_trees_6.setVisible(true);lyr_cla1_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_QQQQQtrees_1,lyr_WWWWsrmap_2,lyr_cla2_3,lyr_TREEtree_4,lyr_TREEtree_5,lyr_trees_6,lyr_cla1_7];
lyr_QQQQQtrees_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WWWWsrmap_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_cla2_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TREEtree_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TREEtree_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_trees_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_cla1_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QQQQQtrees_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_WWWWsrmap_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_cla2_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TREEtree_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TREEtree_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_trees_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_cla1_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_QQQQQtrees_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WWWWsrmap_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_cla2_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TREEtree_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TREEtree_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_trees_6.set('fieldLabels', {'Name': 'inline label', 'description': 'header label', 'timestamp': 'header label', 'begin': 'header label', 'end': 'header label', 'altitudeMode': 'header label', 'tessellate': 'header label', 'extrude': 'header label', 'visibility': 'header label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_cla1_7.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'inline label', 'timestamp': 'inline label', 'begin': 'inline label', 'end': 'inline label', 'altitudeMo': 'inline label', 'tessellate': 'inline label', 'extrude': 'header label', 'visibility': 'inline label', 'drawOrder': 'header label', 'icon': 'no label', });
lyr_cla1_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});