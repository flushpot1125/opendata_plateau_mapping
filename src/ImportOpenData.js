

const ImportOpenData ={
    importOpenData: function(data){
       
        const stringedData = JSON.stringify(data);
        const records = JSON.parse(stringedData);
        for (const record of records) {
            console.log(record);
        }
        

    }
}
export {ImportOpenData};

