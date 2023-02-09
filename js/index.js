var siteName= document.getElementById("siteName");
var siteUrl= document.getElementById("siteUrl");
var btnAdd= document.getElementById("btnAdd");
var btnUpdate=document.getElementById("btnUpdate");
var alertName= document.getElementById("alertName");
var alrtUrl=document.getElementById("alrtUrl");
var temp;


arrOfBooks=[];
if(getLocal()!==null){
    arrOfBooks=getLocal();
    display()
}
btnAdd.onclick = function(){
    addBookMark();
   
}
btnUpdate.onclick =function(){
    updateData();
}
function addBookMark(){
    if(nameValidate()==true & urlValidate()==true){
        books={
            names: siteName.value,
            url : siteUrl.value,
        }
        arrOfBooks.push(books);
        setLocal();
        display();
        clear();
        
    }
     
    
}
function display(){
    var container=``;
    for(var i=0;i<arrOfBooks.length;i++){
       
        container+=`
         <tr>
                    <td>${arrOfBooks[i].names}</td>
                    <td><p class="small text-truncate" style="max-width: 300px;">${arrOfBooks[i].url}</p></td>
                    <td>
                        <div>
                            <a href="${arrOfBooks[i].url}" target="_blank" class="btn btn-primary">visit</a>
                            <button href=""  class="btn btn-danger" onclick="deleteForm(${i})">delete</button>
                            <button href="" class="btn btn-success" onclick="uptadeForm(${i})">update</button>
                        </div>
                    </td>
                </tr>`

    }
    document.getElementById("tBody").innerHTML=container;
}
function clear(){
    siteName.value="";
    siteUrl.value="";
}
function setLocal(){
    localStorage.setItem("store",JSON.stringify(arrOfBooks))
}
function getLocal(){
  return JSON.parse(localStorage.getItem("store"))
}
function deleteForm(index){
   arrOfBooks.splice(index,1);
   setLocal();
   display();
}
function uptadeForm(index){
    siteName.value=arrOfBooks.at(index).names;
    siteUrl.value=arrOfBooks.at(index).url;
    btnAdd.classList.add("d-none");
    btnUpdate.classList.remove("d-none")
    temp=index;
    scroll({
        top:0,
        behavior:"smooth",
        
    })
}
function updateData(){
    books={
        names: siteName.value,
        url : siteUrl.value,
    }
    arrOfBooks.splice(temp,1,books);
    setLocal();
    display();
    clear();
    btnUpdate.classList.add("d-none");
    btnAdd.classList.remove("d-none");

}
function nameValidate(){
    if(siteName.value==""){
        alertName.classList.remove("d-none");
        return false;
    }
    else{
        alertName.classList.add("d-none")
        return true;
    }
}
function urlValidate(){
    if(siteUrl.value==""){
        alrtUrl.classList.remove("d-none");
        return false;
    }
    else{
        alrtUrl.classList.add("d-none")
        return true;
    }
}

