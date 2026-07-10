const translations = {
  zh: {
    navAbout: "个人简介",
    navResearch: "研究方向",
    navPublications: "论文",
    navEducation: "教育背景",
    navProjects: "项目参与",
    navCertificates: "相关证书",
    navSkills: "专业技能",
    profileKicker: "2026级博士生",
    labelDegree: "学历",
    degree: "2026级博士生",
    labelLocation: "工位地",
    location: "中国北京",
    labelBorn: "出生时间",
    heroEyebrow: "Academic Resume",
    viewPublications: "查看论文",
    contactMe: "联系我",
    sectionAboutKicker: "Profile",
    sectionAboutTitle: "个人简介",
    sectionResearchKicker: "Research",
    sectionResearchTitle: "研究方向",
    researchOneTitle: "土壤盐分遥感",
    researchOneText: "利用遥感数据、机器学习与空间分析方法识别土壤盐渍化特征。",
    researchTwoTitle: "地下水溶解性无机碳的转移",
    researchTwoText: "关注地下水系统中溶解性无机碳的迁移、转化与水文地球化学机制。",
    researchThreeTitle: "毒理学",
    researchThreeText: "研究污染物暴露对生物体发育、器官损伤和炎症反应的影响。",
    sectionPublicationsKicker: "Selected Publications",
    sectionPublicationsTitle: "部分论文",
    sectionEducationKicker: "Education",
    sectionEducationTitle: "教育背景",
    eduOneSchool: "中国水利水电科学研究院",
    eduOneDegree: "博士在读",
    eduTwoSchool: "中国科学院大学",
    eduTwoDegree: "硕士",
    eduThreeSchool: "赣南师范大学",
    eduThreeDegree: "学士",
    sectionCertificatesKicker: "Skills & Certificates",
    sectionCertificatesTitle: "相关证书",
    certificateOne: "三类无人机超视距执照(CAAC)",
    sectionSkillsKicker: "Professional Skills",
    sectionSkillsTitle: "专业技能",
    sectionProjectsKicker: "Projects",
    sectionProjectsTitle: "项目参与"
  },
  en: {
    navAbout: "About",
    navResearch: "Research",
    navPublications: "Publications",
    navEducation: "Education",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navSkills: "Skills",
    profileKicker: "Ph.D. Student, Class of 2026",
    labelDegree: "Degree",
    degree: "Ph.D. Student, Class of 2026",
    labelLocation: "Location",
    location: "Beijing, China",
    labelBorn: "Born",
    heroEyebrow: "Academic Resume",
    viewPublications: "Publications",
    contactMe: "Contact",
    sectionAboutKicker: "Profile",
    sectionAboutTitle: "About Me",
    sectionResearchKicker: "Research",
    sectionResearchTitle: "Research Interests",
    researchOneTitle: "Soil Salinity Remote Sensing",
    researchOneText: "Identifying soil salinization patterns through remote sensing data, machine learning, and spatial analysis.",
    researchTwoTitle: "Transfer of Dissolved Inorganic Carbon in Groundwater",
    researchTwoText: "Studying dissolved inorganic carbon migration, transformation, and hydrogeochemical mechanisms in groundwater systems.",
    researchThreeTitle: "Toxicology",
    researchThreeText: "Investigating the effects of pollutant exposure on development, organ injury, oxidative stress, and inflammatory response.",
    sectionPublicationsKicker: "Selected Publications",
    sectionPublicationsTitle: "Selected Publications",
    sectionEducationKicker: "Education",
    sectionEducationTitle: "Education",
    eduOneSchool: "China Institute of Water Resources and Hydropower Research",
    eduOneDegree: "Ph.D. Student",
    eduTwoSchool: "University of Chinese Academy of Sciences",
    eduTwoDegree: "M.S.",
    eduThreeSchool: "Gannan Normal University",
    eduThreeDegree: "B.S.",
    sectionCertificatesKicker: "Skills & Certificates",
    sectionCertificatesTitle: "Related Certificates",
    certificateOne: "CAAC Category III UAV Beyond Visual Line of Sight License",
    sectionSkillsKicker: "Professional Skills",
    sectionSkillsTitle: "Professional Skills",
    sectionProjectsKicker: "Projects",
    sectionProjectsTitle: "Project Experience"
  }
};

const toggle = document.querySelector(".language-toggle");
const translatable = document.querySelectorAll("[data-i18n]");

function applyLanguage(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  localStorage.setItem("resume-language", lang);
  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || node.textContent;
  });
}

const savedLanguage = localStorage.getItem("resume-language");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
applyLanguage(savedLanguage || browserLanguage);

toggle.addEventListener("click", () => {
  applyLanguage(document.body.dataset.lang === "zh" ? "en" : "zh");
});
