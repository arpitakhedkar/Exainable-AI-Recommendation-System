const tracks = {
  data: {
    label: "Data Analytics",
    market: "Strong digital business demand",
    keywords: ["data", "analytics", "analysis", "excel", "sql", "statistics", "dashboard", "visualization", "business intelligence", "report"],
    skills: ["python", "sql", "statistics", "communication"],
    courses: [
      ["Data Analysis with Python", "Learn cleaning, exploration, visualization, and practical reporting with real datasets."],
      ["SQL and Database Analytics", "Build the database querying skill needed for analytics and reporting roles."],
      ["Statistics for Decision Making", "Strengthen probability, hypothesis testing, and model evaluation basics."]
    ],
    roles: ["Data Analyst", "Business Intelligence Analyst", "Reporting Analyst"]
  },
  ai: {
    label: "Artificial Intelligence",
    market: "High future technology relevance",
    keywords: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "chatbot", "nlp", "computer vision", "model", "prediction"],
    skills: ["python", "statistics", "ml"],
    courses: [
      ["Machine Learning Foundations", "Covers supervised learning, validation, feature engineering, and model tuning."],
      ["Responsible AI and Explainability", "Connects AI performance with fairness, transparency, and ethical review."],
      ["Deep Learning Applications", "Introduces neural networks, NLP, and computer vision project workflows."]
    ],
    roles: ["AI/ML Intern", "Machine Learning Engineer", "AI Product Analyst"]
  },
  web: {
    label: "Web Development",
    market: "Core software career pathway",
    keywords: ["website", "web", "frontend", "backend", "html", "css", "javascript", "react", "app", "ui", "api", "database"],
    skills: ["web", "sql", "java", "communication"],
    courses: [
      ["Full-Stack Web Development", "Build frontend, backend, API, database, authentication, and deployment skills."],
      ["JavaScript Application Design", "Improve browser programming, state management, and interactive user interfaces."],
      ["Database Systems for Developers", "Connect applications with reliable data storage and query design."]
    ],
    roles: ["Frontend Developer", "Full-Stack Developer", "Software Engineer Intern"]
  },
  cyber: {
    label: "Cybersecurity",
    market: "Important risk and protection field",
    keywords: ["security", "cybersecurity", "network", "ethical hacking", "privacy", "risk", "encryption", "linux", "firewall", "threat"],
    skills: ["networking", "python", "communication"],
    courses: [
      ["Cybersecurity Fundamentals", "Learn security principles, threats, authentication, access control, and risk basics."],
      ["Network Defense Lab", "Practice network monitoring, secure configuration, and incident response tasks."],
      ["Secure Coding Practices", "Reduce common application vulnerabilities in web and software projects."]
    ],
    roles: ["Security Analyst", "SOC Analyst Intern", "Network Security Associate"]
  },
  cloud: {
    label: "Cloud and DevOps",
    market: "Growing infrastructure and deployment need",
    keywords: ["cloud", "aws", "azure", "devops", "deployment", "docker", "server", "automation", "linux", "scalable"],
    skills: ["cloud", "networking", "web", "python"],
    courses: [
      ["Cloud Computing Essentials", "Understand compute, storage, networking, identity, and managed cloud services."],
      ["DevOps and Automation", "Learn Git workflows, CI/CD, containers, monitoring, and repeatable deployments."],
      ["Scalable Systems Design", "Plan reliable applications using queues, caching, load balancing, and observability."]
    ],
    roles: ["Cloud Support Associate", "DevOps Intern", "Site Reliability Trainee"]
  },
  product: {
    label: "Product and UX",
    market: "Useful bridge between users and technology",
    keywords: ["design", "product", "ux", "ui", "user", "research", "prototype", "communication", "business", "startup"],
    skills: ["design", "communication", "web"],
    courses: [
      ["Human-Centered Design", "Learn user research, wireframing, usability testing, and product thinking."],
      ["Product Management Basics", "Understand problem discovery, prioritization, metrics, and roadmap planning."],
      ["No-Code and Prototype Studio", "Create fast demos, validate ideas, and communicate product value."]
    ],
    roles: ["Product Analyst", "UX Research Intern", "Associate Product Manager"]
  },
  healthcare: {
    label: "Medicine and Healthcare",
    market: "High social impact with growing healthcare and digital-health demand",
    keywords: ["medicine", "medical", "medical science", "doctor", "mbbs", "neet", "nursing", "pharmacy", "pharma", "b.pharm", "healthcare", "health care", "biology", "microbiology", "biotechnology", "biotech", "biomedical", "clinical", "clinical research", "hospital", "patient", "anatomy", "physiology", "public health", "dentistry", "bds", "physiotherapy", "psychology", "nutrition", "diagnosis", "lab"],
    skills: ["biology", "chemistry", "communication", "research"],
    courses: [
      ["Human Anatomy and Physiology", "Builds a foundation for medical, nursing, pharmacy, physiotherapy, and allied-health pathways."],
      ["Medical Terminology and Clinical Basics", "Helps students understand healthcare language, patient context, and clinical workflows."],
      ["Public Health and Epidemiology", "Introduces population health, prevention, health policy, and evidence-based decision making."],
      ["Health Informatics", "Connects healthcare with data, digital records, AI tools, and future medical technology careers."]
    ],
    roles: ["Medical Student Pathway", "Clinical Research Assistant", "Healthcare Informatics Assistant", "Public Health Associate"]
  }
};

