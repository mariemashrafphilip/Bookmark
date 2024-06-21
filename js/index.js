

var siteNameInput = document.getElementById('exampleFormControlInput1');
var urlInput =  document.getElementById('exampleFormControlInput2');
var submit = document.getElementById('special')
var note = document.getElementById('note')
var close = document.getElementById('close')
// var visitBtn = document.getElementById('link')
var siteList = []

if(localStorage.getItem('webContanier') !==null ){
siteList= JSON.parse (localStorage.getItem('webContanier'));
displayData()
}


    submit.addEventListener('click', function (){

        var total ={
            name: siteNameInput.value,
            link: urlInput.value,
        }
        siteList.push(total);
        localStorage.setItem("webContanier", JSON.stringify(siteList))
    
        displayData();
        clear();
    }
     )


 
function displayData(){
    var cartona = "";

    for (var i = 0 ; i< siteList.length ; i++  ){

    cartona +=` 
    <tr>
      <th scope="row">${i+1} </th>
      <td>${siteList[i].name} </td>
      <td><div class="btn btn-info ms-4"onclick= 'visit()' > <i class="fa-solid fa-eye me-2"></i>Visit  </div></td>
      <td><div class="btn btn-danger ms-4" onclick="deleteItem( ${i} )"><i class="fa-solid fa-trash me-2"></i>Delete</div></td>
    </tr>`
    }

    document.getElementById('table').innerHTML= cartona;
}

function clear(){
    siteNameInput.value=null
    urlInput.value=null
    
}

function deleteItem(indexItem){

    siteList.splice( indexItem, 1 );
    displayData();
    localStorage.setItem("webContanier", JSON.stringify(siteList))
}




siteNameInput.addEventListener('input', function(){
    var text= siteNameInput.value;
    var regex = /^[a-zA-z]{3,}$/

    if(regex.test(text) == true  ){
        siteNameInput.classList.add('is-valid')
        siteNameInput.classList.remove('is-invalid')
        submit.addEventListener('click',function(){
            note.classList.replace('d-flex','d-none')
        })


   
    }else {
        siteNameInput.classList.add('is-invalid')
        siteNameInput.classList.remove('is-valid')
        submit.addEventListener('click',function(){
            note.classList.replace('d-none','d-flex')

        })

    }})



urlInput.addEventListener('input', function(){
    var text= urlInput.value;
    var regex = /^[A-Za-z]+\.[A-Za-z]{2,}$/

    if(regex.test(text) == true  ){
        urlInput.classList.add('is-valid')
        urlInput.classList.remove('is-invalid')
        submit.addEventListener('click',function(){
            note.classList.replace('d-flex','d-none')
        })

   
    }else {
        urlInput.classList.add('is-invalid')
        urlInput.classList.remove('is-valid')
        submit.addEventListener('click',function(){
              note.classList.replace('d-none','d-flex')

        })

    }})


if (urlInput.value ==''&& siteNameInput.value ==''){
    submit.addEventListener('click',function(){
        note.classList.replace('d-none','d-flex')

  })

}


close.addEventListener('click', function(){
    note.classList.replace('d-flex','d-none')
})

function visit(){
       var url= urlInput.value
       window.location.href = url;
}