/* =========================================================
   OdulBox — script.js
   Dil / Çark / Auth / Referral / Gizli Admin / Monetag Kurulum
   ========================================================= */

// ============ 1. DİL PAKETİ (11 dil) ============
const languages = {
    tr: { welcome:"OdulBox'a Hoş Geldiniz!", subtitle:"Her gün çarkı çevirin, görevleri tamamlayın ve gerçek ödüller kazanın!", balance:"Bakiye: ", adTopTxt:"[Sponsorlu Reklam Bandı]", adMidTxt:"[Yüksek Kazançlı Reklam Alanı]", adSideTxt:"[🔥 REKLAM ALANI]", spinBtn:"ÇEVİR!", winAlert:"Tebrikler! Kazandığınız:", authNavBtn:"Giriş Yap / Kayıt Ol", logoutBtnTxt:"Çıkış Yap", loginTitle:"Hesaba Giriş Yap", registerTitle:"Hesap Oluştur", noAccount:"Hesabınız yok mu?", haveAccount:"Zaten üye misiniz?", usernamePlh:"Kullanıcı Adı", tasksTitle:"Günlük Görevler", rewardsTitle:"Ödülünü Çek", taskInsta:"Instagram Hesabını Takip Et", taskYoutube:"30sn YouTube Videosu İzle", doTaskBtn:"Görevi Yap", claimBtn:"Talep Et", referralTitle:"Davet Et & Kazan", referralDesc:"Linkini paylaş — her arkadaşın katıldığında bonus kazanç!", copyBtn:"Kopyala", linkCopied:"Davet linki kopyalandı! 🎉", referralPlaceholder:"Davet linkin için giriş yap", loginFirst:"Lütfen önce giriş yapın!", taskDone:"Görev tamamlandı!", addedBalance:"bakiyenize eklendi.", withdrawOK:"Talebiniz alındı! Ödülünüz 24-48 saat içinde işlenecektir.", withdrawFail:"Yetersiz bakiye! Gerekli:", spinLogin:"Çarkı çevirmek için giriş yapmalısınız!", invitedBy:"Davet edildin! Davet eden arkadaşına bonus verildi 🎉", refs:"davet", yourRefs:"Toplam davet: ", multiWin:"🎉 TEBRİKLER! Bugün zaten kazandın — yarın tekrar çevir ve 2x daha fazla kazan!" },
    en: { welcome:"Welcome to OdulBox!", subtitle:"Spin the wheel every day, complete tasks and win real rewards!", balance:"Balance: ", adTopTxt:"[SPONSORED BANNER]", adMidTxt:"[HIGH PAYING AD SPACE]", adSideTxt:"[🔥 AD SPACE]", spinBtn:"SPIN!", winAlert:"Congratulations! You won:", authNavBtn:"Login / Register", logoutBtnTxt:"Logout", loginTitle:"Login to Account", registerTitle:"Create Account", noAccount:"Don't have an account?", haveAccount:"Already have an account?", usernamePlh:"Username", tasksTitle:"Daily Tasks", rewardsTitle:"Withdraw Rewards", taskInsta:"Follow Instagram Account", taskYoutube:"Watch 30s YouTube Video", doTaskBtn:"Do Task", claimBtn:"Claim", referralTitle:"Invite & Earn", referralDesc:"Share your link — earn bonus every time a friend joins!", copyBtn:"Copy", linkCopied:"Referral link copied! 🎉", referralPlaceholder:"Login to get your referral link", loginFirst:"Please login first!", taskDone:"Task completed!", addedBalance:"added to your balance.", withdrawOK:"Request received! Reward processed in 24-48h.", withdrawFail:"Insufficient balance! Required:", spinLogin:"You must login to spin!", invitedBy:"You were invited! Your friend got a bonus 🎉", refs:"refs", yourRefs:"Total invites: ", multiWin:"🎉 CONGRATS! You already won today — spin tomorrow for 2x rewards!" },
    es: { welcome:"¡Bienvenido a OdulBox!", subtitle:"¡Gira la rueda cada día, completa tareas y gana recompensas reales!", balance:"Saldo: ", adTopTxt:"[BANNER PATROCINADO]", adMidTxt:"[ESPACIO PUBLICITARIO PREMIUM]", adSideTxt:"[🔥 ESPACIO PUBLICITARIO]", spinBtn:"¡GIRA!", winAlert:"¡Felicidades! Ganaste:", authNavBtn:"Iniciar sesión", logoutBtnTxt:"Salir", loginTitle:"Iniciar Sesión", registerTitle:"Crear Cuenta", noAccount:"¿No tienes cuenta?", haveAccount:"¿Ya tienes cuenta?", usernamePlh:"Usuario", tasksTitle:"Tareas Diarias", rewardsTitle:"Retirar Premios", taskInsta:"Seguir cuenta de Instagram", taskYoutube:"Ver video de 30s en YouTube", doTaskBtn:"Hacer Tarea", claimBtn:"Reclamar", referralTitle:"Invita y Gana", referralDesc:"¡Comparte tu enlace — gana bonos por cada amigo!", copyBtn:"Copiar", linkCopied:"¡Enlace copiado! 🎉", referralPlaceholder:"Inicia sesión para tu enlace", loginFirst:"¡Inicia sesión primero!", taskDone:"¡Tarea completada!", addedBalance:"añadido a tu saldo.", withdrawOK:"¡Solicitud recibida! Procesada en 24-48h.", withdrawFail:"Saldo insuficiente! Requerido:", spinLogin:"¡Debes iniciar sesión para girar!", invitedBy:"¡Fuiste invitado! Tu amigo recibió un bono 🎉", refs:"invitaciones", yourRefs:"Invitaciones totales: ", multiWin:"🎉 ¡FELICIDADES! Ya ganaste hoy — ¡vuelve mañana por 2x!" },
    de: { welcome:"Willkommen bei OdulBox!", subtitle:"Drehe jeden Tag das Rad, erledige Aufgaben und gewinne echte Prämien!", balance:"Guthaben: ", adTopTxt:"[WERBEBANNER]", adMidTxt:"[PREMIUM WERBEFLÄCHE]", adSideTxt:"[🔥 WERBEFLÄCHE]", spinBtn:"DREHEN!", winAlert:"Glückwunsch! Du hast gewonnen:", authNavBtn:"Anmelden / Registrieren", logoutBtnTxt:"Abmelden", loginTitle:"Anmelden", registerTitle:"Konto Erstellen", noAccount:"Noch kein Konto?", haveAccount:"Schon registriert?", usernamePlh:"Benutzername", tasksTitle:"Tägliche Aufgaben", rewardsTitle:"Prämien Abheben", taskInsta:"Instagram-Konto folgen", taskYoutube:"30s YouTube-Video ansehen", doTaskBtn:"Aufgabe Starten", claimBtn:"Anfordern", referralTitle:"Einladen & Verdienen", referralDesc:"Teile deinen Link — Bonus pro Freund!", copyBtn:"Kopieren", linkCopied:"Link kopiert! 🎉", referralPlaceholder:"Für deinen Link anmelden", loginFirst:"Bitte zuerst anmelden!", taskDone:"Aufgabe erledigt!", addedBalance:"zum Guthaben hinzugefügt.", withdrawOK:"Anfrage erhalten! Bearbeitung in 24-48h.", withdrawFail:"Unzureichendes Guthaben! Erforderlich:", spinLogin:"Zum Drehen bitte anmelden!", invitedBy:"Du wurdest eingeladen! Dein Freund erhielt einen Bonus 🎉", refs:"Einladungen", yourRefs:"Einladungen gesamt: ", multiWin:"🎉 GLÜCKWUNSCH! Du hast heute schon gewonnen — morgen 2x!" },
    fr: { welcome:"Bienvenue sur OdulBox !", subtitle:"Tournez la roue chaque jour, terminez des tâches et gagnez de vraies récompenses !", balance:"Solde : ", adTopTxt:"[BANNIÈRE SPONSORISÉE]", adMidTxt:"[ESPACE PUBLICITAIRE PREMIUM]", adSideTxt:"[🔥 ESPACE PUBLICITAIRE]", spinBtn:"TOURNER !", winAlert:"Félicitations ! Vous avez gagné :", authNavBtn:"Connexion / Inscription", logoutBtnTxt:"Déconnexion", loginTitle:"Se Connecter", registerTitle:"Créer un Compte", noAccount:"Pas de compte ?", haveAccount:"Déjà inscrit ?", usernamePlh:"Nom d'utilisateur", tasksTitle:"Tâches Quotidiennes", rewardsTitle:"Retirer Récompenses", taskInsta:"Suivre le compte Instagram", taskYoutube:"Regarder vidéo YouTube 30s", doTaskBtn:"Faire la Tâche", claimBtn:"Réclamer", referralTitle:"Inviter & Gagner", referralDesc:"Partagez votre lien — bonus par ami !", copyBtn:"Copier", linkCopied:"Lien copié ! 🎉", referralPlaceholder:"Connectez-vous pour votre lien", loginFirst:"Connectez-vous d'abord !", taskDone:"Tâche terminée !", addedBalance:"ajouté au solde.", withdrawOK:"Demande reçue ! Traitée en 24-48h.", withdrawFail:"Solde insuffisant ! Requis :", spinLogin:"Connectez-vous pour tourner !", invitedBy:"Vous avez été invité ! Bonus envoyé à votre ami 🎉", refs:"invitations", yourRefs:"Total invitations : ", multiWin:"🎉 FÉLICITATIONS ! Vous avez déjà gagné aujourd'hui — revenez demain pour 2x !" },
    pt: { welcome:"Bem-vindo ao OdulBox!", subtitle:"Gire a roda todos os dias, complete tarefas e ganhe recompensas reais!", balance:"Saldo: ", adTopTxt:"[BANNER PATROCINADO]", adMidTxt:"[ESPAÇO PUBLICITÁRIO PREMIUM]", adSideTxt:"[🔥 ESPAÇO PUBLICITÁRIO]", spinBtn:"GIRAR!", winAlert:"Parabéns! Você ganhou:", authNavBtn:"Entrar / Registrar", logoutBtnTxt:"Sair", loginTitle:"Entrar", registerTitle:"Criar Conta", noAccount:"Não tem conta?", haveAccount:"Já tem conta?", usernamePlh:"Usuário", tasksTitle:"Tarefas Diárias", rewardsTitle:"Sacar Prêmios", taskInsta:"Seguir conta no Instagram", taskYoutube:"Assistir vídeo de 30s no YouTube", doTaskBtn:"Fazer Tarefa", claimBtn:"Resgatar", referralTitle:"Convide & Ganhe", referralDesc:"Compartilhe seu link — bônus por amigo!", copyBtn:"Copiar", linkCopied:"Link copiado! 🎉", referralPlaceholder:"Entre para obter seu link", loginFirst:"Entre primeiro!", taskDone:"Tarefa concluída!", addedBalance:"adicionado ao saldo.", withdrawOK:"Solicitação recebida! Processada em 24-48h.", withdrawFail:"Saldo insuficiente! Necessário:", spinLogin:"Entre para girar!", invitedBy:"Você foi convidado! Bônus enviado 🎉", refs:"convites", yourRefs:"Convites totais: ", multiWin:"🎉 PARABÉNS! Você já ganhou hoje — volte amanhã para 2x!" },
    ru: { welcome:"Добро пожаловать в OdulBox!", subtitle:"Крутите колесо каждый день, выполняйте задания и получайте реальные награды!", balance:"Баланс: ", adTopTxt:"[РЕКЛАМНЫЙ БАННЕР]", adMidTxt:"[ПРЕМИУМ РЕКЛАМА]", adSideTxt:"[🔥 РЕКЛАМНОЕ МЕСТО]", spinBtn:"КРУТИТЬ!", winAlert:"Поздравляем! Вы выиграли:", authNavBtn:"Вход / Регистрация", logoutBtnTxt:"Выход", loginTitle:"Вход в Аккаунт", registerTitle:"Создать Аккаунт", noAccount:"Нет аккаунта?", haveAccount:"Уже зарегистрированы?", usernamePlh:"Имя пользователя", tasksTitle:"Ежедневные Задания", rewardsTitle:"Вывод Наград", taskInsta:"Подписаться на Instagram", taskYoutube:"Смотреть видео YouTube 30 сек", doTaskBtn:"Выполнить", claimBtn:"Получить", referralTitle:"Приглашай и Зарабатывай", referralDesc:"Поделитесь ссылкой — бонус за каждого друга!", copyBtn:"Копировать", linkCopied:"Ссылка скопирована! 🎉", referralPlaceholder:"Войдите для получения ссылки", loginFirst:"Сначала войдите!", taskDone:"Задание выполнено!", addedBalance:"добавлено на баланс.", withdrawOK:"Заявка принята! Обработка 24-48ч.", withdrawFail:"Недостаточно средств! Требуется:", spinLogin:"Войдите, чтобы крутить!", invitedBy:"Вас пригласили! Бонус отправлен 🎉", refs:"приглашений", yourRefs:"Всего приглашений: ", multiWin:"🎉 ПОЗДРАВЛЯЕМ! Вы уже выиграли сегодня — завтра 2x!" },
    ar: { welcome:"مرحباً بك في OdulBox!", subtitle:"أدر العجلة كل يوم، أكمل المهام واربح مكافآت حقيقية!", balance:"الرصيد: ", adTopTxt:"[إعلان مدعوم]", adMidTxt:"[مساحة إعلانية مميزة]", adSideTxt:"[🔥 مساحة إعلانية]", spinBtn:"أدر!", winAlert:"مبروك! لقد ربحت:", authNavBtn:"تسجيل الدخول", logoutBtnTxt:"خروج", loginTitle:"تسجيل الدخول", registerTitle:"إنشاء حساب", noAccount:"ليس لديك حساب؟", haveAccount:"لديك حساب بالفعل؟", usernamePlh:"اسم المستخدم", tasksTitle:"المهام اليومية", rewardsTitle:"سحب المكافآت", taskInsta:"تابع حساب إنستغرام", taskYoutube:"شاهد فيديو يوتيوب 30 ثانية", doTaskBtn:"إنجاز المهمة", claimBtn:"اطلب", referralTitle:"ادعُ واربح", referralDesc:"شارك رابطك — مكافأة عن كل صديق!", copyBtn:"نسخ", linkCopied:"تم نسخ الرابط! 🎉", referralPlaceholder:"سجّل الدخول للحصول على رابطك", loginFirst:"سجّل الدخول أولاً!", taskDone:"تمت المهمة!", addedBalance:"أُضيف إلى رصيدك.", withdrawOK:"تم استلام طلبك! المعالجة خلال 24-48 ساعة.", withdrawFail:"الرصيد غير كافٍ! المطلوب:", spinLogin:"سجّل الدخول للدوران!", invitedBy:"تمت دعوتك! أُرسلت مكافأة لصديقك 🎉", refs:"دعوة", yourRefs:"إجمالي الدعوات: ", multiWin:"🎉 مبروك! لقد ربحت اليوم — عد غداً لمكافأة 2x!" },
    id: { welcome:"Selamat dat!", subtitle:"Putar roda setiap hari, selesaikan tugas, dan menangkan hadiah nyata!", balance:"Saldo: ", adTopTxt:"[BANNER SPONSOR]", adMidTxt:"[RUANG IKLAN PREMIUM]", adSideTxt:"[🔥 RUANG IKLAN]", spinBtn:"PUTAR!", winAlert:"Selamat! Anda memenangkan:", authNavBtn:"Masuk / Daftar", logoutBtnTxt:"Keluar", loginTitle:"Masuk Akun", registerTitle:"Buat Akun", noAccount:"Belum punya akun?", haveAccount:"Sudah punya akun?", usernamePlh:"Nama Pengguna", tasksTitle:"Tugas Harian", rewardsTitle:"Tarik Hadiah", taskInsta:"Ikuti Akun Instagram", taskYoutube:"Tonton Video YouTube 30s", doTaskBtn:"Kerjakan", claimBtn:"Klaim", referralTitle:"Undang & Menang", referralDesc:"Bagikan tautan Anda — bonus tiap teman bergabung!", copyBtn:"Salin", linkCopied:"Tautan disalin! 🎉", referralPlaceholder:"Masuk untuk mendapatkan tautan", loginFirst:"Masuk dulu!", taskDone:"Tugas selesai!", addedBalance:"ditambahkan ke saldo.", withdrawOK:"Permintaan diterima! Diproses 24-48 jam.", withdrawFail:"Saldo tidak cukup! Diperlukan:", spinLogin:"Masuk untuk memutar!", invitedBy:"Anda diundang! Bonus terkirim 🎉", refs:"undangan", yourRefs:"Total undangan: ", multiWin:"🎉 SELAMAT! Anda sudah menang hari ini — besok 2x!" },
    hi: { welcome:"OdulBox में आपका स्वागत है!", subtitle:"हर दिन पहिया घुमाएं, कार्य पूरे करें और असली इनाम जीतें!", balance:"बैलेंस: ", adTopTxt:"[प्रायोजित बैनर]", adMidTxt:"[प्रीमियम विज्ञापन स्थान]", adSideTxt:"[🔥 विज्ञापन स्थान]", spinBtn:"घुमाओ!", winAlert:"बधाई! आपने जीता:", authNavBtn:"लॉगिन / रजिस्टर", logoutBtnTxt:"लॉगआउट", loginTitle:"लॉगिन करें", registerTitle:"खाता बनाएं", noAccount:"खाता नहीं है?", haveAccount:"पहले से खाता है?", usernamePlh:"उपयोगकर्ता नाम", tasksTitle:"दैनिक कार्य", rewardsTitle:"इनाम निकालें", taskInsta:"Instagram फॉलो करें", taskYoutube:"30 सेकंड YouTube वीडियो देखें", doTaskBtn:"कार्य करें", claimBtn:"क्लेम करें", referralTitle:"आमंत्रित करें और कमाएं", referralDesc:"अपना लिंक साझा करें — हर दोस्त पर बोनस!", copyBtn:"कॉपी", linkCopied:"लिंक कॉपी हो गया! 🎉", referralPlaceholder:"लिंक के लिए लॉगिन करें", loginFirst:"पहले लॉगिन करें!", taskDone:"कार्य पूरा!", addedBalance:"बैलेंस में जोड़ा गया।", withdrawOK:"अनुरोध मिला! 24-48 घंटे में प्रक्रिया।", withdrawFail:"अपर्याप्त बैलेंस! आवश्यक:", spinLogin:"घुमाने के लिए लॉगिन करें!", invitedBy:"आप आमंत्रित हुए! बोनस भेजा गया 🎉", refs:"आमंत्रण", yourRefs:"कुल आमंत्रण: ", multiWin:"🎉 बधाई! आपने आज जीत लिया — कल 2x के लिए लौटें!" },
    bn: { welcome:"OdulBox-এ স্বাগতম!", subtitle:"প্রতিদিন চাকা ঘোরান, কাজ সম্পূর্ণ করুন এবং আসল পুরস্কার জিতুন!", balance:"ব্যালেন্স: ", adTopTxt:"[স্পন্সর ব্যানার]", adMidTxt:"[প্রিমিয়াম বিজ্ঞাপন]", adSideTxt:"[🔥 বিজ্ঞাপন]", spinBtn:"ঘোরাও!", winAlert:"অভিনন্দন! আপনি জিতেছেন:", authNavBtn:"লগইন / রেজিস্টার", logoutBtnTxt:"লগআউট", loginTitle:"লগইন", registerTitle:"অ্যাকাউন্ট তৈরি", noAccount:"অ্যাকাউন্ট নেই?", haveAccount:"আগে থেকেই অ্যাকাউন্ট?", usernamePlh:"ব্যবহারকারীর নাম", tasksTitle:"দৈনিক কাজ", rewardsTitle:"পুরস্কার তুলুন", taskInsta:"Instagram ফলো করুন", taskYoutube:"৩০ সেকেন্ড YouTube ভিডিও দেখুন", doTaskBtn:"কাজ করুন", claimBtn:"ক্লেইম", referralTitle:"আমন্ত্রণ করুন ও জিতুন", referralDesc:"লিংক শেয়ার করুন — প্রতি বন্ধুতে বোনাস!", copyBtn:"কপি", linkCopied:"লিংক কপি হয়েছে! 🎉", referralPlaceholder:"লিংকের জন্য লগইন করুন", loginFirst:"প্রথমে লগইন করুন!", taskDone:"কাজ সম্পূর্ণ!", addedBalance:"ব্যালেন্সে যোগ হয়েছে।", withdrawOK:"অনুরোধ পেয়েছি! ২৪-৪৮ ঘণ্টায় প্রক্রিয়া।", withdrawFail:"অপর্যাপ্ত ব্যালেন্স! প্রয়োজন:", spinLogin:"ঘোরাতে লগইন করুন!", invitedBy:"আপনি আমন্ত্রিত! বোনাস পাঠানো হয়েছে 🎉", refs:"আমন্ত্রণ", yourRefs:"মোট আমন্ত্রণ: ", multiWin:"🎉 অভিনন্দন! আপনি আজ জিতেছেন — কাল 2x এর জন্য ফিরুন!" },
    ja: { welcome:"OdulBoxへようこそ！", subtitle:"毎日ルーレットを回して、タスクをこなしてリアルな報酬を獲得！", balance:"残高: ", adTopTxt:"[スポンサーバナー]", adMidTxt:"[プレミアム広告枠]", adSideTxt:"[🔥 広告枠]", spinBtn:"回す!", winAlert:"おめでとうございます！獲得:", authNavBtn:"ログイン / 登録", logoutBtnTxt:"ログアウト", loginTitle:"ログイン", registerTitle:"アカウント作成", noAccount:"アカウントをお持ちでない？", haveAccount:"既にアカウントをお持ち？", usernamePlh:"ユーザー名", tasksTitle:"デイリータスク", rewardsTitle:"報酬を出金", taskInsta:"Instagramをフォロー", taskYoutube:"30秒YouTube動画を見る", doTaskBtn:"タスク実行", claimBtn:"請求", referralTitle:"招待して稼ぐ", referralDesc:"リンクを共有 — 友達が参加するごとにボーナス！", copyBtn:"コピー", linkCopied:"リンクをコピーしました！ 🎉", referralPlaceholder:"リンク取得にはログイン", loginFirst:"まずログインしてください！", taskDone:"タスク完了！", addedBalance:"残高に追加されました。", withdrawOK:"リクエスト受付！24-48時間で処理。", withdrawFail:"残高不足！必要:", spinLogin:"回すにはログインが必要です！", invitedBy:"招待されました！ボーナス送信済み 🎉", refs:"招待", yourRefs:"合計招待: ", multiWin:"🎉 おめでとう！今日はもう獲得済み — 明日2xでまた回そう！" }
};