const defaultProfile = {
  studentName: "",
  program: "",
  currentYear: "third",
  careerPriority: "job",
  academicScore: 76,
  learningMode: "project",
  timeline: "6",
  weeklyHours: 10,
  strongSubjects: "",
  weakSubjects: "",
  interestText: "",
  experienceText: "",
  skills: ["python", "sql"]
};

const sampleProfile = {
  studentName: "Arpit",
  program: "B.Tech Computer Science",
  currentYear: "final",
  careerPriority: "job",
  academicScore: 82,
  learningMode: "project",
  timeline: "6",
  weeklyHours: 12,
  strongSubjects: "programming, database, mathematics, data analysis",
  weakSubjects: "advanced machine learning, communication practice",
  interestText: "I like AI, data analytics, dashboards, Python projects, and solving business problems with technology.",
  experienceText: "Built a portfolio website, completed SQL mini project, created a Python student performance prediction model.",
  skills: ["python", "sql", "statistics", "ml", "web"]
};

const textInputs = [
  "studentName",
  "program",
  "strongSubjects",
  "weakSubjects",
  "interestText",
  "experienceText"
];

const selectInputs = ["currentYear", "careerPriority", "learningMode", "timeline"];
const rangeInputs = [
  ["academicScore", "academicScoreValue", "%"],
  ["weeklyHours", "weeklyHoursValue", " hrs"]
];

const form = document.getElementById("profileForm");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");
const resetProfile = document.getElementById("resetProfile");
const sampleButton = document.getElementById("sampleProfile");

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function cleanText(value) {
  return value.trim().toLowerCase();
}

function getCheckedSkills() {
  return Array.from(document.querySelectorAll("input[name='skills']:checked")).map((input) => input.value);
}

function setCheckedSkills(skills) {
  document.querySelectorAll("input[name='skills']").forEach((input) => {
    input.checked = skills.includes(input.value);
  });
}

function readProfile() {
  return {
    studentName: document.getElementById("studentName").value.trim(),
    program: document.getElementById("program").value.trim(),
    currentYear: document.getElementById("currentYear").value,
    careerPriority: document.getElementById("careerPriority").value,
    academicScore: Number(document.getElementById("academicScore").value),
    learningMode: document.getElementById("learningMode").value,
    timeline: document.getElementById("timeline").value,
    weeklyHours: Number(document.getElementById("weeklyHours").value),
    strongSubjects: document.getElementById("strongSubjects").value,
    weakSubjects: document.getElementById("weakSubjects").value,
    interestText: document.getElementById("interestText").value,
    experienceText: document.getElementById("experienceText").value,
    skills: getCheckedSkills()
  };
}

