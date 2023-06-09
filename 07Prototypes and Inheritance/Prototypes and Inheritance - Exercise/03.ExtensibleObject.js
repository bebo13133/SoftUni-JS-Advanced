function extensibleObject() {
    let objProto = {};
    let instanceObj = Object.create(objProto);
  
    instanceObj.extend = function (templates) {
      Object.entries(templates).forEach(([key, value]) => {
        if (typeof value === 'function') {
          objProto[key] = value;
        } else {
          instanceObj[key] = value;
        }
      });
    }
  
    return instanceObj;
  }