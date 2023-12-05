let input_element=document.getElementById("searchInput")
let container=document.getElementById("searchResults")
let spin=document.getElementById("spinner")

input_element.addEventListener('keydown',function getInput(event){
    if(event.key==='Enter'){
        container.textContent=""
        spin.classList.remove("d-none")
        let user_value=input_element.value
        let url="https://apis.ccbp.in/wiki-search?search="+user_value
        console.log(url);
        let options={
            method:"GET"
        }
        fetch(url,options)
        .then(function(response){
          //  console.log(response.json());
            return response.json()

        })
        .then(function(jsondata){
            console.log(jsondata);
            let {search_results} =jsondata;
           // console.log(search_results);
          displayResult(search_results)
        })
        

    }
    
})

function displayResult(search_results){
    for(let res of search_results)
    appendResults(res)
}
function appendResults(result){
    spin.classList.add("d-none")

   let {title,link,description}=result
    container.classList.add("search-results")
    let header=document.createElement("a")
    header.classList.add("result-title")
    header.textContent=title
    header.href=link
    container.appendChild(header)

    let br=document.createElement("br")
    container.appendChild(br)

    let link1=document.createElement("a")
    link1.classList.add("result-url")
    link1.textContent=link
    link1.href=link
    container.appendChild(link1)

    let br1=document.createElement("br")
    container.appendChild(br1)

    let description1=document.createElement("p")
    description1.classList.add("link-description")
    description1.textContent=description
    container.appendChild(description1)

}