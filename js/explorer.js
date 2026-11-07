document.addEventListener("DOMContentLoaded", () => {
  const results = document.getElementById("event-results");
  if (!results) return;

  const search = document.getElementById("event-search");
  const category = document.getElementById("category-filter");
  const sort = document.getElementById("sort-filter");
  const count = document.getElementById("results-count");
  const empty = document.getElementById("empty-state");
  const clear = () => { search.value = ""; category.value = "All"; sort.value = "date"; render(); };

  const params = new URLSearchParams(window.location.search);
  search.value = params.get("search") || "";
  const requestedCategory = params.get("category");
  if (requestedCategory && [...category.options].some(option => option.value === requestedCategory)) {
    category.value = requestedCategory;
  }

  function render() {
    const query = search.value.trim().toLowerCase();
    let filtered = events.filter(event => {
      const matchesQuery = [event.title,event.category,event.description,event.venue,event.location].join(" ").toLowerCase().includes(query);
      const matchesCategory = category.value === "All" || event.category === category.value;
      return matchesQuery && matchesCategory;
    });
    if (sort.value === "name") filtered.sort((a,b) => a.title.localeCompare(b.title));
    else filtered.sort((a,b) => new Date(a.date) - new Date(b.date));

    count.textContent = `${filtered.length} ${filtered.length === 1 ? "event" : "events"} found`;
    results.innerHTML = filtered.map(createEventCard).join("");
    empty.classList.toggle("hidden", filtered.length !== 0);
    results.classList.toggle("hidden", filtered.length === 0);
  }
  [search,category,sort].forEach(control => control.addEventListener("input", render));
  document.getElementById("clear-filters").addEventListener("click", clear);
  document.getElementById("empty-clear").addEventListener("click", clear);
  render();
});
