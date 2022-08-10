// import { arr } from "./export.js";
var product = [
    {
        name: 'rahul',
        age: 22,
        id: 1,
        quantity:{
            unit:1,
            price:20
        }
    },
    {
        name: 'muthu',
        age: 23,
        id: 2,
        quantity:{
            unit:1,
            price:20
        }
    },
    {
        name: 'vel',
        age: 24,
        id: 3,
        quantity:{
            unit:1,
            price:20
        }
    }
];

var val = document.querySelector('#user-type');

var btn = document.querySelector('#btn');
var shows = document.querySelector('#show');
var dele = document.querySelector('#del');

var cartItem = [];

function add(){
  product.map( (arr) =>{
    var value_box =val.value;
    if(value_box == arr.id)
    {
        // console.log(arr.id);
      
        if(cartItem.includes(arr) == true)
        {
            arr.quantity.unit = arr.quantity.unit + 1;
        }
        else  
        {
            cartItem.push(arr);
            // console.log(arr);
        }
    }
  });
}

function show()
{
  console.log(cartItem);
}

function del()
{
   var x = cartItem.filter((arr) => {
    var val1 = parseInt(val.value); 
        return val1 != arr.id;
   })
    cartItem = x;
}

btn.addEventListener('click',add);
shows.addEventListener('click',show);
dele.addEventListener('click',del)

// var arr_obj = [];

// btn.addEventListener('click', () => {
    
//     var new_val = value_box.value;
//     arr_obj.push(new_val);
// });

// function clc(){

//       var duplicate = [];
//         for (let i = 0; i < arr_obj.length; i++) {
            
//             if (arr_obj.indexOf(arr_obj[i]) == i) {
//                 duplicate.push(arr_obj[i]);

//                 arr.forEach( (e) => {

//                     if(arr_obj[i] == e.name)
//                     {
//                         console.log(e);
//                     }
//                 });
//             }        
//         }
//     }
 
// show.addEventListener('click',clc);