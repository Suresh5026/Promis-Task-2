function get_random_dog_image(){
    url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        displayImage(data.message)
    })
    .catch((err)=>err);
}

function displayImage(image_url){
    document.getElementById("image").src=image_url
}