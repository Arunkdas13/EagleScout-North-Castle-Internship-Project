(function () {
  "use strict";

  const projects = window.STEWARD_PROJECTS;
  const keys = Object.keys(projects);
  let activeKey = "bedford";

  const $ = (id) => document.getElementById(id);
  const currency = (value, digits = 0) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(value);
  const number = (value) => new Intl.NumberFormat("en-US").format(Math.round(value));

  function renderTabs() {
    $("projectTabs").innerHTML = keys.map((key) => {
      const p = projects[key];
      return `
        <button class="project-tab ${key === activeKey ? "active" : ""}"
          type="button" role="tab" aria-selected="${key === activeKey}"
          data-project="${key}">
          <span>${p.number}</span>
          <strong>${p.shortName}</strong>
          <small>${p.category}</small>
        </button>`;
    }).join("");

    document.querySelectorAll(".project-tab").forEach((button) => {
      button.addEventListener("click", () => {
        activeKey = button.dataset.project;
        render();
        document.querySelector(".project-banner").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderProjectHeader(p) {
    const visual = $("projectVisual");
    visual.className = `project-visual ${p.visualClass || ""}`;
    visual.style.backgroundImage = p.heroImage ? `url("${p.heroImage}")` : "";
    visual.setAttribute("role", "img");
    visual.setAttribute("aria-label", p.heroAlt || `${p.name} project visual`);

    $("projectStatus").textContent = p.status;
    $("projectCategory").textContent = p.category;
    $("projectName").textContent = p.name;
    $("projectSummary").textContent = p.summary;
    $("projectLocation").textContent = p.location;
    $("projectDepartment").textContent = p.department;
    $("projectVerified").textContent = p.lastVerified;
    $("costLabel").textContent = p.costLabel;
    $("costValue").textContent = p.costValue;
    $("costNote").textContent = p.costNote;
    const comparisonNote = $("comparisonNote");
    if (p.comparisonNote) {
      comparisonNote.innerHTML = `<strong>${p.comparisonNote.title}</strong><p>${p.comparisonNote.text}</p>`;
      comparisonNote.hidden = false;
    } else {
      comparisonNote.hidden = true;
      comparisonNote.innerHTML = "";
    }
  }

  function renderStory(p) {
    const section = $("projectStory");
    if (!p.story) { section.hidden = true; return; }
    section.hidden = false;
    $("storyContext").textContent = p.story.context;
    $("storyPeople").textContent = p.story.people;
    $("storyDiscussion").textContent = p.story.discussion;
    $("storyNext").textContent = p.story.next;
  }

  function renderTimeline(p) {
    $("timelineList").innerHTML = p.process.map((step) => `
      <li class="${step.state}">
        <time>${step.date}</time>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </li>`).join("");
  }

  function renderFinanceRows(rows, includeStatus, showTotal = true) {
    if (!rows.length) {
      return `<div class="empty-impact"><strong>Not yet available</strong><p>No authoritative cost or funding amount has been published in the records currently linked to STEWARD.</p></div>`;
    }
    const max = Math.max(...rows.map((row) => row[1]), 1);
    const total = rows.reduce((sum, row) => sum + row[1], 0);
    const rowsHtml = rows.map((row) => `
      <div class="finance-row">
        <div class="finance-row-copy">
          <span>${row[0]}${includeStatus && row[2] ? `<br><small>${row[2]}</small>` : ""}</span>
          <strong>${currency(row[1])}</strong>
        </div>
        <div class="bar"><i style="width:${Math.max(3, (row[1] / max) * 100)}%"></i></div>
      </div>`).join("");
    if (!showTotal) {
      return rowsHtml + `<div class="finance-total"><span>Alternative scenarios</span><strong>Choose one</strong></div>`;
    }
    return rowsHtml +
      `<div class="finance-total"><span>${includeStatus ? "Listed sources" : "Listed cost items"}</span><strong>${currency(total)}</strong></div>`;
  }

  function renderFinance(p) {
    $("costBreakdown").innerHTML = renderFinanceRows(p.costBreakdown, false);
    $("fundingBreakdown").innerHTML = renderFinanceRows(p.funding, true, !p.fundingAreAlternatives);
  }

  function bedfordCalculator(impact) {
    return `
      <span class="control-title">Your assessed property value</span>
      <div class="assessment-display" id="assessmentDisplay">${currency(impact.defaultAssessment)}</div>
      <input id="assessmentRange" type="range" min="1000" max="100000" step="100" value="${impact.defaultAssessment}" aria-label="Assessed property value">
      <div class="range-labels"><span>$1,000</span><span>$100,000+</span></div>
      <label class="exact-input"><span>$</span><input id="assessmentInput" type="number" min="0" step="100" value="${impact.defaultAssessment}" aria-label="Exact assessed property value"></label>
      <div class="result-card">
        <span>Estimated additional Town tax</span>
        <div class="result-amount" id="resultAmount"></div>
        <p id="resultMonthly"></p>
        <div class="formula" id="formula"></div>
      </div>`;
  }

  function wd9Calculator(impact) {
    return `
      <span class="control-title">Your WD9 assessed property value</span>
      <div class="assessment-display" id="assessmentDisplay">${currency(impact.defaultAssessment)}</div>
      <input id="assessmentRange" type="range" min="500" max="20000" step="50" value="${impact.defaultAssessment}" aria-label="Assessed property value">
      <div class="range-labels"><span>$500</span><span>$20,000+</span></div>
      <label class="exact-input"><span>$</span><input id="assessmentInput" type="number" min="0" step="50" value="${impact.defaultAssessment}" aria-label="Exact assessed property value"></label>
      <div class="scenario-controls">
        <label>Grant scenario
          <select id="grantSelect">
            <option value="0">No grant</option>
            <option value="50">50% grant</option>
            <option value="75">75% grant</option>
          </select>
        </label>
        <label>Bond term
          <select id="termSelect">
            <option value="25">25 years</option>
            <option value="30" selected>30 years</option>
            <option value="40">40 years</option>
          </select>
        </label>
      </div>
      <div class="result-card">
        <span>Estimated annual district assessment</span>
        <div class="result-amount" id="resultAmount"></div>
        <p id="resultMonthly"></p>
        <div class="formula" id="formula"></div>
      </div>`;
  }

  function bindBedford(impact) {
    const range = $("assessmentRange");
    const input = $("assessmentInput");
    const update = (raw) => {
      const assessment = Math.max(0, Number(raw) || 0);
      if (document.activeElement !== range) range.value = Math.min(100000, assessment);
      if (document.activeElement !== input) input.value = assessment;
      const annual = assessment * impact.rateIncrease / 1000;
      $("assessmentDisplay").textContent = currency(assessment);
      $("resultAmount").textContent = `${currency(annual, 2)} / year`;
      $("resultMonthly").textContent = `${currency(annual / 12, 2)} per month`;
      $("formula").textContent = `${number(assessment)} × 18.39 ÷ 1,000 = ${currency(annual, 2)}`;
    };
    range.addEventListener("input", (event) => update(event.target.value));
    input.addEventListener("input", (event) => update(event.target.value));
    update(impact.defaultAssessment);
  }

  function bindWD9(impact) {
    const range = $("assessmentRange");
    const input = $("assessmentInput");
    const grant = $("grantSelect");
    const term = $("termSelect");
    const update = () => {
      const assessment = Math.max(0, Number(input.value) || Number(range.value) || 0);
      const debt = impact.debtService[grant.value][term.value];
      const annual = assessment / impact.districtAssessment * debt;
      $("assessmentDisplay").textContent = currency(assessment);
      $("resultAmount").textContent = `${currency(annual, 2)} / year`;
      $("resultMonthly").textContent = `${currency(annual / 12, 2)} per month · ${currency(impact.bondAmounts[grant.value])} bond scenario`;
      $("formula").textContent = `${number(assessment)} ÷ ${number(impact.districtAssessment)} × ${number(debt)} = ${currency(annual, 2)}`;
    };
    range.addEventListener("input", (event) => {
      input.value = event.target.value;
      update();
    });
    input.addEventListener("input", (event) => {
      range.value = Math.min(20000, Number(event.target.value) || 0);
      update();
    });
    grant.addEventListener("change", update);
    term.addEventListener("change", update);
    update();
  }

  function renderImpact(p) {
    const impact = p.impact;
    $("impactHeading").textContent = impact.heading;
    $("impactExplanation").textContent = impact.explanation;
    $("impactBenchmark").textContent = impact.benchmark;
    $("impactAttribution").textContent = impact.attribution;

    if (!impact.available) {
      $("calculator").innerHTML = `
        <div class="empty-impact">
          <strong>No household estimate displayed</strong>
          <p>STEWARD only calculates a resident impact when authoritative inputs and a documented method are available. This project does not currently meet that standard.</p>
        </div>`;
      return;
    }

    if (impact.type === "bedford") {
      $("calculator").innerHTML = bedfordCalculator(impact);
      bindBedford(impact);
    } else {
      $("calculator").innerHTML = wd9Calculator(impact);
      bindWD9(impact);
    }
  }

  function renderGallery(p) {
    if (!p.gallery.length) {
      $("galleryGrid").innerHTML = `
        <div class="gallery-empty">
          <strong>Official project image needed.</strong><br>
          The maintenance team should add a Town-owned photograph or plan with a source and caption.
        </div>`;
      return;
    }
    $("galleryGrid").innerHTML = p.gallery.map((item) => `
      <figure>
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
        <figcaption><strong>${item.caption}</strong>Source: ${item.source}</figcaption>
      </figure>`).join("");
  }

  function renderComparison(p) {
    const section = $("comparisonCase");
    const c = p.comparisonCase;
    if (!c) { section.hidden = true; return; }
    section.hidden = false;
    $("comparisonTitle").textContent = c.title;
    $("comparisonSummary").textContent = c.summary;
    $("comparisonTimeline").innerHTML = c.process.map((step) => `
      <li class="${step.state}"><time>${step.date}</time><h3>${step.title}</h3><p>${step.description}</p></li>`).join("");
    $("comparisonFinance").innerHTML = c.finance.map((row) => `<div class="comparison-figure"><span>${row[0]}</span><strong>${row[1]}</strong><small>${row[2]}</small></div>`).join("");
    $("comparisonLessons").innerHTML = c.lessons.map((x) => `<li>${x}</li>`).join("");
    $("comparisonGallery").innerHTML = c.gallery.map((item) => `<figure><img src="${item.image}" alt="${item.alt}"><figcaption><strong>${item.caption}</strong>${item.source}</figcaption></figure>`).join("");
    $("comparisonSources").innerHTML = c.sources.map((s) => `<a href="${s.href}" target="_blank" rel="noopener"><strong>${s.title}</strong><span>${s.note}</span></a>`).join("");
  }

  function renderSources(p) {
    $("sourceGrid").innerHTML = p.sources.map((source) => `
      <article class="source-card">
        <span>${source.label}</span>
        <h3>${source.title}</h3>
        <p>${source.note}</p>
        <a href="${source.href}" target="_blank" rel="noreferrer">Open source <span aria-hidden="true">↗</span></a>
      </article>`).join("");
    $("cautionList").innerHTML = p.cautions.map((item) => `<li>${item}</li>`).join("");
  }

  function render() {
    const p = projects[activeKey];
    renderTabs();
    renderProjectHeader(p);
    renderStory(p);
    renderTimeline(p);
    renderFinance(p);
    renderImpact(p);
    renderGallery(p);
    renderComparison(p);
    renderSources(p);
    document.title = `${p.shortName} | STEWARD`;
  }

  render();
})();
