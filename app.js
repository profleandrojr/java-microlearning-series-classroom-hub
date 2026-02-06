// Link --> Change this if a class expands its limit to 250 students.
const activeClass = {
  name: "Cohort 01",
  link: "https://classroom.google.com/c/NzkyMjk0NjAxNTk0?cjc=c43zrwbo",
};

const btn = document.getElementById("join-btn");
const info = document.getElementById("class-info");

btn.href = activeClass.link;
info.innerText = `Connected to: ${activeClass.name} (Active)`;
