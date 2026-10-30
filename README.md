# 🎁 OdulBox — Spin & Win (Dünyaya Açık Sürüm)

Gizli admin panelli, Monetag reklamlarıyla para kazanan, 11 dil destekli, arkadaşını getir (referral) ödüllü tam SEO uyumlu ödül sitesi.

---

## ⚡ 1. GitHub'a Yükle (Adım Adım)

### A) GitHub'da Repo Oluştur
1. [github.com](https://github.com) → giriş yap → sağ üstteki **+** → **New repository**
2. Repository name: `odulbox` — **Public** seç → **Create repository** (README eklemeye gerek yok)

### B) Bilgisayarından Yükle
PowerShell'i aç ve sırayla çalıştır:
```powershell
cd "C:\Users\baran\OneDrive\Desktop\odulbox"
git init
git add .
git commit -m "OdulBox v3 — Direct Link + Zone ID + admin + referral + SEO"
git branch -M main
git remote add origin https://github.com/KULLANICI-ADIN/odulbox.git
git push -u origin main
```
> `KULLANICI-ADIN` kısmını kendi GitHub kullanıcı adınla değiştir.
> İlk push'ta GitHub sana tarayıcıdan giriş penceresi açacak — onayla.

### C) Canlıya Al (GitHub Pages — Ücretsiz)
1. GitHub'da repoyu aç → **Settings** → sol menüden **Pages**
2. **Branch:** `main` → **Save**
3. 1-2 dakika içinde siten hazır: `https://KULLANICI-ADIN.github.io/odulbox/`

---

## 💰 2. Monetag Kurulumu (Direct Link Modu)

En kolay yol **Direct Link** — Zone ID derdi yok, sadece linki yapıştır:

1. [monetag.com](https://monetag.com) → kayıt ol → dashboard'a gir
2. **Direct Link** bölümüne git → **Create** → ülkeleri/formatları seç → oluştur
3. Sana `https://...` ile başlayan bir **bağlantı linki** verecek — bunu kopyala
4. Siteni aç → **🎁 logoya 3 saniye basılı tut** (veya `Shift+A` basılıyken `admin` yaz, veya adresin sonuna `#admin-panel` ekle)
5. İlk açılışta admin şifresi belirle
6. **"Monetag Direct Link"** kutusuna linki yapıştır → **💾 Kaydet & Uygula**

Artık çark çevirme, görev butonları ve çekim taleplerinde reklamlar otomatik açılacak. 💸

### Alternatif: Zone ID Modu (daha yüksek gelir)
Monetag'te **Sites → Add Site** ile alan adını ekleyip her format için Zone ID alabilirsin. Admin panelindeki ilgili kutulara yapıştırman yeterli. Direct Link kutusunu boş bırakırsan Zone ID'ler çalışır, doluysa Direct Link önce gelir.

---

## 🔑 Admin Paneline Erişim (3 Gizli Yol)
| Yöntem | Nasıl |
|--------|-------|
| URL Hash | `siteadresin.com/#admin-panel` |
| Klavye Kombinasyonu | Herhangi bir yere `admin` yaz (Shift+A basılı tut) |
| Logo Uzun Basış | 🎁 logoya **3 saniye** basılı tut (mobil uyumlu, titreme geri bildirimi ile) |

Admin şifresi ilk girişte belirlenir, sonra her seferinde sorulur.

## 🎯 Admin Panelinden Ayarlanabilir
- ✅ Monetag **Direct Link** (tek kutu ile tüm reklamlar)
- ✅ Monetag Zone ID'leri (5 format — istenirse)
- ✅ Anti-Adblock modülü
- ✅ Davet bonusu ($)
- ✅ Görev ödülleri + görev linkleri
- ✅ Minimum çekim limiti
- ✅ Kullanıcı listesi & bakiyeler

## 🌍 Dil Desteği
Ziyaretçinin tarayıcı diline göre **otomatik**: TR / EN / ES / DE / FR / PT / RU / AR (RTL) / ID / HI / BN / JA

## 🤝 Arkadaşını Getir
Kullanıcı kayıt olunca otomatik referral linki alır (`?ref=CODE`). Arkadaşı bu linkle kayıt olursa **davet edene bonus** yansır. Bonus miktarı admin'den ayarlanır.

## 🔍 SEO
- Meta description, keywords, canonical
- Open Graph + Twitter Card
- JSON-LD Schema.org (WebApplication)
- Semantic HTML, alt/aria etiketleri

## 📁 Dosyalar
| Dosya | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa + admin panel + SEO meta |
| `script.js` | Dil motoru, çark, auth, referral, admin, Monetag |
| `style.css` | Tema + admin panel stilleri |

**Made with 💜 — OdulBox**
