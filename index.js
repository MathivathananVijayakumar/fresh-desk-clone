function getTickets() {
 
  fetch("https://domain.freshdesk.com/api/v2/tickets", {
     // method:"GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('W0xuKkk90WXEJkl5n8Am:X')
    }

})
  
 

    .then((data) => data.json())
    .then((tickets) => {
      const allTickets= document.querySelector(".tickets");
   tickets.forEach((ticket) => {
        //ticket container
        const ticketConatiner = document.createElement("div");
       ticketConatiner.className = "ticket_field-container";

    ticketConatiner.innerHTML = `
      <h4 class="gadget-name">${ticket.name}</h4>
      <h4 class="gadget-name">${ticket.id}</h4>
        <h4 class="gadget-name">${ticket.avatar}</h4>
        <h4 class="gadget-name">${ticket.email}</h4>
        <h4 class="gadget-name">${ticket.updated_at}</h4>
        <h4 class="gadget-name">${ticket.priority}</h4>
        <h4 class="gadget-name">${ticketstatus}</h4>
       <button class="ticket-edit" onclick="editTicket('${ticket.name}', '${ticket.id}', '${ticket.avatar}','${ticket.email}','${ticket.created_at}','${ticket.updated_at}','${ticket.priority}','${ticket.status}')"> Edit </button>
        
      `;
        allTickets.append(ticketConatiner);
      });
      return tickets;
    });
}

getTickets();


function refreshTickets() {
  // console.log("Refresh the tickets");
  document.querySelector(".tickets").innerHTML = "";
  getTickets();
}


function addUser(){
  const type =  document.querySelector('.submit-user').innerText;
  console.log("The type is ...",type);
 const ticketName =  document.querySelector('.add-user-name').value;
 const ticketProfilePic =  document.querySelector('.add-user-pic').value;

  fetch('https://domain.freshdesk.com/api/v2/tickets', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('W0xuKkk90WXEJkl5n8Am:X')
    },
    body: JSON.stringify({"name":ticketName})
// });

    .then((data) => data.json())
    .then((user) => refreshTickets());
  
  console.log("Add Ticket", ticketName, ticketProfilePic)

 
  formReset();
  
}

function formReset(){
   document.querySelector('.add-ticket-name').value = "";
  document.querySelector('.add-ticket-pic').value = "";
  document.querySelector('.submit-user').innerText = 'Add Ticket';
}
fetch('https://domain.freshdesk.com/api/v2/tickets/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('W0xuKkk90WXEJkl5n8Am:X')
    },
    body: JSON.stringify({ "priority":2, "status":3 })

 .then((data) => data.json())
    .then((ticket) => refreshTickets());
});

else{
 const ticketName =  document.querySelector('.add-ticket-name').value;
 const ticketProfilePic =  document.querySelector('.add-ticket-pic').value; 
  function editTicket(ticketName, ticketId, ticketAvatar){
  document.querySelector('.add-ticket-name').value =ticketName;
  document.querySelector('.add-ticket-pic').value = ticketAvatar;
  document.querySelector('.submit-ticket').innerText = 'Edit Ticket';
  localStorage.setItem('ticketId', ticketId);
}
  
  
  
  
  