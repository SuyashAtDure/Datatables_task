
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
//console.log(flattenedArray)
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
    //console.log(arr)
    // let uniqueElementsArray1;

    let uniqueElementsArray1 = [];
    

        //console.log(retArray3);
    
            if(retArray.length != 0){
            // if(retArray3 == null){
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
        <td><img src="${values0.images[0]}" /></td>
        <td>${values0.rating}</td>
        <td>${values0.stock}</td>
        <td>${values0.price}</td>`
                }
            })
        });
    }  else {
        final2 = `<tr>
        <td></td>
        <td>${document.getElementById("table_body2").innerHTML="No Data Available"}</td>
        <td></td>
        </tr>`
    }
    
    
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
            {"data" : 'images' ,
            "render" : function (data) {
                    //console.log(data[0])  
                    return `<img src=${data[0]} />`
            }
        },
        {"data" : 'rating'},
        {"data" : 'stock'},
        {"data" : 'price'}
        ],
        columnDefs : [{
            'targets' : 0,
            'checkboxes' : true
        }] ,
})
// var Total = flattenedArray
//                 .column( 9 )
//                 .data()
//                 .reduce( function (a, b) {
//                     return intVal(a) + intVal(b);
//                 }, 0 );

//                 $( flattenedArray.column( 7 ).footer() ).html('Total');
//                 $( flattenedArray.column( 9 ).footer() ).html(Total);
// table2.column( 8 ).data().sum();

// $('#flexCheck2').DataTable( {
//     drawCallback: function () {
//       var api = this.api();
//       $( api.table().footer() ).html(
//         api.column( 8, {page:'current'} ).data().sum()
//       );
//     }
//   } );
var sum = table2
    .column( 8 )
    .data()
    .reduce( function ( a, b ) {
        return a + b;
    } );

    document.getElementById("t_price").innerHTML=sum;

})



$('#myTable2').on('click', function(){
    //console.log("hii")
    // table2.destroy();
    // $('#flexCheck2').empty;
    let selected_rows2 = table2.column(0).checkboxes.selected()
    let selected_checkboxes2 = [];
    
    $.each(selected_rows2, function(key,data){
           selected_checkboxes2.push(data)

           uniqueElementsArray1 = retArray.filter((element) => !selected_checkboxes2.includes(element));
    });
//console.log(uniqueElementsArray1)
let final2 = '';

        result2.products.map((values0) => {
        uniqueElementsArray1.map((value9) => {
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
    document.getElementById("table_body2").innerHTML=final2;

    


})

//  --------------------------------------------------------------------------------/


$('#flexCheck2 tbody').on('click','td:not(:first-child)', function(event){

    
    // let c = flattenedArray.id
    // console.log(c)
    const selectedRow = [];
    selectedRow.push(table2.row(this).data());
    let string5 = JSON.stringify(selectedRow);
    localStorage.setItem("selectedRow", string5)

    // Use the data of the selected row
    // console.log(selectedRow);
    window.location.href = "detailsPage.html";
 
 })

}
