var viewer,
	debugAxis,
	showingBoundingVolume = false;
	
var globe = new Cesium.Globe();
globe.baseColor = Cesium.Color.WHITE;
	
viewer = new Cesium.Viewer('cesiumContainer',{
		animation: false,
		scene3DOnly: true,
		globe: globe,
		skyBox: false,
		vrButton: true,
		skyAtmosphere: false,
		shadows: false,
		baseLayerPicker: false,
		geocoder: false,
		homeButton: false,
		fullscreenButton: true,
		infoBox: false,
		sceneModePicker: false,
		selectionIndicator: false,
		timeline: false,
		navigationHelpButton: false,
		navigationInstructionsInitiallyVisible: false
});

viewer.scene.backgroundColor = Cesium.Color.WHITE;
viewer.scene.imageryLayers.removeAll();

viewer.entities.removeAll();
viewer.scene.primitives.removeAll();

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(  Cesium.Cartesian3.fromDegrees(0.00016, -0.00005, 0.0));
var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
    url : 'resources/test_lod1.glb',
    modelMatrix : modelMatrix,
    scale : 1.0	
}));

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(  Cesium.Cartesian3.fromDegrees(0, 0.0001, 0.0));
var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
    url : 'resources/test_lod2.glb',
    modelMatrix : modelMatrix,
    scale : 1.0	
}));

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(  Cesium.Cartesian3.fromDegrees(0, 0.0002, 0.0));
var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
    url : 'resources/test_lod3.glb',
    modelMatrix : modelMatrix,
    scale : 1.0	
}));

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(  Cesium.Cartesian3.fromDegrees(0, 0.0003, 0.0));
var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
    url : 'resources/test_lod4.glb',
    modelMatrix : modelMatrix,
    scale : 1.0	
}));

viewer.camera.flyTo({
		duration : 0.0,
        destination : Cesium.Cartesian3.fromDegrees(0.0004,-0.0003, 50.0),
        orientation : {
            heading : Cesium.Math.toRadians(320.0),
            pitch : Cesium.Math.toRadians(-43.0),
            roll : 0.0
        }	
    });

