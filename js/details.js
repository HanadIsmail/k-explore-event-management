document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("event-detail-content");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const event = getEventById(params.get("id"));

  if (!event) {
    target.innerHTML = `<div class="empty-state"><span>⌕</span><h2>Event not found</h2><p>This event may have been removed or the link is incorrect.</p><a class="btn btn-primary" href="events.html">Browse events</a></div>`;
    return;
  }

  document.title = `${event.title} — K Explore`;
  target.innerHTML = `
    <div class="detail-hero-image"><img src="${event.image}" alt="${event.title}" onerror="this.src='https://placehold.co/1200x600/e9e5ff/5140cc?text=K+Explore+Event'"><span class="event-tag">${event.category}</span></div>
    <div class="detail-layout">
      <section class="detail-copy"><div class="eyebrow">YOUR NEXT EXPERIENCE</div><h1>${event.title}</h1><p class="detail-description">${event.description}</p>
        <h2>About this event</h2><p>${event.description} Join us for an engaging experience, meet other participants and take away ideas you can use beyond the event.</p>
        <div class="detail-facts"><div><span>DATE</span><strong>${formatEventDate(event.date)}</strong></div><div><span>TIME</span><strong>${event.time}</strong></div><div><span>CATEGORY</span><strong>${event.category}</strong></div></div>
      </section>
      <aside class="booking-card"><div class="eyebrow">EVENT INFORMATION</div><h3>Be part of it.</h3><p>Reserve your place and get ready for a great experience.</p>
        <div class="booking-row"><span>▦</span><div><small>Date</small><strong>${formatEventDate(event.date)}</strong></div></div>
        <div class="booking-row"><span>◷</span><div><small>Time</small><strong>${event.time}</strong></div></div>
        <div class="booking-row"><span>⌖</span><div><small>Venue</small><strong>${event.venue}</strong></div></div>
        <a class="btn btn-primary booking-button" href="register.html?event=${encodeURIComponent(event.id)}">Register for event <span>→</span></a>
        <small class="booking-note">Demo registration · No payment required</small>
      </aside>
    </div>`;
});
