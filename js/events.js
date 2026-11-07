// Demo event data shared by the homepage, explorer, details and registration pages.
const events = [
  {id:"tech-summit-2026",title:"Future Tech Summit",category:"Technology",date:"2026-12-12",time:"10:00 AM",venue:"KIIT Convention Centre, Bhubaneswar",location:"Bhubaneswar",description:"Explore emerging technologies, AI, software engineering and the ideas shaping tomorrow. Hear from practitioners, join interactive sessions and connect with curious builders.",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"},
  {id:"creative-music-night",title:"Creative Music Night",category:"Music",date:"2026-12-18",time:"6:30 PM",venue:"Campus Open Air Theatre",location:"Bhubaneswar",description:"An evening of live performances, new sounds and unforgettable campus energy. Bring your friends and enjoy a celebration of local music and creativity.",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85"},
  {id:"startup-connect",title:"Startup Connect",category:"Business",date:"2027-01-08",time:"11:00 AM",venue:"Innovation Hub, KIIT",location:"Bhubaneswar",description:"Meet founders, exchange ideas and learn how early-stage businesses get moving. A practical networking event for students interested in entrepreneurship.",image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"},
  {id:"design-workshop",title:"Design Thinking Workshop",category:"Learning",date:"2027-01-15",time:"2:00 PM",venue:"School of Computer Engineering",location:"Bhubaneswar",description:"Practice creative problem-solving and turn everyday problems into useful ideas. Work in small groups through a guided design challenge.",image:"https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85"},
  {id:"photo-walk",title:"Campus Photography Walk",category:"Arts",date:"2027-01-22",time:"7:00 AM",venue:"KIIT Campus Main Gate",location:"Bhubaneswar",description:"Learn to notice light, composition and small stories through your camera. Open to beginners and experienced photographers.",image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=85"},
  {id:"fitness-meet",title:"Campus Sports Meetup",category:"Sports",date:"2027-02-02",time:"4:00 PM",venue:"KIIT Sports Complex",location:"Bhubaneswar",description:"Join friendly games, meet new teammates and enjoy an active afternoon. Choose a game, bring your energy and take part.",image:"https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=85"},
  {id:"ai-build-day",title:"AI Build Day",category:"Technology",date:"2027-02-14",time:"9:30 AM",venue:"Technology Incubation Centre",location:"Bhubaneswar",description:"A hands-on day for students to prototype useful AI-powered ideas, collaborate and share what they build.",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85"},
  {id:"career-launch",title:"Career Launch Session",category:"Learning",date:"2027-02-20",time:"3:00 PM",venue:"Auditorium, Campus 6",location:"Bhubaneswar",description:"Get practical guidance on portfolios, internships, interviews and building a career plan while you are still a student.",image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"}
];

function formatEventDate(dateString, options = {day:"numeric",month:"short",year:"numeric"}) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-IN", options);
}
function getEventById(id) { return events.find(event => event.id === id); }
function createEventCard(event) {
  return `<article class="event-card">
    <div class="event-image"><img src="${event.image}" alt="${event.title}" loading="lazy" onerror="this.src='https://placehold.co/900x600/e9e5ff/5140cc?text=K+Explore+Event'"><span class="event-tag">${event.category}</span></div>
    <div class="event-body"><div class="event-date">${formatEventDate(event.date).toUpperCase()}</div><h3>${event.title}</h3><p>${event.description}</p>
    <div class="event-meta"><span>◷ ${event.time}</span><span>⌖ ${event.location}</span></div>
    <a class="event-link" href="event-details.html?id=${encodeURIComponent(event.id)}">View event details →</a></div>
  </article>`;
}
function renderHomepageEvents() {
  const featured = document.getElementById("featured-events");
  const upcoming = document.getElementById("upcoming-events");
  if (featured) featured.innerHTML = events.slice(0,3).map(createEventCard).join("");
  if (upcoming) upcoming.innerHTML = events.slice(0,4).map(event => {
    const date = new Date(`${event.date}T12:00:00`);
    return `<article class="upcoming-item"><div class="date-box"><strong>${date.getDate()}</strong><span>${date.toLocaleDateString("en-IN",{month:"short"})}</span></div>
      <div class="upcoming-info"><h3>${event.title}</h3><p>${event.category} · ${event.time} · ${event.venue}</p></div>
      <a href="event-details.html?id=${encodeURIComponent(event.id)}">Details ↗</a></article>`;
  }).join("");
}
document.addEventListener("DOMContentLoaded", renderHomepageEvents);
