// Sample events data
const events = [
    { date: '2023-09-15', title: 'Event 1', description: 'Description of Event 1' },
    { date: '2023-09-20', title: 'Event 2', description: 'Description of Event 2' },
    // Add more events here
];

// Function to render events on the calendar
function renderEvents() {
    const calendar = document.getElementById('calendar');
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.date}</p>
        `;

        eventCard.addEventListener('click', () => showEventDetails(event));
        
        calendar.appendChild(eventCard);
    });
}

// Function to display event details
function showEventDetails(event) {
    const eventDetails = document.getElementById('event-details');
    eventDetails.innerHTML = `
        <h2>${event.title}</h2>
        <p>Date: ${event.date}</p>
        <p>Description: ${event.description}</p>
        <span class="close-button" onclick="closeEventDetails()">&times;</span>
    `;
    eventDetails.style.display = 'block';
}

// Function to close event details
function closeEventDetails() {
    const eventDetails = document.getElementById('event-details');
    eventDetails.style.display = 'none';
}

renderEvents();


