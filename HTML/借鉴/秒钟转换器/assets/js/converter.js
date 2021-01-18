var swidth = screen.width;

function hide(){
  var ban = document.getElementById("banner");
  if (swidth <= 500) {
  	if(ban){
       ban.remove();
  	}
   } 
}


function addElement(parentId, elementTag, elementId) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute("href", "https://bharat-deora.github.io/Seconds-Converter/" )
    newElement.innerHTML = '';
    p.appendChild(newElement);
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function getValue(){
	var parent = document.getElementById("parent");
    var child = document.getElementById("answer");
	var  sec = document.getElementById("sec").value;

	if (swidth <= 500) {
      var ban = document.getElementById("banner");
      if(!ban){
	    addElement('whole' , 'a', 'banner');
       }
    }

	var min = 60, hour= 3600, day = 24*3600, year = 31536000, hyear = year *100;
	var remSecond = 0, remMin = 0, remHour = 0, remDay=0, remYear=0 ;
	var countSecond, countMin, countHour, countDay, countYear;
	var answer = "", comma = ", ", flag =0;
 

    if(sec == ""){
    	answer = "请输入秒钟来转换";
    }

    else if(sec<0){
		answer = "时间不可转换！";     
    }

    else if(sec<min && sec>=0){
    	sec = parseInt(sec);
    	if(sec == 1){  answer += sec + " 秒";   }
        else if(sec ==0){  answer+="现在";  }
        else{  answer += sec + " 秒";  }
    }
    

    else if(sec<hyear){
        remYear = parseInt(sec);
		countYear = parseInt(remYear/year);
        remDay = remYear%year;

          	if(countYear == 1){     answer += countYear + " 年 "; }
          	else if(countYear == 0){  flag++;   }
          	else{  answer += countYear + " 年 ";  }	

		    countDay = parseInt(remDay/day); 
            remHour = remDay%day;

          if(remDay<year){
          	if(flag == 1){comma = ""; }else{comma = ", ";}
          	if(countDay == 1){     answer += comma + countDay + " 天 "; }
          	else if(countDay == 0){  flag++;  }
          	else{  answer += comma + countDay + " 天 ";  }	

		    countHour = parseInt(remHour/hour); 
            remMin = remHour%hour;

            if(remHour<day){
            	if(flag == 2){comma = ""; } else{comma = ", ";}
          		if(countHour == 1){     answer += comma + countHour + " 个小时 "; }
          		else if(countHour == 0){  flag++;   }
          		else{  answer += comma + countHour + " 个小时 ";  }	
               
                countMin = parseInt(remMin/min);
           	 	remSecond = remMin%min;
                
                if(remMin<hour){
                	if(flag == 3){comma = ""; } else{comma = ", ";}
          			if(countMin == 1){   answer += comma + countMin + " 分钟 ";  }
          			else if(countMin == 0){   flag++;   }
          			else{  answer += comma + countMin + " 分钟 ";    }                

          			if(remSecond<min){
          				countSecond = remSecond;
          				if(flag == 4){comma = "";} else{comma = ", ";}
          				if(countSecond == 1){  answer += comma + remSecond + " 秒";   }
          				else if(countSecond ==0){  }
          				else{  answer += comma + remSecond + " 秒";  }
          			}
            	}
        	}
		  }
	    }	

     else{
     	answer = "100多年";
    }

    child.innerHTML = answer;
};



