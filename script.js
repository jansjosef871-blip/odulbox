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
    }
};

let userLang = navigator.language || navigator.userLanguage || "en"; 
userLang = userLang.substring(0, 2);
if (!languages[userLang]) { userLang = 'en'; }
const lang = languages[userLang];

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
    const amount = parseFloat(amountString.replace(" $", ""));
    loggedInUser.balance += amount;
    localStorage.setItem('odulbox_current_user', JSON.stringify(loggedInUser));

    let allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    allUsers = allUsers.map(user => {
        if(user.email === loggedInUser.email) { user.balance = loggedInUser.balance; }
        return user;
    });
    localStorage.setItem('odulbox_users', JSON.stringify(allUsers));
    updateUIForLoggedInUser();
}

// GÜVENLİ VE TARAYICI ENGELİNİ AŞAN REKLAM TETİKLEYİCİLERİ
if(document.getElementById('btn-task-1')) {
    document.getElementById('btn-task-1').addEventListener('click', () => {
        if(!loggedInUser) { alert(userLang === 'tr' ? "Önce giriş yapmalısınız!" : "You must login first!"); return; }
        alert(userLang === 'tr' ? "Görev açılıyor... Lütfen açılan sayfadaki adımları takip edin!" : "Opening task... Please follow the steps on the opened page!");
        
        // Tarayıcı engelleyicileri aşan evrensel yönlendirme metodu
        const link = document.createElement('a');
        link.href = "https://uplcm.com";
        link.target = "_blank";
        link.click();
        
        setTimeout(() => {
            saveWinToBalance("0.05 $");
            alert(userLang === 'tr' ? "Görev Başarılı! +0.05$" : "Task Success! +0.05$");
        }, 1500);
    });
}

if(document.getElementById('btn-task-2')) {
    document.getElementById('btn-task-2').addEventListener('click', () => {
        if(!loggedInUser) { alert(userLang === 'tr' ? "Önce giriş yapmalısınız!" : "You must login first!"); return; }
        alert(userLang === 'tr' ? "Video açılıyor... Lütfen açılan reklamı kapatmayın!" : "Opening video... Please do not close the opened ad!");
        
        const link = document.createElement('a');
        link.href = "https://uplcm.com";
        link.target = "_blank";
        link.click();
        
        setTimeout(() => {
            saveWinToBalance("0.10 $");
            alert(userLang === 'tr' ? "Görev Başarılı! +0.10$" : "Task Success! +0.10$");
        }, 1500);
    });
}

function handleWithdraw(minAmount, method) {
    if(!loggedInUser) { alert(userLang === 'tr' ? "Önce giriş yapmalısınız!" : "You must login first!"); return; }
    if(loggedInUser.balance < minAmount) {
        alert(userLang === 'tr' ? `Yetersiz bakiye! Bu ödül için en az ${minAmount}$ biriktirmelisiniz.` : `Insufficient balance! You need at least ${minAmount}$ for this reward.`);
    } else {
        loggedInUser.balance -= minAmount;
        localStorage.setItem('odulbox_current_user', JSON.stringify(loggedInUser));
        
        let allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
        allUsers = allUsers.map(user => {
            if(user.email === loggedInUser.email) { user.balance = loggedInUser.balance; }
            return user;
        });
        localStorage.setItem('odulbox_users', JSON.stringify(allUsers));
        updateUIForLoggedInUser();
        alert(userLang === 'tr' ? `Tebrikler! ${minAmount}$ değerindeki ${method} talebiniz alındı. 24 saat içinde gönderilecektir.` : `Success! Your ${minAmount}$ ${method} request has been received. Will be processed within 24 hours.`);
    }
}

if(document.getElementById('btn-draw-1')) document.getElementById('btn-draw-1').addEventListener('click', () => { handleWithdraw(5.00, "PayPal / Papara"); });
