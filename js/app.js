var rollArray = [];
function addData(){
    var rollNo = document.getElementById('rollno').value;
    rollNo = parseInt(rollNo);
    rollArray.push(rollNo);
    document.getElementById('rollno').value = "";
    alert("Successfully Insert");
    
}
function showData(){
    for(let i = 0; i< rollArray.length; i++){
        if(rollArray[i] % 2 == 0){
            var li = document.createElement("li")
            var txt =document.createTextNode(rollArray[i]);
            li.appendChild(txt);
            var even = document.getElementById('even');
            even.appendChild(li);
        }
        else{
            let liEl = document.createElement('li')
            let txt1 = document.createTextNode(rollArray[i]);
            liEl.appendChild(txt1);
            let odd = document.getElementById('odd');
            odd.appendChild(liEl)
        }
    }
}