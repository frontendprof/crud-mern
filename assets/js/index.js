
$("#add_user").submit(e=>{
    alert("Data inserted successfully")
})


$("#update_user").submit((e)=>{
    e.preventDefault();

    let new_arr=$(this).serializeArray();
    let data={}

    $.map(new_arr,(n,i)=>{
        data[n['name']]=n['value']
    })

    let request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    
    $.ajax(request).done(resp=>{
        alert("Data updated successfully")
    })


})

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    
    $ondelete.click(()=>{
        let id=$(this).attr("data-id");
        console.log(id);

        let request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(resp=>{
                alert("Data deleted successfully");
                location.reload();
            })
        }
    })
}

