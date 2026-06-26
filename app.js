const templates = [
  ["DY-001", "AI创业粉IP口播开场", "抖音", "IP口播", "AI创业粉", "视频", "自然流", "18s", "创业者开场三秒钩子", "#263a42, #8fbcc6"],
  ["DY-009", "工具测评数字人脚本", "抖音", "IP数字人", "AI工具粉", "视频", "付费流", "15s", "用数字人口播拆解工具卖点", "#202329, #6252a4"],
  ["DY-018", "自动化工作流演示", "抖音", "工作流", "AI工具粉", "飞书资料", "自然流", "Doc", "从痛点到流程图的飞书模板", "#172b45, #3aa7c9"],
  ["DY-032", "爆款图文七页结构", "抖音", "爆款图文/视频", "AI创业粉", "图文", "付费流", "9P", "创业粉图文封面和转化话术", "#45251f, #f08d4f"],
  ["XHS-014", "小红书IP口播笔记", "小红书", "IP口播", "AI创业粉", "图文", "自然流", "6P", "真人口吻种草AI副业", "#5b2437, #f06791"],
  ["XHS-027", "AI工具清单笔记", "小红书", "爆款图文/视频", "AI工具粉", "图文", "付费流", "8P", "工具粉收藏型图文模版", "#2a294d, #8d72ff"],
  ["SPH-006", "视频号数字人直播预热", "视频号", "IP数字人", "AI创业粉", "视频", "自然流", "23s", "短视频预热直播间引流", "#1d3d33, #5dd19a"],
  ["SPH-021", "视频号工作流教程", "视频号", "工作流", "AI工具粉", "飞书资料", "自然流", "Doc", "教程拆解和评论区承接", "#19364b, #4fb6ff"],
  ["BOSS-003", "boss直聘创业粉私信文案", "boss", "AI创业粉文案", "AI创业粉", "飞书资料", "私域流", "Doc", "岗位沟通到企微引流SOP", "#3b2a20, #ffac62"],
  ["BOSS-011", "boss直聘工具粉私信文案", "boss", "AI工具粉文案", "AI工具粉", "飞书资料", "私域流", "Doc", "工具需求识别和线索承接", "#222c3a, #5596ff"],
  ["XY-006", "闲鱼创业粉商品发布", "闲鱼", "商品发布", "AI创业粉", "图文", "自然流", "5P", "AI项目资料包发布结构", "#3a3214, #ffd13d"],
  ["XY-015", "闲鱼工具粉私信转化", "闲鱼", "私信转化", "AI工具粉", "飞书资料", "私域流", "Doc", "从咨询到企微承接的话术", "#28341c, #9ddc42"],
  ["XY-022", "闲鱼引流话术模板", "闲鱼", "引流话术", "AI创业粉", "飞书资料", "私域流", "Doc", "低压私信引导和需求识别", "#39281a, #ffad32"],
  ["XY-031", "闲鱼成交SOP清单", "闲鱼", "成交SOP", "AI工具粉", "飞书资料", "SOP", "Doc", "发布、咨询、承接、复购全流程", "#273225, #8ed65a"],
  ["AD-011", "抖音投流创业粉口播", "抖音投流", "IP口播", "AI创业粉", "视频", "付费流", "15s", "投流开场和落地页承接", "#351f2b, #ff5b84"],
  ["AD-019", "抖音投流工具粉数字人", "抖音投流", "数字人", "AI工具粉", "视频", "付费流", "20s", "工具对比和试用引导", "#22284a, #5d8cff"],
  ["AD-026", "抖音投流混剪素材包", "抖音投流", "混剪", "AI工具粉", "视频", "付费流", "18s", "多工具场景混剪节奏", "#1b2f39, #36d399"],
  ["AD-033", "抖音投流爆款视频结构", "抖音投流", "爆款视频", "AI创业粉", "视频", "付费流", "12s", "高点击开头和强转化结尾", "#412314, #ff8a3d"],
  ["TX-008", "腾讯广告创业粉口播", "腾讯广告", "IP口播", "AI创业粉", "图文", "付费流", "3P", "信息流封面和表单话术", "#412b19, #ff8a3d"],
  ["TX-016", "腾讯广告工具粉数字人", "腾讯广告", "数字人", "AI工具粉", "飞书资料", "付费流", "Doc", "表单页卖点和追踪说明", "#172a30, #2fd7ff"],
  ["TX-022", "腾讯广告混剪脚本", "腾讯广告", "混剪", "AI工具粉", "视频", "付费流", "16s", "多镜头素材拼接脚本", "#1e243d, #7a5cff"],
  ["TX-031", "腾讯广告爆款视频拆解", "腾讯广告", "爆款视频", "AI创业粉", "视频", "付费流", "14s", "表单转化型爆款视频结构", "#2f2238, #ff4f8b"],
  ["SOP-001", "抖音执行引流SOP", "抖音", "执行引流SOP", "AI创业粉", "飞书资料", "SOP", "Doc", "发布节奏、评论回复、企微承接", "#1b2635, #7a5cff"],
  ["SOP-002", "小红书执行引流SOP", "小红书", "执行引流SOP", "AI创业粉", "飞书资料", "SOP", "Doc", "笔记发布、评论区引导、私信承接", "#402638, #ff4f8b"],
  ["SOP-003", "视频号执行引流SOP", "视频号", "执行引流SOP", "AI工具粉", "飞书资料", "SOP", "Doc", "教程发布、直播预热、社群转化", "#173340, #2fd7ff"],
  ["SOP-004", "boss直聘执行引流SOP", "boss", "执行引流SOP", "AI创业粉", "飞书资料", "SOP", "Doc", "私信分层和线索表同步", "#332420, #ff8a3d"],
  ["SOP-005", "闲鱼执行引流SOP", "闲鱼", "执行引流SOP", "AI工具粉", "飞书资料", "SOP", "Doc", "商品发布、私信筛选、成交跟进", "#2c321b, #c6e85d"],
  ["SOP-006", "抖音投流执行引流SOP", "抖音投流", "执行引流SOP", "AI工具粉", "飞书资料", "SOP", "Doc", "投流素材测试和表单线索承接", "#1f2745, #7a5cff"],
  ["SOP-007", "腾讯广告执行引流SOP", "腾讯广告", "执行引流SOP", "AI创业粉", "飞书资料", "SOP", "Doc", "广告线索分层和企微回访", "#17333a, #2fd7ff"]
];

