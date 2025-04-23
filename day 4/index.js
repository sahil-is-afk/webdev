// // // console.log("---Welcome to JS---");

// // // const myHTML =`<div style="border:4px solid yellow">
// // //                 <h1>Added from JS</h1>
// // //                 <h2>Sahil</h2>
// // //                 </div>`;
// // // const htmlELe = document.getElementById("container");
// // // htmlELe.innerHTML = myHTML;

// // // const cont2html = '<h2>Roll no.249184</h2>';
// // // const cont2ele = document.getElementsByClassName("container2")[0];
// // // cont2ele.innerHTML = cont2html;

// // const container = document.getElementById("container");

// // for (let i = 0; i < data.length; i++){
// //     const myObj = data[i];
// //     const myHtml = `<h1>${myObj.name.common}`
// // }


// console.log("----Functions----");

// function sum(a,b){
//     const html1 = document.getElementsByClassName("container")[0];
//     const result = a+b;
//     console.log (result)
//     const myHtml =`<h1>Sum: ${result}</h1>`;
//     html1.innerHTML = myHtml;
//     return result;
// }

// function multiply(a,b){
//     const html2 = document.getElementsByClassName("container")[0];
//     const result= a*b;
//     console.log(result)
//     const myHtml =`<h1>Multiply: ${result}</h1>`;
//     html2.innerHTML = myHtml;
//     return result;
// }

// function subtract(a,b){
//     const html3 = document.getElementsByClassName("container")[0];
//     const result= a-b;
//     console.log(result)
//     const myHtml =`<h1>Subtract: ${result}</h1>`;
//     html3.innerHTML = myHtml;
//     return result;
// }

// function divide(a,b){
//     const html4 = document.getElementsByClassName("container")[0];
//     const result= a/b;
//     console.log(result)
//     const myHtml =`<h1>Divide: ${result}</h1>`;
//     html4.innerHTML = myHtml;
//     return result;
// }

let container = document.getElementsByClassName("container")[0];
for(let i = 0; i != data.length; i++){
    const myObj=data[i];
    const myHTML=`
    <div class="card">
        <img src="${myObj.flags.png}" alt="${myObj.flags.svg}" height=190 width=290>
        <h3>${myObj.name.common}</h3>
        <p><b>Population:</b> ${myObj.population}</p>
        <p><b>Capital:</b> ${myObj.capital}</p>
        <p><b>Region:</b> ${myObj.region}</p>
        
    </div>`;
    container.innerHTML += myHTML;
}