document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const exitIcon = document.querySelector(".exit");
    const menuList = document.querySelector(".my-list");

    // Ouvrir le menu
    menuIcon.addEventListener("click", () => {
        menuList.classList.add("active");
        exitIcon.style.display = "flex";
        menuIcon.style.display = "none";
    });

    // Fermer le menu
    const closeMenu = () => {
        menuList.classList.remove("active");
        exitIcon.style.display = "none";
        menuIcon.style.display = "flex";
    };

    exitIcon.addEventListener("click", closeMenu);
});


// Vieuw images

document.addEventListener('DOMContentLoaded', () => {
    const bigImage = document.querySelectorAll('.show-image');
    const allImages = document.querySelectorAll('.vieuw-img');

    allImages.forEach(allImages => {
        allImages.addEventListener('click', function() {
            const imageSrc = this.src;
            bigImage.forEach(bigImage => {
                const imgElement = bigImage.querySelector('img');
                imgElement.src = imageSrc;
                bigImage.style.display = 'flex';
            });
        });
    });

    // Add event listener to close the show-image when the exit icon is clicked
    bigImage.forEach(bigImage => {
        const iconExit = bigImage.querySelector('.exit-icon');
        iconExit.addEventListener('click', function() {
            bigImage.style.display = 'none';
        });
    });
});