const platformMeta = {
  "抖音": { label: "抖音", icon: "assets/icons/douyin.svg" },
  "小红书": { label: "小红书", icon: "assets/icons/xiaohongshu.svg" },
  "视频号": { label: "视频号", icon: "assets/icons/shipinhao.svg" },
  "boss": { label: "boss直聘", icon: "assets/icons/boss.svg" },
  "闲鱼": { label: "闲鱼", icon: "assets/icons/xianyu.svg" },
  "抖音投流": { label: "抖音投流", icon: "assets/icons/douyin-ad.svg" },
  "腾讯广告": { label: "腾讯广告", icon: "assets/icons/tencent-ad.svg" }
};

function displayPlatform(platform) {
  return platformMeta[platform]?.label || platform;
}

function platformBadge(platform) {
  const meta = platformMeta[platform];
  if (!meta) return `<span class="platform-icon fallback">${platform.slice(0, 1)}</span>`;
  return `<img class="platform-icon" src="${meta.icon}" alt="" />`;
}

const state = {
  audience: "全部",
  category: "全部",
  type: "全部",
  platform: "全部",
  search: ""
};

const ACCESS_CODES = {
  view: "OPC-VIEW-2026",
  edit: "OPC-EDIT-2026"
};

const CUSTOM_STORAGE_KEY = "opc_custom_templates";
let customTemplates = [];
let cloudToken = "";
let cloudMode = "";

const cloudApiBase = (window.OPC_CLOUD?.apiBase || "").replace(/\/$/, "");
const hasCloudApi = Boolean(cloudApiBase);

const cardGrid = document.querySelector("#cardGrid");
const resultCount = document.querySelector("#resultCount");
const accessForm = document.querySelector("#accessForm");
const accessCode = document.querySelector("#accessCode");
const accessError = document.querySelector("#accessError");
const accessMode = document.querySelector("#accessMode");
const switchAccess = document.querySelector("#switchAccess");
const uploadForm = document.querySelector("#uploadForm");
const closeUpload = document.querySelector("#closeUpload");
const cancelUpload = document.querySelector("#cancelUpload");
const materialFile = document.querySelector("#materialFile");

function makeCard(item, index) {
  const [id, name, platform, category, audience, type, source, duration, title, colors, cover, fileUrl] = item;
  const platformName = displayPlatform(platform);
  const isHot = source !== "自然流";
  const card = document.createElement("article");
  card.className = "template-card";
  card.innerHTML = `
    <div class="thumb" style="--thumb: linear-gradient(145deg, ${colors});">
      ${cover ? `<img class="thumb-image" src="${cover}" alt="" />` : ""}
      <span class="tag ${isHot ? "hot" : ""}">${source}</span>
      <span class="audience">${audience}</span>
      <div class="cover-mark">${platformBadge(platform)}<span>${platformName}</span></div>
      <div class="thumb-title">${title}</div>
      <span class="file-type">${type}</span>
      <span class="duration">${duration}</span>
    </div>
    <div class="card-body">
      <div class="meta-line">
        <strong>${name}</strong>
        <span>${platformName}</span>
      </div>
      <div class="path">${audience} → ${category}</div>
      <div class="learn-line">学习：${title}</div>
      ${fileUrl ? `<a class="material-link" href="${fileUrl}" target="_blank" rel="noopener">打开素材文件</a>` : ""}
    </div>
  `;
  card.style.animationDelay = `${index * 20}ms`;
  return card;
}

