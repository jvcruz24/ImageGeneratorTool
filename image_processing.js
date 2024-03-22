const axios = require("axios")

const config = {
    method: "post",
    url: "https://api.mymidjourney.ai/api/v1/midjourney/imagine",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer <your-token>",
    },
    data: {
        prompt: "<your-image-url> A little cat running on the grass",
    },
}

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
        console.log(error)
    })