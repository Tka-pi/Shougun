window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);


var ref=5;


function add1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=ref; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=ref; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=ref; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=(ref+1); j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=ref; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}



function del1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})


var C1=relic1_matrix.length;
var C2=relic2_matrix.length;
var C3=relic3_matrix.length;
var C4=relic4_matrix.length;
var C5=relic5_matrix.length;
var Cx=C1*C2*C3*C4*C5;


function eval(){
    var total_ATK=base_ATK*(1+(ATKrate+u_ATKrate)*0.01)+ATK+uATK;
    function crit(c){
        return 1+(5+u_CRIT+CRIT+c)*0.01*(50+u_CRITd+CRITd)*0.01;
    }
    var total_charge=(100+base_C+charge)*0.01;
    var total_electro=(electro+u_electro)*0.01+(total_charge-1)*0.4;

    var kusa=(total_charge-1)*ACrate;
    if (kusa>=atk_limit){
        kusa=atk_limit;
    }
    total_ATK+=base_ATK*kusa;

    var def=1;
    if(stella>=2){
        def=1.42857142857;
    }

    var z=0.25*total_charge;
    if (z>=0.75){
        z=0.75;
    }

    

    var t3=talent3-6;

    var one=[561,601,641,681,721,761,802,852];
    var one_up=[5.44,5.83,6.22,6.61,7.00,7.39,7.78,8.26];
    
    function B0(x){
        return one[t3]+x*one_up[t3];
    }


    var heavy=[248.4,267,285.5,303.9,322.4,340.9,359.4,377.8];
    var heavy_up=[1.02,1.09,1.16,1.23,1.31,1.38,1.45,1.54];
    function B(x){
        return heavy[t3]+x*heavy_up[t3];
    }

    var skill=[58.8,63,67.2,71.4,75.6,79.8,84,89.3];

    var beta=0.3*0.01;
    var rho=(2.1+0.1*(talent3-6))*5/7;
    if (talent3>=10){
        rho=2.5*5/7;
    }
    var rho_in=(orb*9+12)/7;

    function E(x){
        return (0.4+0.6*total_charge)*rho*x+rho_in*total_charge*x;
    }
    
    var t_max=90/E(1);
    var Energy=45*(14-t_max)/7;

    if(t_max>=7){
        Energy=E(7)*0.5;
    }
    
    

    var model_burst=def*(1+z*flag+90*beta+u_burst+total_electro)*(B0(n)+n_heavy*B(n));
    var model_skill=(t-7+7*def)/0.9*skill[talent2-6]*(1+total_electro);



    console.log(skill[talent2-6],one[t3],one_up[t3],heavy[t3],heavy_up[t3]);
    //正常

    return total_ATK*(model_skill*crit(0)+model_burst*crit(burst_CRIT));
}


base_ATK=337;
base_C=32;


stella=Number($("#stella").val());
talent2=Number($("#talent2").val());
talent3=Number($("#talent3").val());
weapon_rank=Number($("#weapon_rank").val());
t=Number($("#t").val());
n=Number($("#desire").val());
n_heavy=Number($("#n_heavy").val());
orb=0;
uATK=Number($("#u_ATK").val());
u_ATKrate=Number($("#u_ATKrate").val());
u_CRIT=Number($("#u_CRIT").val());
u_CRITd=Number($("#u_CRITd").val());
u_electro=Number($("#u_electro").val());
u_burst=Number($("#u_burst").val())*0.01;


console.log(stella,talent2,talent3,weapon_rank,t,n_heavy,n,orb,uATK,u_ATKrate,u_CRIT,u_CRITd,u_electro,u_burst);
//正常。


rank=weapon_rank-1;
ACrate=0;
atk_limit=0;
burst_CRIT=0;
//勝手に作った変数を初期化。