function updateRangeLabels() {
  rangeInputs.forEach(([inputId, outputId, suffix]) => {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);
    output.textContent = `${input.value}${suffix}`;
  });
}

function keywordMatchCount(text, keywords) {
  return keywords.reduce((score, keyword) => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(^|\\W)${escaped}(\\W|$)`, "i");
    return pattern.test(text) ? score + 1 : score;
  }, 0);
}

function keywordScore(text, keywords, pointsPerMatch) {
  return keywordMatchCount(text, keywords) * pointsPerMatch;
}

function skillScore(profileSkills, trackSkills) {
  return trackSkills.reduce((score, skill) => profileSkills.includes(skill) ? score + 9 : score, 0);
}

function priorityBoost(trackKey, priority) {
  const boosts = {
    job: { healthcare: 8, data: 7, web: 7, cloud: 6, cyber: 6, ai: 5, product: 5 },
    higher: { healthcare: 9, ai: 9, data: 7, cyber: 4, cloud: 4, web: 3, product: 3 },
    startup: { product: 9, web: 8, cloud: 6, data: 5, ai: 5, healthcare: 4, cyber: 3 },
    research: { ai: 10, healthcare: 9, data: 7, cyber: 5, cloud: 4, product: 3, web: 3 }
  };
  return boosts[priority][trackKey] || 0;
}

function learningBoost(trackKey, mode) {
  const boosts = {
    project: { web: 7, data: 6, cloud: 6, ai: 5, product: 5, cyber: 5, healthcare: 4 },
    guided: { healthcare: 7, cyber: 6, ai: 5, cloud: 5, data: 5, web: 4, product: 4 },
    self: { web: 6, data: 5, cloud: 5, product: 4, ai: 4, cyber: 4, healthcare: 4 },
    research: { healthcare: 9, ai: 8, data: 7, cyber: 5, product: 4, cloud: 4, web: 3 }
  };
  return boosts[mode][trackKey] || 0;
}

function calculateTrackScores(profile) {
  const interestText = cleanText(profile.interestText);
  const contextText = cleanText([
    profile.program,
    profile.strongSubjects,
    profile.weakSubjects,
    profile.experienceText
  ].join(" "));

  return Object.entries(tracks)
    .map(([key, track]) => {
      const interestMatches = keywordMatchCount(interestText, track.keywords);
      const contextMatches = keywordMatchCount(contextText, track.keywords);
      const textPoints =
        keywordScore(interestText, track.keywords, 22) +
        keywordScore(contextText, track.keywords, 8) +
        (interestMatches > 0 ? 24 : 0);
      const skillPoints = skillScore(profile.skills, track.skills);
      const academicPoints = profile.academicScore >= 75 ? 8 : profile.academicScore >= 60 ? 4 : 0;
      const experiencePoints = profile.experienceText.trim().length > 20 ? 8 : 0;
      const score = clamp(
        14 + textPoints + skillPoints + academicPoints + experiencePoints + priorityBoost(key, profile.careerPriority) + learningBoost(key, profile.learningMode),
        0,
        100
      );

      return {
        key,
        label: track.label,
        market: track.market,
        score
      };
    })
    .sort((a, b) => b.score - a.score);
}

function buildExplanation(profile, topTrack, scores) {
  const track = tracks[topTrack.key];
  const combinedText = cleanText(`${profile.program} ${profile.strongSubjects} ${profile.interestText} ${profile.experienceText}`);
  const keywordMatches = keywordMatchCount(combinedText, track.keywords);
  const matchingSkills = track.skills.filter((skill) => profile.skills.includes(skill)).length;
  const academicContribution = profile.academicScore >= 75 ? 80 : profile.academicScore >= 60 ? 55 : 35;
  const experienceContribution = profile.experienceText.trim().length > 20 ? 70 : 30;
  const scoreGap = clamp(topTrack.score - scores[1].score + 45, 20, 95);

  return [
    ["Matching skills", clamp(matchingSkills * 28, 12, 95), `${matchingSkills}/${track.skills.length} key skills matched`],
    ["Interest keywords", clamp(keywordMatches * 18, 10, 95), `${keywordMatches} profile signals found`],
    ["Academic strength", academicContribution, `${profile.academicScore}% academic readiness`],
    ["Project experience", experienceContribution, profile.experienceText.trim() ? "Experience text provided" : "Add projects for better matching"],
    ["Track separation", scoreGap, "How clearly this track leads the alternatives"]
  ];
}

function getLearningStyleText(mode) {
  const labels = {
    project: "project-based portfolio work",
    guided: "guided practice with checkpoints",
    self: "self-paced learning with weekly targets",
    research: "research reading and experimentation"
  };
  return labels[mode];
}

function getTimelinePlan(profile, topTrack, gaps) {
  const timeline = Number(profile.timeline);
  const style = getLearningStyleText(profile.learningMode);
  const firstGap = gaps[0] || "portfolio project";

  if (timeline <= 3) {
    return [
      ["Weeks 1-2", `Revise ${firstGap} basics and complete one short practice module.`],
      ["Weeks 3-8", `Build one ${topTrack.label.toLowerCase()} project using ${style}.`],
      ["Weeks 9-12", "Prepare resume points, GitHub/project proof, and interview practice."]
    ];
  }

  if (timeline <= 6) {
    return [
      ["Month 1", `Close the top skill gap: ${firstGap}.`],
      ["Months 2-3", `Complete two recommended courses and weekly practice tasks.`],
      ["Months 4-5", `Build a job-ready ${topTrack.label.toLowerCase()} capstone project.`],
      ["Month 6", "Apply for internships, refine resume, and practice interviews."]
    ];
  }

  return [
    ["Months 1-3", `Strengthen fundamentals and improve ${firstGap}.`],
    ["Months 4-7", "Complete a structured course path with assignments and mini-projects."],
    ["Months 8-10", `Create a larger ${topTrack.label.toLowerCase()} portfolio project.`],
    ["Months 11-12", "Prepare certifications, applications, mock interviews, and advisor review."]
  ];
}

function getSkillGaps(profile, topTrack) {
  const required = tracks[topTrack.key].skills;
  const labels = {
    python: "Python programming",
    java: "Java programming",
    sql: "SQL and databases",
    statistics: "Statistics",
    ml: "Machine learning basics",
    web: "HTML, CSS, and JavaScript",
    cloud: "Cloud fundamentals",
    networking: "Computer networking",
    biology: "Biology foundation",
    chemistry: "Chemistry foundation",
    healthcare: "Healthcare basics",
    research: "Research methods",
    communication: "Communication and presentation",
    design: "Design thinking"
  };

  const gaps = required.filter((skill) => !profile.skills.includes(skill)).map((skill) => labels[skill]);
  if (profile.weeklyHours < 6) gaps.push("Consistent weekly practice time");
  if (profile.academicScore < 60) gaps.push("Academic foundation revision");

  return gaps.slice(0, 5);
}

function renderTrackList(scores) {
  const topScore = Math.max(scores[0].score, 1);
  document.getElementById("trackList").innerHTML = scores
    .slice(0, 8)
    .map((track) => {
      const width = Math.max(12, Math.round((track.score / topScore) * 100));
      return `
        <div class="track-row">
          <span>${track.label}</span>
          <div class="factor-track" aria-hidden="true">
            <div class="factor-fill" style="--width: ${width}%"></div>
          </div>
          <strong>${track.score}</strong>
        </div>
      `;
    })
    .join("");
}

function renderRecommendations(profile, topScores) {
  const recommendations = topScores.slice(0, 2).flatMap((score) => {
    return tracks[score.key].courses.slice(0, score.key === topScores[0].key ? 3 : 1).map((course) => ({
      track: tracks[score.key].label,
      market: tracks[score.key].market,
      title: course[0],
      detail: course[1]
    }));
  });

  document.getElementById("recommendationList").innerHTML = recommendations
    .map((course, index) => `
      <article class="course-card">
        <span>Priority ${index + 1} | ${course.track}</span>
        <strong>${course.title}</strong>
        <p>${course.detail}</p>
        <em>${course.market}</em>
      </article>
    `)
    .join("");
}

function renderGaps(gaps) {
  document.getElementById("gapList").innerHTML = gaps.length
    ? gaps.map((gap) => `<div class="pill-item">${gap}</div>`).join("")
    : `<div class="pill-item">No major gap detected for the primary track</div>`;
}

function renderRoles(topScores) {
  const roles = topScores.slice(0, 2).flatMap((score) => tracks[score.key].roles);
  document.getElementById("roleList").innerHTML = roles
    .slice(0, 6)
    .map((role) => `<div class="pill-item">${role}</div>`)
    .join("");
}

function renderRoadmap(profile, topTrack, gaps) {
  document.getElementById("roadmapList").innerHTML = getTimelinePlan(profile, topTrack, gaps)
    .map((step) => `
      <div class="roadmap-item">
        <span>${step[0]}</span>
        <p>${step[1]}</p>
      </div>
    `)
    .join("");
}

function renderExplanation(profile, topTrack, scores) {
  document.getElementById("explainList").innerHTML = buildExplanation(profile, topTrack, scores)
    .map((factor) => `
      <div class="factor-row explanation-row">
        <span>${factor[0]}</span>
        <div class="factor-track" aria-hidden="true">
          <div class="factor-fill" style="--width: ${factor[1]}%"></div>
        </div>
        <strong>${factor[2]}</strong>
      </div>
    `)
    .join("");
}

function updateRecommendation() {
  updateRangeLabels();

  const profile = readProfile();
  const scores = calculateTrackScores(profile);
  const topTrack = scores[0];
  const secondTrack = scores[1];
  const confidence = clamp(Math.round(topTrack.score * 0.72 + (topTrack.score - secondTrack.score) * 0.55), 45, 96);
  const gaps = getSkillGaps(profile, topTrack);
  const name = profile.studentName || "Student Profile";

  document.getElementById("profileName").textContent = name;
  document.getElementById("primaryTrack").textContent = `${topTrack.label} is your strongest fit`;
  document.getElementById("profileSummary").textContent =
    `${name}, your profile currently aligns most with ${topTrack.label}. The next best area is ${secondTrack.label}. A ${profile.timeline}-month path with ${profile.weeklyHours} weekly hours is suitable for ${getLearningStyleText(profile.learningMode)}.`;
  document.getElementById("confidenceValue").textContent = confidence;
  document.getElementById("confidenceRing").style.setProperty("--score", `${confidence}%`);
  document.getElementById("confidencePill").textContent = confidence >= 75 ? "Strong Match" : confidence >= 60 ? "Developing Match" : "Needs More Data";
  document.getElementById("confidencePill").className = confidence >= 75 ? "status-pill low" : confidence >= 60 ? "status-pill" : "status-pill high";

  renderTrackList(scores);
  renderRecommendations(profile, scores);
  renderGaps(gaps);
  renderRoles(scores);
  renderRoadmap(profile, topTrack, gaps);
  renderExplanation(profile, topTrack, scores);
}

function applyProfile(profile) {
  textInputs.forEach((id) => {
    document.getElementById(id).value = profile[id];
  });
  selectInputs.forEach((id) => {
    document.getElementById(id).value = profile[id];
  });
  document.getElementById("academicScore").value = profile.academicScore;
  document.getElementById("weeklyHours").value = profile.weeklyHours;
  setCheckedSkills(profile.skills);
  updateRecommendation();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateRecommendation();
});

[...textInputs, ...selectInputs].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateRecommendation);
});

rangeInputs.forEach(([inputId]) => {
  document.getElementById(inputId).addEventListener("input", updateRecommendation);
});

document.querySelectorAll("input[name='skills']").forEach((input) => {
  input.addEventListener("change", updateRecommendation);
});

resetProfile.addEventListener("click", () => applyProfile(defaultProfile));
sampleButton.addEventListener("click", () => applyProfile(sampleProfile));

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

applyProfile(defaultProfile);
