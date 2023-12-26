var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KabTangerang_1 = new ol.format.GeoJSON();
var features_KabTangerang_1 = format_KabTangerang_1.readFeatures(json_KabTangerang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabTangerang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabTangerang_1.addFeatures(features_KabTangerang_1);
var lyr_KabTangerang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabTangerang_1, 
                style: style_KabTangerang_1,
                interactive: true,
                title: '<img src="styles/legend/KabTangerang_1.png" /> Kab.Tangerang'
            });
var format_Contour_2 = new ol.format.GeoJSON();
var features_Contour_2 = format_Contour_2.readFeatures(json_Contour_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour_2.addFeatures(features_Contour_2);
var lyr_Contour_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contour_2, 
                style: style_Contour_2,
                interactive: true,
                title: '<img src="styles/legend/Contour_2.png" /> Contour'
            });
var format_NDBI_3 = new ol.format.GeoJSON();
var features_NDBI_3 = format_NDBI_3.readFeatures(json_NDBI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDBI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDBI_3.addFeatures(features_NDBI_3);
var lyr_NDBI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDBI_3, 
                style: style_NDBI_3,
                interactive: true,
                title: '<img src="styles/legend/NDBI_3.png" /> NDBI'
            });
var format_NDVI_4 = new ol.format.GeoJSON();
var features_NDVI_4 = format_NDVI_4.readFeatures(json_NDVI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_4.addFeatures(features_NDVI_4);
var lyr_NDVI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI_4, 
                style: style_NDVI_4,
                interactive: true,
                title: '<img src="styles/legend/NDVI_4.png" /> NDVI'
            });
var lyr_Puskesmas_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Puskesmas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Puskesmas_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11839578.694049, -729510.745166, 11884106.490366, -673513.822724]
                            })
                        });
var format_Buffer_Puskesmas_6 = new ol.format.GeoJSON();
var features_Buffer_Puskesmas_6 = format_Buffer_Puskesmas_6.readFeatures(json_Buffer_Puskesmas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_Puskesmas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Puskesmas_6.addFeatures(features_Buffer_Puskesmas_6);
var lyr_Buffer_Puskesmas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_Puskesmas_6, 
                style: style_Buffer_Puskesmas_6,
                interactive: true,
                title: '<img src="styles/legend/Buffer_Puskesmas_6.png" /> Buffer_Puskesmas'
            });
var format_SNA_Puskesmas_7 = new ol.format.GeoJSON();
var features_SNA_Puskesmas_7 = format_SNA_Puskesmas_7.readFeatures(json_SNA_Puskesmas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNA_Puskesmas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNA_Puskesmas_7.addFeatures(features_SNA_Puskesmas_7);
var lyr_SNA_Puskesmas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SNA_Puskesmas_7, 
                style: style_SNA_Puskesmas_7,
                interactive: true,
                title: '<img src="styles/legend/SNA_Puskesmas_7.png" /> SNA_Puskesmas'
            });
var format_Puskesmas_8 = new ol.format.GeoJSON();
var features_Puskesmas_8 = format_Puskesmas_8.readFeatures(json_Puskesmas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_8.addFeatures(features_Puskesmas_8);cluster_Puskesmas_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Puskesmas_8
});
var lyr_Puskesmas_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Puskesmas_8, 
                style: style_Puskesmas_8,
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_8.png" /> Puskesmas'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_KabTangerang_1.setVisible(true);lyr_Contour_2.setVisible(true);lyr_NDBI_3.setVisible(true);lyr_NDVI_4.setVisible(true);lyr_Puskesmas_5.setVisible(true);lyr_Buffer_Puskesmas_6.setVisible(true);lyr_SNA_Puskesmas_7.setVisible(true);lyr_Puskesmas_8.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_KabTangerang_1,lyr_Contour_2,lyr_NDBI_3,lyr_NDVI_4,lyr_Puskesmas_5,lyr_Buffer_Puskesmas_6,lyr_SNA_Puskesmas_7,lyr_Puskesmas_8];
lyr_KabTangerang_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Contour_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'VALKNT': 'VALKNT', 'TIPKNT': 'TIPKNT', 'IDXKNT': 'IDXKNT', 'FCODE': 'FCODE', 'JNSKNT': 'JNSKNT', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NDBI_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NDVI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffer_Puskesmas_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', 'ringId': 'ringId', 'distance': 'distance', });
lyr_SNA_Puskesmas_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Puskesmas_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_KabTangerang_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Contour_2.set('fieldImages', {'NAMOBJ': '', 'VALKNT': '', 'TIPKNT': '', 'IDXKNT': '', 'FCODE': '', 'JNSKNT': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_NDBI_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NDVI_4.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Buffer_Puskesmas_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', 'ringId': 'Range', 'distance': 'TextEdit', });
lyr_SNA_Puskesmas_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Puskesmas_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', });
lyr_KabTangerang_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Contour_2.set('fieldLabels', {'NAMOBJ': 'no label', 'VALKNT': 'no label', 'TIPKNT': 'no label', 'IDXKNT': 'no label', 'FCODE': 'no label', 'JNSKNT': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NDBI_3.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NDVI_4.set('fieldLabels', {'NAMOBJ': 'inline label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffer_Puskesmas_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', 'ringId': 'no label', 'distance': 'no label', });
lyr_SNA_Puskesmas_7.set('fieldLabels', {'KDPPUM': 'header label', 'NAMOBJ': 'header label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'header label', });
lyr_Puskesmas_8.set('fieldLabels', {'NAMOBJ': 'header label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_Puskesmas_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});