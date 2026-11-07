document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  if (!form) return;
  const select = document.getElementById("event-select");
  const selectedEvent = document.getElementById("selected-event");
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("event");

  events.forEach(event => {
    const option = document.createElement("option");
    option.value = event.id;
    option.textContent = `${event.title} — ${formatEventDate(event.date)}`;
    select.appendChild(option);
  });

  if (requestedId && getEventById(requestedId)) select.value = requestedId;
  updateSelectedEvent();

  select.addEventListener("change", updateSelectedEvent);

  function updateSelectedEvent() {
    const event = getEventById(select.value);
    selectedEvent.innerHTML = event
      ? `<span class="selected-label">YOU'RE REGISTERING FOR</span><strong>${event.title}</strong><small>${formatEventDate(event.date)} · ${event.time}</small>`
      : `<span class="selected-label">EVENT SELECTION</span><strong>Choose an event below</strong><small>Your selected event will appear here.</small>`;
  }

  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }
  function clearErrors() {
    ["name-error","email-error","phone-error","event-error","terms-error"].forEach(id => showError(id,""));
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    clearErrors();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventId = select.value;
    const termsAccepted = document.getElementById("terms").checked;
    let valid = true;

    if (fullName.length < 2) { showError("name-error","Please enter your full name (at least 2 characters)."); valid = false; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) { showError("email-error","Please enter a valid email address."); valid = false; }
    const digits = phone.replace(/\D/g,"");
    if (digits.length < 10 || digits.length > 15) { showError("phone-error","Enter a phone number with 10 to 15 digits."); valid = false; }
    if (!getEventById(eventId)) { showError("event-error","Please select an event."); valid = false; }
    if (!termsAccepted) { showError("terms-error","Please accept the registration terms."); valid = false; }
    if (!valid) return;

    const chosenEvent = getEventById(eventId);
    const registration = {
      id: `REG-${Date.now()}`,
      fullName, email, phone, eventId,
      eventTitle: chosenEvent.title,
      registeredAt: new Date().toISOString()
    };

    // Save demo registration in this browser. A real production app needs a backend.
    const saved = JSON.parse(localStorage.getItem("k-explore-registrations") || "[]");
    saved.push(registration);
    localStorage.setItem("k-explore-registrations", JSON.stringify(saved));

    form.classList.add("hidden");
    selectedEvent.classList.add("hidden");
    document.getElementById("success-copy").textContent =
      `Thanks, ${fullName}! Your registration for ${chosenEvent.title} has been saved in this browser. Your reference is ${registration.id}.`;
    document.getElementById("success-message").classList.remove("hidden");
  });
});
