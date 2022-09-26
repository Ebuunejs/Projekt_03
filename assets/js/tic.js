var flag = 1;
var endFlag= false;
var fieldsObject = {}
var combinationObject = {
    // horizotanl
    comb1:['f1','f2','f3'],
    comb2:['f4','f5','f6'],
    comb3:['f7','f8','f9'],
    // vertikal
    comb4:['f1','f4','f7'],
    comb5:['f2','f5','f8'],
    comb6:['f3','f6','f9'],
    // diagonal
    comb7:['f1','f5','f9'],
    comb8:['f3','f5','f7']
}

function checkWinner(){
    setup();
    ['x', 'o'].forEach(flagValue => {
        for(const comb of Object.values(combinationObject)){
            for(let i=0;i<3;i++){
                if(fieldsObject[comb[i]] == '' || fieldsObject[comb[i]] != flagValue) break;
                if(i >= 2){
                    endFlag=true;
                    document.getElementById('print').innerHTML = `Player  '${flagValue}' wins!`;
                    disableEmptyFields();
                }
            }
        }
    })
}

function checkGameOver(){
    var checkGameOver=0;
    const keys = Object.keys(fieldsObject);
    for(let i=0;i<Object.keys(fieldsObject).length;i++){
        if(fieldsObject[keys[i]]=='x' || fieldsObject[keys[i]] =='o'){
            checkGameOver++;
        }
    }
    if(checkGameOver==9){
        endFlag=true;
        document.getElementById('print').innerHTML = `Nobody has won!`;
    }
}

function disableEmptyFields(){
    for(const [key, value] of Object.entries(fieldsObject)){
        if(value == ''){
            document.getElementById(key).disabled = true;
        }
    }
}

function setup(){
    for(let i =1;i<=9;i++){
        fieldsObject['f'+i]=document.getElementById('f'+i).value;
    }
}
 
function resetGame() {
    location.reload();
    for(let i =0;i<9;i++){
        endFlag=false;
        document.getElementById('f'+i).value = '';
    }
}

function setField(field){
    if(document.getElementById(field).value === ""){
        if (flag == 1) {
            document.getElementById(field).value = "x";
            document.getElementById(field).disabled = true;
            flag = 0;
        }
        else {
            document.getElementById(field).value = "o";
            document.getElementById(field).disabled = true;
            flag = 1;
        }
        checkWinner();
        checkGameOver();
    }
}