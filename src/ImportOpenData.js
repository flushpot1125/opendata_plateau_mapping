import { Latlonxy } from "./latlonxy";

const locationX =[];
const locationZ =[];
let locataionDataLength=0;

const ImportOpenData ={
    importOpenData: function(data){
       
        const stringedData = JSON.stringify(data);
        const records = JSON.parse(stringedData);
        const zone = Latlonxy.xyzonejapan(9);
        locataionDataLength = records.length;
        
        let i =0;
        for(const record of records){

           let xy = Latlonxy.latlon2xy(record["緯度"], record["経度"], zone);
         //  let x = xy[0]; // x座標(=北方向。x>0が北、x<0が南)
         //  let y= xy[1]; // y座標(=西方向。y>0が東、y<0が西)
         //今回の座標は東京(9)の基準点から7890, 31334m離れている。仮想空間の原点に3Dモデルが配置されているため、オープンデータをこの距離だけ移動させる
         locationX.push(xy[1]+7890);//BJSではxがz軸、yがx軸のため、入れ替える
         locationZ.push(xy[0]+31334);
          console.log("施設名:"+record["施設名"]+",x:"+locationX[i]+","+"y:"+locationZ[i]);
          i++;
        }
        

    }
}
export {ImportOpenData};
export {locationX};
export {locationZ};
export {locataionDataLength};

