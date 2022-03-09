window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);


let ref=7;


function add1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=(ref+1); j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=3; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
    let r=row_num;
    relic.rows[row_num].cells[0].innerHTML='<input type="radio" name="compare1" id="compare1" value="'+r+'" />';
    relic.rows[row_num].cells[1].innerHTML='<input type="radio" name="compare2" id="compare2" value="'+r+'" />';
}



function del1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let alert_echo=0;


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

let artifact = [relic1_matrix,relic2_matrix,relic3_matrix,relic4_matrix,relic5_matrix];

let weapon_matrix = [];
let allrowsW = weapon.querySelectorAll('tr');
allrowsW.forEach(tr=>{
let allcellsW = tr.querySelectorAll('td');
let all =[];
allcellsW.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
weapon_matrix.push(all);
})


let C1=relic1_matrix.length;
let C2=relic2_matrix.length;
let C3=relic3_matrix.length;
let C4=relic4_matrix.length;
let C5=relic5_matrix.length;
let Cx=C1*C2*C3*C4*C5;



//基本設定
let stella=Number($("#stella").val());
let talent2=Number($("#talent2").val());
let talent3=Number($("#talent3").val());
let interval=Number($("#interval").val());


//不確定要素
let desire=Number($("#desire").val());
if(desire>=60){
	desire=60;
}
let u_atk=Number($("#u_atk").val());
let u_atkr=Number($("#u_atkr").val());
let u_crit=Number($("#u_crit").val());
let u_critd=Number($("#u_critd").val());
let u_electro=Number($("#u_electro").val())*0.01;
let u_skill=Number($("#u_skill").val())*0.01;
let u_give=Number($("#u_give").val())*0.01;
let u_burst=Number($("#u_burst").val())*0.01;
let u_speedup=Number($("#u_speedup").val())*0.01;




//武器要素
let alpha=Number($("#alpha").val());
let beta=Number($("#beta").val());
let gamma=Number($("#gamma").val());
let constraint=Number($("#constraint").val());


//天賦%
var one=[681,721,761,802,852];
var one_up=[6.61,7.00,7.39,7.78,8.26];
var n1=[75.2,79.8,84.4,89,93.5];
var n3=[239.6,254.2,268.8,283.4,297.9];
var n5=[468,478.5,525,553.5,581.9];
var c1=[228.7,242.6,256.5,270.4,284.3];
var nc_up=[1.23,1.31,1.38,1.45,1.54];
var skill=[71.4,75.6,79.8,84,89.3];
var def=1;
if(stella>=2){
    def=1.42857142857;
}
var g_n5=Number($("#n5").val());
var g_n1c1=Number($("#n1c1").val());
var g_n3c1=Number($("#n3c1").val());

t_n1=2.7/8;
t_n3=9.4/8;
t_n5=21/8;
t_c=7.7/8;

var t3=talent3-9;

one[t3]+=desire*one_up[t3];
n1[t3]+=desire*nc_up[t3];
n3[t3]+=3*desire*nc_up[t3];
n5[t3]+=6*desire*nc_up[t3];
c1[t3]+=2*desire*nc_up[t3];

function dps(s){
	return def*one[t3]+def*7*(g_n1c1*(n1[t3]+c1[t3])/(t_n1/s+t_c)+g_n3c1*(n3[t3]+c1[t3])/(t_n3/s+t_c)+g_n5*(n5[t3]/t_n5*s))/(g_n1c1+g_n3c1+g_n5);
}




//デバッグ
let base=[stella,talent2,talent3,interval,desire];
console.log("基本設定",base);
let u=[u_atk,u_atkr,u_crit,u_critd,u_skill,u_burst,u_electro,u_give,u_speedup];
console.log("不確定要素",u);
let uw=[alpha,beta,gamma,constraint];
console.log("武器要素",uw);
console.log("DPS",dps(1+u_speedup));




