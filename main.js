const api = "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"
const inp = document.getElementById('inp')
const images = document.querySelector(".images")

const getimage = async () => {

    const methods = {
        method:"post",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":5,
                "size":"256x256"
            }
        )
    }

    const res = await fetch("https://api.openai.com/v1/images/generations", methods)

    const data = await res.json()
    const listimages = data.data;
    console.log(data)

    images.innerHTML = ''
    listimages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })

}