if($("#weapon").val()=="kusa"){
    base_ATK+=608;
    base_C+=55.1;
    ACrate=0.28+0.07*rank;
    atk_limit=0.80+0.1*rank;
    base_C+=30+5*rank;
}
if($("#weapon").val()=="tennkuu"){
    base_ATK+=674;
    base_C+=36.8;
    u_CRIT+=8+2*rank;
}
if($("#weapon").val()=="catch"){
    base_ATK+=674;
    base_C+=36.8;
    u_burst+=0.16+0.04*rank;
    burst_CRIT=6+1.5*rank;
}

console.log(ACrate);


let EV_index=[];
let EV_vector=[];
var index=0;
var alert_label=0;
var alert_nan=0;
var alert_minus=0;


for (var r1=0 ; r1<C1 ; r1++){
    for (var r2=0 ; r2<C2 ; r2++){
        for (var r3=0 ; r3<C3 ; r3++){
            for (var r4=0 ; r4<C4 ; r4++){
                for (var r5=0 ; r5<C5 ; r5++){

                    var series  =relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                    var ATK     =relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                    var ATKrate =relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                    var CRIT    =relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                    var CRITd   =relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                    var charge  =relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];
                    var electro =relic4_matrix[r4][6];

                    var ev=0;
                    var flag=0;

                    if(series%(2**2)==0){
                        charge+=20;
                    }if(series%(2**4)==0){
                        flag=1;
                    }

                    ev=eval();


                    EV_index[index] = [r1,r2,r3,r4,r5];
                    EV_vector[index] = ev;
                    if(isNaN(ev)){
                        alert_nan=1;
                        alert_label=1;
                    }
                    if(ev<0){
                        alert_minus=1;
                        alert_label=1;
                    }
                    index++;
                }
            }
        }
    }
}

if(alert_minus==1){
    alert("期待値がマイナスです");
}if(alert_nan==1){
    alert("数値を入力してください");
}



var max_index=0;
var max=-1;
for(var j=0 ; j<Cx ; j++){
    if(max<EV_vector[j]){
        max=EV_vector[j];
        max_index=j;
    }
}



var result = document.getElementById('result');



function relic_name(n){
    if(n==2){
        return"絶縁";
    }
    if(n==1){
        return "その他";
    }
}

var R1=EV_index[max_index][0];
var R2=EV_index[max_index][1];
var R3=EV_index[max_index][2];
var R4=EV_index[max_index][3];
var R5=EV_index[max_index][4];

if(alert_label==0){
    result.rows[0].cells[1].innerHTML=relic_name(relic1_matrix[R1][0]);
    result.rows[1].cells[1].innerHTML=relic_name(relic2_matrix[R2][0]);
    result.rows[2].cells[1].innerHTML=relic_name(relic3_matrix[R3][0]);
    result.rows[3].cells[1].innerHTML=relic_name(relic4_matrix[R4][0]);
    result.rows[4].cells[1].innerHTML=relic_name(relic5_matrix[R5][0]);

    for(var s=2;s<=(ref+1);s++){
    result.rows[0].cells[s].innerHTML=relic1_matrix[R1][s-1];
    result.rows[1].cells[s].innerHTML=relic2_matrix[R2][s-1];
    result.rows[2].cells[s].innerHTML=relic3_matrix[R3][s-1];
    result.rows[3].cells[s].innerHTML=relic4_matrix[R4][s-1];
    result.rows[4].cells[s].innerHTML=relic5_matrix[R5][s-1];
    }
    console.log(relic4_matrix[R4][ref+1]);

    if(relic4_matrix[R4][ref+1]>1){
        result.rows[3].cells[0].innerHTML="杯(雷)";
    }else{
        result.rows[3].cells[0].innerHTML="杯";
    }
}

console.log(relic1_matrix);
console.log(relic2_matrix);
console.log(relic3_matrix);
console.log(relic4_matrix);
console.log(relic5_matrix);
console.log(EV_index);
console.log(EV_vector);


}