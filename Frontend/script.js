

const shortUrlFunc = async ()=>{
    const url = document.getElementById("input-box").value;
    console.log(typeof(url))
    if(url == "" || url == " ")
    document.getElementById('short-url').innerHTML = "Enter a valid link"
    const obj = {
            "redirectUrl":url
    }
    const shorturl = await fetch('http://localhost:1400/url', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(obj)    
        })
        .then((res) =>res.json()).then(r=>{return r})
        .catch((err) => console.log(err))
        document.getElementById('short-url').innerHTML = "Your link is <br> http://localhost:1400/url/"+shorturl.id
        document.getElementById("input-box").value = ""
    
}