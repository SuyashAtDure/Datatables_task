

async function loadData() {
    const response = await fetch("https://dummyjson.com/products/");
    const result = await response.json();
    //console.log(result.products)

    let final = ""

    result.products.map((values) => {
        final += `<tr class="font-family-sans-serif text-center font-monospace">
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.brand}</td>
        <td>${values.category}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.rating}</td>
        <td>${values.stock}</td>
        <td><img src="${values.images[0]}" /></td>
      </tr>`
    });
    document.getElementById("table_body").innerHTML=final;

    let table;

    $(document).ready(function() {
    table = $('#flexCheck').DataTable({
        "data" : result.products,
        "columns" : [
            {"data" : 'id'},
            {"data" : 'title'},
            {"data" : 'brand'},
            {"data" : 'category'},
            {"data" : 'description'},
            {"data" : 'price'},
            {"data" : 'rating'},
            {"data" : 'stock'},
            {"data" : 'images' ,
            "render" : function (data) {
                    //console.log(data[0])  
                    return `<img src=${data[0]} />`
            }
        }
        ],
        columnDefs : [{
            'targets' : 0,
            'checkboxes' : true
        }] ,
})
    })
    
    $('#myTable').on('click',function(){
        let selected_rows = table.column(0).checkboxes.selected()
        let selected_checkboxes = [];
        
        $.each(selected_rows, function(key,data){
               selected_checkboxes.push(data)
            
        });

        //console.log(result.products)

        // let final = "";

        // result.products.map((values0) => {
        //     selected_checkboxes.map((value9) => {
        //         if(value9 == values0.id)
        //         final += `<tr class="font-family-sans-serif text-center font-monospace">
        //         <td>${values0.id}</td>
        //         <td>${values0.id}</td>
        //         <td>${values0.title}</td>
        //         <td>${values0.brand}</td>
        //         <td>${values0.category}</td>
        //         <td>${values0.description}</td>
        //         <td>${values0.price}</td>
        //         <td>${values0.rating}</td>
        //         <td>${values0.stock}</td>
        //         <td><img src="${values0.images[0]}" /></td>
        //         </tr>`
        //     })
        // });
        // document.getElementById("table_body").innerHTML=final;

        // $(document).ready(function() {
        //     table = $('#flexCheck').DataTable({
        //         "data" : result.products,
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
        //     })
        // })   
        //console.log(selected_checkboxes)
        let string = JSON.stringify(selected_checkboxes);
        localStorage.setItem("selected_checkboxes", string)
        //console.log(typeof(selected_checkboxes))

        window.location.href = "newPage.html"
    })
   
}



