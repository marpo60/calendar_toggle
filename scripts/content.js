// Change this //
const groupings =
  {
    "group": [
      "A",
      "B"
    ]
  }

async function handler() {
  const group = groupings[this.id];
  const checked = this.checked;

  document.body.style.zoom = "50%";
  const el = [...document.querySelectorAll('*')].find(e => e.textContent.trim() === 'My calendars');

  el.click();

  await new Promise(r => setTimeout(r, 200));

  el.click();

  await new Promise(r => setTimeout(r, 200));

  group.forEach((calendarName) => {
    let s = Array.from(document.querySelectorAll("input[aria-label]")).find((s) => s.ariaLabel.includes(calendarName));

    if (s && s.checked !== checked) {
      s.click();
    }
  });

  document.body.style.zoom = "100%";
};

const dayDropdown = document.querySelector("*[data-active-view]");

for (const [key, value] of Object.entries(groupings)) {
  const div = document.createElement("div");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const textContent = document.createTextNode(key);

  label.appendChild(checkbox);
  label.appendChild(textContent);

  checkbox.type = "checkbox";
  checkbox.id = key;
  checkbox.addEventListener("click", handler, false);

  div.appendChild(label);

  // Fix this
  (dayDropdown.parentElement).insertBefore(div, dayDropdown);
}