let userLang = (navigator.language || navigator.userLanguage || "en").substring(0,2);
if (!languages[userLang]) userLang = 'en';
const lang = languages[userLang];
document.documentElement.lang = userLang;
if (userLang === 'ar') document.documentElement.dir = 'rtl';

// ============ 2. ÇEVİRİ UYGULA ============
function applyTranslations() {
    const map = {
        'txt-welcome':'welcome','txt-subtitle':'subtitle','spin-btn':'spinBtn','auth-nav-btn':'authNavBtn',
        'logout-btn':'logoutBtnTxt','txt-login-title':'loginTitle','txt-register-title':'registerTitle',
        'txt-no-account':'noAccount','txt-have-account':'haveAccount','reg-username':'usernamePlh',
        'txt-tasks-title':'tasksTitle','txt-rewards-title':'rewardsTitle','txt-task-1':'taskInsta','txt-task-2':'taskYoutube',
        'txt-referral-title':'referralTitle','txt-referral-desc':'referralDesc','copy-ref-btn':'copyBtn','referral-link':'referralPlaceholder'
    };
    try {
        for (const [id, key] of Object.entries(map)) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (id === 'reg-username' || id === 'referral-link') el.placeholder = lang[key];
            else el.innerText = lang[key];
        }
        // NOT: banner slotları ve bakiye admin/oturum kontrolünde, çeviri bunlara dokunmaz
        document.querySelectorAll('.task-btn:not(#copy-ref-btn)').forEach(b => b.innerText = lang.doTaskBtn);
        document.querySelectorAll('.withdraw-btn').forEach(b => b.innerText = lang.claimBtn);
    } catch(e) { console.log("Lang skipped:", e); }
}

