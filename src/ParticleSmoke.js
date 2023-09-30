import { ParticleSystem} from "@babylonjs/core";
import { Texture } from "@babylonjs/core";
import { Vector3 } from "@babylonjs/core";
import { Color4 } from "@babylonjs/core";



const ParticleSmoke ={
    particleSmokeStart: function(x,y,z,scene){
        const radius = 200;
        const angle = Math.PI / 10;
        const particleSystem = new ParticleSystem("particles", 2000, scene);
        particleSystem.particleTexture = new Texture("../assets/textures/flare.png", scene);
    
        //particleSystem.emitter = new Vector3.Zero(); // the starting location
        particleSystem.emitter.x = x;
        particleSystem.emitter.y = y;
        particleSystem.emitter.z = z;
        
    
        particleSystem.color1 = new Color4(0.77, 0.81, 0.45);
        particleSystem.color2 = new Color4(0.89, 0.36, 0.73);
        particleSystem.colorDead = new Color4(0, 0, 0.2, 0.0);
        particleSystem.minSize = 10;
        particleSystem.maxSize = 20;
        particleSystem.minLifeTime = 3;
        particleSystem.maxLifeTime = 30;
        particleSystem.emitRate = 100;
        particleSystem.createConeEmitter(radius, angle);
        particleSystem.minEmitPower = 2;
        particleSystem.maxEmitPower = 4;
        particleSystem.updateSpeed = 0.005;
        particleSystem.start();
    }

}

export {ParticleSmoke};

