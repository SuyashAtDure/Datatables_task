
async function loadData() {
    const response = await fetch("https://dummyjson.com/products/");
    const result = await response.json();
    //console.log(result.products)

    let final = ""

    result.products.forEach((values) => {
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

$('#flexCheck tbody').on('click','td:not(:first-child)', function(event){

    
    // let c = flattenedArray.id
    // console.log(c)
    const selectedRow = [];
    selectedRow.push(table.row(this).data());
    //delete selectedRow[0]
    let string5 = JSON.stringify(selectedRow);
    localStorage.setItem("selectedRow", string5)

    // Use the data of the selected row
    // console.log(selectedRow);
    window.location.href = "detailsPage.html";
 
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
})

    
}