// ============ 3. YAPILANDIRMA (Admin'den gelir) ============
const DEFAULTS = {
    adminPassHash: null,
    zonePopunder:"", zoneOnclick:"", zoneInterstitial:"", zoneBanner:"", zoneNative:"",
    antiBlock:false,
    directLink:"https://uplcm.com/4/12156047",
    customBanners:{},  // { "ad-zone-top": "<html>", ... }
    refBonus:0.25, task1Reward:0.05, task2Reward:0.10,
    task1Url:"https://instagram.com/", task2Url:"https://youtube.com/",
    minWithdraw:5.00
};
let cfg = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem('odulbox_cfg') || '{}'));

function saveCfg() { localStorage.setItem('odulbox_cfg', JSON.stringify(cfg)); }

// Basit hash (gizli panel için yeterli; sunucu tarafı auth yerine localStorage kullanılır)
function simpleHash(s) { let h=0; for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;} return 'h'+Math.abs(h); }

// ============ 4. AUTH / KULLANICI ============
const modal = document.getElementById("auth-modal");
const authNavBtn = document.getElementById("auth-nav-btn");
const logoutBtn = document.getElementById("logout-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const goToRegister = document.getElementById("go-to-register");
const goToLogin = document.getElementById("go-to-login");
const loginBox = document.getElementById("login-form-box");
const registerBox = document.getElementById("register-form-box");

// Oturum: sessionStorage tabanlı — sekme/site kapatılıp açılınca temiz başlar.
// Kullanıcı bilgi sessionStorage'da yoksa bakiye 0 görünür (login gerekir).
function loadSession() {
    try { return JSON.parse(sessionStorage.getItem('odulbox_session')) || null; } catch(e) { return null; }
}
function saveSession(user) {
    sessionStorage.setItem('odulbox_session', JSON.stringify(user));
}
let loggedInUser = loadSession();
// Geriye dönük uyumluluk: eski localStorage oturumu varsa taşı ve eski anahtarı sil
if (!loggedInUser) {
    try {
        const legacy = JSON.parse(localStorage.getItem('odulbox_current_user'));
        if (legacy) { loggedInUser = legacy; saveSession(legacy); localStorage.removeItem('odulbox_current_user'); }
    } catch(e) {}
}

function updateUIForLoggedInUser() {
    const balEl = document.getElementById('txt-balance');
    if (loggedInUser) {
        balEl.style.display = "inline-block";
        const bal = (typeof loggedInUser.balance === 'number' && !isNaN(loggedInUser.balance)) ? loggedInUser.balance : 0;
        balEl.innerText = `${lang.balance} ${bal.toFixed(2)} $`;
        authNavBtn.innerText = loggedInUser.username;
        authNavBtn.style.pointerEvents = "none";
        logoutBtn.style.display = "block";
        // Referral link
        const base = location.origin + location.pathname;
        document.getElementById('referral-link').value = `${base}?ref=${loggedInUser.refCode}`;
        document.getElementById('txt-referral-stats').innerText = `${lang.yourRefs} ${(loggedInUser.refs||0)}`;
    } else {
        balEl.style.display = "none"; // kayıt/giriş yapılmadan bakiye görünmez
        authNavBtn.innerText = lang.authNavBtn;
        authNavBtn.style.pointerEvents = "auto";
        logoutBtn.style.display = "none";
        document.getElementById('txt-referral-stats').innerText = "";
    }
}

// Modal aç/kapa
if (authNavBtn) authNavBtn.onclick = () => modal.style.display = "flex";
closeBtns.forEach(cb => cb.onclick = function(){ document.getElementById(this.dataset.close || 'auth-modal').style.display = "none"; });
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; if (e.target == adminPanelEl) adminPanelEl.style.display = "none"; };

