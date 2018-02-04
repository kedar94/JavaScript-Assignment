
Var emp = { name : 'kedar', address : { locality : { street : '2nd main domlur'  } } }
  
function getObjPath(jsObj, path) {
    try 
    { 
    return eval('jsObj.'+path)
    }
    catch(e) 
    { 
    return undefined
    }
}

getObjPath(emp, 'address.locality.street')

