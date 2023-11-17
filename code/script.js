// A function that adds and removes the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");

  const description = element.nextElementSibling;

  if (element.classList.contains("active")) {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

// Event listeners for existing sections
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

const faqUrl = 'https://your-api-endpoint.com/faq'; // Replace with actual API endpoint

fetch(faqUrl)
  .then(response => response.json())
  .then(data => {
    // Get the accordion container
    const accordion = document.querySelector('.accordion');

    // Iterate through the data and create div elements
    data.forEach(item => {
      // Create a div for title with class "title" and unique ID
      const titleDiv = document.createElement('div');
      titleDiv.className = 'title';
      titleDiv.id = item.title.replace(/\s+/g, ''); // Remove spaces from title for ID
      titleDiv.textContent = item.title;

      // Create a div for description with class "description"
      const descriptionDiv = document.createElement('div');
      descriptionDiv.className = 'description';
      descriptionDiv.innerHTML = `<p>${item.body}</p>`;

      // Append the title and description to the accordion section
      accordion.appendChild(titleDiv);
      accordion.appendChild(descriptionDiv);

      // Add event listener to the created title div
      titleDiv.addEventListener('click', toggle);
    });
  })
  .catch(error => console.error('Error fetching FAQ data:', error));

















  