if (goToRegister) goToRegister.onclick = e => { e.preventDefault(); loginBox.style.display="none"; registerBox.style.display="block"; };
if (goToLogin) goToLogin.onclick = e => { e.preventDefault(); registerBox.style.display="none"; loginBox.style.display="block"; };

if (logoutBtn) logoutBtn.onclick = () => {
    sessionStorage.removeItem('odulbox_session');
    localStorage.removeItem('odulbox_current_user');
    loggedInUser = null;
    updateUIForLoggedInUser();
    alert(userLang === 'tr' ? "Başarıyla çıkış yapıldı." : "Logged out successfully.");
};

// Referral kodu: ?ref= parametresini yakala ve kayıt sırasında işle
let pendingRef = null;
try {
    const urlP = new URLSearchParams(location.search);
    if (urlP.get('ref')) {
        pendingRef = urlP.get('ref');
        localStorage.setItem('odulbox_pending_ref', pendingRef);
        sessionStorage.setItem('odulbox_invited', '1');
    } else if (localStorage.getItem('odulbox_pending_ref')) {
        pendingRef = localStorage.getItem('odulbox_pending_ref');
    }
} catch(e) {}

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    let allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    if (allUsers.find(u => u.email === email)) {
        alert(userLang === 'tr' ? "Bu e-posta zaten kayıtlı!" : "Email already registered!");
        return;
    }

    const refCode = Math.random().toString(36).substring(2,8).toUpperCase();
    const newUser = {
        username, email, password: simpleHash(password),
        balance: 0.00, refCode, refs: 0, joinedAt: Date.now(), tasksDone:{}, lastSpin:0
    };

    // Davet edildiyse: davet edene bonus ver
    if (pendingRef) {
        const inviter = allUsers.find(u => u.refCode === pendingRef);
        if (inviter) {
            inviter.balance = +(inviter.balance + cfg.refBonus).toFixed(2);
            inviter.refs = (inviter.refs||0) + 1;
            newUser.balance = 0; // yeni kullanıcı bonus almaz, davet eden alır
            sessionStorage.setItem('odulbox_show_invite_msg','1');
            localStorage.removeItem('odulbox_pending_ref');
            pendingRef = null;
        }
    }

    allUsers.push(newUser);
    localStorage.setItem('odulbox_users', JSON.stringify(allUsers));

    // Otomatik giriş: kayıt sonrası bakiye hemen görünsün
    loggedInUser = newUser;
    saveSession(newUser);
    updateUIForLoggedInUser();
    modal.style.display = "none";
    if (sessionStorage.getItem('odulbox_show_invite_msg')) {
        sessionStorage.removeItem('odulbox_show_invite_msg');
        alert(lang.invitedBy);
    } else {
        alert(userLang === 'tr' ? `Hoş geldin ${username}! Hesabın oluşturuldu. 🎉` : `Welcome ${username}! Account created. 🎉`);
    }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    const user = allUsers.find(u => u.email === email && u.password === simpleHash(password));
    if (user) {
        loggedInUser = user;
        saveSession(user);
        updateUIForLoggedInUser();
        if (sessionStorage.getItem('odulbox_show_invite_msg')) {
            sessionStorage.removeItem('odulbox_show_invite_msg');
            alert(lang.invitedBy);
        } else {
            alert(userLang === 'tr' ? `Hoş geldin, ${user.username}!` : `Welcome, ${user.username}!`);
        }
    } else {
        alert(userLang === 'tr' ? "Hatalı e-posta veya şifre!" : "Incorrect email or password!");
    }
});

// Kopyalama
document.getElementById('copy-ref-btn').onclick = function() {
    const input = document.getElementById('referral-link');
    if (!loggedInUser) { alert(lang.loginFirst); modal.style.display = "flex"; return; }
    navigator.clipboard.writeText(input.value).then(() => alert(lang.linkCopied));
};

// ============ 5. KAZANÇ EKLE ============
function addBalance(amount) {
    if (!loggedInUser) { alert(lang.loginFirst); modal.style.display = "flex"; return false; }
    loggedInUser.balance = +(loggedInUser.balance + amount).toFixed(2);
    saveSession(loggedInUser);
    const allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    const idx = allUsers.findIndex(u => u.email === loggedInUser.email);
    if (idx > -1) { allUsers[idx].balance = loggedInUser.balance; localStorage.setItem('odulbox_users', JSON.stringify(allUsers)); }
    updateUIForLoggedInUser();
    return true;
}

// ============ GÜNLÜK GÖREVLER (6 görev, dinamik) ============
const TASKS = [
    { id:1, icon:"📱", nameKey:"taskInsta", reward:()=>cfg.task1Reward, url:()=>cfg.task1Url },
    { id:2, icon:"🎥", nameKey:"taskYoutube", reward:()=>cfg.task2Reward, url:()=>cfg.task2Url },
    { id:3, icon:"📸", fixed:{tr:"Instagram Reel Beğen & Yorum Yap",en:"Like & Comment on an Instagram Reel"}, reward:()=>0.05, url:()=>cfg.task1Url.replace('instagram.com','instagram.com/reel') },
    { id:4, icon:"▶️", fixed:{tr:"YouTube Kanalına Abone Ol",en:"Subscribe to a YouTube Channel"}, reward:()=>0.08, url:()=>cfg.task2Url },
    { id:5, icon:"🌐", fixed:{tr:"Sponsor Sitesini 30sn Ziyaret Et",en:"Visit Sponsor Site for 30s"}, reward:()=>0.03, url:()=>cfg.directLink || cfg.task1Url },
    { id:6, icon:"👥", fixed:{tr:"Arkadaşını Davet Et (davet başına)",en:"Invite a Friend (per invite)"}, reward:()=>cfg.refBonus, url:null } // ref sistemi otomatik
];