function matches(item) {
  const [, name, platform, category, audience, type, source, , title] = item;
  const searchBlob = `${name} ${platform} ${displayPlatform(platform)} ${category} ${audience} ${type} ${source} ${title}`.toLowerCase();
  return (state.audience === "全部" || audience === state.audience)
    && (state.category === "全部" || category === state.category)
    && (state.type === "全部" || type === state.type)
    && (state.platform === "全部" || platform === state.platform)
    && (!state.search || searchBlob.includes(state.search.toLowerCase()));
}

function renderCards() {
  const filtered = templates.filter(matches);
  cardGrid.innerHTML = "";
  if (!filtered.length) {
    cardGrid.innerHTML = `<div class="empty-state">当前条件下没有素材，换个筛选条件或上传新素材。</div>`;
  } else {
    filtered.forEach((item, index) => cardGrid.appendChild(makeCard(item, index)));
  }
  const labels = [
    state.audience,
    state.platform === "全部" ? "全部" : displayPlatform(state.platform),
    state.category
  ].filter((item) => item !== "全部");
  resultCount.textContent = `${labels.length ? labels.join(" / ") : "全部条件"}，展示 ${filtered.length} 个可学习素材`;
}

function loadCustomTemplates() {
  try {
    customTemplates = JSON.parse(localStorage.getItem(CUSTOM_STORAGE_KEY) || "[]");
    customTemplates.forEach((item) => templates.push(item));
  } catch (error) {
    customTemplates = [];
  }
}

function saveCustomTemplate(item) {
  customTemplates.unshift(item);
  localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(customTemplates));
  templates.unshift(item);
}

async function verifyCloudCode(code) {
  const response = await fetch(`${cloudApiBase}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });
  if (!response.ok) throw new Error("卡密不正确，请重新输入。");
  return response.json();
}

async function fetchCloudMaterials() {
  if (!hasCloudApi || !cloudToken) return;
  const response = await fetch(`${cloudApiBase}/api/materials`, {
    headers: { Authorization: `Bearer ${cloudToken}` }
  });
  if (!response.ok) return;
  const data = await response.json();
  if (!Array.isArray(data.materials)) return;
  data.materials.forEach((item) => templates.unshift(item));
  renderCards();
}

async function saveCloudTemplate(payload, file) {
  const form = new FormData();
  form.append("payload", JSON.stringify(payload));
  if (file) form.append("file", file);
  const response = await fetch(`${cloudApiBase}/api/materials`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cloudToken}` },
    body: form
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "云端保存失败");
  }
  return response.json();
}

function colorByPlatform(platform) {
  const colors = {
    "抖音": "#101116, #ff2d55",
    "小红书": "#5b1020, #ff2442",
    "视频号": "#103223, #23c26b",
    "boss": "#12284d, #1976ff",
    "闲鱼": "#3a3214, #ffd13d",
    "抖音投流": "#14111d, #7a5cff",
    "腾讯广告": "#102a44, #1685ff"
  };
  return colors[platform] || "#1b2635, #7a5cff";
}

