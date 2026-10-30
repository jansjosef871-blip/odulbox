const languages = {
    tr: {
        welcome: "OdulBox'a Hoş Geldiniz!",
        subtitle: "Her gün çarkı çevirin, görevleri tamamlayın ve gerçek ödüller kazanın!",
        balance: "Bakiye: ",
        adTopTxt: "[Sponsorlu Reklam Bandı 728x90 - Reklam Verin]",
        adMidTxt: "[Yüksek Kazançlı Sponsorlu Reklam Alanı]",
        adSideTxt: "[🔥 REKLAM ALANI]",
        spinBtn: "ÇEVİR!",
        winAlert: "Tebrikler! Kazandığınız Ödül: ",
        authNavBtn: "Giriş Yap / Kayıt Ol",
        logoutBtnTxt: "Çıkış Yap",
        loginTitle: "Hesaba Giriş Yap",
        registerTitle: "Hesap Oluştur",
        noAccount: "Hesabınız yok mu?",
        haveAccount: "Zaten üye misiniz?",
        usernamePlh: "Kullanıcı Adı",
        tasksTitle: "Günlük Görevler",
        rewardsTitle: "Ödülünü Çek",
        taskInsta: "Instagram Hesabını Takip Et",
        taskYoutube: "30sn YouTube Videosu İzle",
        doTaskBtn: "Görevi Yap",
        claimBtn: "Talep Et"
    },
    en: {
        welcome: "Welcome to OdulBox!",
        subtitle: "Spin the wheel every day, complete tasks and win real rewards!",
        balance: "Balance: ",
        adTopTxt: "[Sponsored Banner 728x90 - Advertise Here]",
        adMidTxt: "[High Paying Sponsored Ad Space]",
        adSideTxt: "[🔥 AD SPACE]",
        spinBtn: "SPIN!",
        winAlert: "Congratulations! You won: " ,
        authNavBtn: "Login / Register",
        logoutBtnTxt: "Logout",
        loginTitle: "Login to Account",
        registerTitle: "Create Account",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?",
        usernamePlh: "Username",
        tasksTitle: "Daily Tasks",
        rewardsTitle: "Withdraw Rewards",
        taskInsta: "Follow Instagram Account",
        taskYoutube: "Watch 30s YouTube Video",
        doTaskBtn: "Do Task",
        claimBtn: "Claim"
    },
    de: {
        welcome: "Willkommen bei OdulBox!",
        subtitle: "Drehen Sie jeden Tag das Rad, erfüllen Sie Aufgaben und gewinnen Sie echte Belohnungen!",
        balance: "Kontostand: ",
        adTopTxt: "[Gesponserter Banner 728x90 - Hier werben]",
        adMidTxt: "[Hochbezahlter gesponserter Werbeplatz]",
        adSideTxt: "[🔥 WERBUNG]",
        spinBtn: "DREHEN!",
        winAlert: "Herzlichen Glückwunsch! Sie haben gewonnen: ",
        authNavBtn: "Einloggen / Registrieren",
        logoutBtnTxt: "Abmelden",
        loginTitle: "Anmelden",
        registerTitle: "Konto erstellen",
        noAccount: "Kein Konto?",
        haveAccount: "Bereits registriert?",
        usernamePlh: "Nutzername",
        tasksTitle: "Tägliche Aufgaben",
        rewardsTitle: "Belohnungen abheben",
        taskInsta: "Folgen Sie dem Instagram-Konto",
        taskYoutube: "Sehen Sie sich das 30-Sekunden-YouTube-Video an",
        doTaskBtn: "Aufgabe machen",
        claimBtn: "Anfordern"
    }
};

let userLang = navigator.language || navigator.userLanguage || "en"; 
userLang = userLang.substring(0, 2);
if (!languages[userLang]) { userLang = 'en'; }
const lang = languages[userLang];