function isTaskDoneToday(taskId) {
    if (!loggedInUser) return false;
    const done = loggedInUser.tasksDone || {};
    return done[taskId] === new Date().toDateString();
}
function markTaskDone(taskId) {
    if (!loggedInUser) return;
    loggedInUser.tasksDone = loggedInUser.tasksDone || {};
    loggedInUser.tasksDone[taskId] = new Date().toDateString();
    saveSession(loggedInUser);
    const users = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    const idx = users.findIndex(u => u.email === loggedInUser.email);
    if (idx > -1) { users[idx].tasksDone = loggedInUser.tasksDone; localStorage.setItem('odulbox_users', JSON.stringify(users)); }
}

function renderTasks() {
    const c = document.getElementById('tasks-container');
    if (!c) return;
    c.style.display = 'flex';
    c.style.flexDirection = 'column';
    c.style.gap = '10px';
    c.innerHTML = TASKS.map(t => {
        const name = t.fixed ? (t.fixed[userLang] || t.fixed.en) : lang[t.nameKey];
        const reward = t.reward();
        const done = isTaskDoneToday(t.id);
        return `
        <div class="task-item" style="${done?'opacity:0.55;':''}">
            <div class="task-info">
                <span class="task-icon">${t.icon}</span>
                <div>
                    <p class="task-name">${name}</p>
                    <span class="task-reward-amount">+ ${reward.toFixed(2)} $</span>
                </div>
            </div>
            <button class="task-btn" data-task="${t.id}" ${done?'disabled':''}>${done?'✔':lang.doTaskBtn}</button>
        </div>`;
    }).join('');

    c.querySelectorAll('.task-btn[data-task]').forEach(btn => {
        btn.onclick = () => doTask(parseInt(btn.dataset.task));
    });
}

function doTask(taskId) {
    if (!loggedInUser) { alert(lang.loginFirst); modal.style.display = "flex"; return; }
    if (isTaskDoneToday(taskId)) { alert(userLang==='tr' ? "Bu görevi bugün yaptın! Yarın tekrar." : "You did this task today! Come back tomorrow."); return; }
    const t = TASKS.find(x => x.id === taskId);
    if (!t) return;

    // Davet görevi: sadece link göster
    if (taskId === 6) {
        document.getElementById('referral-link').focus();
        document.getElementById('copy-ref-btn').click();
        return;
    }

    window.open(t.url(), '_blank');
    setTimeout(() => {
        const reward = t.reward();
        if (addBalance(reward)) {
            markTaskDone(taskId);
            renderTasks();
            alert(`${lang.taskDone} +${reward.toFixed(2)} $ ${lang.addedBalance}`);
        }
    }, 1500);
}

// Çekim
const withdrawLang = {
    tr: { askMethod:"Hangi yöntemle çekmek istersin?", askInfo:"Ödeme bilgini gir (e-posta / telefon / IBAN):", ok:"Talebin alındı! 24-48 saat içinde ödenecek. 🎉", pending:"⚠️ Bu talebin zaten beklemede. Ödeme yapılmadan yeni talep açamazsın." },
    en: { askMethod:"Which method do you want to withdraw with?", askInfo:"Enter your payment info (email / phone / IBAN):", ok:"Request received! Will be paid within 24-48h. 🎉", pending:"⚠️ You already have a pending request. You can't open a new one until it's paid." }
};
const wl = withdrawLang[userLang] || withdrawLang.en;

function getWithdrawRequests() {
    return JSON.parse(localStorage.getItem('odulbox_withdrawals')) || [];
}

function handleWithdraw(minAmount, rewardName) {
    if (!loggedInUser) { alert(lang.loginFirst); modal.style.display = "flex"; return; }
    if (loggedInUser.balance < minAmount) {
        alert(`${lang.withdrawFail} ${minAmount.toFixed(2)} $ / ${lang.balance} ${loggedInUser.balance.toFixed(2)} $`);
        return;
    }

    // Bekleyen talep kontrolü
    const requests = getWithdrawRequests();
    const existing = requests.find(r => r.email === loggedInUser.email && r.status === 'pending');
    if (existing) { alert(wl.pending); return; }

    // Ödeme bilgisi al
    const payInfo = prompt(wl.askInfo);
    if (!payInfo || payInfo.trim() === "") return;

    // Talebi oluştur
    const req = {
        id: Date.now(),
        username: loggedInUser.username,
        email: loggedInUser.email,
        amount: loggedInUser.balance,
        method: rewardName,
        payInfo: payInfo.trim(),
        date: new Date().toISOString(),
        status: 'pending'
    };
    requests.push(req);
    localStorage.setItem('odulbox_withdrawals', JSON.stringify(requests));

    // Bakiyeyi sıfırla (para çekildi sayılır)
    loggedInUser.balance = 0;
    saveSession(loggedInUser);
    const allUsers = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    const idx = allUsers.findIndex(u => u.email === loggedInUser.email);
    if (idx > -1) { allUsers[idx].balance = 0; localStorage.setItem('odulbox_users', JSON.stringify(allUsers)); }
    updateUIForLoggedInUser();

    alert(wl.ok);
}
document.getElementById('btn-draw-1').addEventListener('click', () => handleWithdraw(cfg.minWithdraw, "PayPal/Papara"));
document.getElementById('btn-draw-2').addEventListener('click', () => handleWithdraw(cfg.minWithdraw + 5, "Steam Wallet"));

// ============ 6. ŞANS ÇARKI ============
const wheelCanvas = document.getElementById('wheel');
const spinButton = document.getElementById('spin-btn');
const wheelSegments = [
    { label:"0.01 $", value:0.01, color:"#FF3366" }, { label:"0.05 $", value:0.05, color:"#1E1633" },
    { label:"0.02 $", value:0.02, color:"#FFD93D", dark:true }, { label:"0.10 $", value:0.10, color:"#1E1633" },
    { label:"0.01 $", value:0.01, color:"#00B4D8" }, { label:"0.20 $", value:0.20, color:"#1E1633" },
    { label:"0.03 $", value:0.03, color:"#9B5DE5" }, { label:"0.50 $", value:0.50, color:"#FFD93D", dark:true }
];
const segmentAngle = (Math.PI*2)/wheelSegments.length;
let currentRotation = 0, isSpinning = false;

function drawWheel() {
    if (!wheelCanvas) return;
    const ctx = wheelCanvas.getContext('2d');
    const W = wheelCanvas.width, cx = W/2, cy = W/2, r = W/2 - 18;
    ctx.clearRect(0,0,W,W);

    // Dış metal çerçeve (poli açılı efekt için iki degrade katmanı)
    const ringGrad = ctx.createLinearGradient(0,0,W,W);
    ringGrad.addColorStop(0,"#2a1a4a"); ringGrad.addColorStop(0.35,"#ff3366");
    ringGrad.addColorStop(0.55,"#ffd93d"); ringGrad.addColorStop(0.8,"#9B5DE5"); ringGrad.addColorStop(1,"#1E1633");
    ctx.beginPath(); ctx.arc(cx,cy,r+16,0,Math.PI*2); ctx.fillStyle=ringGrad; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,r+8,0,Math.PI*2); ctx.fillStyle="#0f0c1b"; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,r+6,0,Math.PI*2);
    ctx.strokeStyle="rgba(255,217,61,0.55)"; ctx.lineWidth=2; ctx.stroke();

    // Segmentler (konik gradyan ile kazanç hissi)
    wheelSegments.forEach((s,i) => {
        const a0 = i*segmentAngle, a1 = (i+1)*segmentAngle;
        ctx.beginPath(); ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,r, a0, a1); ctx.closePath();
        const g = ctx.createRadialGradient(cx,cy,30,cx,cy,r);
        g.addColorStop(0, s.color);
        g.addColorStop(1, shadeColor(s.color, i%2===0 ? -18 : -34));
        ctx.fillStyle = s.color==="#1E1633" ? s.color : g; ctx.fill();
        ctx.strokeStyle = "rgba(255,217,61,0.35)"; ctx.lineWidth = 1.5; ctx.stroke();

        // Altın pim
        ctx.beginPath(); ctx.arc(cx + Math.cos(a0)*(r-6), cy + Math.sin(a0)*(r-6), 5, 0, Math.PI*2);
        const pinG = ctx.createRadialGradient(cx + Math.cos(a0)*(r-6)-2, cy + Math.sin(a0)*(r-6)-2, 0, cx + Math.cos(a0)*(r-6), cy + Math.sin(a0)*(r-6), 5);
        pinG.addColorStop(0,"#fff6cc"); pinG.addColorStop(0.5,"#ffd93d"); pinG.addColorStop(1,"#8a6a00");
        ctx.fillStyle = pinG; ctx.fill();

        // Etiket
        ctx.save(); ctx.translate(cx,cy); ctx.rotate(a0 + segmentAngle/2);
        ctx.textAlign="right";
        ctx.fillStyle = s.dark ? "#1E1633" : "#fff";
        ctx.font="bold 20px 'Segoe UI', Arial";
        ctx.shadowColor="rgba(0,0,0,0.45)"; ctx.shadowBlur=5;
        ctx.fillText(s.label, r-16, 7); ctx.restore();
    });

    // Merkez buton (altın halka + parlak göbek)
    ctx.beginPath(); ctx.arc(cx,cy,50,0,Math.PI*2);
    const hubGrad = ctx.createLinearGradient(cx-50,cy-50,cx+50,cy+50);
    hubGrad.addColorStop(0,"#ffd93d"); hubGrad.addColorStop(0.5,"#ff9f1c"); hubGrad.addColorStop(1,"#c97600");
    ctx.fillStyle = hubGrad; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,40,0,Math.PI*2);
    ctx.fillStyle="#141026"; ctx.fill();
    ctx.strokeStyle="rgba(255,255,255,0.25)"; ctx.lineWidth=1.5; ctx.stroke();
    ctx.fillStyle="#fff"; ctx.font="bold 26px Arial"; ctx.textAlign="center";
    ctx.shadowColor="rgba(255,217,61,0.9)"; ctx.shadowBlur=8;
    ctx.fillText("🎁", cx, cy+10);
    ctx.shadowBlur=0;
}