function eval(virtual_atkr,virtual_crit,virtual_critd,virtual_charge){
    let rf=weapon_refine-1;


    //護摩の杖
    let hpr_goma=flag_goma*(20+5*rf);
    let total_hp=12907*(1+(hpr+hpr_goma)*0.01)+hp;
    let goma_rate_low=(0.8+rf*0.2)*0.01;
    let goma_rate_high=(1+rf*0.2)*0.01;
    let goma_rate=goma_rate_high*alpha+goma_rate_low;
    let atk_goma=flag_goma*total_hp*goma_rate;
    let critd_goma=66.2*flag_goma;


    //わはくえん
    let atkr_wahak=flag_wahak*7*(3.2+0.7*rf);
    let give_wahak=flag_wahak*(0.12+0.03*rf);
    let crit_wahak=22.1*flag_wahak;


    //破天
    let atkr_haten=flag_haten*(49.6+(4+rf)*5*(1+beta));

    //息災
    let electro_sok=flag_sok*(0.12+0.03*rf);
    let atkr_sok=flag_sok*((3.2+0.8*rf)*6+16.5);
    
    //天空
    let charge_ten=flag_ten*36.8;
    let crit_ten=flag_ten*(8+2*rf);
    let speedup_ten=flag_ten*0.12;

	//草
	let charge_kusa=flag_kusa*(55.1+30+5*rf);
	let total_charge=132+charge+charge_kusa+charge_ten+virtual_charge;
	let atkr_kusa=flag_kusa*(total_charge-100)*(0.28+0.07*rf);
	let kusa_limit=80+10*rf;
	if(atkr_kusa>=kusa_limit){
		atkr_kusa=kusa_limit;
	}

	//うおとり
	total_charge+=flag_catch*45.9;
	let burst_catch=flag_catch*(0.16+0.04*rf);
	let crit_catch=flag_catch*(6+1.5*rf);


    //死闘
    let crit_sitou=36.8*flag_sitou;
    let atkr_sitou=flag_sitou*(gamma*(16+4*rf)+(1-gamma)*(24+6*rf));


    
    




    let total_atk=(337+atkw)*(1+(atkr+virtual_atkr+u_atkr+atkr_wahak+atkr_sok+atkr_haten+atkr_kusa+atkr_sitou)*0.01)+atk+u_atk+atk_goma;

	function critical(c){
		let total_crit=5+crit+virtual_crit+u_crit+crit_wahak+crit_ten+crit_sitou+c;
		if(total_crit>=100){
			total_crit=100;
		}
		return 1+total_crit*(50+critd+virtual_critd+u_critd+critd_goma)*0.0001;
	}

    let total_electro=electro+u_electro+u_give+give_wahak+electro_sok+0.4*(total_charge-100)*0.01;

	let burst_z=flag_z*0.25*total_charge*0.01;
	if(burst_z>=0.75){
		burst_z=0.75;
	}

    let buff_burst=1+total_electro+burst_catch+u_burst+burst_z+0.27;
    let buff_skill=1+total_electro+u_skill;

	let speed=1+speedup_ten+u_speedup;

	let model=(7*def)/0.9*skill[talent2-9]*buff_skill*critical(0)+dps(speed)*buff_burst*critical(crit_catch);
	return (model*total_atk+(interval-7)/0.9*skill[talent2-9]*buff_skill*critical(0)*(total_atk+flag_sok*(337+atkw)*(3.2+0.8*rf)*6*0.01))/interval;
}






var alert_label=0;
let alert_nan=0;
let alert_minus=0;


let weapon_el = document.getElementById("weapon");
let weapon_num = weapon_el.rows.length;
let w_index=[];
let w_max=[];
let w_used=[];
let w_info=[];

