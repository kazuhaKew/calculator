/**
 * Internationalization for Age Calculator
 * Supports: English (en), Russian (ru), and Uzbek (uz)
 */

const translations = {
    en: {
        // Main interface
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
        
        // Time units
        years: "years",
        months: "months",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        
        // Dynamic content
        ageDisplay: "{years} years, {months} months, {days} days",
        totalDays: "Total days lived: {days}",
        totalHours: "Total hours: {hours}",
        totalMinutes: "Total minutes: {minutes}",
        totalSeconds: "Total seconds: {seconds}",
        daysUntilBirthday: "{days} days until your next birthday",
        nextBirthdayDate: "Next birthday: {date}",
        zodiacSign: "Zodiac sign: {sign}",
        dayOfWeek: "Born on: {day}",
        sleepTime: "Approximate sleep time: {years} years, {days} days",
        heartbeats: "Estimated heartbeats: {beats}",
        breathsTaken: "Approximate breaths: {breaths}",
        
        // Zodiac signs
        aries: "Aries",
        taurus: "Taurus",
        gemini: "Gemini",
        cancer: "Cancer",
        leo: "Leo",
        virgo: "Virgo",
        libra: "Libra",
        scorpio: "Scorpio",
        sagittarius: "Sagittarius",
        capricorn: "Capricorn",
        aquarius: "Aquarius",
        pisces: "Pisces",
        
        // Days of week
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
    },
    
    ru: {
        // Main interface
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
        
        // Time units
        years: "лет",
        months: "месяцев",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд",
        
        // Dynamic content
        ageDisplay: "{years} лет, {months} месяцев, {days} дней",
        totalDays: "Всего прожито дней: {days}",
        totalHours: "Всего часов: {hours}",
        totalMinutes: "Всего минут: {minutes}",
        totalSeconds: "Всего секунд: {seconds}",
        daysUntilBirthday: "{days} дней до вашего следующего дня рождения",
        nextBirthdayDate: "Следующий день рождения: {date}",
        zodiacSign: "Знак зодиака: {sign}",
        dayOfWeek: "Родились в: {day}",
        sleepTime: "Примерное время сна: {years} лет, {days} дней",
        heartbeats: "Примерное количество ударов сердца: {beats}",
        breathsTaken: "Примерное количество вдохов: {breaths}",
        
        // Zodiac signs
        aries: "Овен",
        taurus: "Телец",
        gemini: "Близнецы",
        cancer: "Рак",
        leo: "Лев",
        virgo: "Дева",
        libra: "Весы",
        scorpio: "Скорпион",
        sagittarius: "Стрелец",
        capricorn: "Козерог",
        aquarius: "Водолей",
        pisces: "Рыбы",
        
        // Days of week
        monday: "понедельник",
        tuesday: "вторник",
        wednesday: "среда",
        thursday: "четверг",
        friday: "пятница",
        saturday: "суббота",
        sunday: "воскресенье"
    },
    
    uz: {
        // Main interface
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
        
        // Time units
        years: "yil",
        months: "oy",
        days: "kun",
        hours: "soat",
        minutes: "daqiqa",
        seconds: "soniya",
        
        // Dynamic content
        ageDisplay: "{years} yil, {months} oy, {days} kun",
        totalDays: "Jami yashagan kunlar: {days}",
        totalHours: "Jami soatlar: {hours}",
        totalMinutes: "Jami daqiqalar: {minutes}",
        totalSeconds: "Jami soniyalar: {seconds}",
        daysUntilBirthday: "Keyingi tug'ilgan kuningizgacha {days} kun",
        nextBirthdayDate: "Keyingi tug'ilgan kun: {date}",
        zodiacSign: "Zodiak belgisi: {sign}",
        dayOfWeek: "Tug'ilgan kun: {day}",
        sleepTime: "Taxminiy uyqu vaqti: {years} yil, {days} kun",
        heartbeats: "Taxminiy yurak urishi: {beats}",
        breathsTaken: "Taxminiy nafas olish: {breaths}",
        
        // Zodiac signs
        aries: "Qo'y",
        taurus: "Buqa",
        gemini: "Egizaklar",
        cancer: "Qisqichbaqa",
        leo: "Arslon",
        virgo: "Parizod",
        libra: "Tarozi",
        scorpio: "Chayon",
        sagittarius: "O'qchi",
        capricorn: "Tog' echkisi",
        aquarius: "Qovg'a",
        pisces: "Baliq",
        
        // Days of week
        monday: "dushanba",
        tuesday: "seshanba",
        wednesday: "chorshanba",
        thursday: "payshanba",
        friday: "juma",
        saturday: "shanba",
        sunday: "yakshanba"
    }
};

let currentLanguage = 'en';

function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language "${lang}" is not supported.`);
        return;
    }
    
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    localStorage.setItem('preferredLanguage', lang);
    
    if (window.updateCalculationDisplay && document.getElementById('resultsSection').style.display !== 'none') {
        window.updateCalculationDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = storedLang || (translations[browserLang] ? browserLang : 'en');
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });
    
    updateLanguage(initialLang);
});

window.getTranslation = function(key, params = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;
    
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
};

window.getCurrentLanguage = function() {
    return currentLanguage;
};
