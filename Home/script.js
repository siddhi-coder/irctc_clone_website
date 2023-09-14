function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// Validation Function
function Validation() {
  // Get form input values
  const departure = document.getElementById("fromList").value;
  const destination = document.getElementById("toList").value;
  const classes = document.getElementById("classes").value;
  const type_ticket = document.getElementById("type_ticket").value;
  const checkbox = document.getElementById("checkbox").checked; // Note: Use .checked for checkboxes

  // Get error message elements
  const fromError = document.getElementById("error1");
  const toError = document.getElementById("error2");

  const classesError = document.getElementById("classesError");
  const typeticketError = document.getElementById("typeticketError");
  const toError = document.getElementById("checkboxError");

  // Reset error messages
  fromError.innerHTML = "";
  toError.innerHTML = "";
  classesError.innerHTML = "";
  typeticketError.innerHTML = "";

  // Check for empty values and display error messages
  if (departure.trim() === "") {
      fromError.innerHTML = "Please enter the departure station name";
  }

  if (destination.trim() === "") {
      toError.innerHTML = "Please enter the destination station name";
  }

  if (classes === "") {
      classesError.innerHTML = "Please select a class";
  }

  if (type_ticket === "") {
      typeticketError.innerHTML = "Please select a ticket type";
  }

  
  // Check if all validation checks pass
  if (!(fromError.innerHTML || toError.innerHTML || classesError.innerHTML || typeticketError.innerHTML )) {
    // If all checks pass, open the new page
    window.location.href = "../train_list/index.html";
}

// Return false to prevent form submission if there are errors
return !(fromError.innerHTML || toError.innerHTML || classesError.innerHTML || typeticketError.innerHTML);
}
// Define an array of holiday data (you can add more items as needed)
const holidaysData = [
    {
      imageSrc: "../images/exterior.jpg",
      title: "Maharajas' Express",
      description: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years",
    },
    {
        imageSrc:"../images/Kashmir.jpg",
        title: "International Packages",
        description: "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
      },
    
      {
        imageSrc:"../images/Thailand.jpg",
        title: "Domestic Air Packages",
        description: "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
      },

      {
        imageSrc:"../images/Bharat_Gaurav.jpg",
        title: "Bharat Gaurav Tourist Train",
        description: "IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.",
      },
      {
        imageSrc:"../images/Manali.jpg",
        title: "Rail Tour Packages",
        description: "IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.",
      },
    ];
  
  // Function to create a holiday box
  function createHolidayBox(data) {
    const container = document.getElementById("holidayContainer");
  
    const box = document.createElement("div");
    box.classList.add("box");
  
    const image = document.createElement("div");
    image.classList.add("image");
    const img = document.createElement("img");
    img.src = data.imageSrc;
    img.alt = "";
    image.appendChild(img);
  
    const holidayTitle = document.createElement("div");
    holidayTitle.classList.add("holidayTitle");
    holidayTitle.textContent = data.title;
  
    const paragraph = document.createElement("div");
    paragraph.classList.add("paragraph");
    paragraph.textContent = data.description;
  
    box.appendChild(image);
    box.appendChild(holidayTitle);
    box.appendChild(paragraph);
  
    container.appendChild(box);
  }
  
  // Loop through the holiday data and create holiday boxes
  for (const holidayData of holidaysData) {
    createHolidayBox(holidayData);
  }
  

