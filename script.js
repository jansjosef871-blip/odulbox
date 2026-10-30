// 1. GLOBAL DİL PAKETİ
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

// Tarayıcı kilitlenmelerini önleyen Güvenli Dil Uygulayıcıfonksiyon
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
        console.log("Dil yükleme atlandı, çark etkilenmedi:", err);
    }
}

// GİRİŞ / KAYIT / ÇIKIŞ SEKANSLARI
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

if(document.getElementById('btn-task-1')) {
    document.getElementById('btn-task-1').addEventListener('click', () => {
        if(!loggedInUser) { alert(userLang === 'tr' ? "Önce giriş yapmalısınız!" : "You must login first!"); return; }
        saveWinToBalance("0.05 $");
        alert(userLang === 'tr' ? "Görev tamamlandı! +0.05 $ bakiyenize eklendi." : "Task completed! +0.05 $ added to your balance.");
    });
}

if(document.getElementById('btn-task-2')) {
    document.getElementById('btn-task-2').addEventListener('click', () => {
        if(!loggedInUser) { alert(userLang === 'tr' ? "Önce giriş yapmalısınız!" : "You must login first!"); return; }
        saveWinToBalance("0.10 $");
        alert(userLang === 'tr' ? "Görev tamamlandı! +0.10 $ bakiyenize eklendi." : "Task completed! +0.10 $ added to your balance.");
    });
}

// ÖDÜL ÇEKME TALEPLERİ
function handleWithdraw(minAmount, rewardName) {
    if(!loggedInUser) {
        alert(userLang === 'tr' ? "Önce giriş yapmalısınız!" : "You must login first!");
        return;
    }
    if(loggedInUser.balance < minAmount) {
        alert(userLang === 'tr'
            ? `${rewardName} için minimum ${minAmount.toFixed(2)} $ bakiye gereklidir. Mevcut bakiye: ${loggedInUser.balance.toFixed(2)} $`
            : `Minimum ${minAmount.toFixed(2)} $ balance required for ${rewardName}. Current balance: ${loggedInUser.balance.toFixed(2)} $`);
        return;
    }
    alert(userLang === 'tr'
        ? "Talebiniz alındı! Ödülünüz 24-48 saat içinde işlenecektir."
        : "Your request has been received! Your reward will be processed within 24-48 hours.");
}

if(document.getElementById('btn-draw-1')) {
    document.getElementById('btn-draw-1').addEventListener('click', () => handleWithdraw(5.00, "PayPal / Papara"));
}
if(document.getElementById('btn-draw-2')) {
    document.getElementById('btn-draw-2').addEventListener('click', () => handleWithdraw(10.00, "Steam Wallet"));
}

// ============================================
// ŞANS ÇARKI (WHEEL) MANTIĞI
// ============================================
const wheelCanvas = document.getElementById('wheel');
const spinButton = document.getElementById('spin-btn');

const wheelSegments = [
    { label: "0.01 $", value: 0.01, color: "#FF6B6B" },
    { label: "0.05 $", value: 0.05, color: "#4ECDC4" },
    { label: "0.02 $", value: 0.02, color: "#FFD93D" },
    { label: "0.10 $", value: 0.10, color: "#6BCB77" },
    { label: "0.01 $", value: 0.01, color: "#FF8C42" },
    { label: "0.20 $", value: 0.20, color: "#9B5DE5" },
    { label: "0.03 $", value: 0.03, color: "#00B4D8" },
    { label: "0.50 $", value: 0.50, color: "#F72585" }
];

const segmentAngle = (Math.PI * 2) / wheelSegments.length;
let currentRotation = 0;
let isSpinning = false;

function drawWheel() {
    if(!wheelCanvas) return;
    const ctx = wheelCanvas.getContext('2d');
    const centerX = wheelCanvas.width / 2;
    const centerY = wheelCanvas.height / 2;
    const radius = wheelCanvas.width / 2 - 5;

    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

    wheelSegments.forEach((segment, index) => {
        const startAngle = index * segmentAngle;
        const endAngle = startAngle + segmentAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = segment.color;
        ctx.fill();
        ctx.strokeStyle = "#1a1a2e";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Segment etiketi
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 18px Arial";
        ctx.fillText(segment.label, radius - 15, 6);
        ctx.restore();
    });

    // Merkez daire
    ctx.beginPath();
    ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
    ctx.fillStyle = "#1a1a2e";
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🎁", centerX, centerY + 7);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function spinWheel() {
    if(isSpinning) return;
    if(!loggedInUser) {
        alert(userLang === 'tr' ? "Çarkı çevirmek için giriş yapmalısınız!" : "You must login to spin the wheel!");
        if(modal) modal.style.display = "flex";
        return;
    }

    isSpinning = true;
    spinButton.disabled = true;
    spinButton.style.opacity = "0.6";

    const spins = 5 + Math.floor(Math.random() * 3); // 5-7 tam tur
    const randomAngle = Math.random() * Math.PI * 2;
    const targetRotation = currentRotation + (spins * Math.PI * 2) + randomAngle;
    const duration = 5000; // 5 saniye
    const startRotation = currentRotation;
    const startTime = performance.now();

    function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        currentRotation = startRotation + (targetRotation - startRotation) * eased;
        if(wheelCanvas) {
            wheelCanvas.style.transform = `rotate(${currentRotation}rad)`;
        }

        if(progress < 1) {
            requestAnimationFrame(animate);
        } else {
            isSpinning = false;
            spinButton.disabled = false;
            spinButton.style.opacity = "1";

            // İşaretçi üstte (0 rad) olduğu için kazanan segmenti hesapla
            // Canvas dönüşü saat yönünde, işaretçi yukarıda: normalize et
            let pointerAngle = (Math.PI * 2 - (currentRotation % (Math.PI * 2))) % (Math.PI * 2);
            if(pointerAngle < 0) pointerAngle += Math.PI * 2;
            const winningIndex = Math.floor(pointerAngle / segmentAngle) % wheelSegments.length;
            const won = wheelSegments[winningIndex];

            saveWinToBalance(`${won.value.toFixed(2)} $`);
            alert(`${lang.winAlert} ${won.label} 🎉`);
        }
    }

    requestAnimationFrame(animate);
}

if(spinButton) spinButton.addEventListener('click', spinWheel);

// SAYFA YÜKLENDİĞİNDE BAŞLAT
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    drawWheel();
    updateUIForLoggedInUser();
});

// Script body sonunda yüklendiyse de garantiye al (script body'nin sonunda olduğu için DOM hazırdır)
applyTranslations();
drawWheel();
updateUIForLoggedInUser();
