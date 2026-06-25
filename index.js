const head=document.getElementById("seconddiv");
const input=document.getElementById("input");
let data=JSON.parse(localStorage.getItem("seconddiv"))|| []
function display(){
    head.innerHTML="";
    data.map((val,id)=>{
       
            let div=document.createElement('div');
    div.setAttribute('class','check');
    div.innerHTML=`
               <p class="head ${val.completed ? 'completed' : ''}">${val.val}</p>
            <input type="checkbox" class="box">
            <button class="btn2">remove task</button>`
            head.appendChild(div);
            //  input.value="";
            // localStorage.setItem("seconddiv",JSON.stringify(data));
            let btn=div.getElementsByTagName("button");
            btn[0].addEventListener('click',(e)=>{
                e.target.parentNode.remove();
                removetodo(id);

            })
            let inp=div.getElementsByTagName("input");
            console.log(inp);
            inp[0].addEventListener('click',(e)=>{
              let prev=  e.target.previousElementSibling;
              prev.classList.toggle("completed");
              markdata(id);

            })
        
    })
}
document.getElementById("btn1").addEventListener("click",()=>{
    let val=input.value;
    data.push({val,completed:false});
    head.innerHTML = ""; // clear existing tasks
    localStorage.setItem("seconddiv",JSON.stringify(data));
    display();
    input.value="";
   
    // let div=document.createElement('div');
    // div.setAttribute('class','check');
    // div.innerHTML=`
    //             <p class="head">${val}</p>
    //         <input type="checkbox" class="box" id="box">
    //         <button class="btn2">remove task</button>`
    //         head.appendChild(div);
    //          input.value="";
    //           console.log(localStorage.setItem("seconddiv",JSON.stringify(data)));
    //         let btn=div.getElementsByTagName("button");
    //         btn[0].addEventListener('click',(e)=>{
    //             e.target.parentNode.remove();

    //         })
    //         let inp=div.getElementsByTagName("input");
    //         console.log(inp);
    //         inp[0].addEventListener('click',(e)=>{
    //           let prev=  e.target.previousElementSibling;
    //           prev.classList.toggle("completed");

    //         })
        })
          display();
          function removetodo(id){
            data.splice(id,1);
            localStorage.setItem("seconddiv",JSON.stringify(data));
            display();

          }
          function markdata(id){
         data[id].completed=!data[id].completed;
         localStorage.setItem("seconddiv",JSON.stringify(data));
         console.log(data[id])
         display();
          }
        
            
          
