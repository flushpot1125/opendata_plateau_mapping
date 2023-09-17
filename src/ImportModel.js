import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

import {} from "@babylonjs/loaders/glTF/2.0/glTFLoader";

import { AssetsManager } from "@babylonjs/core";

const ImportModel ={
    importMeshModel: function(meshName,rootURLPath,sceneFilename,scene){
        //1.assetManagerを宣言する    
        var assetsManager = new AssetsManager(scene);

        //3.メッシュの読み込みが終わったら実行される
        assetsManager.onFinish = function (tasks) {
            
        };

        //2. メッシュの読み込み処理
        var meshTask = assetsManager.addMeshTask("", meshName, rootURLPath, sceneFilename);
            assetsManager.load();
        },
    }
export {ImportModel};