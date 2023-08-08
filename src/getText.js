export const words = {
  fio: {
    uz: "F.I.O",
    ru: "Ф.И.О. (полностью)",
  },
  anketa__title: {
    ru: "АНКЕТА КАНДИДАТА",
    uz: "NOMZODLAR SAVOLASI",
  },
  personal: {
    ru: "1.Личные данные",
    uz: "1.Shaxsiy ma'lumotlar",
  },
  date_of_birth: {
    ru: "Дата рождения:",
    uz: "Tug'ilgan kun",
  },
  place_of_birth: {
    ru: "Место рождения:",
    uz: "Tug'ilgan joyi:",
  },
  citizin: {
    ru: "Гражданство:",
    uz: "Fuqarolik:",
  },
  nationalit: {
    ru: "Национальность:",
    uz: "Millati:",
  },
  contact: {
    ru: "Контактные телефоны:",
    uz: "Aloqa uchun telefon raqamlari:",
  },
  home_tel: {
    ru: "Домашний:",
    uz: "Uy:",
  },
  cell_tel: {
    ru: "Мобильный:",
    uz: "Mobil:",
  },
  work_tel: {
    ru: "Рабочий:",
    uz: "Ishchi:",
  },
  email: {
    ru: "E-mail:",
    uz: "Email:",
  },
  extra_contact: {
    ru: "Другие контакты",
    uz: "Boshqa kontaktlar",
  },
  place_of_live: {
    ru: "Место регистрации (прописки)",
    uz: "Ro'yxatdan o'tish joyi (ro'yxatga olish)",
  },
  place_of_current: {
    ru: "Место жительства (фактическое)",
    uz: "Yashash joyi (haqiqiy)",
  },
  education: {
    ru: "2.Образование",
    uz: "2.Ta'lim",
  },
  enter_data: {
    ru: "Год поступления",
    uz: "Qabul qilingan yil",
  },
  finish: {
    ru: "Год окончания",
    uz: "Tugash yili",
  },
  name_of_instut: {
    ru: "Название учебного заведения Факультет (отделение), город",
    uz: "Ta'lim muassasasining nomi Fakultet (kafedra), shahar",
  },
  field: {
    ru: "Специальность, квалификация",
    uz: "Mutaxassisligi, malakasi",
  },
  exstra_edu: {
    ru: "Специализированные тренинги, стажировки, курсы и семинары, аспирантура, спец. школа и т.д.",
    uz: "Ixtisoslashtirilgan treninglar, amaliyotlar, kurslar va seminarlar, aspirantura, maxsus maktab va boshqalar.",
  },
  photo: {
    ru: "фоtо",
    uz: "fotosurat",
  },
  bilim: {
    ru: "3. Знания и навыки",
    uz: "3. Bilim va malakalar",
  },
  tillar: {
    ru: "3.1.Какими языками Вы владеете?",
    uz: "3.1.Siz qaysi tillarda gapirasiz?",
  },
  til: {
    ru: "Язык",
    uz: "Til",
  },
  mulk: {
    ru: "Степень владения",
    uz: "Mulkchilik darajasi",
  },
  xat: {
    ru: "письмо",
    uz: "xat",
  },
  oqish: {
    ru: "чтение",
    uz: "o'qish",
  },
  sozlovchi: {
    ru: "разговорный",
    uz: "so'zlashuv",
  },
  ozbek: {
    ru: "Узбекский",
    uz: "o'zbek",
  },
  ruskiy:{
    ru:"Русский",
    uz:"rus"
  },
  english:{
    ru:"Английский",
    uz:"Ingliz"
  },
  komp:{
    ru:"3.2. Степень владения ПК? (варианты ответов: - не знаю, - слабо,  - средне, -  хорошо, -  в совершенстве)",
    uz:"3.2. Kompyuterni bilish darajasi? (javob variantlari: - bilmayman, - zaif, - o'rtacha, - yaxshi, - mukammal)"
  },
  word:{
    ru:"MS Word",
    uz:"MS Word"
  },
  excel:{
    ru:"MS Excel",
    uz:"MS Excel"
  },
  power:{
    ru:"Power Point",
    uz:"Power Point"
  },
  c:{
    ru:"1С:",
    uz:"1С:"
  },
  inter:{
    ru:"Интернет",
    uz:"Internet"
  },
  veb:{
    ru:"Web-платформы",
    uz:"Veb platformalar"
  }
};

export default (text) => {
  const lang = window.localStorage.getItem("lang") || "uz";
  return text[lang];
};