function shadeColor(hex, percent) {
    const num = parseInt(hex.replace('#',''),16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0,(num>>16)+amt));
    const G = Math.min(255, Math.max(0,((num>>8)&0xFF)+amt));
    const B = Math.min(255, Math.max(0,(num&0xFF)+amt));
    return `rgb(${R},${G},${B})`;
}

// Konfeti efekti (kazanınca patlar)
function launchConfetti() {
    const colors = ['#ff3366','#ffd93d','#00b4d8','#9b5de5','#6bcb77','#ffffff'];
    for (let i=0;i<60;i++) {
        const el = document.createElement('div');
        el.className = 'confetti';
        el.style.left = Math.random()*100 + 'vw';
        el.style.background = colors[Math.floor(Math.random()*colors.length)];
        el.style.animationDelay = (Math.random()*0.6)+'s';
        el.style.animationDuration = (2.2 + Math.random()*1.5)+'s';
        el.style.width = el.style.height = (6+Math.random()*8)+'px';
        document.body.appendChild(el);
        setTimeout(()=>el.remove(), 4200);
    }
}

function easeOutCubic(t){ return 1 - Math.pow(1-t,3); }

function spinWheel() {
    if (isSpinning) return;
    if (!loggedInUser) { alert(lang.spinLogin); modal.style.display="flex"; return; }

    // Günlük limit: günde 1 kez (yerel gün başına sıfırlanır)
    const today = new Date().toDateString();
    const lastSpinDate = loggedInUser.lastSpinDate || null;
    if (lastSpinDate === today) {
        alert(lang.multiWin || (userLang==='tr' ? "Çarkı bugün zaten çevirdin! Yarın tekrar dene. 🎡" : "You already spun today! Come back tomorrow. 🎡"));
        return;
    }

    isSpinning = true;
    spinButton.disabled = true;
    spinButton.style.opacity = "0.6";

    const spins = 6 + Math.floor(Math.random()*3);
    const randomAngle = Math.random()*Math.PI*2;
    const targetRotation = currentRotation + (spins*Math.PI*2) + randomAngle;
    const duration = 6200, startRotation = currentRotation, startTime = performance.now();
    const easeOutQuint = t => 1 - Math.pow(1-t, 5);

    function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed/duration, 1);
        const eased = easeOutQuint(progress);
        currentRotation = startRotation + (targetRotation - startRotation)*eased;
        wheelCanvas.style.transform = `rotate(${currentRotation}rad)`;
        wheelCanvas.parentElement.classList.add('spinning');
        if (progress < 1) { requestAnimationFrame(animate); return; }
        wheelCanvas.parentElement.classList.remove('spinning');

        isSpinning = false;
        spinButton.disabled = false;
        spinButton.style.opacity = "1";

        // Monetag: çark dönüşü sonrası interstitial reklam tetikle
        showMonetagInterstitial();

        let pointerAngle = (Math.PI*2 - (currentRotation % (Math.PI*2))) % (Math.PI*2);
        if (pointerAngle < 0) pointerAngle += Math.PI*2;
        const wi = Math.floor(pointerAngle/segmentAngle) % wheelSegments.length;
        const won = wheelSegments[wi];

        loggedInUser.lastSpin = Date.now();
        loggedInUser.lastSpinDate = today;
        addBalance(won.value);
        launchConfetti();
        alert(`${lang.winAlert} ${won.label} 🎉`);
    }
    requestAnimationFrame(animate);
}
spinButton.addEventListener('click', spinWheel);

// ============ 7. MONETAG REKLAM MOTORU ============
// showMonetagInterstitial(), showMonetagPopunder(), initMonetagZones()
const MONETAG_SDK = "https://libtl.com/sdk";

function showMonetagInterstitial() {
    if (!cfg.zoneInterstitial) return;
    try {
        window.z_ = window.z_ || [];
        window.z_.push(["_interstitial", { zone: cfg.zoneInterstitial }]);
        if (!window._mgInterstitialLoaded) {
            window._mgInterstitialLoaded = true;
            const s = document.createElement('script');
            s.src = `${MONETAG_SDK}/i.js?z=${cfg.zoneInterstitial}`;
            s.async = true; document.body.appendChild(s);
        }
    } catch(e) { console.warn("Interstitial err:", e); }
}

function initMonetagZones() {
    // DIRECT LINK modu: Monetag'ten aldığın hazır bağlantı linki.
    // Zone ID girmeye gerek kalmadan tüm site linkleri/klikleri üzerinden reklam gelir.
    if (cfg.directLink) {
        initDirectLinkMode();
    }

    // Banner / Native slotlara Monetag etiketi koy
    // ÖNEMLİ: Önce HER slot için admin özel kodu/resmi var mı bak; yoksa Zone ID kullan;
    // o da yoksa placeholder metin kalsın.
    document.querySelectorAll('[data-slot]').forEach(el => {
        const custom = cfg.customBanners && cfg.customBanners[el.id];
        if (custom) { loadMonetagTag(el, '', 'custom'); return; }
        if (el.classList.contains('ad-sidebar') && cfg.zoneBanner) { loadMonetagTag(el, cfg.zoneBanner, 'banner'); return; }
        if (el.classList.contains('ad-banner') && cfg.zoneNative) { loadMonetagTag(el, cfg.zoneNative, 'native'); }
    });
    // Yan bannerler masaüstünde her zaman gorunur olsun (geniş ekran kontrolü)
    document.querySelectorAll('.ad-sidebar').forEach(el => { if (window.innerWidth > 1100) el.style.display = 'flex'; });
    if (cfg.zonePopunder) {
        const s = document.createElement('script');
        s.src = `${MONETAG_SDK}/pu.js?z=${cfg.zonePopunder}`;
        s.async = true; document.body.appendChild(s);
    }
    if (cfg.zoneOnclick) {
        // Onclick vignette: tıklamalarda tetiklenir
        document.addEventListener('click', function onClickAd() {
            try {
                const s = document.createElement('script');
                s.src = `${MONETAG_SDK}/vignette.js?z=${cfg.zoneOnclick}`;
                s.async = true; document.body.appendChild(s);
            } catch(e) {}
            document.removeEventListener('click', onClickAd);
        }, { once:true });
    }
    if (cfg.antiBlock) loadAntiBlock();
}