for (let w=0;w<weapon_num;w++){

    //武器情報を反映
    var atkw=0;
    var flag_wahak=0;
    var flag_goma=0;
    var flag_sok=0;
    var flag_haten=0;
    var flag_ten=0;
    var flag_kusa=0;
    var flag_catch=0;
    var flag_sitou=0;
    var weapon_series=weapon_matrix[w][2];
    var weapon_refine=weapon_matrix[w][3];



    if(weapon_series==12){
        atkw=674;
        flag_wahak=1;
    }
    if(weapon_series==11){
        atkw=608;
        flag_goma=1;
    }
    if(weapon_series==10){
        atkw=741;
        flag_sok=1;
    }
    if(weapon_series==9){
        atkw=608;
        flag_haten=1;
    }
    if(weapon_series==8){
        atkw=674;
        flag_ten=1;
    }
    if(weapon_series==7){
        atkw=608;
        flag_kusa=1;
    }
    if(weapon_series==6){
        atkw=510;
        flag_catch=1;
    }
    if(weapon_series==5){
        atkw=454;
        flag_sitou=1;
    }

    w_info[w]=[atkw,flag_wahak,flag_goma,flag_sok,flag_haten,flag_ten,flag_kusa,flag_catch,flag_sitou];

    
    

    let EV_index=[];
    let EV_vector=[];
    let used_matrix=[];
    let index=0;

    for (let r1=0 ; r1<C1 ; r1++){
        for (let r2=0 ; r2<C2 ; r2++){
            for (let r3=0 ; r3<C3 ; r3++){
                for (let r4=0 ; r4<C4 ; r4++){
                    for (let r5=0 ; r5<C5 ; r5++){

                        var series= relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                        var hp=     relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                        var hpr=    relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                        var atk=    relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                        var atkr=   relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                        var crit=   relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];
                        var critd=  relic1_matrix[r1][6]+relic2_matrix[r2][6]+relic3_matrix[r3][6]+relic4_matrix[r4][6]+relic5_matrix[r5][6];
                        var charge= relic1_matrix[r1][7]+relic2_matrix[r2][7]+relic3_matrix[r3][7]+relic4_matrix[r4][7]+relic5_matrix[r5][7];
                        var electro=  relic4_matrix[r4][8]*0.01;

                        var flag_z=0;

                        if(series%(2**2)==0){
                            charge+=20;
                        }
                        if(series%(2**4)==0){
                            flag_z=1;
                        }

                        var ev=eval(0,0,0,0);

                        used_matrix[index]=[hp,hpr,atk,atkr,crit,critd,charge,electro,flag_z];
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

    
    if(alert_echo==0){
        if(alert_minus==1){
            alert("期待値がマイナスです");
            alert_echo=1;
        }if(alert_nan==1){
            alert("数値を入力してください");
            alert_echo=1;
        }
    }


    let max_index=0;
    let max=-1;
    for(let j=0 ; j<Cx ; j++){
        if(max<EV_vector[j]){
            max=EV_vector[j];
            max_index=j;
        }
    }
    if (max==0&&alert_echo==0){
        alert("拘束条件を満たす組がありません");
        alert_echo=1;
    }

    //最大値を与える聖遺物の
    //used:詳細ステータスベクトル、index:組情報ベクトル、max:最大火力そのもの。
    w_used[w]=used_matrix[max_index];
    w_index[w]=EV_index[max_index];
    w_max[w]=max;
    //記述簡略化のため使った武器の情報を保存。
    

    console.log("火力期待値",EV_vector);
}




//武器ループから抜けた後
let w1=Number($('input[name="compare1"]:checked').val());
let w2=Number($('input[name="compare2"]:checked').val());

if(isNaN(w1)){
    w1=0;
}
if(isNaN(w2)){
    w2=0;
}

let w_start=w1;
let w_end=w2;

if(w_max[w1]>=w_max[w2]){
    w_start=w2;
    w_end=w1;
}


//弱いほうの武器情報を反映
atkw=           w_info[w_start][0];
flag_wahak=     w_info[w_start][1];
flag_goma=      w_info[w_start][2];
flag_sok=       w_info[w_start][3];
flag_haten=     w_info[w_start][4];
flag_ten=       w_info[w_start][5];
flag_kusa=      w_info[w_start][6];
flag_catch=     w_info[w_start][7];
flag_sitou=     w_info[w_start][8];
weapon_series=weapon_matrix[w_start][2];
weapon_refine=weapon_matrix[w_start][3];

console.log(w_info[w_start]);

//その武器の最適聖遺物情報を反映
hp=          w_used[w_start][0];
hpr=         w_used[w_start][1];
atk=         w_used[w_start][2];
atkr=       w_used[w_start][3];
crit=       w_used[w_start][4];
critd=      w_used[w_start][5];
charge=     w_used[w_start][6];
electro=    w_used[w_start][7];
flag_z=     w_used[w_start][8];


let differ=[];
let limit=[0,0,0,0];

for (let i=0;i<4;i++){
    let x=0;
    let dx=1;
    let loop=0;
    
    while(dx>0.001){
        loop++;
        if(loop>1000){
            limit[i]=1;
            break;
        }

        let left=[eval(x,0,0,0),eval(0,x,0,0),eval(0,0,x,0),eval(0,0,0,x)];
        let right=[eval((x+dx),0,0,0),eval(0,(x+dx),0,0),eval(0,0,(x+dx),0),eval(0,0,0,(x+dx))];
        let a=left[i]-w_max[w_end];
        let b=right[i]-w_max[w_end];

        if(a*b>0){
            x+=dx*0.9;
        }else{
            dx*=0.5;
        }
    }

    differ[i]=x;
}
console.log(differ);


function relic_name(name){
    if(name==2){
        return"絶縁";
    }
    if(name==1){
        return "その他";
    }
}

function weapon_name(wname){
    if(wname==12){
        return "和璞鳶";
    }
    if(wname==11){
        return "護摩の杖";
    }
    if(wname==10){
        return "息災";
    }
    if(wname==9){
        return "破天の槍";
    }
    if(wname==8){
        return "天空の脊";
    }
    if(wname==7){
        return "草薙の稲光";
    }
    if(wname==6){
        return "「漁獲」";
    }
    if(wname==5){
        return "死闘の槍";
    }
}

let power = document.getElementById('power');
let power_shift = document.getElementById('power_shift');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');

if(alert_label==0){
    //火力表示

	for (let h=0; h<power.rows.length; h++){
		power.deleteRow(h);
	}
    for (let y=0 ;y<weapon_num; y++){
        if(power.rows.length<weapon_num){
            let newrow  = power.insertRow(y);
            for(let i=0;i<4;i++){
                let newcell0 = newrow.insertCell(i);
            }
        }
        
        if(y==w1&&y==w2){
            power.rows[y].cells[0].innerHTML="A,B";
        }else{
            if(y==w1){
                power.rows[y].cells[0].innerHTML="A";
            }else if(y==w2){
                power.rows[y].cells[0].innerHTML="B";
            }else{
                power.rows[y].cells[0].innerHTML="";
            }
        }

        
        power.rows[y].cells[1].innerHTML=weapon_name(weapon_matrix[y][2]);
        power.rows[y].cells[2].innerHTML=weapon_matrix[y][3];
        power.rows[y].cells[3].innerHTML=(w_max[y]/5000*25).toFixed();
    }

    //換算火力表示
    power_shift.rows[0].cells[1].innerHTML=differ[0].toFixed(2);
    power_shift.rows[0].cells[2].innerHTML=differ[1].toFixed(2);
    power_shift.rows[0].cells[3].innerHTML=differ[2].toFixed(2);
    power_shift.rows[0].cells[4].innerHTML=differ[3].toFixed(2);

    if(w1==w2){
        for(let i=0;i<4;i++){
            power_shift.rows[0].cells[i+1].innerHTML="なし";
        }
    }

    for (let i=0;i<4;i++){
        if(limit[i]==1){
            power_shift.rows[0].cells[i+1].innerHTML="×";
        }
    }



    //結果表示
    //聖遺物のシリーズ名を表示
    for (let i=0;i<5;i++){
        result1.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w1][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result1.rows[i].cells[s].innerHTML=artifact[i][(w_index[w1][i])][s-1];
        }
    }
    //詳細を表示
    if(relic4_matrix[w_index[w1][3]][ref+1]>1){
        result1.rows[3].cells[0].innerHTML="杯(雷)";
    }else{
        result1.rows[3].cells[0].innerHTML="杯";
    }

    //結果2同様
    for (let i=0;i<5;i++){
        result2.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w2][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result2.rows[i].cells[s].innerHTML=artifact[i][(w_index[w2][i])][s-1];
        }
    }

    if(relic4_matrix[w_index[w2][3]][ref+1]>1){
        result2.rows[3].cells[0].innerHTML="杯(雷)";
    }else{
        result2.rows[3].cells[0].innerHTML="杯";
    }
}
}