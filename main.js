// script.js
async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');
    
    try {
        // Fetch data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch tickets. Please try again later.');
        }
        
        const tickets = await response.json();

        // Check if tickets are empty, and throw custom error if none are found
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available.');
        }
        
        // Process tickets (call a function to display them, defined in the next step)
        displayTickets(tickets);
        
    } catch (error) {
        // Display error message
        errorMessage.style.display = 'block';
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

fetchTickets();
function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.innerHTML = ''; // Clear any existing content

    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket');
        
        ticketElement.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p><strong>Customer Name:</strong> Customer ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
        `;

        ticketContainer.appendChild(ticketElement);
    });
}
