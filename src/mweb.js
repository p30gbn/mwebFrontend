document.title="خانه"
const cardBody=document.querySelector(".card-body")
const cardTitle = document.querySelector((".card-title"))





const sendRequestToServer = async (route,dataObject) =>{
    let response = await fetch(`http://localhost:3000/${route}`,{
        method:"POST",
        body:JSON.stringify(dataObject),
        headers:{
           "Content-Type":"application/json"
        }
    })

    return response

}




const sendfileButton = document.querySelector("#sendFile")
sendfileButton.addEventListener("click",async()=>{
    const fileInput = document.querySelector("#fileInput").files[0]
    const fileType = document.querySelector("#fileTypeSelect").value
    

    if (fileInput!==null&&fileType!==null){

        if (fileType==="invitation"){
            
                readXlsxFile(fileInput).then((row)=>{
                    row.shift()
                    console.log(row)
                    let datas = []
                    for(let i =0;i<row.length-1;i++){
                        datas.push({
                            birthday:row[i][0],
                            mobilePhoneNumber:row[i][1],
                            nationalNumber:row[i][2],
                            donationsCount:row[i][3]

                        })
                    }  
console.log(datas)
                     fetch("http://localhost:3000/getinvitationsfromfile",{
                        method:"POST",
                        body:JSON.stringify(datas),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }).then((response)=>{
                        console.log(response)
                    })
                }).catch((error)=>{
                    console.error(error)
                })
                
            
        
        }else if(fileType==="donor"){
            const donorData = []

            readXlsxFile(fileInput).then((rows) => {
                rows.shift()
                for(let i=1;i<rows.length-1;i++){
                    donorData.push({
                        donationLocation:rows[i][0],
                        countyCode:rows[i][1],
                        databaseCode:rows[i][2],
                        offlineReception:rows[i][3],
                        nationalNumber:rows[i][4],
                        caseNumber:rows[i][5],
                        firstName:rows[i][6],
                        lastName:rows[i][7],
                        fatherName:rows[i][8],
                        gender:rows[i][9],
                        birthCertificateNumber:rows[i][10],
                        donationNumber:rows[i][11],
                        donationDate:rows[i][12],
                        receptionTime:rows[i][13],
                        receptionsCount:rows[i][14],
                        donationsCount:rows[i][15],
                        referrer:rows[i][16],
                        newReferrer:rows[i][17],
                        referrerType:rows[i][18],
                        receptionStaff:rows[i][19],
                        medicalDoctor:rows[i][20],
                        donorState:rows[i][21],
                        physicalExamResult:rows[i][22],
                        physicalExamDate:rows[i][23],
                        physicalExamTime:rows[i][24],
                        donationStartingTime:rows[i][25],
                        donationEndingTime:rows[i][26],
                        donationNurse:rows[i][27],
                        medicalDoctorRequestedVolume:rows[i][28],
                        donationResult:rows[i][29],
                        plasmaVolume:rows[i][30],
                        selfAdmission:rows[i][31],
                        marriage:rows[i][32],
                        education:rows[i][33],
                        job:rows[i][34],
                        ageWhenDonated:rows[i][35],
                        paymentMethod:rows[i][36],
                        price:rows[i][37],
                        bonus:rows[i][38],
                        pricePlusBonus:rows[i][39],
                        paymentDate:rows[i][40],
                        deedNumber:rows[i][41],
                        fdoId:rows[i][42],
                        uids:rows[i][43]
                    })
                }
                fetch("http://localhost:3000/getdonorsfromfile",{
                    method:"POST",
                    body:JSON.stringify(donorData),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.error(error)
                })


            }).catch((error) => {
                console.error(error)
            })
        }









        if (fileType==="donation"){
            // let rows = await readXlsxFile(fileInput,{
            //     schemaPropertyValueForMissingColumn:undefined,
            //     schemaPropertyValueForEmptyCell:null,
            //     schemaPropertyShouldSkipRequiredValidationForMissingColumn: (column, { object }) => true
            // })
            // const donationsArray=[]
            // console.log(rows[0])
            // for(let i=1;i<rows.length-1;i++){
            //     let donationObj ={
            //         donationLocation:rows[i][0],
            //         countyCode:rows[i][1],
            //         databaseCode:rows[i][2],
            //         offlineReception:rows[i][3],
            //         nationalNumber:rows[i][4],
            //         caseNumber:rows[i][5],
            //         firstName:rows[i][6],
            //         lastName:rows[i][7],
            //         fatherName:rows[i][8],
            //         gender:rows[i][9],
            //         birthCertificateNumber:rows[i][10],
            //         donationNumber:rows[i][11],
            //         donationDate:rows[i][12],
            //         receptionTime:rows[i][13],
            //         receptionsCount:rows[i][14],
            //         donationsCount:rows[i][15],
            //         referrer:rows[i][16],
            //         newReferrer:rows[i][17],
            //         referrerType:rows[i][18],
            //         receptionStaff:rows[i][19],
            //         medicalDoctor:rows[i][20],
            //         donorState:rows[i][21],
            //         physicalExamResult:rows[i][22],
            //         physicalExamDate:rows[i][23],
            //         physicalExamTime:rows[i][24],
            //         donationStartingTime:rows[i][25],
            //         donationEndingTime:rows[i][26],
            //         donationNurse:rows[i][27],
            //         medicalDoctorRequestedVolume:rows[i][28],
            //         donationResult:rows[i][29],
            //         plasmaVolume:rows[i][30],
            //         selfAdmission:rows[i][31],
            //         marriage:rows[i][32],
            //         education:rows[i][33],
            //         job:rows[i][34],
            //         ageWhenDonated:rows[i][35],
            //         paymentMethod:rows[i][36],
            //         price:rows[i][37],
            //         bonus:rows[i][38],
            //         pricePlusBonus:rows[i][39],
            //         paymentDate:rows[i][40],
            //         deedNumber:rows[i][41],
            //         fdoId:rows[i][42],
            //         uids:rows[i][43]
            //     }
            //     donationsArray.push(donationObj)
            // }
            // console.log(donationsArray)
            // const response = await fetch("http://localhost:3000/getfromfile",{
            //     method:"POST",
            //     body:JSON.stringify(donationsArray),
            //     headers:{
            //         "Content-Type":"application/json"
            //     }
            // })
            // response.json().then((data)=>{
            //     console.log(data.mwebBackendResult)
            //     if(data.mwebBackendResult==="Success"){
            //         document.querySelector("#fileTypeSelect").selectedIndex=0
            //         document.querySelector("#fileInput").value=null
            //         let alertSuccess = document.createElement("div")
            //         alertSuccess.classList.add("row","d-flex","justify-content-center")
            //         alertSuccess.innerHTML=`
                
            //             <div class='col-md-6 text-center m-3'>
            //                 <div class="alert alert-success" role="alert">
            //                        ${donationsArray.length} رکورد به دیتابیس اضافه گردید.
            //                 </div>
            //             </div>    
                            
            //         `
            //         cardBody.append(alertSuccess)
            //         setTimeout(()=>{
            //             alertSuccess.remove()
            //         },30*1000)

            //     }
            // })

            const donationsData = []

            readXlsxFile(fileInput).then((rows) => {

                rows.shift()

                for (let i = 0 ; i < rows.length-1;i++){
                    donationsData.push({
                        donationLocation:rows[i][0],
                        databaseCode:rows[i][1],
                        countyCode:rows[i][2],
                        donorNationalNumber:rows[i][4],
                        donationNumber:rows[i][11],
                        donationDate:rows[i][12],
                        receptionTime:rows[i][13],
                        receptionStaff:rows[i][19],
                        medicalDoctor:rows[i][20],
                        physicalExamResult:rows[i][22],
                        physicalExamDate:rows[i][23],
                        physicalExamTime:rows[i][24],
                        donationStartingTime:rows[i][25],
                        donationEndingTime:rows[i][26],
                        donationNurse:rows[i][27],
                        medicalDoctorRequestedVolume:rows[i][28],
                        donationResult:rows[i][29],
                        plasmaVolume:rows[i][30],
                        selfAdmission:rows[i][31],
                        ageWhenDonated:rows[i][35],
                        paymentMethod:rows[i][36],
                        price:rows[i][37],
                        bonus:rows[i][38],
                        pricePlusBonus:rows[i][39],
                        paymentDate:rows[i][40],
                        deedNumber:rows[i][41],
                        fdoId:rows[i][42],
                        uids:rows[i][43]
                    })
                }

console.log(donationsData)
                fetch("http://localhost:3000/getdonationsfromfile",{
                    method:"POST",
                    body:JSON.stringify(donationsData),
                    headers:{
                        "Content-Type":"application/json"

                    }
                }).then((response) => {
                    console.log(response)

                }).catch((errorr) => {
                    console.error(errorr)
                })










                   

            }).catch((error) => {

                console.error(error)

            })






    }
    
}  
})










////    Menu    ///////

const invitationDonor = document.querySelector("#invitationDonorPage");

invitationDonor.addEventListener("click",async()=>{
    document.title="فراخوان و جذب اهدا کننده"
    cardTitle.innerText=document.title
    let request = await fetch("http://localhost:3000/invitationDonor",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    console.log(request.json())
    let response = request.json()

    const {createApp} = Vue 
    createApp({
        template:`<h1>Sample Text</h1>`
}).mount("#app")



})