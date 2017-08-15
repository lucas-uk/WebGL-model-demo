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

var origin = Cesium.Cartesian3.fromDegrees(0, 0, 100);
var modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(origin, new Cesium.HeadingPitchRoll());
	
var entity = viewer.entities.add({
	position : origin,
	model : {
		uri : 'resources/right_ordering.glb',
		minimumPixelSize : 128,
		modelMatrix: modelMatrix,
	}
});

	
viewer.trackedEntity = entity;