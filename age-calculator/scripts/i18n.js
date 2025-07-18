/**
 * Internationalization for Age Calculator
 * Supports: English (en), Russian (ru), and Uzbek (uz)
 */

// Language dictionaries
const translations = {
    en: {
        title: "Age Calculator",
        subtitle: "Discover your age in amazing detail",
        birthDateLabel: "Enter your birth date:",
        calculateBtn: "Calculate Age",
        yourAge: "Your Age",
        detailedBreakdown: "Detailed Breakdown",
        nextBirthday: "Next Birthday",
        personalInfo: "Personal Info",
        funFacts: "Fun Facts",
        lifeStatistics: "Life Statistics",
        shareBtn: "Share Results",
        printBtn: "Print",
        resetBtn: "Calculate Again",
        footer: "© 2025 Enhanced Age Calculator. Made with ❤️",
        // Add more translations for dynamic content in calculator.js
        years: "years",
        months: "months",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        daysUntilBirthday: "days until your next birthday",
        zodiacSign: "Your zodiac sign is",
        dayOfWeek: "You were born on a",
        ageInDays: "You've lived for",
        totalDays: "days",
        sleepTime: "You've probably slept for about",
        heartbeats: "Your heart has beaten approximately"
    },
    ru: {
        title: "Калькулятор возраста",
        subtitle: "Узнайте свой возраст в удивительных деталях",
        birthDateLabel: "Введите дату рождения:",
        calculateBtn: "Рассчитать возраст",
        yourAge: "Ваш возраст",
        detailedBreakdown: "Подробная разбивка",
        nextBirthday: "Следующий день рождения",
        personalInfo: "Личная информация",
        funFacts: "Интересные факты",
        lifeStatistics: "Жизненная статистика",
        shareBtn: "Поделиться результатами",
        printBtn: "Печать",
        resetBtn: "Рассчитать снова",
        footer: "© 2025 Расширенный калькулятор возраста. Сделано с ❤️",
        // Add more translations for dynamic content
        years: "лет",
        months: "месяцев",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд",
        daysUntilBirthday: "дней до вашего следующего дня рождения",
        zodiacSign: "Ваш знак зодиака",
        dayOfWeek: "Вы родились в",
        ageInDays: "Вы прожили",
        totalDays: "дней",
        sleepTime: "Вы, вероятно, проспали около",
        heartbeats: "Ваше сердце совершило примерно"
    },
    uz: {
        title: "Yosh kalkulyatori",
        subtitle: "Yoshingizni ajoyib tafsilotlarda kashf eting",
        birthDateLabel: "Tug'ilgan sanangizni kiriting:",
        calculateBtn: "Yoshni hisoblash",
        yourAge: "Sizning yoshingiz",
        detailedBreakdown: "Batafsil tahlil",
        nextBirthday: "Keyingi tug'ilgan kun",
        personalInfo: "Shaxsiy ma'lumot",
        funFacts: "Qiziqarli faktlar",
        lifeStatistics: "Hayot statistikasi",
        shareBtn: "Natijalar bilan ulashing",
        printBtn: "Chop etish",
        resetBtn: "Qayta hisoblash",
        footer: "© 2025 Kengaytirilgan yosh kalkulyatori. ❤️ bilan yaratilgan",
        // Add more translations for dynamic content
        years: "yil",
        months: "oy",
        days: "kun",
        hours: "soat",
        minutes: "daqiqa",
        seconds: "soniya",
        daysUntilBirthday: "kun keyingi tug'ilgan kuningizgacha",
        zodiacSign: "Sizning zodiak belgingiz",
        dayOfWeek: "Siz tug'ilgansiz",
        ageInDays: "Siz yashagansiz",
        totalDays: "kun",
        sleepTime: "Siz taxminan uxlagansiz",
        heartbeats: "Yuragingiz taxminan urgan"
    }
};

// Default language
let currentLanguage = 'en';

// Function to update all text content based on selected language
function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language "${lang}" is not supported.`);
        return;
    }
    
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Re-render calculation results if they exist
    if (window.updateCalculationDisplay && document.getElementById('resultsSection').style.display !== 'none') {
        window.updateCalculationDisplay();
    }
}

// Add event listeners to language buttons
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language based on stored preference or browser language
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = storedLang || (translations[browserLang] ? browserLang : 'en');
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });
    
    // Set initial language
    updateLanguage(initialLang);
});

// Expose translation function to be used in calculator.js
window.getTranslation = function(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
};

// Expose current language
window.getCurrentLanguage = function() {
    return currentLanguage;
};
