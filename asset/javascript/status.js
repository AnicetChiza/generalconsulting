// Initialisation de i18next avec les traductions
i18next.init({
    lng: 'fr', // Langue par défaut
    resources: {
        fr: {
            translation: {
                "home": "Accueil",
                "about": "À propos",
                "status": "Statut",
                title: "Visualisez",
                highlight: "nos résultats",
                description: "Nous offrons des solutions stratégiques pour accompagner entreprises et institutions à atteindre leurs objectifs et maximiser leurs performances.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. All rights reserved.",
                "footer-developed-by": "Developed by",
                "charte-ethique": "Charte d'éthique | ",
                "internal-regulations": "Réglement intérieur | ",
                "general-policy": "Politique générale de charte"
            }
        },
        en: {
            translation: {
                "home": "Home",
                "about": "About",
                "status": "Status",
                title: "Visualize",
                highlight: "our results",
                description: "We offer strategic solutions to help businesses and institutions achieve their goals and maximize their performance.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. All rights reserved.",
                "footer-developed-by": "Developed by",
                "charte-ethique": "Code of Ethics | ",
                "internal-regulations": "Internal Regulations | ",
                "general-policy": "General Policy Charter"
            }
        },

        es: {
            translation: {
                "home": "Inicio",
                "about": "Acerca de",
                "status": "Estado",
                title: "Visualiza",
                highlight: "nuestros resultados",
                description: "Ofrecemos soluciones estratégicas para ayudar a empresas e instituciones a alcanzar sus objetivos y maximizar su rendimiento.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. Todos los derechos reservados.",
                "footer-developed-by": "Desarrollado por",
                "charte-ethique": "Código de Ética |",
                "internal-regulations": "Reglamento Interno | ",
                "general-policy": "Carta de Política General"
            }
        },
        de: {
            translation: {
                "home": "Startseite",
                "about": "Über uns",
                "status": "Status",
                title: "Visualisieren",
                highlight: "unsere Ergebnisse",
                description: "Wir bieten strategische Lösungen, um Unternehmen und Institutionen zu helfen, ihre Ziele zu erreichen und ihre Leistung zu maximieren.",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. Alle Rechte vorbehalten.",
                "footer-developed-by": "Entwickelt von",
                "charte-ethique": "Verhaltenskodex | ",
                "internal-regulations": "Internes Regelwerk | ",
                "general-policy": "Allgemeine Politikcharta"
            }
        },
        zh: {
            translation: {
                "home": "主页",
                "about": "关于我们",
                "status": "状态",
                title: "可视化",
                highlight: "我们的成果",
                description: "我们提供战略性解决方案，帮助企业和机构实现目标并最大化其绩效。",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. 版权所有。",
                "footer-developed-by": "开发者",
                "charte-ethique": "道德规范 | ",
                "internal-regulations": "内部规定 | ",
                "general-policy": "总体政策章程"
            }
        },


        ar: {
            translation: {
                "home": "الصفحة الرئيسية",
                "about": "من نحن",
                "status": "الحالة",
                title: "تصوّر",
                highlight: "نتائجنا",
                description: "نحن نقدم حلولاً استراتيجية لمساعدة الشركات والمؤسسات على تحقيق أهدافها وتعظيم أدائها.",
                "dateLabel": "تاريخ",
                "footer-text": "© 2024 GENERAL CONSULTING GROUP. جميع الحقوق محفوظة.",
                "footer-developed-by": "تم تطويره بواسطة",
                "charte-ethique": "مدونة الأخلاقيات | ",
                "internal-regulations": "اللائحة الداخلية | ",
                "general-policy": "السياسة العامة"
            }
        },

        "pt": {
        "translation": {
            "home": "Início",
            "about": "Sobre",
            "status": "Status",
            title: "Visualize",
            highlight: "nossos resultados",
            description: "Oferecemos soluções estratégicas para ajudar empresas e instituições a alcançar seus objetivos e maximizar seu desempenho.",
            "footer-text": "© 2024 GENERAL CONSULTING GROUP. Todos os direitos reservados.",
            "footer-developed-by": "Desenvolvido por",
            "charte-ethique": "Código de Ética | ",
            "internal-regulations": "Regulamento Interno | ",
            "general-policy": "Carta Política Geral"
            }
        },

        "ru": {
    "translation": {
        "home": "Главная",
        "about": "О нас",
        "status": "Статус",
        title: "Визуализируйте",
        highlight: "наши результаты",
        description: "Мы предлагаем стратегические решения, чтобы помочь компаниям и учреждениям достичь своих целей и максимизировать их эффективность.",
        "footer-text": "© 2024 GENERAL CONSULTING GROUP. Все права защищены.",
        "footer-developed-by": "Разработано",
        "charte-ethique": "Этический кодекс | ",
        "internal-regulations": "Внутренние правила | ",
        "general-policy": "Основные положения политики"
    }
}

  
        // Ajoutez d'autres langues ici si nécessaire
    }
}, function(err, t) {
    if (err) return console.error(err);

    // Mettre à jour les éléments après l'initialisation
    updateContent();
});

// Fonction pour mettre à jour le contenu
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

// Fonction pour changer la langue
document.getElementById('language-select').addEventListener('change', function(event) {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage, function() {
        updateContent();
    });
});
