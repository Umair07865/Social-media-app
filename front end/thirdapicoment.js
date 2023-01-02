
// {/* */}
// varaible declaration 
let commentlist=document.querySelector("#comentposting");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('6378ab2114ae5ad2dae333a1'));
});
//  let key=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
 let obj3={};
 let sendthirdReq=()=>{
  
  
  //  console.log("enter in eve");
    let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

    const url="https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10";
 
    let h=new Headers();

    h.append('Athentication',`Bearer ${token}`);
    
   let req= new Request(url,{
       method:'GET',
       mode:'cors',
       headers:{'app-id':'6378ab2114ae5ad2dae333a1'}
   
   
      
    });

  console.log(` this is request ${req}`)


// <div class="profile likes commentpartprofile" >
//   
//   </div>
//  fetch(req).then((resp=>resp.json())
  // data fetcching for user list
 fetch(req).then((response)=>{
    console.log("data fetched")
    return response.json();
 })
 .then((data)=>{
     obj3=data;
     console.log(` this is object three ${obj3}`)
     let clist="";
  

 })
 .catch(err=>{
    console.log(err.massege);
    console.log(" the catch is running")
 });

 
// fething for the user list

}
sendthirdReq();
// fething for the user list
