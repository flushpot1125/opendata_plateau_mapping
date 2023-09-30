import {  Engine} from "@babylonjs/core/Engines/engine";
import {  Scene} from "@babylonjs/core/scene";
import {  Vector3} from "@babylonjs/core/Maths/math";
import {  FreeCamera} from "@babylonjs/core/Cameras/freeCamera";
import {  HemisphericLight} from "@babylonjs/core/Lights/hemisphericLight";
import {   Mesh} from "@babylonjs/core/Meshes/mesh";
import { Inspector } from "@babylonjs/inspector";
import { WebGPUEngine } from "@babylonjs/core";


import { ImportModel } from "./ImportModel";
import { ImportOpenData } from "./ImportOpenData";
import { BunkyokuWifiData } from './data_bunkyoku_wifi';
import { BunkyokuNurseryData } from "./data_bunkyoku_nursery";
import { ShinjukukuWifiData } from "./data_shinjuku_wifi";
import { ParticleSmoke } from "./ParticleSmoke";
import { locationX,locationZ,locataionDataLength } from "./ImportOpenData";



// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");
const divFps = document.getElementById("fps");

// Associate a Babylon Engine to it.
//const engine = new Engine(canvas);
const engine =new WebGPUEngine(canvas);
await engine.initAsync();

// Create our first scene.
var scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
var camera = new FreeCamera("camera1", new Vector3(0, 50, -10), scene);

// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.7;

/*
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394640_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394641_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394650_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394651_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394660_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394661_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394640_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394641_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394650_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394651_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394660_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/bunkyoku/","53394661_tran_6668_op.glb",scene);
*/
//ImportModel.importMeshModel("","../assets/models/bunkyoku/","bunkyoku.glb",scene);
ImportModel.importMeshModel("","../assets/models/","bunkyoku_wide_v3.glb",scene);
//ImportModel.importMeshModelAsync("","../assets/models/","bunkyoku_wide.glb",scene);
Inspector.Show(scene, canvas);
//ImportModel.importMeshModel("","../assets/models/","Shinjukuku.glb",scene);  
// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
var ground = MeshBuilder.CreateGround("ground1", {height:6000, width:6000,subdivisions:2},scene);

ImportOpenData.importOpenData(BunkyokuNurseryData);

for(let i=0;i<locataionDataLength;i++){
    ParticleSmoke.particleSmokeStart(locationX[i],0,locationZ[i],scene);
}

// Render every frame
engine.runRenderLoop(() => {
    scene.render();
  //  divFps.innerHTML = engine.getFps().toFixed() + " fps";
});