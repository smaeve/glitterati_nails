//this script file will hold the array
//handler functions to work with the Assoc array data
function getNailData(){
    var myNailList =document.getElementById("myNailList");
    var keyName = myNailList.options[myNailList.selectedIndex].text;
    if(keyName in nailList){
        //myNailsAssocArray[keyname] will give us the Array for each nail procedure
        //pass that array to buildNailInfo
        buildNailInfo(nailList[keyName]);
    }else{
        // Search DOM for all <p> tags and set innerHTML to "" empty strings
        // When an unknown item on the Dropdown list is slected!
        var myElements  = document.getElementsByTagName("p");
        for(var i=0; i<myElements.length; i++ ){
            // Update innerHTMl of object innerHTML
            myElements[i].innerHTML = "";

        }
    }//end of keyName Condition
}//end of getNailData

function buildNailInfo(nailInfoArray){
    var myCurrentTag = {};
    var myOutputString = "";
    for(var metadata in nailInfoArray){
        myCurrentTag = document.getElementById(metadata);
        myOutputString = metadata;
        //add this line for readability
        myOutputString = myOutputString.concat(": ");
        myOutputString = myOutputString.concat(nailInfoArray[metadata]);
        myCurrentTag.innerHTML = myOutputString;             
        }//end of nailInfoArray loop  
}//end of buildNailInfo



//this script file will hold the Location array
//handler functions to work with the Assoc array data
function getLocationData(){
    var myLocationList =document.getElementById("myLocationList");
    var keyName = myLocationList.options[myLocationList.selectedIndex].text;
    if(keyName in locationList){
        //myNailsAssocArray[keyname] will give us the Array for each nail procedure
        //pass that array to buildNailInfo
        buildLocationInfo(locationList[keyName]);
    }else{
        // Search DOM for all <p> tags and set innerHTML to "" empty strings
        // When an unknown item on the Dropdown list is selected!
        var myElements  = document.getElementsByTagName("p");
        for(var i=0; i<myElements.length; i++ ){
            // Update innerHTMl of object innerHTML
            myElements[i].innerHTML = "";

        }
    }//end of keyName Condition
}//end of getLocationData

function buildLocationInfo(locationInfoArray){
    var myCurrentTag = {};
    var myOutputString = "";
    for(var metadata in locationInfoArray){
        myCurrentTag = document.getElementById(metadata);
        myOutputString = metadata;
        //add this line for readability
        myOutputString = myOutputString.concat(": ");
        myOutputString = myOutputString.concat(locationInfoArray[metadata]);
        myCurrentTag.innerHTML = myOutputString;             
        }//end of locationInfoArray loop  
}//end of buildLocationInfo