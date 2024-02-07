// let jsonRes = '["https://cdn.shibe.online/shibes/65531e1ddf6ab94263fc40a421faeb4c4aedb496.jpg"]';

// let validData = JSON.parse(jsonRes);

// let imgLink = validData[0];

// console.log(imgLink)

// let imges = document.querySelectorAll("img");

// for (img of imges){
//     img.src = imgLink;
// }

// let api = "https://shibe.online/api/shibes?count=30";
// let fetchApi = fetch(api);

// let imges = document.querySelectorAll("img");

// let validData = async(imgLink) => {
//     try {
//         for (let i = 0; i <= imges.length; i++){
//             let response = await fetchApi;
//             let jsonRes =  await response.json();
//             imgLink = jsonRes;
//             console.log(imgLink[i]);
//         }
        
//     }
//     catch(err){
//         console.log('Error: ', err);
//     }
// };
// validData();
let api = "https://shibe.online/api/shibes?count=30";
let fetchApi = fetch(api);

let imges = document.querySelectorAll("img");

let validData = async () => {
    try {
        let response = await fetchApi;
        let jsonRes = await response.json();

        // Check if the response is okay
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        // Iterate through each img element and set the src attribute
        imges.forEach((img, i) => {
            img.src = jsonRes[i];
            // console.log(jsonRes[i]);
        });
    } catch (err) {
        console.log('Error: ', err);
    }
};

let btn =  document.querySelector("button");
btn.addEventListener("click", ()=>{
    validData();
});
// validData();
