import {  Engine} from "@babylonjs/core/Engines/engine";
import {  Scene} from "@babylonjs/core/scene";
import {  Vector3} from "@babylonjs/core/Maths/math";
import {  FreeCamera} from "@babylonjs/core/Cameras/freeCamera";
import {  HemisphericLight} from "@babylonjs/core/Lights/hemisphericLight";
import {   Mesh} from "@babylonjs/core/Meshes/mesh";
import { Inspector } from "@babylonjs/inspector";


import { ImportModel } from "./ImportModel";
import { ImportOpenData } from "./ImportOpenData";
import { BunkyokuWifiData } from './data';



// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");

// Associate a Babylon Engine to it.
const engine = new Engine(canvas);

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


ImportModel.importMeshModel("","../assets/models/","53394640_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394641_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394650_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394651_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394660_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394661_bldg_6697_2_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394640_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394641_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394650_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394651_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394660_tran_6668_op.glb",scene);
ImportModel.importMeshModel("","../assets/models/","53394661_tran_6668_op.glb",scene);

Inspector.Show(scene, canvas);

// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
var ground = Mesh.CreateGround("ground1", 6000, 6000, 2, scene);

ImportOpenData.importOpenData(BunkyokuWifiData);

// Render every frame
engine.runRenderLoop(() => {
    scene.render();
});