function applyTranslations() {
    try {
        if(document.getElementById('txt-welcome')) document.getElementById('txt-welcome').innerText = lang.welcome;
        if(document.getElementById('txt-subtitle')) document.getElementById('txt-subtitle').innerText = lang.subtitle;
        if(document.getElementById('txt-balance')) document.getElementById('txt-balance').innerText = `${lang.balance} 0.00 $`;
        if(document.getElementById('txt-ad-top')) document.getElementById('txt-ad-top').innerText = lang.adTopTxt;
        if(document.getElementById('txt-ad-mid')) document.getElementById('txt-ad-mid').innerText = lang.adMidTxt;
        if(document.getElementById('txt-ad-left')) document.getElementById('txt-ad-left').innerText = lang.adSideTxt;
        if(document.getElementById('txt-ad-right')) document.getElementById('txt-ad-right').innerText = lang.adSideTxt;
        if(document.getElementById('spin-btn')) document.getElementById('spin-btn').innerText = lang.spinBtn;
        if(document.getElementById('auth-nav-btn')) document.getElementById('auth-nav-btn').innerText = lang.authNavBtn;
        if(document.getElementById('logout-btn')) document.getElementById('logout-btn').innerText = lang.logoutBtnTxt;
        if(document.getElementById('txt-login-title')) document.getElementById('txt-login-title').innerText = lang.loginTitle;
        if(document.getElementById('txt-register-title')) document.getElementById('txt-register-title').innerText = lang.registerTitle;
        if(document.getElementById('txt-no-account')) document.getElementById('txt-no-account').innerText = lang.noAccount;
        if(document.getElementById('txt-have-account')) document.getElementById('txt-have-account').innerText = lang.haveAccount;
        if(document.getElementById('reg-username')) document.getElementById('reg-username').placeholder = lang.usernamePlh;
        if(document.getElementById('txt-tasks-title')) document.getElementById('txt-tasks-title').innerText = lang.tasksTitle;
        if(document.getElementById('txt-rewards-title')) document.getElementById('txt-rewards-title').innerText = lang.rewardsTitle;
        
        let tBtns = document.querySelectorAll('.task-btn');
        tBtns.forEach(btn => btn.innerText = lang.doTaskBtn);
        let wBtns = document.querySelectorAll('.withdraw-btn');
        wBtns.forEach(btn => btn.innerText = lang.claimBtn);
    } catch(err) {
        console.log(err);
    }
}

const modal = document.getElementById("auth-modal");
const authNavBtn = document.getElementById("auth-nav-btn");
const logoutBtn = document.getElementById("logout-btn");
const closeBtn = document.querySelector(".close-btn");
const goToRegister = document.getElementById("go-to-register");
const goToLogin = document.getElementById("go-to-login");
const loginBox = document.getElementById("login-form-box");
const registerBox = document.getElementById("register-form-box");

let loggedInUser = JSON.parse(localStorage.getItem('odulbox_current_user')) || null;

function updateUIForLoggedInUser() {
    if (loggedInUser) {
        if(document.getElementById('txt-balance')) document.getElementById('txt-balance').innerText = `${lang.balance} ${loggedInUser.balance.toFixed(2)} $`;
        if(authNavBtn) {
            authNavBtn.innerText = loggedInUser.username;
            authNavBtn.style.pointerEvents = "none";
        }
        if(logoutBtn) logoutBtn.style.display = "block";
    } else {
        if(document.getElementById('txt-balance')) document.getElementById('txt-balance').innerText = `${lang.balance} 0.00 $`;
        if(authNavBtn) {
            authNavBtn.innerText = lang.authNavBtn;
            authNavBtn.style.pointerEvents = "auto";
        }
        if(logoutBtn) logoutBtn.style.display = "none";
    }
}

if(authNavBtn) authNavBtn.onclick = function() { if(modal) modal.style.display = "flex"; }
if(closeBtn) closeBtn.onclick = function() { if(modal) modal.style.display = "none"; }
window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }

if(goToRegister) goToRegister.onclick = function(e) { e.preventDefault(); if(loginBox) loginBox.style.display = "none"; if(registerBox) registerBox.style.display = "block"; }
if(goToLogin) goToLogin.onclick = function(e) { e.preventDefault(); if(registerBox) registerBox.style.display = "none"; if(loginBox) loginBox.style.display = "block"; }

if(logoutBtn) logoutBtn.onclick = function() {
    localStorage.removeItem('odulbox_current_user');
    loggedInUser = null;
    updateUIForLoggedInUser();
    alert(userLang === 'tr' ? "Başarıyla çıkış yapıldı." : "Successfully logged out.");
};

if(document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        let allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
        if(allUsers.find(user => user.email === email)) {
            alert(userLang === 'tr' ? "Bu e-posta zaten kayıtlı!" : "Email already registered!");
            return;
        }

        const newUser = { username: username, email: email, password: password, balance: 0.00 };
        allUsers.push(newUser);
        localStorage.setItem('odulbox_users', JSON.stringify(allUsers));
        
        alert(userLang === 'tr' ? "Kayıt başarılı! Giriş yapabilirsiniz." : "Registration success! Please login.");
        if(registerBox) registerBox.style.display = "none";
        if(loginBox) loginBox.style.display = "block";
    });
}

if(document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        let allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
        const user = allUsers.find(user => user.email === email && user.password === password);

        if(user) {
            loggedInUser = user;
            localStorage.setItem('odulbox_current_user', JSON.stringify(loggedInUser));
            updateUIForLoggedInUser();
            if(modal) modal.style.display = "none";
            alert(userLang === 'tr' ? `Hoş geldin, ${user.username}!` : `Welcome, ${user.username}!`);
        } else {
            alert(userLang === 'tr' ? "Hatalı e-posta veya şifre!" : "Incorrect email or password!");
        }
    });
}

function saveWinToBalance(amountString) {
    if (!loggedInUser) {
        alert(userLang === 'tr' ? "Lütfen önce giriş yapın! Kazanç işlenmedi." : "Please login first! Earnings not saved.");
        return;
    }