// Initialisation de i18next avec toutes les langues
i18next.init({
    lng: 'fr', // Langue par défaut
    resources: {
        fr: {
            translation: {
                "home": "Accueil",
                "about": "A propos",
                "status": "Status",
                "welcome": "Bienvenu chez <span>General Consulting Group</span>",
                "welcome-text": "Nous sommes déterminés à offrir une expertise de haut niveau en conseil pour accompagner les entreprises et institutions dans la réalisation de leurs objectifs stratégiques. Nos solutions, conçues pour répondre aux défis contemporains, visent à maximiser les performances de nos clients tout en créant de la valeur durable.",
                "import-export": "Import & Export",
                "models-hostesses": "Models & Hotesse",
                "consulting": "Consulting",
                "representation": "Représentation",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "Booking",
                "partners-title": "Nos partenaire",
                "partners-text": "Voici nos différents partenaires",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. All rights reserved.",
                "footer-developed-by": "Developed by",
                "charte-ethique": "Charte d'éthique | ",
                "internal-regulations": "Réglement intérieur | ",
                "general-policy": "Politique générale de charte"
            },
        },
        en: {
            translation: {
                "home": "Home",
                "about": "About",
                "status": "Status",
                "welcome": "Welcome to <span>General Consulting Group</span>",
                "welcome-text": "We are committed to providing high-level expertise in consulting to support businesses and institutions in achieving their strategic goals. Our solutions, designed to address contemporary challenges, aim to maximize the performance of our clients while creating sustainable value.",
                "import-export": "Import & Export",
                "models-hostesses": "Models & Hostess",
                "consulting": "Consulting",
                "representation": "Representation",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "Booking",
                "partners-title": "Our Partners",
                "partners-text": "Here are our various partners.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. All rights reserved.",
                "footer-developed-by": "Developed by",
                "charte-ethique": "Code of Ethics | ",
                "internal-regulations": "Internal Regulations | ",
                "general-policy": "General Policy Charter"
            },
        },
        es: {
            translation: {
                "home": "Inicio",
                "about": "Acerca de",
                "status": "Estado",
                "welcome": "Bienvenido a <span>General Consulting Group</span>",
                "welcome-text": "Estamos comprometidos a ofrecer experiencia de alto nivel en consultoría para apoyar a las empresas e instituciones en el logro de sus objetivos estratégicos. Nuestras soluciones, diseñadas para enfrentar los desafíos contemporáneos, buscan maximizar el rendimiento de nuestros clientes mientras crean valor sostenible.",
                "import-export": "Importación & Exportación",
                "models-hostesses": "Modelos & Azafatas",
                "consulting": "Consultoría",
                "representation": "Representación",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "Reserva",
                "partners-title": "Nuestros socios",
                "partners-text": "Aquí están nuestros diversos socios.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. Todos los derechos reservados.",
                "footer-developed-by": "Desarrollado por",
                "charte-ethique": "Código de Ética |",
                "internal-regulations": "Reglamento Interno | ",
                "general-policy": "Carta de Política General"
            },
        },
        de: {
            translation: {
                "home": "Startseite",
                "about": "Über uns",
                "status": "Status",
                "welcome": "Willkommen bei <span>General Consulting Group</span>",
                "welcome-text": "Wir sind bestrebt, eine hochqualifizierte Beratung anzubieten, um Unternehmen und Institutionen bei der Erreichung ihrer strategischen Ziele zu unterstützen. Unsere Lösungen, die entwickelt wurden, um den aktuellen Herausforderungen zu begegnen, zielen darauf ab, die Leistung unserer Kunden zu maximieren und gleichzeitig nachhaltigen Wert zu schaffen.",
                "import-export": "Import & Export",
                "models-hostesses": "Modelle & Hostessen",
                "consulting": "Beratung",
                "representation": "Vertretung",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "Buchung",
                "partners-title": "Unsere Partner",
                "partners-text": "Hier sind unsere verschiedenen Partner.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. Alle Rechte vorbehalten.",
                "footer-developed-by": "Entwickelt von",
                "charte-ethique": "Verhaltenskodex | ",
                "internal-regulations": "Internes Regelwerk | ",
                "general-policy": "Allgemeine Politikcharta"
            },
        },
        zh: {
            translation: {
                "home": "首页",
                "about": "关于我们",
                "status": "状态",
                "welcome": "欢迎来到 <span>General Consulting Group</span>",
                "welcome-text": "我们致力于提供高水平的咨询专业知识，支持企业和机构实现其战略目标。我们的解决方案旨在应对当代挑战，旨在最大化客户的绩效，同时创造可持续的价值。",
                "import-export": "进出口",
                "models-hostesses": "模特 & 主持人",
                "consulting": "咨询",
                "representation": "代表",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "预定",
                "partners-title": "我们的合作伙伴",
                "partners-text": "以下是我们的各个合作伙伴。",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. 版权所有。",
                "footer-developed-by": "开发者",
                "charte-ethique": "道德规范 | ",
                "internal-regulations": "内部规定 | ",
                "general-policy": "总体政策章程"
            },
        },
        ru: {
            translation: {
                "home": "Главная",
                "about": "О нас",
                "status": "Статус",
                "welcome": "Добро пожаловать в <span>General Consulting Group</span>",
                "welcome-text": "Мы стремимся предоставлять консультационные услуги высокого уровня, чтобы поддержать бизнес и учреждения в достижении их стратегических целей. Наши решения, разработанные для решения современных проблем, направлены на максимизацию производительности наших клиентов при создании устойчивой ценности.",
                "import-export": "Импорт & Экспорт",
                "models-hostesses": "Модели & Хостессы",
                "consulting": "Консалтинг",
                "representation": "Представительство",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "Бронирование",
                "partners-title": "Наши партнеры",
                "partners-text": "Вот наши различные партнеры.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. Все права защищены.",
                "footer-developed-by": "Разработано",
                "charte-ethique": "Этический кодекс | ",
                "internal-regulations": "Внутренние правила | ",
                "general-policy": "Основные положения политики"
            },
        },
        ar: {
            translation: {
                "home": "الصفحة الرئيسية",
                "about": "من نحن",
                "status": "الحالة",
                "welcome": "مرحبًا بكم في <span>General Consulting Group</span>",
                "welcome-text": "نحن ملتزمون بتقديم خبرة عالية المستوى في الاستشارات لدعم الشركات والمؤسسات في تحقيق أهدافها الاستراتيجية. حلولنا، المصممة للتصدي للتحديات المعاصرة، تهدف إلى زيادة أداء عملائنا مع خلق قيمة مستدامة.",
                "import-export": "استيراد & تصدير",
                "models-hostesses": "نماذج & مضيفات",
                "consulting": "استشارات",
                "representation": "تمثيل",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "حجز",
                "partners-title": "شركاؤنا",
                "partners-text": "إليك شركاؤنا المختلفون.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. جميع الحقوق محفوظة.",
                "footer-developed-by": "تم تطويره بواسطة",
                "charte-ethique": "مدونة الأخلاقيات | ",
                "internal-regulations": "اللائحة الداخلية | ",
                "general-policy": "السياسة العامة"
            },
        },
        pt: {
            translation: {
                "home": "Início",
                "about": "Sobre",
                "status": "Status",
                "welcome": "Bem-vindo ao <span>General Consulting Group</span>",
                "welcome-text": "Estamos comprometidos em fornecer expertise de alto nível em consultoria para apoiar empresas e instituições a alcançar seus objetivos estratégicos. Nossas soluções, projetadas para enfrentar os desafios contemporâneos, visam maximizar o desempenho dos nossos clientes, criando valor sustentável.",
                "import-export": "Importação & Exportação",
                "models-hostesses": "Modelos & Hostess",
                "consulting": "Consultoria",
                "representation": "Representação",
                "softcreatix": "Softcreatix",
                "penja-peppers": "Penja Peppers",
                "booking": "Reserva",
                "partners-title": "Nossos Parceiros",
                "partners-text": "Aqui estão nossos diversos parceiros.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. Todos os direitos reservados.",
                "footer-developed-by": "Desenvolvido por",
                "charte-ethique": "Código de Ética | ",
                "internal-regulations": "Regulamento Interno | ",
                "general-policy": "Carta Política Geral"
            },
        }
    }
}, function(err, t) {
    if (err) return console.error(err);
    // Met à jour les traductions
    updateContent();
});

// Met à jour le contenu de la page en fonction de la langue actuelle
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

// Fonction pour changer la langue via le select
document.querySelector('#language-select').addEventListener('change', function(e) {
    i18next.changeLanguage(e.target.value, function(err, t) {
        if (err) return console.error(err);
        updateContent();
    });
});


  
