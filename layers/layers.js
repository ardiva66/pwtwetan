var wms_layers = [];

var format_gadm41_IDNADM_ADM_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_0 = format_gadm41_IDNADM_ADM_4_0.readFeatures(json_gadm41_IDNADM_ADM_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_0.addFeatures(features_gadm41_IDNADM_ADM_4_0);
var lyr_gadm41_IDNADM_ADM_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_0, 
                style: style_gadm41_IDNADM_ADM_4_0,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_0.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_RW_1 = new ol.format.GeoJSON();
var features_RW_1 = format_RW_1.readFeatures(json_RW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_1.addFeatures(features_RW_1);
var lyr_RW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_1, 
                style: style_RW_1,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_1_0.png" /> 1<br />\
    <img src="styles/legend/RW_1_1.png" /> 2<br />\
    <img src="styles/legend/RW_1_2.png" /> 3<br />\
    <img src="styles/legend/RW_1_3.png" /> 4<br />\
    <img src="styles/legend/RW_1_4.png" /> 5<br />\
    <img src="styles/legend/RW_1_5.png" /> 6<br />\
    <img src="styles/legend/RW_1_6.png" /> 7<br />\
    <img src="styles/legend/RW_1_7.png" /> 8<br />\
    <img src="styles/legend/RW_1_8.png" /> 9<br />\
    <img src="styles/legend/RW_1_9.png" /> 10<br />\
    <img src="styles/legend/RW_1_10.png" /> <br />'
        });
var format_RT_2 = new ol.format.GeoJSON();
var features_RT_2 = format_RT_2.readFeatures(json_RT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_2.addFeatures(features_RT_2);
var lyr_RT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_2, 
                style: style_RT_2,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_2_0.png" /> RT 1<br />\
    <img src="styles/legend/RT_2_1.png" /> RT 2<br />\
    <img src="styles/legend/RT_2_2.png" /> RT 3<br />\
    <img src="styles/legend/RT_2_3.png" /> RT1<br />\
    <img src="styles/legend/RT_2_4.png" /> <br />'
        });
var format_sungai_3 = new ol.format.GeoJSON();
var features_sungai_3 = format_sungai_3.readFeatures(json_sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_3.addFeatures(features_sungai_3);
var lyr_sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_3, 
                style: style_sungai_3,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_3.png" /> sungai'
            });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });
var format_RumahSakit_5 = new ol.format.GeoJSON();
var features_RumahSakit_5 = format_RumahSakit_5.readFeatures(json_RumahSakit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_5.addFeatures(features_RumahSakit_5);
var lyr_RumahSakit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_5, 
                style: style_RumahSakit_5,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_5.png" /> Rumah Sakit'
            });
var format_Pendidikan_6 = new ol.format.GeoJSON();
var features_Pendidikan_6 = format_Pendidikan_6.readFeatures(json_Pendidikan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_6.addFeatures(features_Pendidikan_6);
var lyr_Pendidikan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_6, 
                style: style_Pendidikan_6,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_6.png" /> Pendidikan'
            });
var format_Pemerintahan_7 = new ol.format.GeoJSON();
var features_Pemerintahan_7 = format_Pemerintahan_7.readFeatures(json_Pemerintahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_7.addFeatures(features_Pemerintahan_7);
var lyr_Pemerintahan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_7, 
                style: style_Pemerintahan_7,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_7.png" /> Pemerintahan'
            });
var format_Rumah_8 = new ol.format.GeoJSON();
var features_Rumah_8 = format_Rumah_8.readFeatures(json_Rumah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_8.addFeatures(features_Rumah_8);
var lyr_Rumah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_8, 
                style: style_Rumah_8,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_8.png" /> Rumah'
            });
var format_Ibadah_9 = new ol.format.GeoJSON();
var features_Ibadah_9 = format_Ibadah_9.readFeatures(json_Ibadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibadah_9.addFeatures(features_Ibadah_9);
var lyr_Ibadah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ibadah_9, 
                style: style_Ibadah_9,
                popuplayertitle: "Ibadah",
                interactive: true,
                title: '<img src="styles/legend/Ibadah_9.png" /> Ibadah'
            });
var format_bangunandankuburan_10 = new ol.format.GeoJSON();
var features_bangunandankuburan_10 = format_bangunandankuburan_10.readFeatures(json_bangunandankuburan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunandankuburan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunandankuburan_10.addFeatures(features_bangunandankuburan_10);
var lyr_bangunandankuburan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunandankuburan_10, 
                style: style_bangunandankuburan_10,
                popuplayertitle: "bangunan dan kuburan",
                interactive: true,
                title: '<img src="styles/legend/bangunandankuburan_10.png" /> bangunan dan kuburan'
            });
var format_Clipped_11 = new ol.format.GeoJSON();
var features_Clipped_11 = format_Clipped_11.readFeatures(json_Clipped_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_11.addFeatures(features_Clipped_11);
var lyr_Clipped_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_11, 
                style: style_Clipped_11,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_11_0.png" /> footway<br />\
    <img src="styles/legend/Clipped_11_1.png" /> living_street<br />\
    <img src="styles/legend/Clipped_11_2.png" /> pedestrian<br />\
    <img src="styles/legend/Clipped_11_3.png" /> residential<br />\
    <img src="styles/legend/Clipped_11_4.png" /> secondary<br />\
    <img src="styles/legend/Clipped_11_5.png" /> service<br />\
    <img src="styles/legend/Clipped_11_6.png" /> tertiary<br />\
    <img src="styles/legend/Clipped_11_7.png" /> <br />'
        });

lyr_gadm41_IDNADM_ADM_4_0.setVisible(true);lyr_RW_1.setVisible(true);lyr_RT_2.setVisible(true);lyr_sungai_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_RumahSakit_5.setVisible(true);lyr_Pendidikan_6.setVisible(true);lyr_Pemerintahan_7.setVisible(true);lyr_Rumah_8.setVisible(true);lyr_Ibadah_9.setVisible(true);lyr_bangunandankuburan_10.setVisible(true);lyr_Clipped_11.setVisible(true);
var layersList = [lyr_gadm41_IDNADM_ADM_4_0,lyr_RW_1,lyr_RT_2,lyr_sungai_3,lyr_Clipped_4,lyr_RumahSakit_5,lyr_Pendidikan_6,lyr_Pemerintahan_7,lyr_Rumah_8,lyr_Ibadah_9,lyr_bangunandankuburan_10,lyr_Clipped_11];
lyr_gadm41_IDNADM_ADM_4_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_RW_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RT_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_sungai_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Clipped_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_RumahSakit_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pemerintahan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Ibadah_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_bangunandankuburan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Clipped_11.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_RW_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RT_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_sungai_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_RumahSakit_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pemerintahan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Ibadah_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_bangunandankuburan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Clipped_11.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_RW_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RT_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_sungai_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_RumahSakit_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pendidikan_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pemerintahan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Ibadah_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_bangunandankuburan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Clipped_11.set('fieldLabels', {'fid': 'no label', 'osm_id': 'inline label - visible with data', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Clipped_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});