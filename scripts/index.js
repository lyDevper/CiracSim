let q = (id) => document.getElementById(id);

let canvas1 = q('canvas1');
let ctx1 = canvas1.getContext('2d');

GridProps.init(canvas1);
Simulator.init(20);

let backGrid = new BackGrid(ctx1);