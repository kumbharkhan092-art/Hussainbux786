// ===== COURSES DATA =====
const courses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites."
  },
  {
    title: "Freelancing Mastery",
    description: "Discover how to start and grow your freelancing career on platforms like Fiverr and Upwork."
  },
  {
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, and content strategies to grow online businesses."
  },
  {
    title: "Graphic Design",
    description: "Create professional designs using tools like Adobe Photoshop and Illustrator."
  }
];

// ===== TESTIMONIALS DATA =====
const testimonials = [
  {
    text: `"BingoEarn helped me transition into web development. The courses are practical and easy to follow!"`,
    name: "Sarah Ahmed",
    course: "Web Development Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
  },
  {
    text: `"I started freelancing after completing the courses here. Highly recommend BingoEarn!"`,
    name: "Ali Hassan",
    course: "Freelancing Course Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
  },
  {
    text: `"The instructors are amazing and the community is very supportive. Best learning platform!"`,
    name: "Fatima Khan",
    course: "Digital Marketing Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
  }
];

// ===== TEAM DATA =====
const team = [
  {
    name: "Hussain Bux",
    role: "Lead Instructor",
    image: "profile.png"
  },
  {
    name: "Zain ul Abdin",
    role: "Marketing Expert",
    image: "team1.jpg"
  },
  {
    name: "Muhammad Aaqib",
    role: "Design Mentor",
    image: "team2.jpg"
  },
  {
    name: "Faraz Aadil",
    role: "Course Coordinator",
    image: "team3.jpg"
  }
];

// ===== CREATE COURSES =====
function renderCourses() {
  const container = document.querySelector(".course-grid");
  container.innerHTML = ""; // clear old content if any

  courses.forEach(course => {
    const card = document.createElement("article");
    card.classList.add("course-card");
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
    `;
    container.appendChild(card);
  });
}

// ===== CREATE TESTIMONIALS =====
function renderTestimonials() {
  const container = document.querySelector(".testimonials-grid");
  container.innerHTML = ""; // clear old content

  testimonials.forEach(testimonial => {
    const card = document.createElement("article");
    card.classList.add("testimonial-card");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <p class="testimonial-text">${testimonial.text}</p>
      <div class="student-info">
        <img src="${testimonial.image}" alt="${testimonial.name}" class="student-img">
        <div>
          <div class="student-name">${testimonial.name}</div>
          <div class="student-course">${testimonial.course}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Append the success stories link at the end
  const link = document.createElement("a");
  link.href = "success-stories.html";
  link.classList.add("stories");
  link.textContent = "Success Stories";
  container.appendChild(link);
}

// ===== CREATE TEAM CARDS =====
function renderTeam() {
  const container = document.querySelector(".team-grid");
  container.innerHTML = ""; // clear old content

  team.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("team-card");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <div class="team-image">
        <img src="${member.image}" alt="${member.name}">
      </div>
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    `;
    container.appendChild(card);
  });
}

// ===== INITIALIZE ALL SECTIONS =====
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  renderTestimonials();
  renderTeam();
});