function loadMonetagTag(container, zone, type) {
    if (!container || container.dataset.loaded) return;
    container.dataset.loaded = "1";
    // ADMIN ÖZEL REKLAM KODU: slot için admin HTML/JS kodu girilmişse onu kullan (AdSense, resim banner vs.)
    const customCode = cfg.customBanners && cfg.customBanners[container.id];
    if (customCode) {
        container.innerHTML = customCode;
        container.querySelectorAll('script').forEach(old => {
            const s = document.createElement('script');
            if (old.src) s.src = old.src; else s.textContent = old.textContent;
            Array.from(old.attributes).forEach(a => { if (a.name!=='src') s.setAttribute(a.name, a.value); });
            document.head.appendChild(s);
        });
        return;
    }
    if (type === 'custom') return; // özel kod bekleniyordu ama yok
    container.innerHTML = `<iframe src="about:blank" style="width:100%;height:${type==='sidebar'?'580':'90'}px;border:0;"></iframe>`;
    const iframe = container.querySelector('iframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open(); doc.write(`<body style="margin:0;overflow:hidden;">
        <script src="${MONETAG_SDK}/${type}.js?z=${zone}" async><\/script>
        </body>`); doc.close();
}

function loadAntiBlock() {
    // Anti-adblock helper
    const s = document.createElement('script');
    s.src = `${MONETAG_SDK}/aab.js`; s.async = true; document.body.appendChild(s);
}

// ---- DIRECT LINK MODU ----
// Monetag'in verdiği hazır bağlantı linkini kullanır.
// Tüm butonlar ve linkler için URL'yi otomatik bir parametreyle açar,
// ayrıca çark dönüşü sonrası ve görev tıklamalarında otomatik açılır.
let _directLinkUsedThisSession = false;

function openDirectLink() {
    if (!cfg.directLink || _directLinkUsedThisSession) return;
    try { window.open(cfg.directLink, '_blank'); } catch(e) {}
}

function initDirectLinkMode() {
    // 1) Çark dönüşü sonrası otomatik aç
    const origSpinEnd = showMonetagInterstitial;
    window.showMonetagInterstitial = function() {
        openDirectLink();
        origSpinEnd.call(this);
    };

    // 2) Görev butonlarında: görev linki yerine Direct Link'i önce aç
    document.querySelectorAll('.task-btn, .withdraw-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            if (btn.hasAttribute('data-task')) {
                setTimeout(openDirectLink, 200); // görev linkiyle birlikte çalışır
            }
        });
    });

    // 3) Çark çevir butonunda
    document.getElementById('spin-btn')?.addEventListener('click', () => {
        setTimeout(openDirectLink, 500);
    });
}

// ============ 8. GİZLİ ADMIN PANELİ ============
const adminPanelEl = document.getElementById('admin-panel');
const adminSetupBox = document.getElementById('admin-setup-box');
const adminLoginBox = document.getElementById('admin-login-box');
const adminDashboard = document.getElementById('admin-dashboard');

function openAdmin() {
    adminPanelEl.style.display = "flex";
    renderAdminState();
}

// Admin sekme sistemi
function setupAdminTabs() {
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.onclick = () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-tab-page').forEach(p => p.style.display = 'none');
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).style.display = 'block';
        };
    });
}
setupAdminTabs();

// Kullanıcı arama + çekim filtreleme
function setupAdminExtras() {
    const search = document.getElementById('admin-user-search');
    if (search) search.addEventListener('input', renderAdminUsers);
    document.querySelectorAll('.admin-filter').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.admin-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            window._wdFilter = btn.dataset.wfilter;
            renderAdminWithdrawals();
        };
    });
}
setupAdminExtras();
function renderAdminState() {
    if (!cfg.adminPassHash) {
        adminSetupBox.style.display = "block"; adminLoginBox.style.display = "none"; adminDashboard.style.display = "none";
    } else if (sessionStorage.getItem('odulbox_admin_session')) {
        adminSetupBox.style.display = "none"; adminLoginBox.style.display = "none"; adminDashboard.style.display = "block";
        fillAdminForm();
   } else {
        adminSetupBox.style.display = "none"; adminLoginBox.style.display = "block"; adminDashboard.style.display = "none";
    }
}

// Gizli tetikleyiciler:
// 1) URL hash:  #admin-panel
// 2) Klavye:    Shift+A basılı tutup "admin" yaz (tr/klavye uyumlu)
// 3) Logo'ya 3 saniye basılı tut (mobil uyumlu, kazara tıklamayla açılmaz)
if (location.hash === '#admin-panel') openAdmin();
window.addEventListener('hashchange', () => { if (location.hash === '#admin-panel') openAdmin(); });

let keyBuffer = '';
document.addEventListener('keydown', e => {
    if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-8);
        if (keyBuffer.endsWith('admin')) { openAdmin(); keyBuffer=''; }
    }
});

// Logo long-press (3 saniye) — mobil dokunuş + fare ile çalışır
(function setupLogoLongPress() {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    let pressTimer = null;
    const start = () => {
        pressTimer = setTimeout(() => { openAdmin(); navigator.vibrate && navigator.vibrate(120); }, 3000);
    };
    const cancel = () => { clearTimeout(pressTimer); };
    logo.addEventListener('mousedown', start);
    logo.addEventListener('touchstart', start, {passive:true});
    ['mouseup','mouseleave','touchend','touchmove','touchcancel'].forEach(ev => logo.addEventListener(ev, cancel));
    logo.addEventListener('contextmenu', e => e.preventDefault()); // uzun basışta mobil menü çıkmasın
})();

// Kurulum formu
document.getElementById('admin-setup-form').addEventListener('submit', e => {
    e.preventDefault();
    const p1 = document.getElementById('admin-setup-pass').value;
    const p2 = document.getElementById('admin-setup-pass2').value;
    if (p1.length < 6) { alert("Şifre en az 6 karakter olmalı."); return; }
    if (p1 !== p2) { alert("Şifreler eşleşmiyor."); return; }
    cfg.adminPassHash = simpleHash(p1);
    saveCfg();
    sessionStorage.setItem('odulbox_admin_session', '1');
    renderAdminState();
});

// Giriş formu
document.getElementById('admin-login-form').addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('admin-login-pass').value;
    if (simpleHash(pass) === cfg.adminPassHash) {
        sessionStorage.setItem('odulbox_admin_session', '1');
        renderAdminState();
    } else { alert("Hatalı şifre!"); }
});

document.getElementById('admin-logout-btn').onclick = () => {
    sessionStorage.removeItem('odulbox_admin_session');
    adminPanelEl.style.display = "none";
};

// Formu verilerle doldur
function fillAdminForm() {
    document.getElementById('cfg-direct-link').value = cfg.directLink || '';
    document.getElementById('cfg-zone-popunder').value = cfg.zonePopunder;
    document.getElementById('cfg-zone-onclick').value = cfg.zoneOnclick;
    document.getElementById('cfg-zone-interstitial').value = cfg.zoneInterstitial;
    document.getElementById('cfg-zone-banner').value = cfg.zoneBanner;
    document.getElementById('cfg-zone-native').value = cfg.zoneNative;
    document.getElementById('cfg-antiblock').checked = cfg.antiBlock;
    document.getElementById('cfg-ref-bonus').value = cfg.refBonus;
    document.getElementById('cfg-task1').value = cfg.task1Reward;
    document.getElementById('cfg-task2').value = cfg.task2Reward;
    document.getElementById('cfg-task1-url').value = cfg.task1Url;
    document.getElementById('cfg-task2-url').value = cfg.task2Url;
    document.getElementById('cfg-min-withdraw').value = cfg.minWithdraw;
    // Özel banner kodları
    ['ad-zone-top','ad-zone-mid','ad-zone-side-left','ad-zone-side-right'].forEach(id => {
        document.getElementById('cb-'+id).value = (cfg.customBanners && cfg.customBanners[id]) || '';
    });
    renderAdminUsers();
}

function renderAdminUsers() {
    const users = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    const box = document.getElementById('admin-users-list');
    const searchEl = document.getElementById('admin-user-search');
    const q = (searchEl && searchEl.value || '').toLowerCase();
    const filtered = q ? users.filter(u => u.username.toLowerCase().includes(q) || (u.email||'').toLowerCase().includes(q)) : users;
    if (!filtered.length) { box.innerHTML = `<p class="admin-note">${q ? 'Sonuç bulunamadı.' : 'Henüz kullanıcı yok.'}</p>`; }
    else {
        box.innerHTML = filtered.map(u => `
        <div class="admin-user-row">
            <span><b>${u.username}</b><br><small>${u.email}</small></span>
            <span class="admin-user-right"><span class="stat-chip chip-green">$${(u.balance||0).toFixed(2)}</span><span class="stat-chip chip-purple">${u.refs||0} davet</span></span>
        </div>`).join('');
    }
    renderAdminStats();
    renderAdminWithdrawals();
}

// Özet istatistik kartları
function renderAdminStats() {
    const statsBox = document.getElementById('admin-stats');
    if (!statsBox) return;
    const users = JSON.parse(localStorage.getItem('odulbox_users')) || [];
    const reqs = JSON.parse(localStorage.getItem('odulbox_withdrawals')) || [];
    const totalBal = users.reduce((s,u) => s + (u.balance||0), 0);
    const pending = reqs.filter(r => r.status === 'pending');
    const paidSum = reqs.filter(r => r.status === 'paid').reduce((s,r) => s + r.amount, 0);
    statsBox.innerHTML = `
        <div class="stat-card"><span class="stat-num">${users.length}</span><span class="stat-lbl">Kullanıcı</span></div>
        <div class="stat-card"><span class="stat-num">$${totalBal.toFixed(2)}</span><span class="stat-lbl">Bekleyen Bakiye</span></div>
        <div class="stat-card stat-warn"><span class="stat-num">${pending.length}</span><span class="stat-lbl">Bekleyen Çekim</span></div>
        <div class="stat-card stat-ok"><span class="stat-num">$${paidSum.toFixed(2)}</span><span class="stat-lbl">Toplam Ödenen</span></div>`;
}

function renderAdminWithdrawals(filter) {
    const reqs = JSON.parse(localStorage.getItem('odulbox_withdrawals')) || [];
    const box = document.getElementById('admin-withdrawals-list');
    if (!box) return;
    const f = filter || (window._wdFilter || 'all');
    const shown = f === 'all' ? reqs : reqs.filter(r => r.status === f);
    if (!shown.length) { box.innerHTML = '<p class="admin-note">Bu filtrede çekim talebi yok.</p>'; return; }
    box.innerHTML = shown.slice().reverse().map(r => `
        <div class="admin-withdraw-row ${r.status==='pending' ? 'wd-pending' : 'wd-paid'}">
            <div>
                <b>${r.username}</b> • $${r.amount.toFixed(2)}<br>
                <small>${r.method} • ${r.payInfo}</small><br>
                <small>${new Date(r.date).toLocaleString()}</small>
            </div>
            <div class="wd-actions">
                ${r.status==='pending'
                    ? `<button class="wd-btn wd-pay" data-id="${r.id}" data-act="pay">✔ Ödendi</button>
                       <button class="wd-btn wd-rej" data-id="${r.id}" data-act="reject">✖ Reddet</button>`
                    : `<span class="wd-status">${r.status === 'paid' ? '✅ Ödendi' : '❌ Reddedildi'}</span>`}
            </div>
        </div>`).join('');

    box.querySelectorAll('.wd-btn').forEach(btn => btn.onclick = () => {
        const id = parseInt(btn.dataset.id);
        const act = btn.dataset.act;
        const reqs = JSON.parse(localStorage.getItem('odulbox_withdrawals')) || [];
        const req = reqs.find(r => r.id === id);
        if (!req) return;
        if (act === 'reject') {
            // Bakiyeyi iade et
            const users = JSON.parse(localStorage.getItem('odulbox_users')) || [];
            const u = users.find(x => x.email === req.email);
            if (u) { u.balance = +(u.balance + req.amount).toFixed(2); localStorage.setItem('odulbox_users', JSON.stringify(users)); }
            req.status = 'rejected';
            alert('Talep reddedildi, bakiye kullanıcıya iade edildi.');
        } else {
            req.status = 'paid';
            alert('Ödeme yapıldı olarak işaretlendi. 💸');
        }
        localStorage.setItem('odulbox_withdrawals', JSON.stringify(reqs));
        renderAdminStats();
        renderAdminWithdrawals();
        renderAdminUsers();
    });
}

// ---- BİLGİSAYARDAN BANNER RESMİ YÜKLEME ----
let _bannerFileData = null;
document.getElementById('banner-file').addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) { alert('Sadece resim dosyası seç (JPG/PNG/WebP).'); e.target.value=''; return; }
    const r = new FileReader();
    r.onload = () => {
        // Resmi otomatik küçült (localStorage'a sığması için)
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            // Slot genişlikleri: üst 728, orta 500, sidebar 140
            const maxW = 740, maxH = 620;
            let w = img.width, h = img.height;
            if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
            if (h > maxH) { w = Math.round(w * maxH / h); h = maxH; }
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            _bannerFileData = canvas.toDataURL('image/jpeg', 0.82);
            document.getElementById('banner-preview').innerHTML =
                `<img src="${_bannerFileData}" style="max-width:100%;max-height:120px;border-radius:6px;margin-top:6px;">` +
                `<small style="color:#2ecc71;">✅ Hazır (${Math.round(_bannerFileData.length/1024)} KB) — "Banner Olarak Yükle"ye bas</small>`;
        };
        img.onerror = () => alert('Resim okunamadı, başka bir dosya dene.');
        img.src = r.result;
    };
    r.readAsDataURL(f);
});

document.getElementById('banner-upload-btn').onclick = () => {
    if (!_bannerFileData) { alert('Önce bir resim seç!'); return; }
    const slot = document.getElementById('banner-slot').value;
    const url = document.getElementById('banner-url').value.trim();
    cfg.customBanners = cfg.customBanners || {};
    cfg.customBanners[slot] = url
        ? `<a href="${url}" target="_blank" rel="noopener"><img src="${_bannerFileData}" alt="banner" style="width:100%;height:auto;object-fit:contain;display:block;"></a>`
        : `<img src="${_bannerFileData}" alt="banner" style="width:100%;height:auto;object-fit:contain;display:block;">`;
    try {
        saveCfg();
    } catch(err) {
        alert('❌ Depolama dolu! Daha küçük bir resim seç (öneri: 100-300 KB altı).');
        return;
    }
    document.querySelectorAll('[data-slot]').forEach(el => { el.dataset.loaded = ""; });
    initMonetagZones();
    alert('✅ Banner yüklendi ve slota uygulandı!');
};

document.getElementById('banner-clear-btn').onclick = () => {
    // Sadece resim bannerlarını temizle (img içerenler)
    cfg.customBanners = cfg.customBanners || {};
    Object.keys(cfg.customBanners).forEach(k => { if (cfg.customBanners[k].includes('<img')) delete cfg.customBanners[k]; });
    saveCfg();
    document.getElementById('banner-preview').innerHTML = '';
    document.querySelectorAll('[data-slot]').forEach(el => { el.dataset.loaded = ""; });
    initMonetagZones();
    alert('Resim bannerları silindi.');
};

// Kaydet & Uygula
document.getElementById('admin-save-btn').onclick = () => {
    cfg.directLink       = document.getElementById('cfg-direct-link').value.trim();
    cfg.zonePopunder     = document.getElementById('cfg-zone-popunder').value.trim();
    cfg.zoneOnclick      = document.getElementById('cfg-zone-onclick').value.trim();
    cfg.zoneInterstitial = document.getElementById('cfg-zone-interstitial').value.trim();
    cfg.zoneBanner       = document.getElementById('cfg-zone-banner').value.trim();
    cfg.zoneNative       = document.getElementById('cfg-zone-native').value.trim();
    cfg.antiBlock        = document.getElementById('cfg-antiblock').checked;
    cfg.refBonus         = parseFloat(document.getElementById('cfg-ref-bonus').value) || 0.25;
    cfg.task1Reward      = parseFloat(document.getElementById('cfg-task1').value) || 0.05;
    cfg.task2Reward      = parseFloat(document.getElementById('cfg-task2').value) || 0.10;
    cfg.task1Url         = document.getElementById('cfg-task1-url').value.trim() || "https://instagram.com/";
    cfg.task2Url         = document.getElementById('cfg-task2-url').value.trim() || "https://youtube.com/";
    cfg.minWithdraw      = parseFloat(document.getElementById('cfg-min-withdraw').value) || 5.00;
    saveCfg();

    // Banner slotlarını yeniden yükle
    document.querySelectorAll('[data-slot]').forEach(el => { el.dataset.loaded = ""; el.innerHTML = ""; });
    initMonetagZones();
    alert("✅ Ayarlar kaydedildi ve reklam motoru yeniden başlatıldı!");
};

// ============ 9. BAŞLATMA ============
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    drawWheel();
    updateUIForLoggedInUser();
    renderTasks();
    initMonetagZones();
    if (sessionStorage.getItem('odulbox_show_invite_msg') && loggedInUser) {
        sessionStorage.removeItem('odulbox_show_invite_msg');
        alert(lang.invitedBy);
    }
});
