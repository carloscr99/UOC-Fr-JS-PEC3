"use strict";
let myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
for (let planeId in myHangar) {
    let plane = myHangar[planeId];
    console.log(`${planeId}:${plane.model}(${plane.npassengers})`);
}
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
