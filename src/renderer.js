
const {ipcRenderer,dialog} = require("electron");

// const sendfileButton = document.querySelector("#sendFile")
// sendfileButton.addEventListener("click",async()=>{
//     let fileInput = document.querySelector("#fileUpload").files[0]
//     let fileType = document.querySelector("#fileTypeSelect").value
//     const formData = new FormData()

//     if (fileInput!==null&&fileType!==null){
//         formData.append(`fileType`,fileType)
//         formData.append(`fileInput`,fileInput)
//         console.log(formData)
//         ipcRenderer.send("sendDonationsFileOrDonorFile", formData);

//     }
    
    
// })

const inputFile = document.querySelector("#fileselect")

inputFile.addEventListener("click",async ()=>{
    let result = await dialog.showOpenDialog({properties:["openFile"]})
    if (result.canceled){
        console.log("The Open Dialog is Cancelld")
    }else{
        const filePath= result.filePaths[0];
        console.log(filePath)
        }
})