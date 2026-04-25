import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "sq";

type Dict = Record<string, string>;
type Translations = Record<Lang, Dict>;

const translations: Translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.practice": "Practice Areas",
    "nav.contact": "Contact",
    "header.role": "Avokat · Attorney at Law",
    "header.callMobile": "Call +383 45 883 034",

    // Footer
    "footer.tagline": "Dedicated legal representation in Mitrovica with integrity, discretion, and decades of courtroom experience.",
    "footer.office": "Office",
    "footer.hours": "Mon–Fri · 9:00 AM – 5:00 PM",
    "footer.navigate": "Navigate",
    "footer.rights": "All rights reserved.",
    "footer.location": "Mitrovica, Republic of Kosovo",

    // Home
    "home.eyebrow": "Established Legal Practice",
    "home.title1": "Principled counsel.",
    "home.title2": "Resolute",
    "home.title3": "representation.",
    "home.subtitle": "Avokat Sylejman Barja delivers thoughtful, dedicated legal advocacy for clients across Mitrovica and throughout Kosovo.",
    "home.ctaConsult": "Schedule a Consultation",
    "home.ctaPractice": "Practice Areas",
    "home.officeLocation": "Office Location",
    "home.directLine": "Direct Line",
    "home.trusted": "Trusted Counsel",
    "home.trustedDesc": "Member of the Kosovo Bar Association",
    "home.aboutEyebrow": "About the Attorney",
    "home.aboutTitle": "A lifetime devoted to justice and to clients.",
    "home.aboutP1": "For more than two decades, Avokat Sylejman Barja has represented individuals, families, and businesses in matters that demand both legal precision and human understanding. Each case is treated with the seriousness it deserves.",
    "home.aboutP2": "From quiet negotiations to firm courtroom advocacy, the practice is grounded in one principle: the client always comes first.",
    "home.aboutCta": "Read Full Biography",
    "home.yearsBadge": "Years of Practice",
    "home.areasEyebrow": "Areas of Practice",
    "home.areasTitle": "Comprehensive legal services",
    "home.area1.title": "Criminal Defense",
    "home.area1.desc": "Strategic defense in criminal proceedings, from investigation through appeal.",
    "home.area2.title": "Civil Litigation",
    "home.area2.desc": "Resolving disputes between individuals, businesses, and institutions.",
    "home.area3.title": "Family & Property",
    "home.area3.desc": "Inheritance, divorce, custody, and property disputes handled with care.",
    "home.areasCta": "View All Practice Areas",
    "home.cta1": "Discuss your matter in",
    "home.cta2": "confidence",
    "home.cta3": ".",
    "home.ctaSub": "Every consultation is private, attentive, and free of obligation.",
    "home.ctaButton": "Request a Consultation",

    // About
    "about.eyebrow": "About",
    "about.title": "Avokat Sylejman Barja",
    "about.lead": "A respected legal practitioner whose work is defined by careful preparation, unwavering ethics, and a deep commitment to every client.",
    "about.philosophy": "Philosophy",
    "about.philosophyText": "The law, at its best, is an instrument of dignity. My practice is built on the conviction that every client — regardless of the size or complexity of their matter — deserves clear advice, honest assessment, and tireless representation.",
    "about.background": "Background",
    "about.backgroundP1": "Based in Mitrovica e Veriut, the firm serves clients across Kosovo in matters ranging from criminal defense and civil disputes to family law, inheritance, and commercial questions.",
    "about.backgroundP2": "Years of courtroom practice have shaped a measured approach: pursue settlement when it serves the client, and litigate forcefully when it does not.",
    "about.commitments": "Commitments to Every Client",
    "about.commit1": "Clear, jargon-free communication at every stage",
    "about.commit2": "Strict confidentiality and discretion",
    "about.commit3": "Honest evaluation of strengths and risks",
    "about.commit4": "Personal attention — your case is never delegated away",
    "about.statYears": "Years in Practice",
    "about.statClients": "Clients Represented",
    "about.statAreas": "Areas of Law",
    "about.statAreasValue": "Multiple",
    "about.ctaTitle": "Ready to discuss your case?",
    "about.ctaButton": "Get in Touch",

    // Practice areas
    "practice.eyebrow": "Practice Areas",
    "practice.title": "Legal services tailored to your matter.",
    "practice.lead": "Each area below reflects active, current practice. If your matter falls elsewhere, a brief consultation can clarify whether the firm can help or refer you appropriately.",
    "practice.criminal.title": "Criminal Defense",
    "practice.criminal.desc": "Defense in criminal investigations, pre-trial proceedings, trials, and appeals — protecting your rights at every step.",
    "practice.civil.title": "Civil Litigation",
    "practice.civil.desc": "Representation in disputes involving contracts, damages, debts, and obligations between individuals or organizations.",
    "practice.property.title": "Property & Real Estate",
    "practice.property.desc": "Title disputes, property transfers, registration matters, and ownership claims handled with thorough diligence.",
    "practice.family.title": "Family Law",
    "practice.family.desc": "Divorce, child custody, alimony, and matters of personal status approached with sensitivity and clarity.",
    "practice.inherit.title": "Inheritance & Succession",
    "practice.inherit.desc": "Wills, estates, succession proceedings, and resolution of disputes between heirs.",
    "practice.labor.title": "Labor & Employment",
    "practice.labor.desc": "Employment contracts, wrongful dismissal claims, and workplace disputes for both employees and employers.",
    "practice.business.title": "Business & Commercial",
    "practice.business.desc": "Company formation, commercial contracts, and ongoing legal counsel for small and medium-sized enterprises.",
    "practice.admin.title": "Administrative Law",
    "practice.admin.desc": "Representation before government agencies, licensing matters, and challenges to administrative decisions.",
    "practice.ctaTitle": "Not sure where your case fits?",
    "practice.ctaText": "A short conversation is often all it takes to understand your options. Reach out to discuss your situation in confidence.",
    "practice.ctaButton": "Contact the Office",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.title": "Let's discuss your matter.",
    "contact.lead": "Every inquiry is treated with complete confidentiality. Reach out by phone or send a message and you'll receive a personal response.",
    "contact.office": "Office",
    "contact.address": "Address",
    "contact.phone": "Telephone",
    "contact.email": "Email",
    "contact.hours": "Hours",
    "contact.hoursValue": "Monday – Friday\n9:00 AM – 5:00 PM",
    "contact.formTitle": "Send a Message",
    "contact.fName": "Full Name",
    "contact.fPhone": "Phone",
    "contact.fEmail": "Email",
    "contact.fSubject": "Subject",
    "contact.fMessage": "Message",
    "contact.fSubmit": "Send Message",
    "contact.disclaimer": "By sending this message you consent to be contacted regarding your inquiry. All communication is confidential.",
    "contact.subjectPrefix": "Consultation request",
  },
  sq: {
    // Header
    "nav.home": "Ballina",
    "nav.about": "Rreth Nesh",
    "nav.practice": "Fushat e Praktikës",
    "nav.contact": "Kontakti",
    "header.role": "Avokat · Jurist i Licencuar",
    "header.callMobile": "Telefono +383 45 883 034",

    // Footer
    "footer.tagline": "Përfaqësim i përkushtuar ligjor në Mitrovicë me integritet, diskrecion dhe dekada përvojë gjyqësore.",
    "footer.office": "Zyra",
    "footer.hours": "Hën–Pre · 09:00 – 17:00",
    "footer.navigate": "Naviго",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",
    "footer.location": "Mitrovicë, Republika e Kosovës",

    // Home
    "home.eyebrow": "Praktikë Ligjore e Konsoliduar",
    "home.title1": "Këshillim parimor.",
    "home.title2": "Përfaqësim",
    "home.title3": "i vendosur.",
    "home.subtitle": "Avokat Sylejman Barja ofron mbrojtje ligjore të kujdesshme dhe të përkushtuar për klientët në Mitrovicë dhe në mbarë Kosovën.",
    "home.ctaConsult": "Cakto një Konsultim",
    "home.ctaPractice": "Fushat e Praktikës",
    "home.officeLocation": "Lokacioni i Zyrës",
    "home.directLine": "Linja Direkte",
    "home.trusted": "Këshilltar i Besuar",
    "home.trustedDesc": "Anëtar i Odës së Avokatëve të Kosovës",
    "home.aboutEyebrow": "Rreth Avokatit",
    "home.aboutTitle": "Një jetë e dedikuar drejtësisë dhe klientëve.",
    "home.aboutP1": "Për më shumë se dy dekada, Avokat Sylejman Barja ka përfaqësuar individë, familje dhe biznese në çështje që kërkojnë saktësi ligjore dhe mirëkuptim njerëzor. Çdo rast trajtohet me seriozitetin që meriton.",
    "home.aboutP2": "Nga negociatat e qeta deri te avokimi i fortë në sallën e gjyqit, praktika bazohet në një parim: klienti gjithmonë vjen i pari.",
    "home.aboutCta": "Lexo Biografinë e Plotë",
    "home.yearsBadge": "Vite Praktikë",
    "home.areasEyebrow": "Fushat e Praktikës",
    "home.areasTitle": "Shërbime ligjore gjithëpërfshirëse",
    "home.area1.title": "Mbrojtje Penale",
    "home.area1.desc": "Mbrojtje strategjike në procedura penale, nga hetimi deri te ankesa.",
    "home.area2.title": "Çështje Civile",
    "home.area2.desc": "Zgjidhje e mosmarrëveshjeve mes individëve, bizneseve dhe institucioneve.",
    "home.area3.title": "Familje & Pronë",
    "home.area3.desc": "Trashëgimi, divorc, kujdestari dhe mosmarrëveshje pronësore të trajtuara me kujdes.",
    "home.areasCta": "Shiko të Gjitha Fushat",
    "home.cta1": "Diskutoni çështjen tuaj në",
    "home.cta2": "konfidencialitet",
    "home.cta3": ".",
    "home.ctaSub": "Çdo konsultë është private, e vëmendshme dhe pa detyrim.",
    "home.ctaButton": "Kërko një Konsultim",

    // About
    "about.eyebrow": "Rreth",
    "about.title": "Avokat Sylejman Barja",
    "about.lead": "Një praktikues i respektuar ligjor, puna e të cilit përkufizohet nga përgatitja e kujdesshme, etika e palëkundur dhe përkushtimi i thellë ndaj çdo klienti.",
    "about.philosophy": "Filozofia",
    "about.philosophyText": "Ligji, në më të mirën e tij, është një mjet i dinjitetit. Praktika ime bazohet në bindjen se çdo klient — pavarësisht nga madhësia apo kompleksiteti i çështjes së tij — meriton këshillë të qartë, vlerësim të ndershëm dhe përfaqësim të palodhur.",
    "about.background": "Përvoja",
    "about.backgroundP1": "Me bazë në Mitrovicën e Veriut, zyra u shërben klientëve në mbarë Kosovën në çështje që variojnë nga mbrojtja penale dhe mosmarrëveshjet civile deri te e drejta familjare, trashëgimia dhe çështjet komerciale.",
    "about.backgroundP2": "Vitet e praktikës gjyqësore kanë formuar një qasje të matur: ndiq marrëveshjen kur i shërben klientit dhe gjyqësohu me forcë kur jo.",
    "about.commitments": "Angazhimet ndaj Çdo Klienti",
    "about.commit1": "Komunikim i qartë, pa zhargon në çdo fazë",
    "about.commit2": "Konfidencialitet dhe diskrecion strikt",
    "about.commit3": "Vlerësim i ndershëm i pikave të forta dhe rreziqeve",
    "about.commit4": "Vëmendje personale — rasti juaj nuk delegohet kurrë",
    "about.statYears": "Vite në Praktikë",
    "about.statClients": "Klientë të Përfaqësuar",
    "about.statAreas": "Fusha të Drejtësisë",
    "about.statAreasValue": "Të Shumta",
    "about.ctaTitle": "Gati të diskutoni rastin tuaj?",
    "about.ctaButton": "Na Kontaktoni",

    // Practice areas
    "practice.eyebrow": "Fushat e Praktikës",
    "practice.title": "Shërbime ligjore të përshtatura për çështjen tuaj.",
    "practice.lead": "Çdo fushë e mëposhtme pasqyron praktikën aktive aktuale. Nëse çështja juaj bie diku tjetër, një konsultim i shkurtër mund të sqarojë nëse zyra mund t'ju ndihmojë ose t'ju referojë në mënyrë të përshtatshme.",
    "practice.criminal.title": "Mbrojtje Penale",
    "practice.criminal.desc": "Mbrojtje në hetime penale, procedura paragjyqësore, gjykime dhe ankesa — duke mbrojtur të drejtat tuaja në çdo hap.",
    "practice.civil.title": "Çështje Civile",
    "practice.civil.desc": "Përfaqësim në mosmarrëveshje që përfshijnë kontrata, dëmshpërblime, borxhe dhe detyrime mes individëve ose organizatave.",
    "practice.property.title": "Pronë & Patundshmëri",
    "practice.property.desc": "Mosmarrëveshje pronësie, transferime pronash, çështje regjistrimi dhe pretendime pronësie të trajtuara me kujdes të plotë.",
    "practice.family.title": "E Drejta Familjare",
    "practice.family.desc": "Divorc, kujdestari e fëmijëve, alimentacion dhe çështje të statusit personal të trajtuara me ndjeshmëri dhe qartësi.",
    "practice.inherit.title": "Trashëgimi",
    "practice.inherit.desc": "Testamente, pasuri, procedura trashëgimore dhe zgjidhje e mosmarrëveshjeve mes trashëgimtarëve.",
    "practice.labor.title": "Punë & Punësim",
    "practice.labor.desc": "Kontrata pune, kërkesa për shkarkim të padrejtë dhe mosmarrëveshje në vendin e punës për punëtorë dhe punëdhënës.",
    "practice.business.title": "Biznes & Tregti",
    "practice.business.desc": "Themelim kompanish, kontrata komerciale dhe këshillim ligjor i vazhdueshëm për ndërmarrje të vogla dhe të mesme.",
    "practice.admin.title": "E Drejta Administrative",
    "practice.admin.desc": "Përfaqësim para agjencive qeveritare, çështje licencimi dhe sfidim i vendimeve administrative.",
    "practice.ctaTitle": "Nuk jeni i sigurt se ku përshtatet rasti juaj?",
    "practice.ctaText": "Një bisedë e shkurtër shpesh është gjithçka që nevojitet për të kuptuar opsionet tuaja. Na kontaktoni për të diskutuar situatën tuaj në konfidencë.",
    "practice.ctaButton": "Kontakto Zyrën",

    // Contact
    "contact.eyebrow": "Kontakti",
    "contact.title": "Le të diskutojmë çështjen tuaj.",
    "contact.lead": "Çdo kërkesë trajtohet me konfidencialitet të plotë. Na kontaktoni me telefon ose dërgoni një mesazh dhe do të merrni një përgjigje personale.",
    "contact.office": "Zyra",
    "contact.address": "Adresa",
    "contact.phone": "Telefoni",
    "contact.email": "Email",
    "contact.hours": "Orari",
    "contact.hoursValue": "E Hënë – E Premte\n09:00 – 17:00",
    "contact.formTitle": "Dërgoni një Mesazh",
    "contact.fName": "Emri i Plotë",
    "contact.fPhone": "Telefoni",
    "contact.fEmail": "Email",
    "contact.fSubject": "Subjekti",
    "contact.fMessage": "Mesazhi",
    "contact.fSubmit": "Dërgo Mesazhin",
    "contact.disclaimer": "Duke dërguar këtë mesazh ju jepni pëlqimin për t'u kontaktuar lidhur me kërkesën tuaj. I gjithë komunikimi është konfidencial.",
    "contact.subjectPrefix": "Kërkesë për konsultim",
  },
};

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "sq") setLangState(stored);
    else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("sq")) {
      setLangState("sq");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
