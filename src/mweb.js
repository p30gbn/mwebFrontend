let pagetitle="افزودن فایل اهدا / اهدا کننده"







document.title = pagetitle


const schema = {
    "Donation Location":{
        prop:"donationLocation",
        type:String
    },
    "County Code":{
        prop:"countyCode",
        type:String
    },
    "National Number":{
        prop:"nationalNumber",
        type:String
    },
    "Case Number":{
        prop:"caseNumber",
        type:String
    },
    "First Name":{
        prop:"firstName",
        type:String
    },
    "Last Name":{
        prop:"lastName",
        type:String
    },
    "Father Name":{
        prop:"fatherName",
        type:String
    },
    "gender":{
        prop:"gender",
        type:String
    },
    "Birth Certificate Number":{
        prop:"birthCertificateNumber",
        type:String
    },
    "Donation Number":{
        prop:"donationNumber",
        type:String
    },
    "Donation Date":{
        prop:"donationDate",
        type:Date
    },
    "Reception Time":{
        prop:"receptionTime",
        type:String
    },
    "Receptions Count":{
        prop:"receptionsCount",
        type:Number

    },
    "Donations Count":{
        prop:"donationsCount",
        type:Number
    },
    "referrer":{
        prop:"referrer",
        type:String
    },
    "New Referrer":{
        prop:"newReferrer",
        type:String
    },
    "Referrer Type":{
        prop:"referrerType",
        type:String
    },
    "Reception Staff":{
        prop:"Reception Staff",
        type:String
    },
    "Medical Doctor":{
        prop:"medicalDoctor",
        type:String
    },
    "Donor State":{
        prop:"donorState",
        type:String
    },
    "Physical Exam Result":{
        prop:"physicalExamResult",
        type:String
    },
    "Physical Exam Date":{
        prop:"physicalExamDate",
        type:Date
    },
    "Physical Exam Time":{
        prop:"physicalExamTime",
        type:String
    },
    "Donation Starting Time":{
        prop:"donationStartingTime",
        type:String
    },
    "Donation Ending Time":{
        prop:"donationEndingTime",
        type:String

    },
    "Donation Nurse":{
        prop:"donationNurse",
        type:String

    },
    "Medical Doctor Requested Volume":{
        prop:"medicalDoctorRequestedVolume",
        type:Number

    },
    "Donation Result":{
        prop:"donationResult",
        type:String

    },
    "Plasma Volume":{
        prop:"plasmaVolume",
        type:Number

    },
    "Self Admission":{
        prop:"selfAdmission",
        type:String

    },
    "marriage":{
        prop:"marriage",
        type:String

    },
    "education":{
        prop:"education",
        type:String
    },
    "job":{
        prop:"job",
        type:String

    },
    "Age When Donated":{
        prop:"ageWhenDonated",
        type:Number
    },
    "Payment Method":{
        prop:"paymentMethod",
        type:String

    },
    "price":{
        prop:"price",
        type:Number
    },
    "bonus":{
        prop:"bonus",
        type:Number
    },
    "Price Plus Bonus":{
        prop:"pricePlusBonus",
        type:Number
    },
    "Payment Date":{
        prop:"paymentDate",
        type:Date
    },
    "Deed Number":{
        prop:"deedNumber",
        type:Number
    },
    "Fdo Id":{
        prop:"fdoId",
        type:Number
    },
    "uids":{
        prop:"uids",
        type:Number
    }
    


}

const sendfileButton = document.querySelector("#sendFile")
sendfileButton.addEventListener("click",async()=>{
    let fileInput = document.querySelector("#fileInput").files[0]
    let fileType = document.querySelector("#fileTypeSelect").value
    

    if (fileInput!==null&&fileType!==null){
        if (fileType==="donation"){
            let rows = await readXlsxFile(fileInput,{
                schemaPropertyValueForMissingColumn:undefined,
                schemaPropertyValueForEmptyCell:null,
                schemaPropertyShouldSkipRequiredValidationForMissingColumn: (column, { object }) => true
            })
            const donationsArray=[]
            console.log(rows[0])
            for(let i=1;i<rows.length-1;i++){
                let donationObj ={
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
                }
                donationsArray.push(donationObj)
            }
            console.log(donationsArray)
            const response = await fetch("http://localhost:3000/getfromfile",{
                method:"POST",
                body:JSON.stringify(donationsArray),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            response.json().then((data)=>{
                console.log(data.mwebBackendResult)
                if(data.mwebBackendResult==="Success"){
                    document.querySelector("#fileTypeSelect").selectedIndex=0
                    document.querySelector("#fileInput").value=null
                    let cardBody=document.querySelector(".card-body")
                    let alertSuccess = document.createElement("div")
                    alertSuccess.classList.add("row","d-flex","justify-content-center")
                    alertSuccess.innerHTML=`
                
                        <div class='col-md-6 text-center m-3'>
                            <div class="alert alert-success" role="alert">
                                   ${donationsArray.length} رکورد به دیتابیس اضافه گردید.
                            </div>
                        </div>    
                            
                    `
                    cardBody.append(alertSuccess)
                    setTimeout(()=>{
                        alertSuccess.remove()
                    },30*1000)

                }
            })
    }
    
}  
})