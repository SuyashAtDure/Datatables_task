async function loadData3() {
    let retString5 = localStorage.getItem("selectedRow")
    let retArray5 = JSON.parse(retString5)
    console.log(retArray5)

       // let final4 = ""

       let image_11 = `<img src="${retArray5[0].images[0]}" class="image_1"/>`
       let image_12 = `<img src="${retArray5[0].images[1]}" class="image_1"/>`
       let image_13 = `<img src="${retArray5[0].images[2]}" class="image_1"/>`
       let image_14 = `<img src="${retArray5[0].images[3]}" class="image_1"/>`
       let image_15 = `<img src="${retArray5[0].images[4]}" class="image_1"/>`
        const markup = `<p class="font-monospace title">${retArray5[0].title}</p><br />
                        <p class="font-monospace brand">${retArray5[0].brand}</p><br />
                        <p class="font-monospace description">${retArray5[0].description}</p><br />
                        <p class="font-monospace text-end price">₹ ${retArray5[0].price}
                        </p>`
    
    
    document.querySelector("h4").insertAdjacentHTML("beforeend", markup);
    document.getElementById("image_11").insertAdjacentHTML("beforeend", image_11);
    document.getElementById("image_12").insertAdjacentHTML("beforeend", image_12);
    document.getElementById("image_13").insertAdjacentHTML("beforeend", image_13);
    document.getElementById("image_14").insertAdjacentHTML("beforeend", image_14);
    document.getElementById("image_15").insertAdjacentHTML("beforeend", image_15);

    //let table3;

//     $(document).ready(function() {
//     table3 = $('#flexCheck3').DataTable({
//         "data" : result2.products,
//         "columns" : [
//             {"data" : 'id'},
//             {"data" : 'title'},
//             {"data" : 'brand'},
//             {"data" : 'category'},
//             {"data" : 'description'},
//             {"data" : 'price'},
//             {"data" : 'rating'},
//             {"data" : 'stock'},
//             {"data" : 'images' ,
//             "render" : function (data) {
//                     //console.log(data[0])  
//                     return `<img src=${data[0]} />`
//             }
//         }
//         ],
//         columnDefs : [{
//             'targets' : 0,
//             'checkboxes' : true
//         }] ,
// })

//})


}