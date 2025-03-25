import {
  Viewer,
  Cartesian3,
  Math,
  Terrain,
  Model,
  createOsmBuildingsAsync,
  CesiumTerrainProvider,
  Cesium3DTileset,
  HeadingPitchRoll,
  Transforms,
  Ion,
  IonResource
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNjk0MTM4NC1lMWI0LTQxNTgtYjcxZS01ZWJhMGJlMTE1MWQiLCJpZCI6MTQ5ODk3LCJpYXQiOjE3MTUxNTEyODZ9.2aUmEQ2-fDsjf-XeC6-hZpwkgwLse3yXoXF4xTOvPAY";

const viewer = new Viewer("cesiumContainer", {});

// PLATEAU-Terrain
viewer.scene.setTerrain(
  new Terrain(
    CesiumTerrainProvider.fromIonAssetId(2488101),
  ),
);


try {

  let resource0 = await Cesium3DTileset.fromUrl("https://mjd-taitou.github.io/taitou-viewer/cesiumStatic/Assets/3Dtiles/bldg/bldg/tileset.json");

  viewer.scene.primitives.add(resource0);
  viewer.flyTo(resource0);
  resource0.show = true;

  let resource1 = await Cesium3DTileset.fromUrl("https://mjd-taitou.github.io/taitou-viewer/cesiumStatic/Assets/3Dtiles/model/tileset.json");

  viewer.scene.primitives.add(resource1);
  resource1.show = true;

  let resource2 = await Cesium3DTileset.fromUrl("https://mjd-taitou.github.io/taitou-viewer/cesiumStatic/Assets/3Dtiles/plan/tileset.json");

  viewer.scene.primitives.add(resource2);
  resource2.show = true;


} catch (error) {
  console.log(`Error loading tileset: ${error}`);
} 

