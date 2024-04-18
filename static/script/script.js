
let index = 10
let page = 1
let totalResults = 0
document.querySelector(".hamburgar").addEventListener("click",()=>{

    let x = getComputedStyle(document.getElementById("navcoll")).display

    if(x==="none"){
  document.getElementById("navcoll").style.display="block";
  document.getElementById("navcoll").style.animationName="startham";
    }else{
        document.getElementById("navcoll").style.animationName="endham";
        setTimeout(()=>{
            document.getElementById("navcoll").style.display="none";
        },400)
        
    }

})


window.addEventListener("resize",()=>{
    if(window.innerWidth > 700){
        document.getElementById("navcoll").style.animationName="endham";
        setTimeout(()=>{
            document.getElementById("navcoll").style.display="none";
        },400)
    }
})



let main= document.getElementById("newscontainer")

let suraj= document.getElementById("suraj")
suraj.style.display="none"
// let lodding = document.createElement("img")
// lodding.setAttribute("src","./static/images/Ripple-1.9s-198px.svg")

fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=645ce8b2b60c4467ab1d16f2de864aaf&category=general&pageSize=10&page=1`,{
    method:"GET"
}).then((res)=>res.json()).then((ele)=>{
    page = page+1
    totalResults = ele.totalResults
    ele.articles.map((data)=>{
      
       
      
let div1 = document.createElement("div")
let div2 = document.createElement("div")
let img = document.createElement("img")
let div3 = document.createElement("div")
let h2 = document.createElement("h2")
let p = document.createElement("p")
let button = document.createElement("button")
let a = document.createElement("a")
a.setAttribute("href",`${data.url}`)
a.setAttribute("target","_blank")


div1.setAttribute("class","flex  justify-center items-center flex-col mt-12  hover:shadow-2xl hover:ring-2 ring-sky-700")
div1.setAttribute("data-aos","fade-down-right")
div2.setAttribute("class","flex items-center  h-400px shadow-moti max-[1500px]:w-1200px  max-[1200px]:w-800px max-[800px]:w-600px max-[800px]:h-800px max-[800px]:flex-col max-[600px]:w-400px max-[600px]:h-800px max-[600px]:flex-col max-[400px]:w-full")
img.setAttribute("src",`${!data.urlToImage?"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/small/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg":data.urlToImage}`)
img.setAttribute("class","w-400px object-contain p-6 shadow-lg")
div3.setAttribute("class","p-6 self-start flex flex-col gap-3")
h2.setAttribute("class","text-xl font-black")
h2.innerHTML=data.title
p.setAttribute("class","line-clamp-1 hover:line-clamp-2 cursor-pointer transition-all duration-500")
p.innerHTML=data.description
button.setAttribute("disabled","disabled")
button.innerHTML=data.publishedAt
button.setAttribute("class","ring-4 text-white ring-slate-700 bg-red-800  p-3 font-black w-72 text-xl")




main.appendChild(a)
a.appendChild(div1)
div1.appendChild(div2)
div2.appendChild(img)
div2.appendChild(div3)
div3.appendChild(h2)
div3.appendChild(p)
div3.appendChild(button)


    })
  
})



window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop+window.innerHeight+1 >= document.documentElement.scrollHeight ){
        if(index<totalResults){

            suraj.style.display="flex"
            console.log(suraj)
            let main= document.getElementById("newscontainer")
            let lodding = document.createElement("img")
            lodding.setAttribute("src","./static/images/Ripple-1.9s-198px.svg")
            fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=645ce8b2b60c4467ab1d16f2de864aaf&category=general&pageSize=10&page=${page}`,{
                method:"GET"
            }).then((res)=>res.json()).then((ele)=>{
                suraj.style.display="none"
                page= page+1
                ele.articles.map((data)=>{
                    totalResults = ele.totalResults
                  
            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            let img = document.createElement("img")
            let div3 = document.createElement("div")
            let h2 = document.createElement("h2")
            let p = document.createElement("p")
            let button = document.createElement("button")
            let a = document.createElement("a")
            a.setAttribute("href",`${data.url}`)
            a.setAttribute("target","_blank")
            
            
            div1.setAttribute("class","flex  justify-center items-center flex-col mt-12  hover:shadow-2xl hover:ring-2 ring-sky-700")
            div1.setAttribute("data-aos","fade-down-right")
            div2.setAttribute("class","flex items-center  h-400px shadow-moti max-[1500px]:w-1200px  max-[1200px]:w-800px max-[800px]:w-600px max-[800px]:h-800px max-[800px]:flex-col max-[600px]:w-400px max-[600px]:h-800px max-[600px]:flex-col max-[400px]:w-full")
            img.setAttribute("src",`${!data.urlToImage?"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/small/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg":data.urlToImage}`)
            img.setAttribute("class","w-400px object-contain p-6 shadow-lg")
            div3.setAttribute("class","p-6 self-start flex flex-col gap-3")
            h2.setAttribute("class","text-xl font-black")
            h2.innerHTML=data.title
            p.setAttribute("class","line-clamp-1 hover:line-clamp-2 cursor-pointer transition-all duration-500")
            p.innerHTML=data.description
            button.setAttribute("disabled","disabled")
            button.innerHTML=data.publishedAt
            button.setAttribute("class","ring-4 text-white ring-slate-700 bg-red-800  p-3 font-black w-72 text-xl")
            
            
            
            
            main.appendChild(a)
            a.appendChild(div1)
            div1.appendChild(div2)
            div2.appendChild(img)
            div2.appendChild(div3)
            div3.appendChild(h2)
            div3.appendChild(p)
            div3.appendChild(button)
            
            
                })
              
            })
        }

    }
})







