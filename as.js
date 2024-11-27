const linkcon = document.querySelector("#textinput");
const searchbtn = document.querySelector("#submit");
const summary = document.querySelector("#summary");

const about =document.querySelector(".about");


searchbtn.addEventListener("click",()=>{   
 const articlelink = linkcon.value
if(articlelink == ""){
 summary.innerHTML ="Please Enter Valid Link "
 
}  

else{
about.innerText = "Summary is loading"
const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${articlelink}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'efdc9dead0msh3d6b04344364212p1e7029jsn40fd6cc8da39',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};


fetch(url,options).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    for(i in data){
        console.log(i,data[i])
    }
    about.innerHTML = "Summary "
    summary.innerHTML =  data["summary"]
}) 
}
})




    