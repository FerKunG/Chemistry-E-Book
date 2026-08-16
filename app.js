// app.js - Logic for E-Book Reader, Quiz, Compound Explorer, and Report Generator

class EBookApp {
  constructor() {
    this.currentView = "dashboard"; // dashboard, reader, search-results
    this.currentUnit = null; // unit12, unit13
    this.currentChapterIndex = 0;
    this.fontSizeClass = "font-md"; // font-sm, font-md, font-lg
    this.fontSizePct = 100;
    this.activeReaderTheme = "light"; // light, sepia, dark
    
    // Quiz State
    this.quizQuestions = [];
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizSelectedAnswer = null;
    
    // Report Builder State
    this.activeReportUnit = null;
    
    // Explorer state
    this.selectedCompoundId = "ethanol";
    this.compoundFilter = "all";
  }

  init() {
    this.bindEvents();
    this.checkURLParams();
    this.setReaderTheme(this.activeReaderTheme);
  }

  bindEvents() {
    // Logo Click -> Dashboard
    document.getElementById("logo-btn").addEventListener("click", () => this.showView("dashboard"));
    
    // Global Search
    const searchInput = document.getElementById("global-search");
    searchInput.addEventListener("input", (e) => this.handleSearch(e.target.value));
    
    // FontSize controls
    document.getElementById("font-dec").addEventListener("click", () => this.adjustFontSize(-10));
    document.getElementById("font-inc").addEventListener("click", () => this.adjustFontSize(10));
    
    // Theme dots
    document.querySelectorAll(".theme-dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        const theme = e.target.dataset.theme;
        this.setReaderTheme(theme);
      });
    });
    
    // Modals Close
    document.querySelectorAll(".modal-close").forEach(btn => {
      btn.addEventListener("click", () => this.closeModals());
    });
    
    // Close modal on background click
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeModals();
      });
    });
  }

  checkURLParams() {
    // Default load is dashboard
    this.showView("dashboard");
  }

  showView(viewName) {
    this.currentView = viewName;
    
    // Hide all views first
    document.getElementById("dashboard-view").style.display = "none";
    document.getElementById("reader-view").style.display = "none";
    document.getElementById("search-results-view").style.display = "none";
    
    // Reset reader theme class on body if not in reader
    if (viewName !== "reader") {
      document.body.className = "";
      if (this.activeReaderTheme === "dark") {
        document.body.classList.add("dark-mode");
      }
    } else {
      this.setReaderTheme(this.activeReaderTheme);
    }

    if (viewName === "dashboard") {
      document.getElementById("dashboard-view").style.display = "block";
    } else if (viewName === "reader") {
      document.getElementById("reader-view").style.display = "flex";
      this.renderSidebar();
      this.renderChapterContent();
    } else if (viewName === "search-results") {
      document.getElementById("search-results-view").style.display = "block";
    }
  }

  openUnit(unitId) {
    this.currentUnit = unitId;
    this.currentChapterIndex = 0;
    
    const readerShell = document.getElementById("reader-view");
    readerShell.className = `reader-layout theme-${ebookData[unitId].theme}`;
    
    this.showView("reader");
  }

  renderSidebar() {
    const unit = ebookData[this.currentUnit];
    const sidebarTitle = document.getElementById("sidebar-unit-title");
    const chapterList = document.getElementById("sidebar-chapters");
    
    sidebarTitle.textContent = unit.title;
    chapterList.innerHTML = "";
    
    unit.chapters.forEach((ch, idx) => {
      const li = document.createElement("li");
      li.className = `chapter-item ${idx === this.currentChapterIndex ? 'active' : ''}`;
      li.innerHTML = `<span>${ch.title}</span>`;
      li.addEventListener("click", () => {
        this.currentChapterIndex = idx;
        this.renderSidebar(); // Update active class
        this.renderChapterContent();
      });
      chapterList.appendChild(li);
    });

    // Add Quiz button to sidebar
    const quizLi = document.createElement("li");
    quizLi.className = "chapter-item";
    quizLi.style.marginTop = "2rem";
    quizLi.style.border = "1px dashed var(--border-color)";
    quizLi.innerHTML = `<span>📝 แบบทดสอบความรู้</span>`;
    quizLi.addEventListener("click", () => {
      this.startQuiz(this.currentUnit);
    });
    chapterList.appendChild(quizLi);
  }

  renderChapterContent() {
    const unit = ebookData[this.currentUnit];
    const chapter = unit.chapters[this.currentChapterIndex];
    
    const contentTitle = document.getElementById("content-chapter-title");
    const contentBody = document.getElementById("content-body-area");
    
    contentTitle.textContent = chapter.title;
    contentBody.innerHTML = chapter.content;
    
    // Scroll reader panel back to top
    document.querySelector(".reader-content-panel").scrollTop = 0;
    
    // Instantiate specific widgets inside content if containers exist
    this.checkAndInjectWidgets(chapter.id);
  }

  checkAndInjectWidgets(chapterId) {
    if (chapterId === "u12-ch3") {
      const body = document.getElementById("content-body-area");
      
      const explorerHeader = document.createElement("h3");
      explorerHeader.textContent = "🧪 คลังข้อมูลสารประกอบอินทรีย์เสมือนจริง";
      explorerHeader.style.marginTop = "3rem";
      body.appendChild(explorerHeader);
      
      const p = document.createElement("p");
      p.textContent = "ใช้เครื่องมือค้นหาและตัวกรองนี้เพื่อดูสูตรโครงสร้างแบบ 2D, ประโยชน์, โทษ และปฏิกิริยาเคมีของสารประกอบอินทรีย์ชนิดต่างๆ เพื่อกรอกรายงานการสืบค้นของคุณ";
      body.appendChild(p);
      
      const container = document.createElement("div");
      container.id = "organic-explorer-placeholder";
      body.appendChild(container);
      
      this.renderOrganicExplorer("organic-explorer-placeholder");
    }
    
    // Check if inline report builder container exists, and render it
    const inlineReportContainer = document.getElementById("report-builder-inline-container");
    if (inlineReportContainer) {
      this.renderActivitySolutionsInline("report-builder-inline-container", this.currentUnit);
    }
  }

  renderActivitySolutionsInline(containerId, unitId) {
    this.activeReportUnit = unitId;
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const themeColor = unitId === "unit12" ? "var(--theme-purple)" : "var(--theme-orange)";
    const themeLightColor = unitId === "unit12" ? "var(--theme-purple-light)" : "var(--theme-orange-light)";
    const themeDarkColor = unitId === "unit12" ? "var(--theme-purple-dark)" : "var(--theme-orange-dark)";
    const headerTitle = unitId === "unit12" ? "ข้อมูลสืบค้นสารประกอบอินทรีย์ (กิจกรรม 12.10)" : "ข้อมูลสืบค้นการกำจัดและผลกระทบของพอลิเมอร์ (กิจกรรม 13.3)";
    
    let selectOptions = "";
    if (unitId === "unit12") {
      selectOptions = organicCompounds.map(c => `<option value="${c.id}">${c.nameTh} (${c.formula})</option>`).join("");
    } else {
      selectOptions = polymerRecycling.map(p => `<option value="${p.code}">รหัสหมายเลข ${p.code} - ${p.abbreviation} (${p.nameTh})</option>`).join("");
    }

    container.innerHTML = `
      <div class="card" style="margin-top: 3rem; border: 2px solid ${themeColor}; background-color: var(--card-bg); transition: none; transform: none; box-shadow: var(--shadow-md);">
        <h3 style="color: ${themeDarkColor}; font-size: 1.4rem; margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.6rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.6rem;">
          <span>🧪</span> ${headerTitle}
        </h3>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="font-family: var(--font-accent); font-weight: 600; font-size: 0.95rem; display: block; margin-bottom: 0.5rem;">
            เลือกสารประกอบ / พอลิเมอร์ที่ต้องการสืบค้นเพื่อแสดงคำตอบ:
          </label>
          <select id="sol-select-item" style="border: 2px solid ${themeColor}; border-radius: var(--radius-sm); font-size: 1rem; padding: 0.7rem 1rem;">
            ${selectOptions}
          </select>
        </div>
        
        <!-- Answer Display Section -->
        <div id="sol-display-box" style="display: flex; flex-direction: column; gap: 1.5rem; border-top: 1px dashed var(--border-color); padding-top: 1.5rem;">
          <!-- Dynamically populated on dropdown change -->
        </div>
      </div>
    `;

    const selectItem = container.querySelector("#sol-select-item");
    const displayBox = container.querySelector("#sol-display-box");

    const updateDisplay = () => {
      const val = selectItem.value;
      if (unitId === "unit12") {
        const c = organicCompounds.find(comp => comp.id === val);
        if (!c) return;
        
        displayBox.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h2 style="margin-bottom: 0.2rem; color: var(--text-color);">${c.nameTh}</h2>
              <span class="text-muted" style="font-size: 0.95rem;">${c.nameEn} | ${c.group}</span>
            </div>
            <span style="font-family: var(--font-accent); font-size: 1.1rem; font-weight: 600; background-color: ${themeLightColor}; color: ${themeDarkColor}; padding: 0.4rem 1rem; border-radius: var(--radius-sm);">${c.formula}</span>
          </div>
          
          <div class="grid grid-2" style="gap: 1.5rem; margin-top: 0.5rem;">
            <div class="svg-container" style="background-color: var(--bg-color); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; display: flex; align-items: center; justify-content: center; height: 100%;">
              ${c.structureSvg}
            </div>
            <div style="display: flex; flex-direction: column; gap: 1.2rem;">
              <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
                <div class="detail-section-title" style="color: ${themeDarkColor}; font-size: 0.95rem; margin-bottom: 0.5rem;">🌟 ประโยชน์และการใช้งาน</div>
                <p style="margin-bottom: 0; white-space: pre-line; line-height: 1.6;">${c.uses}</p>
              </div>
              <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
                <div class="detail-section-title" style="color: var(--color-danger); font-size: 0.95rem; margin-bottom: 0.5rem;">⚠️ อันตรายและความเป็นพิษต่อสุขภาพ/สิ่งแวดล้อม</div>
                <p style="margin-bottom: 0; white-space: pre-line; line-height: 1.6;">${c.hazards}</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-2" style="gap: 1.5rem;">
            <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
              <div class="detail-section-title" style="color: var(--color-warning); font-size: 0.95rem; margin-bottom: 0.5rem;">🛡️ ข้อควรระวังและแนวทางแก้ไขความปลอดภัย</div>
              <p style="margin-bottom: 0; white-space: pre-line; line-height: 1.6;">${c.precautions}</p>
            </div>
            <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
              <div class="detail-section-title" style="color: var(--text-color); font-size: 0.95rem; margin-bottom: 0.5rem;">🔗 ปฏิกิริยาเคมีที่เกี่ยวข้อง</div>
              <p style="margin-bottom: 0; white-space: pre-line; font-family: var(--font-body); line-height: 1.6;">${c.reaction}</p>
            </div>
          </div>
        `;
      } else {
        const p = polymerRecycling.find(poly => poly.code === parseInt(val));
        if (!p) return;
        
        displayBox.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h2 style="margin-bottom: 0.2rem; color: var(--text-color);">${p.nameTh}</h2>
              <span class="text-muted" style="font-size: 0.95rem;">${p.nameEn}</span>
            </div>
            <span class="recycle-badge code-${p.code}" style="display:flex; width: 44px; height: 44px; font-size: 1.3rem; font-family: var(--font-title); font-weight: bold; border-radius: 50%; color: #fff; align-items: center; justify-content: center;">${p.code}</span>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 1.2rem; margin-top: 0.5rem;">
            <div class="grid grid-2" style="gap: 1.5rem;">
              <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
                <div class="detail-section-title" style="color: ${themeDarkColor}; font-size: 0.95rem; margin-bottom: 0.5rem;">🔬 โครงสร้างเคมี / สมบัติทางกายภาพ</div>
                <p style="margin-bottom: 0; white-space: pre-line; line-height: 1.6;">ชื่อย่อ: <strong>${p.abbreviation}</strong>\n${p.properties}\n\n<strong>การนำไปใช้งานทั่วไป:</strong> ${p.commonUses}</p>
              </div>
              <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
                <div class="detail-section-title" style="color: var(--color-danger); font-size: 0.95rem; margin-bottom: 0.5rem;">🚨 ผลกระทบจากการใช้งานและการกำจัด</div>
                <p style="margin-bottom: 0; white-space: pre-line; line-height: 1.6;">${p.environmentalImpact}</p>
              </div>
            </div>
            
            <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
              <div class="detail-section-title" style="color: var(--color-success); font-size: 0.95rem; margin-bottom: 0.5rem;">♻️ แนวทางการแก้ไขและการรีไซเคิลอย่างถูกต้อง</div>
              <p style="margin-bottom: 0; white-space: pre-line; line-height: 1.6;">${p.recyclingMethod}</p>
            </div>
          </div>
        `;
      }
    };

    selectItem.addEventListener("change", updateDisplay);
    updateDisplay(); // Initialize display
  }

  /* Organic Compound Explorer Component */
  renderOrganicExplorer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Create Explorer structure
    container.className = "explorer-container";
    container.innerHTML = `
      <div class="explorer-header">
        <div class="explorer-title">
          <span>🔍</span>
          <h4>ค้นหาโครงสร้างเคมีอินทรีย์</h4>
        </div>
        <div class="explorer-filters" id="explorer-filter-chips">
          <button class="filter-chip ${this.compoundFilter === 'all' ? 'active' : ''}" data-filter="all">ทั้งหมด</button>
          <button class="filter-chip ${this.compoundFilter === 'Alcohol' ? 'active' : ''}" data-filter="Alcohol">แอลกอฮอล์</button>
          <button class="filter-chip ${this.compoundFilter === 'Carboxylic' ? 'active' : ''}" data-filter="Carboxylic">กรดอินทรีย์</button>
          <button class="filter-chip ${this.compoundFilter === 'Ester' ? 'active' : ''}" data-filter="Ester">เอสเทอร์</button>
          <button class="filter-chip ${this.compoundFilter === 'Ketone' ? 'active' : ''}" data-filter="Ketone">คีโตน</button>
        </div>
      </div>
      <div class="explorer-main">
        <div class="explorer-list" id="explorer-list-container"></div>
        <div class="explorer-details" id="explorer-details-container"></div>
      </div>
    `;

    // Bind filters
    container.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        this.compoundFilter = e.target.dataset.filter;
        this.renderOrganicExplorer(containerId);
      });
    });

    this.renderCompoundList();
    this.renderCompoundDetails();
  }

  renderCompoundList() {
    const listContainer = document.getElementById("explorer-list-container");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    
    // Filter compounds
    const filtered = organicCompounds.filter(c => {
      if (this.compoundFilter === "all") return true;
      return c.group.toLowerCase().includes(this.compoundFilter.toLowerCase());
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `<p class="text-muted text-center" style="padding: 2rem;">ไม่พบข้อมูลสาร</p>`;
      return;
    }

    filtered.forEach(c => {
      const item = document.createElement("div");
      item.className = `explorer-list-item ${c.id === this.selectedCompoundId ? 'active' : ''}`;
      item.innerHTML = `
        <div>
          <h4>${c.nameTh}</h4>
          <span>${c.formula}</span>
        </div>
        <span style="font-size: 0.8rem; opacity: 0.5;">🧪</span>
      `;
      item.addEventListener("click", () => {
        this.selectedCompoundId = c.id;
        // Re-render only active items for performance
        document.querySelectorAll(".explorer-list-item").forEach(el => el.classList.remove("active"));
        item.classList.add("active");
        this.renderCompoundDetails();
      });
      listContainer.appendChild(item);
    });

    // Handle default selection if the active selection got filtered out
    if (!filtered.some(c => c.id === this.selectedCompoundId) && filtered.length > 0) {
      this.selectedCompoundId = filtered[0].id;
      this.renderCompoundDetails();
    }
  }

  renderCompoundDetails() {
    const detailsContainer = document.getElementById("explorer-details-container");
    if (!detailsContainer) return;

    const c = organicCompounds.find(comp => comp.id === this.selectedCompoundId);
    if (!c) {
      detailsContainer.innerHTML = `<p class="text-muted text-center">เลือกสารประกอบอินทรีย์เพื่อดูรายละเอียด</p>`;
      return;
    }

    detailsContainer.innerHTML = `
      <div class="details-title-row">
        <div>
          <h2>${c.nameTh}</h2>
          <span class="text-muted">${c.nameEn} | ${c.group}</span>
        </div>
        <span class="details-formula">${c.formula}</span>
      </div>
      <div class="details-body">
        <div class="svg-container">
          ${c.structureSvg}
        </div>
        <div class="info-details-box">
          <div>
            <div class="detail-section-title">หมู่ฟังก์ชัน (Functional Group)</div>
            <p><strong>${c.functionalGroup}</strong></p>
          </div>
          <div>
            <div class="detail-section-title">🌟 ประโยชน์และการใช้งาน</div>
            <p>${c.uses}</p>
          </div>
          <div>
            <div class="detail-section-title">⚠️ อันตรายและความเป็นพิษ</div>
            <p>${c.hazards}</p>
          </div>
          <div>
            <div class="detail-section-title">🛡️ ข้อควรระวังในการใช้งาน</div>
            <p>${c.precautions}</p>
          </div>
          ${c.reaction ? `
            <div>
              <div class="detail-section-title">🔗 ปฏิกิริยาเคมีที่เกี่ยวข้อง</div>
              <p style="font-family: var(--font-body); font-size: 0.95rem;">${c.reaction}</p>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  /* Polymer recycling details inside Unit 13 */
  showPolymerCode(code) {
    const p = polymerRecycling.find(poly => poly.code === code);
    if (!p) return;
    
    // Open Modal with polymer information
    const modalTitle = document.getElementById("info-modal-title");
    const modalBody = document.getElementById("info-modal-body");
    
    modalTitle.innerHTML = `<span class="recycle-badge code-${p.code}" style="display:inline-flex; width: 34px; height: 34px; font-size: 1rem; margin-right: 0.5rem;">${p.code}</span> พลาสติกชนิดที่ ${p.code}: ${p.abbreviation}`;
    
    modalBody.innerHTML = `
      <div class="info-details-box" style="gap: 1.5rem;">
        <div>
          <div class="detail-section-title" style="font-size: 1rem; color: var(--theme-orange-dark);">ชื่ออย่างเป็นทางการ</div>
          <h4>${p.nameTh} (${p.nameEn})</h4>
        </div>
        <div class="grid grid-2" style="gap: 1rem;">
          <div>
            <div class="detail-section-title">🔬 สมบัติของพลาสติก</div>
            <p>${p.properties}</p>
          </div>
          <div>
            <div class="detail-section-title">🛍️ การใช้งานทั่วไป</div>
            <p>${p.commonUses}</p>
          </div>
        </div>
        <div>
          <div class="detail-section-title" style="color: var(--color-danger);">🚨 ผลกระทบต่อสิ่งแวดล้อม</div>
          <p>${p.environmentalImpact}</p>
        </div>
        <div>
          <div class="detail-section-title" style="color: var(--color-success);">♻️ วิธีการกำจัด / รีไซเคิล</div>
          <p>${p.recyclingMethod}</p>
        </div>
      </div>
    `;
    
    document.getElementById("info-modal").classList.add("active");
  }

  /* Font size controls */
  adjustFontSize(amount) {
    this.fontSizePct = Math.max(80, Math.min(150, this.fontSizePct + amount));
    const content = document.getElementById("content-body-area");
    if (content) {
      content.style.fontSize = `${this.fontSizePct}%`;
    }
  }

  /* Reader Theme Controls */
  setReaderTheme(theme) {
    this.activeReaderTheme = theme;
    
    // Reset body classes
    document.body.classList.remove("dark-mode", "sepia-mode");
    
    // Update theme dots in UI
    document.querySelectorAll(".theme-dot").forEach(dot => {
      dot.classList.remove("active");
      if (dot.dataset.theme === theme) dot.classList.add("active");
    });
    
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme === "sepia") {
      document.body.classList.add("sepia-mode");
    }
  }

  closeModals() {
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.classList.remove("active");
    });
  }

  /* Quiz Engine */
  startQuiz(unitId) {
    this.quizQuestions = quizzes[unitId];
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizSelectedAnswer = null;
    
    const modal = document.getElementById("quiz-modal");
    const modalTitle = document.getElementById("quiz-modal-title");
    
    modalTitle.textContent = unitId === "unit12" ? "แบบทดสอบ: สารประกอบอินทรีย์" : "แบบทดสอบ: พอลิเมอร์และผลิตภัณฑ์";
    
    // Adjust quiz colors depending on unit
    const progressFill = modal.querySelector(".quiz-progress-fill");
    if (unitId === "unit12") {
      modal.className = "modal-overlay theme-purple";
    } else {
      modal.className = "modal-overlay theme-orange";
    }

    this.renderQuizQuestion();
    modal.classList.add("active");
  }

  renderQuizQuestion() {
    const qData = this.quizQuestions[this.quizCurrentIndex];
    const totalQ = this.quizQuestions.length;
    
    // Progress
    const progressFill = document.querySelector(".quiz-progress-fill");
    progressFill.style.width = `${((this.quizCurrentIndex) / totalQ) * 100}%`;
    
    const body = document.getElementById("quiz-modal-body");
    body.innerHTML = `
      <div class="quiz-question-box">
        <span class="text-muted" style="font-family: var(--font-accent); font-size: 0.85rem;">ข้อที่ ${this.quizCurrentIndex + 1} จาก ${totalQ}</span>
        <h4>${qData.q}</h4>
      </div>
      <div class="quiz-options">
        ${qData.options.map((opt, idx) => `
          <div class="quiz-option-card" data-idx="${idx}" id="quiz-opt-${idx}">
            ${opt}
          </div>
        `).join("")}
      </div>
      <div class="quiz-explanation" id="quiz-explain-box">
        <strong>💡 เฉลยและอธิบายเพิ่มเติม:</strong>
        <p>${qData.explain}</p>
      </div>
    `;

    // Footer actions
    const footer = document.getElementById("quiz-modal-footer");
    footer.innerHTML = `
      <button class="btn btn-outline" id="quiz-close-btn">ปิด</button>
      <button class="btn ${this.currentUnit === 'unit12' ? 'btn-purple' : 'btn-orange'}" id="quiz-submit-btn" disabled>ส่งคำตอบ</button>
    `;

    document.getElementById("quiz-close-btn").addEventListener("click", () => this.closeModals());

    // Bind option click
    this.quizSelectedAnswer = null;
    body.querySelectorAll(".quiz-option-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (this.quizSelectedAnswer !== null) return; // Answer already submitted/selected
        
        body.querySelectorAll(".quiz-option-card").forEach(el => el.classList.remove("selected"));
        card.classList.add("selected");
        this.quizSelectedAnswer = parseInt(card.dataset.idx);
        
        document.getElementById("quiz-submit-btn").removeAttribute("disabled");
      });
    });

    document.getElementById("quiz-submit-btn").addEventListener("click", () => this.submitQuizAnswer());
  }

  submitQuizAnswer() {
    const qData = this.quizQuestions[this.quizCurrentIndex];
    const isCorrect = this.quizSelectedAnswer === qData.correct;
    
    if (isCorrect) {
      this.quizScore++;
    }
    
    // Highlight options
    document.querySelectorAll(".quiz-option-card").forEach((card, idx) => {
      if (idx === qData.correct) {
        card.className = "quiz-option-card correct";
      } else if (idx === this.quizSelectedAnswer) {
        card.className = "quiz-option-card wrong";
      } else {
        card.style.opacity = "0.5";
      }
    });

    // Show explanation
    document.getElementById("quiz-explain-box").style.display = "block";
    
    // Update footer button to 'Next'
    const footer = document.getElementById("quiz-modal-footer");
    const isLast = this.quizCurrentIndex === this.quizQuestions.length - 1;
    
    footer.innerHTML = `
      <button class="btn btn-outline" id="quiz-close-btn">ปิดแบบทดสอบ</button>
      <button class="btn ${this.currentUnit === 'unit12' ? 'btn-purple' : 'btn-orange'}" id="quiz-next-btn">
        ${isLast ? "ดูผลการทดสอบ 🏁" : "ข้อถัดไป ➡️"}
      </button>
    `;
    
    document.getElementById("quiz-close-btn").addEventListener("click", () => this.closeModals());
    document.getElementById("quiz-next-btn").addEventListener("click", () => {
      if (isLast) {
        this.showQuizResults();
      } else {
        this.quizCurrentIndex++;
        this.renderQuizQuestion();
      }
    });
  }

  showQuizResults() {
    const totalQ = this.quizQuestions.length;
    const pct = Math.round((this.quizScore / totalQ) * 100);
    const body = document.getElementById("quiz-modal-body");
    
    let feedback = "";
    if (pct === 100) feedback = "ยอดเยี่ยมมาก! คุณมีความเข้าใจในบทเรียนนี้อย่างสมบูรณ์แบบ 🌟";
    else if (pct >= 80) feedback = "ดีมาก! คุณทำคะแนนได้ดีมาก เกือบเต็มแล้ว 👏";
    else if (pct >= 50) feedback = "ผ่านเกณฑ์! ควรทบทวนจุดที่ผิดเล็กน้อยเพื่อให้เข้าใจแม่นยำยิ่งขึ้น 👍";
    else feedback = "ควรศึกษาเพิ่มเติม ลองทบทวนบทเรียนใน E-book และลองทำแบบทดสอบอีกครั้งนะ 📚";

    body.innerHTML = `
      <div class="quiz-result-view">
        <div class="quiz-score-circle">
          <h2>${this.quizScore}</h2>
          <span>จาก ${totalQ} คะแนน</span>
        </div>
        <h3>สรุปผลคะแนน: ${pct}%</h3>
        <p class="lead" style="margin-top: 1rem; font-size: 1.1rem; color: var(--text-color);">${feedback}</p>
      </div>
    `;

    const footer = document.getElementById("quiz-modal-footer");
    footer.innerHTML = `
      <button class="btn btn-outline" id="quiz-close-btn">ปิด</button>
      <button class="btn ${this.currentUnit === 'unit12' ? 'btn-purple' : 'btn-orange'}" id="quiz-retry-btn">ทำแบบทดสอบอีกครั้ง 🔄</button>
    `;

    document.getElementById("quiz-close-btn").addEventListener("click", () => this.closeModals());
    document.getElementById("quiz-retry-btn").addEventListener("click", () => {
      this.startQuiz(this.currentUnit);
    });
  }



  /* Global Search Mechanism */
  handleSearch(query) {
    query = query.trim().toLowerCase();
    const resultsPanel = document.getElementById("search-results-view");
    const resultsList = document.getElementById("search-results-list");
    const resultsSummary = document.getElementById("search-results-summary");
    
    if (query.length < 2) {
      if (this.currentView === "search-results") {
        this.showView("dashboard");
      }
      return;
    }

    this.showView("search-results");
    resultsList.innerHTML = "";
    
    let matches = [];

    // 1. Search in E-Book content chapters
    for (const [unitId, unit] of Object.entries(ebookData)) {
      unit.chapters.forEach((ch, idx) => {
        // Strip html tags for plain text search
        const plainContent = ch.content.replace(/<[^>]*>/g, ' ');
        if (ch.title.toLowerCase().includes(query) || plainContent.toLowerCase().includes(query)) {
          // Find index snippet of first match
          let index = plainContent.toLowerCase().indexOf(query);
          let snippet = plainContent.substring(Math.max(0, index - 40), Math.min(plainContent.length, index + 60)) + "...";
          matches.push({
            type: "chapter",
            title: `${unit.title} - ${ch.title}`,
            snippet: `... ${snippet}`,
            action: () => {
              this.openUnit(unitId);
              this.currentChapterIndex = idx;
              this.renderSidebar();
              this.renderChapterContent();
            },
            badge: "บทเรียน",
            badgeClass: unitId === "unit12" ? "badge-purple" : "badge-orange"
          });
        }
      });
    }

    // 2. Search in Organic Compounds
    organicCompounds.forEach(c => {
      if (
        c.nameTh.toLowerCase().includes(query) ||
        c.nameEn.toLowerCase().includes(query) ||
        c.formula.toLowerCase().includes(query) ||
        c.group.toLowerCase().includes(query) ||
        c.uses.toLowerCase().includes(query) ||
        c.hazards.toLowerCase().includes(query)
      ) {
        matches.push({
          type: "compound",
          title: `สารเคมี: ${c.nameTh} (${c.formula})`,
          snippet: `<strong>กลุ่ม:</strong> ${c.group}<br><strong>ประโยชน์:</strong> ${c.uses.substring(0, 80)}...`,
          action: () => {
            this.openUnit("unit12");
            // Set active chapter to Chapter 3 (Activity) containing compound explorer and solutions viewer
            this.currentChapterIndex = 2; 
            this.renderSidebar();
            this.renderChapterContent();
            // Select chemical in explorer
            this.selectedCompoundId = c.id;
            this.renderOrganicExplorer("organic-explorer-placeholder");
            // Select chemical in solutions
            const selectItem = document.getElementById("sol-select-item");
            if (selectItem) {
              selectItem.value = c.id;
              selectItem.dispatchEvent(new Event("change"));
            }
          },
          badge: "สารอินทรีย์",
          badgeClass: "badge-purple"
        });
      }
    });

    // 3. Search in Polymers
    polymerRecycling.forEach(p => {
      if (
        p.nameTh.toLowerCase().includes(query) ||
        p.nameEn.toLowerCase().includes(query) ||
        p.abbreviation.toLowerCase().includes(query) ||
        p.properties.toLowerCase().includes(query) ||
        p.commonUses.toLowerCase().includes(query) ||
        p.environmentalImpact.toLowerCase().includes(query)
      ) {
        matches.push({
          type: "polymer",
          title: `พลาสติกรหัส ${p.code} - ${p.abbreviation} (${p.nameTh})`,
          snippet: `<strong>ประโยชน์:</strong> ${p.commonUses.substring(0, 80)}...`,
          action: () => {
            this.openUnit("unit13");
            this.currentChapterIndex = 2; // Chapter 3: Activity answers
            this.renderSidebar();
            this.renderChapterContent();
            const selectItem = document.getElementById("sol-select-item");
            if (selectItem) {
              selectItem.value = p.code;
              selectItem.dispatchEvent(new Event("change"));
            }
          },
          badge: "พอลิเมอร์/พลาสติก",
          badgeClass: "badge-orange"
        });
      }
    });

    // Render matches
    resultsSummary.innerHTML = `พบเนื้อหาที่สอดคล้องกับ <strong>"${query}"</strong> ทั้งหมด <strong>${matches.length}</strong> รายการ`;
    
    if (matches.length === 0) {
      resultsList.innerHTML = `
        <div class="text-center" style="padding: 3rem;">
          <p class="lead">ไม่พบผลการค้นหาสำหรับ "${query}"</p>
          <p>ลองใช้คำค้นหาอื่น เช่น <em>เอทานอล, พลาสติก, ขวด, ฟอร์มาลิน, ไซเคิล</em></p>
        </div>
      `;
      return;
    }

    matches.forEach(item => {
      const card = document.createElement("div");
      card.className = "search-result-card";
      card.innerHTML = `
        <h3>
          ${item.title}
          <span class="badge ${item.badgeClass}">${item.badge}</span>
        </h3>
        <p>${item.snippet}</p>
      `;
      card.addEventListener("click", () => {
        item.action();
        // Clear search input
        document.getElementById("global-search").value = "";
      });
      resultsList.appendChild(card);
    });
  }
}

// Instantiate global app instance
const app = new EBookApp();
window.addEventListener("DOMContentLoaded", () => app.init());
window.app = app; // Expose to HTML onclick handlers
