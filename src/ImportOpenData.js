import { Latlonxy } from "./latlonxy";

const ImportOpenData ={
    importOpenData: function(data){
       
        const stringedData = JSON.stringify(data);
        const records = JSON.parse(stringedData);
        const zone = Latlonxy.xyzonejapan(9);

        //for (const i=0; i<records.Length; i++) {
        for(const record of records){
           // console.log(record);
           let xy = Latlonxy.latlon2xy(record["緯度"], record["経度"], zone);
           let x = xy[0]; // x座標(=北方向。x>0が北、x<0が南)
           let y= xy[1]; // y座標(=西方向。y>0が東、y<0が西)
           console.log("No:"+record["No"]+",x:"+x+","+"y:"+y);
        }
        

    }
}
export {ImportOpenData};