function readImageCover(file) {
  return new Promise((resolve) => {
    if (!file || !file.type.startsWith("image/")) {
      resolve("");
      return;
    }
    if (file.size > 1024 * 1024 * 2) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function wireButtonGroup(selector, key, attr) {
  document.querySelector(selector).addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    event.currentTarget.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state[key] = button.dataset[attr];
    renderCards();
  });
}

wireButtonGroup("#typeFilters", "type", "type");

function enhanceSidebarLabels() {
  document.querySelectorAll(".audience-heading").forEach((item) => {
    if (item.textContent.trim() === "AI创业粉") {
      item.innerHTML = `AI创业粉<span>想通过AI赚钱的人</span>`;
    }
    if (item.textContent.trim() === "AI工具粉") {
      item.innerHTML = `AI工具粉<span>对AI工具有需求的人</span>`;
    }
  });

  document.querySelectorAll(".platform-node").forEach((button) => {
    const platform = button.dataset.treePlatform;
    const label = displayPlatform(platform);
    button.innerHTML = `${platformBadge(platform)}<span>${label}</span>`;
  });

  document.querySelectorAll(".sop-node").forEach((button) => {
    const platform = button.dataset.treePlatform;
    button.innerHTML = `${platformBadge(platform)}<span>${displayPlatform(platform)}</span>`;
  });

  document.querySelectorAll("option").forEach((option) => {
    if (option.textContent.trim() === "boss") option.textContent = "boss直聘";
  });
}

function setTreeActive(button) {
  document.querySelectorAll("[data-tree-audience]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}

async function applyAccessMode(mode, token = "") {
  document.body.classList.remove("locked", "view-only", "can-edit");
  document.body.classList.add(mode === "edit" ? "can-edit" : "view-only");
  accessMode.textContent = mode === "edit" ? "编辑" : "查看";
  cloudMode = mode;
  cloudToken = token;
  sessionStorage.setItem("opc_access_mode", mode);
  if (token) sessionStorage.setItem("opc_cloud_token", token);
  if (hasCloudApi) await fetchCloudMaterials();
}

function lockAccess() {
  document.body.classList.add("locked");
  document.body.classList.remove("view-only", "can-edit");
  accessMode.textContent = "未登录";
  sessionStorage.removeItem("opc_access_mode");
  sessionStorage.removeItem("opc_cloud_token");
  cloudToken = "";
  cloudMode = "";
  accessCode.value = "";
  accessError.textContent = "";
  setTimeout(() => accessCode.focus(), 0);
}

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = accessCode.value.trim();
  accessError.textContent = "";

  if (hasCloudApi) {
    verifyCloudCode(code)
      .then((data) => applyAccessMode(data.mode, code))
      .catch((error) => {
        accessError.textContent = error.message || "卡密不正确，请重新输入。";
      });
  } else {
    if (code === ACCESS_CODES.edit) {
      applyAccessMode("edit");
      return;
    }
    if (code === ACCESS_CODES.view) {
      applyAccessMode("view");
      return;
    }
    accessError.textContent = "卡密不正确，请重新输入。";
  }
});

switchAccess.addEventListener("click", lockAccess);

document.querySelector("#sidebarCategoryNav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-tree-audience]");
  if (!button) return;

  const platformGroup = button.closest(".platform-group");
  if (button.classList.contains("platform-node") && platformGroup) {
    document.querySelectorAll(".platform-group").forEach((item) => {
      if (item !== platformGroup) item.classList.remove("open");
    });
    platformGroup.classList.toggle("open");
  }

  setTreeActive(button);
  state.audience = button.dataset.treeAudience;
  state.platform = button.dataset.treePlatform;
  state.category = button.dataset.treeCategory;
  renderCards();
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderCards();
});

const modal = document.querySelector("#uploadModal");
document.querySelector("#openUpload").addEventListener("click", () => modal.showModal());
document.querySelector("#batchButton").addEventListener("click", () => modal.showModal());
closeUpload.addEventListener("click", () => modal.close());
cancelUpload.addEventListener("click", () => modal.close());

materialFile.addEventListener("change", () => {
  const file = materialFile.files?.[0];
  if (!file) return;
  const nameInput = document.querySelector("#materialName");
  if (!nameInput.value.trim()) {
    nameInput.value = file.name.replace(/\.[^.]+$/, "");
  }
});

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = materialFile.files?.[0];
  const platform = document.querySelector("#materialPlatform").value;
  const type = document.querySelector("#materialType").value;
  const note = document.querySelector("#materialNote").value.trim();
  const name = document.querySelector("#materialName").value.trim();
  const cover = await readImageCover(file);
  const payload = {
    id: `UP-${Date.now().toString().slice(-6)}`,
    name,
    platform,
    category: document.querySelector("#materialCategory").value,
    audience: document.querySelector("#materialAudience").value,
    type,
    source: "上传",
    duration: file ? (type === "视频" ? "素材" : "File") : "Link",
    title: note || file?.name || "新上传素材",
    colors: colorByPlatform(platform),
    cover
  };

  try {
    if (hasCloudApi && cloudMode === "edit") {
      const data = await saveCloudTemplate(payload, file);
      templates.unshift(data.material);
    } else {
      const item = [
        payload.id,
        payload.name,
        payload.platform,
        payload.category,
        payload.audience,
        payload.type,
        payload.source,
        payload.duration,
        payload.title,
        payload.colors,
        payload.cover
      ];
      saveCustomTemplate(item);
    }
    uploadForm.reset();
    modal.close();
    renderCards();
  } catch (error) {
    alert(error.message || "保存失败，请重试");
  }
});

enhanceSidebarLabels();
loadCustomTemplates();
const savedMode = sessionStorage.getItem("opc_access_mode");
const savedCloudToken = sessionStorage.getItem("opc_cloud_token") || "";
if (savedMode === "view" || savedMode === "edit") {
  applyAccessMode(savedMode, savedCloudToken);
} else {
  lockAccess();
}
renderCards();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
