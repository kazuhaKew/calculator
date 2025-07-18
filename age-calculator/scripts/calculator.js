class AgeCalculator {
    constructor() {
        this.initializeElements();
        this.setMaxDate();
        this.loadSavedData();
        this.attachEventListeners();
        this.initializeTheme();
    }

    initializeElements() {
        this.birthDateInput = document.getElementById('birthDate');
        this.calculateBtn = document.getElementById('calculateBtn');
        this.resultsSection = document.getElementById('resultsSection');
        this.ageDisplay = document.getElementById('ageDisplay');
        this.breakdown = document.getElementById('breakdown');
        this.countdown = document.getElementById('countdown');
        this.personalInfo = document.getElementById('personalInfo');
        this.funFacts = document.getElementById('funFacts');
        this.lifeStats = document.getElementById('lifeStats');
        this.themeToggle = document.getElementById('themeToggle');
        this.shareBtn = document.getElementById('shareBtn');
        this.printBtn = document.getElementById('printBtn');
        this.resetBtn = document.getElementById('resetBtn');
    }

    setMaxDate() {
        const today = new Date().toISOString().split('T')[0];
        this.birthDateInput.max = today;
    }

    loadSavedData() {
        const savedDate = localStorage.getItem('birthDate');
        if (savedDate) {
            this.birthDateInput.value = savedDate;
        }
    }

    attachEventListeners() {
        this.calculateBtn.addEventListener('click', () => this.calculateAge());
        this.birthDateInput.addEventListener('change', () => this.calculateAge());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.shareBtn.addEventListener('click', () => this.shareResults());
        this.printBtn.addEventListener('click', () => this.printResults());
        this.resetBtn.addEventListener('click', () => this.resetCalculator());
        
        // Real-time calculation as user types
        this.birthDateInput.addEventListener('input', () => {
            if (this.birthDateInput.value) {
                this.calculateAge();
            }
        });
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }

    calculateAge() {
        const birthDate = new Date(this.birthDateInput.value);
        
        if (!this.birthDateInput.value || isNaN(birthDate)) {
            this.hideResults();
            return;
        }

        const now = new Date();
        
        if (birthDate > now) {
            alert('Birth date cannot be in the future!');
            return;
        }

        localStorage.setItem('birthDate', this.birthDateInput.value);
        
        const ageData = this.calculateDetailedAge(birthDate, now);
        this.displayResults(ageData, birthDate);
        this.showResults();
    }

    calculateDetailedAge(birthDate, currentDate) {
        const totalMilliseconds = currentDate - birthDate;
        
        // Calculate exact age
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Calculate various time units
        const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
        const totalMinutes = Math.floor(totalMilliseconds / (1000 * 60));
        const totalSeconds = Math.floor(totalMilliseconds / 1000);

        // Calculate next birthday
        const nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday < currentDate) {
            nextBirthday.setFullYear(currentDate.getFullYear() + 1);
        }
        const daysToNextBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

        return {
            years,
            months,
            days,
            totalDays,
            totalWeeks,
            totalHours,
            totalMinutes,
            totalSeconds,
            nextBirthday,
            daysToNextBirthday,
            birthDate
        };
    }

    getZodiacSign(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        const signs = [
            { name: 'Capricorn', start: [12, 22], end: [1, 19] },
            { name: 'Aquarius', start: [1, 20], end: [2, 18] },
            { name: 'Pisces', start: [2, 19], end: [3, 20] },
            { name: 'Aries', start: [3, 21], end: [4, 19] },
            { name: 'Taurus', start: [4, 20], end: [5, 20] },
            { name: 'Gemini', start: [5, 21], end: [6, 20] },
            { name: 'Cancer', start: [6, 21], end: [7, 22] },
            { name: 'Leo', start: [7, 23], end: [8, 22] },
            { name: 'Virgo', start: [8, 23], end: [9, 22] },
            { name: 'Libra', start: [9, 23], end: [10, 22] },
            { name: 'Scorpio', start: [10, 23], end: [11, 21] },
            { name: 'Sagittarius', start: [11, 22], end: [12, 21] }
        ];

        for (const sign of signs) {
            if (sign.name === 'Capricorn') {
                if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                    return sign.name;
                }
            } else {
                const [startMonth, startDay] = sign.start;
                const [endMonth, endDay] = sign.end;
                if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                    return sign.name;
                }
            }
        }
        return 'Unknown';
    }

    getDayOfWeek(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    displayResults(ageData, birthDate) {
        // Main age display
        this.ageDisplay.innerHTML = `
            <div>${ageData.years} years</div>
            <div style="font-size: 1rem; opacity: 0.8;">${ageData.months} months, ${ageData.days} days</div>
        `;

        // Detailed breakdown
        this.breakdown.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Years</span>
                <span class="stat-value">${ageData.years.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Months</span>
                <span class="stat-value">${(ageData.years * 12 + ageData.months).toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Weeks</span>
                <span class="stat-value">${ageData.totalWeeks.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Days</span>
                <span class="stat-value">${ageData.totalDays.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Hours</span>
                <span class="stat-value">${ageData.totalHours.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Minutes</span>
                <span class="stat-value">${ageData.totalMinutes.toLocaleString()}</span>
            </div>
        `;

        // Next birthday countdown
        const nextBirthdayFormatted = ageData.nextBirthday.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        this.countdown.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Next Birthday</span>
                <span class="stat-value">${nextBirthdayFormatted}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Days Remaining</span>
                <span class="stat-value">${ageData.daysToNextBirthday}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">You'll Turn</span>
                <span class="stat-value">${ageData.years + 1} years old</span>
            </div>
        `;

        // Personal information
        const zodiacSign = this.getZodiacSign(birthDate);
        const dayOfWeek = this.getDayOfWeek(birthDate);
        const isLeapYear = this.isLeapYear(birthDate.getFullYear());

        this.personalInfo.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Zodiac Sign</span>
                <span class="stat-value">${zodiacSign}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Born On</span>
                <span class="stat-value">${dayOfWeek}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Birth Year</span>
                <span class="stat-value">${birthDate.getFullYear()} ${isLeapYear ? '(Leap Year)' : ''}</span>
            </div>
        `;

        // Fun facts
        const heartbeats = Math.floor(ageData.totalMinutes * 75); // Average 75 bpm
        const breaths = Math.floor(ageData.totalMinutes * 16); // Average 16 breaths per minute
        const sleepHours = Math.floor(ageData.totalHours * 0.33); // About 1/3 of life sleeping

        this.funFacts.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Estimated Heartbeats</span>
                <span class="stat-value">${heartbeats.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Estimated Breaths</span>
                <span class="stat-value">${breaths.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Time Spent Sleeping</span>
                <span class="stat-value">${sleepHours.toLocaleString()} hours</span>
            </div>
        `;

        // Life statistics
        const generation = this.getGeneration(birthDate.getFullYear());
        const ageGroup = this.getAgeGroup(ageData.years);

        this.lifeStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Generation</span>
                <span class="stat-value">${generation}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Age Group</span>
                <span class="stat-value">${ageGroup}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Life Percentage</span>
                <span class="stat-value">${Math.min(100, Math.round((ageData.years / 80) * 100))}%</span>
            </div>
        `;
    }

    getGeneration(birthYear) {
        if (birthYear >= 2010) return 'Generation Alpha';
        if (birthYear >= 1997) return 'Generation Z';
        if (birthYear >= 1981) return 'Millennial';
        if (birthYear >= 1965) return 'Generation X';
        if (birthYear >= 1946) return 'Baby Boomer';
        return 'Silent Generation';
    }

    getAgeGroup(years) {
        if (years < 2) return 'Infant';
        if (years < 13) return 'Child';
        if (years < 20) return 'Teenager';
        if (years < 60) return 'Adult';
        return 'Senior';
    }

    showResults() {
        this.resultsSection.style.display = 'block';
        this.resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    hideResults() {
        this.resultsSection.style.display = 'none';
    }

    shareResults() {
        const birthDate = this.birthDateInput.value;
        const ageData = this.calculateDetailedAge(new Date(birthDate), new Date());
        
        const shareText = `I'm ${ageData.years} years, ${ageData.months} months, and ${ageData.days} days old! That's ${ageData.totalDays.toLocaleString()} days of amazing life! 🎉`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My Age Calculation',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText + '\n\nCalculate your age at: ' + window.location.href);
            alert('Results copied to clipboard!');
        }
    }

    printResults() {
        window.print();
    }

    resetCalculator() {
        this.birthDateInput.value = '';
        this.hideResults();
        localStorage.removeItem('birthDate');
        this.birthDateInput.focus();
    }

    // Make sure to update your existing functions to use translations
    // For example, if you have a function that displays age in years, months and days:

    updateCalculationDisplay() {
        // Example of using translations in dynamic content
        const years = 25; // Example value
        const months = 6; // Example value
        const days = 15; // Example value
        
        const yearsText = this.getTranslation('years');
        const monthsText = this.getTranslation('months');
        const daysText = this.getTranslation('days');
        
        document.getElementById('ageDisplay').innerHTML = 
            `${years} ${yearsText}, ${months} ${monthsText}, ${days} ${daysText}`;
        
        // Update other elements with translations as needed
        // ...
    }
}

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new AgeCalculator();
    const birthDateInput = document.getElementById('birthDate');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsSection = document.getElementById('resultsSection');
    const resetBtn = document.getElementById('resetBtn');
    const shareBtn = document.getElementById('shareBtn');
    const printBtn = document.getElementById('printBtn');
    const themeToggle = document.getElementById('themeToggle');

    // Set max date to today
    birthDateInput.max = new Date().toISOString().split('T')[0];

    let calculationData = null;

    calculateBtn.addEventListener('click', calculateAge);
    resetBtn.addEventListener('click', resetCalculator);
    shareBtn.addEventListener('click', shareResults);
    printBtn.addEventListener('click', printResults);
    themeToggle.addEventListener('click', toggleTheme);

    function calculateAge() {
        const birthDate = new Date(birthDateInput.value);
        if (!birthDateInput.value) {
            alert('Please enter your birth date');
            return;
        }

        if (birthDate > new Date()) {
            alert('Birth date cannot be in the future');
            return;
        }

        calculationData = performCalculations(birthDate);
        displayResults();
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function performCalculations(birthDate) {
        const now = new Date();
        const timeDiff = now - birthDate;
        
        // Basic age calculation
        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        // Total calculations
        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
        const totalMinutes = Math.floor(timeDiff / (1000 * 60));
        const totalSeconds = Math.floor(timeDiff / 1000);

        // Next birthday
        const nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday <= now) {
            nextBirthday.setFullYear(now.getFullYear() + 1);
        }
        const daysUntilBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));

        // Zodiac sign
        const zodiacSign = getZodiacSign(birthDate);

        // Day of week born
        const dayOfWeek = getDayOfWeek(birthDate);

        // Life statistics
        const sleepYears = Math.floor(years / 3);
        const sleepDays = Math.floor(totalDays / 3);
        const heartbeats = totalMinutes * 70; // Average 70 beats per minute
        const breaths = totalMinutes * 15; // Average 15 breaths per minute

        return {
            years, months, days,
            totalDays, totalHours, totalMinutes, totalSeconds,
            daysUntilBirthday, nextBirthday,
            zodiacSign, dayOfWeek,
            sleepYears, sleepDays, heartbeats, breaths
        };
    }

    function displayResults() {
        updateCalculationDisplay();
    }

    function updateCalculationDisplay() {
        if (!calculationData) return;

        const { years, months, days, totalDays, totalHours, totalMinutes, totalSeconds,
                daysUntilBirthday, nextBirthday, zodiacSign, dayOfWeek,
                sleepYears, sleepDays, heartbeats, breaths } = calculationData;

        // Main age display
        document.getElementById('ageDisplay').innerHTML = 
            getTranslation('ageDisplay', { years, months, days });

        // Detailed breakdown
        document.getElementById('breakdown').innerHTML = `
            <p>${getTranslation('totalDays', { days: totalDays.toLocaleString() })}</p>
            <p>${getTranslation('totalHours', { hours: totalHours.toLocaleString() })}</p>
            <p>${getTranslation('totalMinutes', { minutes: totalMinutes.toLocaleString() })}</p>
            <p>${getTranslation('totalSeconds', { seconds: totalSeconds.toLocaleString() })}</p>
        `;

        // Next birthday countdown
        document.getElementById('countdown').innerHTML = `
            <p>${getTranslation('daysUntilBirthday', { days: daysUntilBirthday })}</p>
            <p>${getTranslation('nextBirthdayDate', { date: nextBirthday.toLocaleDateString() })}</p>
        `;

        // Personal info
        document.getElementById('personalInfo').innerHTML = `
            <p>${getTranslation('zodiacSign', { sign: getTranslation(zodiacSign) })}</p>
            <p>${getTranslation('dayOfWeek', { day: getTranslation(dayOfWeek) })}</p>
        `;

        // Fun facts
        document.getElementById('funFacts').innerHTML = `
            <p>${getTranslation('sleepTime', { years: sleepYears, days: sleepDays })}</p>
            <p>${getTranslation('heartbeats', { beats: heartbeats.toLocaleString() })}</p>
            <p>${getTranslation('breathsTaken', { breaths: breaths.toLocaleString() })}</p>
        `;

        // Life statistics
        document.getElementById('lifeStats').innerHTML = `
            <div class="stat-item">
                <span class="stat-number">${years}</span>
                <span class="stat-label">${getTranslation('years')}</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${totalDays.toLocaleString()}</span>
                <span class="stat-label">${getTranslation('days')}</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${Math.floor(heartbeats / 1000000)}M</span>
                <span class="stat-label">Heartbeats</span>
            </div>
        `;
    }

    function getZodiacSign(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 'aries';
        if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 'taurus';
        if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'gemini';
        if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'cancer';
        if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 'leo';
        if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 'virgo';
        if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 'libra';
        if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 'scorpio';
        if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 'sagittarius';
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 'capricorn';
        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 'aquarius';
        return 'pisces';
    }

    function getDayOfWeek(date) {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[date.getDay()];
    }

    function resetCalculator() {
        birthDateInput.value = '';
        resultsSection.style.display = 'none';
        calculationData = null;
    }

    function shareResults() {
        if (!calculationData) return;
        
        const { years, months, days } = calculationData;
        const text = `I'm ${years} years, ${months} months, and ${days} days old! Calculate your age at: ${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({ text });
        } else {
            navigator.clipboard.writeText(text);
            alert('Results copied to clipboard!');
        }
    }

    function printResults() {
        window.print();
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    window.updateCalculationDisplay = updateCalculationDisplay;
});
