console.log("hellow");

// varaible declaration 
let npostlist=document.querySelector("#userposting");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('6378ab2114ae5ad2dae333a1'));
});
//  let key=localStorage.setItem.myuniquetockenid;

 let obj1={};
 let sendnReq=()=>{
  
  
   console.log("enter in eve");
    let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

    const url="https://dummyapi.io/data/v1/tag/water/post?limit=10";
 
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
     obj1=data;
     let postinglist="";
   
     
    // obj.data.map((values)=>{
    //   console.log(values.firstName + values.lastName);
    //   innerlist+=` <li >
    //   <img src="${values.picture}" alt="loading" class="liimg"> 
       
    //    <p> ${values.firstName}  ${values.lastName}</p>
    //  </li>`

    // });
   
    obj1.data.map((values)=>{
    postinglist+=` <li >
    <li>

    <div class="card ncard">
      
          <div class="row g-0 nrow">
            <div class="col-1 "> 
            <img src="${values.owner.picture}" alt="loading" class="profileuserlogo">
             </div>
            <div class="col-10 titles"> <p>${values.owner.title}  ${values.owner.firstName} ${values.owner.lastName}</p></div>
            <div class="col-1 "> <i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
        <img src="${values.image}"
            class="card-img-top" alt="loading">
        <div class="card-body  ">
            <h6 class="card-title">${values.text}</h6>
            <ul>
                <li class="logoslist">
                    <i class="fa-regular fa-heart"> </i> <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-share"></i> <i class="fa-solid fa-ribbon"></i>

                </li>
                <li>
                    <span class="likecircles">
                        <div class="likes"></div>
                        <div class="likes"></div>
                        <div class="likes"></div>

                        <p>Liked by <b>${obj1.data[2].owner.title}  ${obj1.data[2].owner.firstName} ${obj1.data[2].owner.lastName}</b> and <b> ${values.likes} other</b> </p>
                    </span>
                </li>

                <!-- <span class="likecircles"> -->
                <li>
                <p id="p1"><b> ${obj3.data[0].owner.firstName}  ${obj3.data[0].owner.lastName} </b>     ${obj3.data[0].message}  <button  class="changebuttn" id="ntext1"> change </button> </p> 
           
                <p><b>Publish time</b> ${obj3.data[0].publishDate}</p>
                <p id="p2"><b> ${obj3.data[1].owner.firstName}  ${obj3.data[1].owner.lastName} </b>   ${obj3.data[1].message} <button  class="changebuttn" id="ntext2"> change </button></p> 
               
                <p><b>Publish time</b> ${obj3.data[1].publishDate}</p>

                   

                    <!-- </span> -->

                </li>
               <li id="labletagdesign">
                  <div class="labeltag">
                          ${values.tags[0]}      </div>
                  <div class="labeltag">
                  ${values.tags[1]}   </div>
                  <div class="labeltag">
                  ${values.tags[2]}    </div>
               </li>
                <li>  
                ...see more

                <i class="fa-solid fa-angle-down"></i>

                <span>
                    View all comments
                </span>
                </li>
               
            </ul>
        </div>
        <!--this is the third one-->

    </div>
</li>
     </li>`


    });
      
     npostlist.innerHTML=postinglist;
    
  
 })
 .catch(err=>{
    console.log(err.massege);
    console.log(" the catch is running")
 });

 
// fething for the user list

}
sendnReq();
// fething for the user list
// function cmntchnge()
// {
    


  
    
   


// }
// cmntchnge();