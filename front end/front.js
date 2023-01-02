console.log("hellow");

// varaible declaration 
let userlist=document.querySelector(".activeuser");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('6378ab2114ae5ad2dae333a1'));
});
 let key=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
 let obj={};
 let sendReq=()=>{
  
  
  //  console.log("enter in eve");
    let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

    const url="https://dummyapi.io/data/v1/user?limit=10";
 
    let h=new Headers();

    h.append('Athentication',`Bearer ${token}`);
    
   let req= new Request(url,{
       method:'GET',
       mode:'cors',
       headers:{'app-id':'6378ab2114ae5ad2dae333a1'}
   
   
      
    });

  console.log(` this is request ${req}`)


// <div class="profile likes activeuserprofile" >
//   
//   </div>
//  fetch(req).then((resp=>resp.json())
  // data fetcching for user list
 fetch(req).then((response)=>{
    console.log("data fetched")
    return response.json();
 })
 .then((data)=>{
     obj=data;
     let innerlist="";
    //  let i=0;
     
    obj.data.map((values)=>{
      console.log(values.firstName + values.lastName);
      innerlist+=` <li>
      <img src="${values.picture}" alt="loading" class="liimg"> 
       
       <p> ${values.firstName}  ${values.lastName}</p>
       </li>
    `

    });
    
  



     


    userlist.innerHTML=innerlist;
 

 })
 .catch(err=>{
    console.log(err.massege);
    console.log(" the catch is running")
 });

 
// fething for the user list

}
sendReq();
// fething for the user list
