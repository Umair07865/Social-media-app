
// {/* */}
// varaible declaration 
let taglist=document.querySelector("#taggs1");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('6378ab2114ae5ad2dae333a1'));
});
//  let key=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
 let obj4={};
 let sendfourthReq=()=>{
  
  
  //  console.log("enter in eve");
    let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

    const url=" https://dummyapi.io/data/v1/tag?limit=10";
 
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
     obj4=data;
    //  console.log(` this is object three ${obj4}`)
     let tlist="";
     obj4.data.map((values)=>{
        // console.log(values );
        tlist+=`
        <li>
                    <div class="tags">
                      ${values}
                    </div>
                    

                </li> `
  
      });
      
    
  
  
  
       
   taglist.innerHTML=tlist;

 })
 .catch(err=>{
    console.log(err.massege);
    console.log(" the catch is running")
 });

 
// fething for the user list

}
sendfourthReq();
// fething for the user list