async function loadData2() {
    
    let retString = localStorage.getItem("selected_checkboxes")
        let retArray = JSON.parse(retString)
        //console.log(typeof(retArray))

        const response2 = await fetch("https://dummyjson.com/products/");
        const result2 = await response2.json();
    
        let arr = [];
        let a;
        let b = retArray.map(element => {
            // let arr = [];
            a = result2.products.filter( val => val.id === element);
            //console.log("a", a);
            arr.push(a);
            });

            const flattenedArray = [].concat(...arr);

let final2 = "";
//let total_price = 0;

// let final3 = ""

// result2.products.map((values00) => {
//     retArray.map((value9) => {
//         if(value9 == values00.id) {
//             final3 += values00
//         }

//     })
// })
//console.log("data", result2.products);
//console.log("data1", retArray)
    // result2.products.filter((values00) => {
    //     retArray.map((value9) => {
    //         // if(value9 == values00.id){
    //         //      final3 = values00
    //         // }    
    //         console.log(">>>",value9);
            
    //     })
    // })
    //console.log("arr", arr[1]);

    // let b = result2.products.filter(val => {
    //     val.id === retArray.map(val1 => val1);
    // })
    // console.log("b", b);

    //console.log(result2.products);
    console.log(arr)
    // let uniqueElementsArray1;

    let uniqueElementsArray1 = [];
    
    let retArray3 = [];
        let retString3 = localStorage.getItem("uniqueElementsArray1")
        retArray3 = JSON.parse(retString3)
        console.log(retArray3);
    
        //    if(retArray.length != 0){
            if(retArray3 == null){
            result2.products.map((values0) => {
            retArray.map((value9) => {
                if(value9 == values0.id) {
                // final2 += `<tr class="font-family-sans-serif font-monospace">
                // <td><img src="${values0.images[0]}" /></td>
                // <td>${values0.title}<br />
                // ${values0.brand}<br />
                // ${values0.category}<br />
                // ${values0.description}<br /></td>
                // <td>${values0.price}</td>
                // </tr>`
                // total_price += values0.price
                final2 += `<tr class="font-family-sans-serif text-center font-monospace">
        <td>${values0.id}</td>
        <td>${values0.title}</td>
        <td>${values0.brand}</td>
        <td>${values0.category}</td>
        <td>${values0.description}</td>
        <td>${values0.price}</td>
        <td>${values0.rating}</td>
        <td>${values0.stock}</td>
        <td><img src="${values0.images[0]}" /></td>`
                }
            })
        });
    } else {
        result2.products.map((values0) => {
            retArray3.map((value9) => {
                if(value9 == values0.id) {
                // final2 += `<tr class="font-family-sans-serif font-monospace">
                // <td><img src="${values0.images[0]}" /></td>
                // <td>${values0.title}<br />
                // ${values0.brand}<br />
                // ${values0.category}<br />
                // ${values0.description}<br /></td>
                // <td>${values0.price}</td>
                // </tr>`
                // total_price += values0.price
                final2 += `<tr class="font-family-sans-serif text-center font-monospace">
        <td>${values0.id}</td>
        <td>${values0.title}</td>
        <td>${values0.brand}</td>
        <td>${values0.category}</td>
        <td>${values0.description}</td>
        <td>${values0.price}</td>
        <td>${values0.rating}</td>
        <td>${values0.stock}</td>
        <td><img src="${values0.images[0]}" /></td>`
                }
            })
        });
        
    }
    // } else {
    //     final2 = `<tr>
    //     <td></td>
    //     <td>${document.getElementById("table_body2").innerHTML="No Data Available"}</td>
    //     <td></td>
    //     </tr>`
    // }
    
    
    //document.getElementById("t_price").innerHTML=total_price;

    // function remove_item() {
    //     let uniqueElementsArray1 = arr.filter((element) => !selected_checkboxes2.includes(element));
    //     console.log(uniqueElementsArray1);
    // }

    
    // let n = arr.map((n_value) => {
    //     console.log(n_value)
    // })
    // let all_arr = [];
    // arr.map((n_values) => {
    //     all_arr.push(n_values)
    // })

    // console.log(all_arr)
    // let all_arr = [];
    // for(let i = 0; i<arr.length; i++) {
       
    // }

    // console.log(all_arr);
    
    //console.log(flattenedArray);
        document.getElementById("table_body2").innerHTML=final2;
    let table2;

    $(document).ready(function() {
    table2 = $('#flexCheck2').DataTable({
        "data" : flattenedArray,
        "columns" : [
            {"data" : 'id'},
            {"data" : 'title'},
            {"data" : 'brand'},
            {"data" : 'category'},
            {"data" : 'description'},
            {"data" : 'price'},
            {"data" : 'rating'},
            {"data" : 'stock'},
            {"data" : 'images' ,
            "render" : function (data) {
                    //console.log(data[0])  
                    return `<img src=${data[0]} />`
            }
        }
        ],
        columnDefs : [{
            'targets' : 0,
            'checkboxes' : true
        }] ,
})

})

//console.log('hi')
$(document).ready(function() {
$('#myTable2').on('click',function(){
    console.log("hii")
    // table2.destroy();
    // $('#flexCheck2').empty;
    let selected_rows2 = table2.column(0).checkboxes.selected()
    let selected_checkboxes2 = [];
    
    $.each(selected_rows2, function(key,data){
           selected_checkboxes2.push(data)

           uniqueElementsArray1 = retArray.filter((element) => !selected_checkboxes2.includes(element));
           let string3 = JSON.stringify(uniqueElementsArray1);
           localStorage.setItem("uniqueElementsArray1", string3)
        //     result2.products.map((values0) => {
        //     uniqueElementsArray1.map((value9) => {
        //         if(value9 == values0.id) {
        //         // final2 += `<tr class="font-family-sans-serif font-monospace">
        //         // <td><img src="${values0.images[0]}" /></td>
        //         // <td>${values0.title}<br />
        //         // ${values0.brand}<br />
        //         // ${values0.category}<br />
        //         // ${values0.description}<br /></td>
        //         // <td>${values0.price}</td>
        //         // </tr>`
        //         // total_price += values0.price
        //         final2 += `<tr class="font-family-sans-serif text-center font-monospace">
        // <td>${values0.id}</td>
        // <td>${values0.title}</td>
        // <td>${values0.brand}</td>
        // <td>${values0.category}</td>
        // <td>${values0.description}</td>
        // <td>${values0.price}</td>
        // <td>${values0.rating}</td>
        // <td>${values0.stock}</td>
        // <td><img src="${values0.images[0]}" /></td>`
        //         }
        //     })
        // });

        
    });
//console.log(selected_checkboxes2)
})

    //let change_data = final2.json();
    // console.log(final3)
})
}


