(function (){
    var DELIMITER = ',';
    var NEWLINE = '\n';
    var input = document.getElementById('file');
    var table = document.getElementById('table');
    
    // return if it cant find the file
    if(!i){
        return;
    }

    i.addEventListener('change', function(){
        if(!!i.files && i.files.length>0){
            parceCSV(i.files[0])
        }
    })

    function parseCSV(file){
        if(!file || !FileReader){
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            toTable(e.target.result);
        };


        reader.readAsText(file);

    }

    function toTable(text)  {
        if(!text || !table){
            return;
        }

        // clearing table incase I decide to reuse this code 
        while(!!table.lastElementChild){
            table.removeChild(table.lastElementChild)
        }


    }
    
})();