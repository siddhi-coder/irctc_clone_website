const trainsList  = [
    {
        trainTitle:"BHUJ AC SF EXP (22903)",
        deptTiming:"00:15",
        deptStation: "BORIVALI",
        deptDate:"Thu, 14 Sep",
        desTiming:"12:45 ",
        desStation: "BHUJ",
        desDate:"Thu, 14 Sep",
    
    },
    
    
    {
        trainTitle:"PURI DGHA SUP EX ",
        deptTiming:"17:45",
        deptStation: "BANDRA TERMINUS",
        deptDate:"Thu, 14 Sep",
        desTiming:"08:30  ",
        desStation: "BHUJ",
        desDate:"Fri, 15 Sep",
    
    },
    
    {
        trainTitle:"LOKMANYATILAK T",
        deptTiming:"15:15",
        deptStation: "DADAR",
        deptDate:"Thu, 14 Sep",
        desTiming:"06:30",
        desStation: "BHUJ",
        desDate:"Fri, 15 Sep",
    
    },
    {
        trainTitle:"SAYAJINAGRI EXP (20907)",
        deptTiming:"15:15",
        deptStation: "DADAR",
        deptDate:"Thu, 14 Sep",
        desTiming:"06:30",
        desStation: "BHUJ",
        desDate:"Fri, 15 Sep",
    
    },
{
    trainTitle:"BHUJ AC SF EXP (22903)",
    deptTiming:"00:15",
    deptStation: "BORIVALI",
    deptDate:"Thu, 14 Sep",
    desTiming:"12:45 ",
    desStation: "BHUJ",
    desDate:"Thu, 14 Sep",

},


{
    trainTitle:"SC PBR SF EXP",
    deptTiming:"17:45",
    deptStation: "BANDRA TERMINUS",
    deptDate:"Thu, 14 Sep",
    desTiming:"08:30  ",
    desStation: "BHUJ",
    desDate:"Fri, 15 Sep",

},

{
    trainTitle:"ERS OKHA EXP",
    deptTiming:"15:15",
    deptStation: "DADAR",
    deptDate:"Thu, 14 Sep",
    desTiming:"06:30",
    desStation: "BHUJ",
    desDate:"Fri, 15 Sep",

},
{
    trainTitle:"LOKSHAKTI EXP",
    deptTiming:"15:15",
    deptStation: "DADAR",
    deptDate:"Thu, 14 Sep",
    desTiming:"06:30",
    desStation: "BHUJ",
    desDate:"Fri, 15 Sep",

},
{
    trainTitle:"MMCT NDB EXP",
    deptTiming:"00:15",
    deptStation: "BORIVALI",
    deptDate:"Thu, 14 Sep",
    desTiming:"12:45 ",
    desStation: "BHUJ",
    desDate:"Thu, 14 Sep",

},


{
    trainTitle:"SAURASHTRA EXP",
    deptTiming:"17:45",
    deptStation: "BANDRA TERMINUS",
    deptDate:"Thu, 14 Sep",
    desTiming:"08:30  ",
    desStation: "BHUJ",
    desDate:"Fri, 15 Sep",

},

{
    trainTitle:"GUJRAT SF EXP",
    deptTiming:"15:15",
    deptStation: "DADAR",
    deptDate:"Thu, 14 Sep",
    desTiming:"06:30",
    desStation: "BHUJ",
    desDate:"Fri, 15 Sep",

},
{
    trainTitle:"MMCT ADI EXPRESS",
    deptTiming:"13:40",
    deptStation: "BORIVALI",
    deptDate:"Thu, 14 Sep",
    desTiming:"14:53",
    desStation: "BOISAR",
    desDate:"Fri, 15 Sep",

},

];


// Function to create a holiday box
function trainListBox(data) {
    const TrainListContainer = document.getElementById("TrainListContainer");
  
    const box = document.createElement("div");
    box.classList.add("box");
    const part = document.createElement("div");
    part.classList.add("part");
  
    const trainTitle = document.createElement("div");
    trainTitle.classList.add("trainTitle");
    trainTitle.textContent = data.trainTitle;
  
    const deptTiming = document.createElement("div");
    deptTiming.classList.add("deptTiming");
    deptTiming.textContent = data.deptTiming;

    const deptStation = document.createElement("div");
    deptStation.classList.add("deptStation");
    deptStation.textContent = data.deptStation;
  
    const deptDate = document.createElement("div");
    deptDate.classList.add("deptDate");
    deptDate.textContent = data.deptDate;
  
    const desTiming = document.createElement("div");
    desTiming.classList.add("desTiming");
    desTiming.textContent = data.desTiming;

    const desStation = document.createElement("div");
    desStation.classList.add("desStation");
    desStation.textContent = data.desStation;
  
    const desDate = document.createElement("div");
    desDate.classList.add("desDate");
    desDate.textContent = data.desDate;

    box.appendChild(trainTitle);
    box.appendChild(part);
    part.appendChild(deptTiming);
    part.appendChild(deptStation);
    part.appendChild(deptDate);
    part.appendChild(desTiming);
    part.appendChild(desStation);
    part.appendChild(desDate);
    
    TrainListContainer.appendChild(box);
  }
  
  // Loop through the holiday data and create holiday boxes
  for (const trainList of trainsList) {
    trainListBox(trainList);
  }
  
