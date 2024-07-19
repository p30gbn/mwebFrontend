let pagetitle="افزودن فایل اهدا / اهدا کننده"
const card = document.querySelector(".card")

const cardHeader = document.createElement("div")

cardHeader.classList.add("card-header");
cardHeader.innerHTML=`<h3 class="card-title">${pagetitle}</h3>`
card.appendChild(cardHeader)

const cardBody = document.createElement("div")
cardBody.classList.add("card-body");
card.appendChild(cardBody)
cardBody.innerHTML=`
<form action=">
<div class="form-group">
<div class="mb-3">
    <label class="mt-2 mb-4" for="fileUpload">بارگذاری فایل اهدا / اهداکننده</label>
    <div class="form-row text-center">
    <select class="form-select mx-4"  id="fileTypeSelect" name="fileTypeSelect" required>
              <option disabled selected>انتخاب کنید</option>
              <option value="donation">اهدا</option>
              <option value="donor">اهداکننده</option>
            </select>
    <input class="form-control-file col-3" name="fileInput" type="file" id="fileUpload" multiple required accept=".xlsx">
            
    </div>
</div>
            <div class="mb-3 text-center">
              <button type="button" id="sendFile" class="btn btn-primary">ارسال فایل</button>
            </div>
</div>
</form>
`

document.title = pagetitle


const sendfileButton = document.querySelector("#sendFile")
sendfileButton.addEventListener("click",async()=>{
    let file = document.querySelector("#fileUpload")[0]
    let fileType = document.querySelector("#fileTypeSelect")
    if (file!==null&&fileType!==null){
        let formData = new FormData();
        formData.append("fileInput",file);
        formData.append("fileType",fileType);
        const request = new Request("/api/uploadxls",{
            method:"POST",
            body:formData
        })
        const response = await fetch(request)
        console.log(response.status)
    }
    

})