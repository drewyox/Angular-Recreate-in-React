import React from 'react';
import Ticket from './Ticket';


var masterTicketList = [
  {
    names:'Thato and Haley',
    location:'3A',
    issue:'Firebase not responding'
  },
  {
    names:'Fred and Barney',
    location:'4B',
    issue:'Rocks?'
  },
  {
    names:'Ty and Segal',
    location:'5C',
    issue:'Songs playing when they shouldnt'
  },
  {
    names:'Bonnie and Clyde',
    location:'6D',
    issue:'Barf'
  },
];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
