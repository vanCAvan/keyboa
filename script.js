/* =========================================================
   DATA LAYAR MENU
   Kunci (events, toko, ...) = nilai data-screen di index.html.
   Tinggal edit/isi `items` untuk mengubah konten tiap layar.
   Format item: [ikon FontAwesome, nama, keterangan]
========================================================= */
const SCREENS = {
    // ---------- 15 menu utama ----------
    events: {
        title: 'Events', icon: 'fa-wand-magic-sparkles',
        desc: 'Event yang sedang berlangsung.',
        items: [
            ['fa-gift', 'Login Harian', 'Berakhir 7 hari lagi'],
            ['fa-star', 'Event Bintang', 'Berakhir 12 hari lagi'],
            ['fa-fire', 'Tantangan Mingguan', 'Reset setiap Senin']
        ]
    },
    toko: {
        title: 'Toko', icon: 'fa-cart-shopping',
        desc: 'Belanja item, skin, dan paket spesial.',
        items: [
            ['fa-box', 'Paket Pemula', 'Item awal untuk petualangan'],
            ['fa-shirt', 'Skin Karakter', 'Tampilan baru'],
            ['fa-gem', 'Mata Uang Premium', 'Top up']
        ]
    },
    musik: {
        title: 'Musik', icon: 'fa-compact-disc',
        desc: 'Dengarkan koleksi OST yang sudah dibuka.',
        items: [
            ['fa-music', 'Main Theme', 'Terbuka'],
            ['fa-music', 'Battle Theme', 'Terbuka'],
            ['fa-lock', 'Ending Theme', 'Terkunci']
        ]
    },
    crafting: {
        title: 'Crafting', icon: 'fa-compass-drafting',
        desc: 'Buat dan tingkatkan perlengkapan.',
        items: [
            ['fa-hammer', 'Senjata', 'Tempa senjata baru'],
            ['fa-shield-halved', 'Armor', 'Buat perlengkapan'],
            ['fa-flask', 'Ramuan', 'Racik item pemulih']
        ]
    },
    karakter: {
        title: 'Karakter', icon: 'fa-user-ninja',
        desc: 'Lihat detail dan atur susunan karakter.',
        items: [
            ['fa-user', 'Shorekeeper', 'Level 80'],
            ['fa-user-plus', 'Slot Kosong', 'Tambah karakter'],
            ['fa-user-plus', 'Slot Kosong', 'Tambah karakter']
        ]
    },
    strategi: {
        title: 'Strategi', icon: 'fa-chess-king',
        desc: 'Susun formasi sebelum pertempuran.',
        items: [
            ['fa-people-group', 'Formasi 1', 'Aktif'],
            ['fa-people-group', 'Formasi 2', 'Kosong'],
            ['fa-people-group', 'Formasi 3', 'Kosong']
        ]
    },
    inventory: {
        title: 'Inventory', icon: 'fa-database',
        desc: 'Kelola item, material, dan perlengkapan.',
        items: [
            ['fa-gem', 'Material', '128 item'],
            ['fa-shield-halved', 'Perlengkapan', '34 item'],
            ['fa-capsules', 'Consumable', '56 item'],
            ['fa-key', 'Item Quest', '9 item']
        ]
    },
    obrolan: {
        title: 'Obrolan', icon: 'fa-comment-dots',
        desc: 'Chat dengan teman dan anggota guild.',
        items: [
            ['fa-earth-asia', 'Dunia', 'Chat publik'],
            ['fa-handshake', 'Guild', 'Chat anggota guild'],
            ['fa-user-group', 'Teman', 'Pesan pribadi']
        ]
    },
    quest: {
        title: 'Quest Log', icon: 'fa-book-open',
        desc: 'Pantau quest utama dan harian.',
        items: [
            ['fa-flag', 'Quest Utama', 'Bab 3: Perjalanan'],
            ['fa-list-check', 'Quest Harian', '2 dari 4 selesai'],
            ['fa-scroll', 'Quest Sampingan', '5 tersedia']
        ]
    },
    skill: {
        title: 'Skill', icon: 'fa-atom',
        desc: 'Pelajari dan tingkatkan skill karakter.',
        items: [
            ['fa-bolt', 'Serangan Dasar', 'Lv. 10'],
            ['fa-burst', 'Skill Utama', 'Lv. 8'],
            ['fa-wand-sparkles', 'Ultimate', 'Lv. 6']
        ]
    },
    kendaraan: {
        title: 'Kendaraan', icon: 'fa-motorcycle',
        desc: 'Pilih dan kustomisasi kendaraan.',
        items: [
            ['fa-motorcycle', 'Motor Standar', 'Dipakai'],
            ['fa-lock', 'Kendaraan Baru', 'Terkunci']
        ]
    },
    pencapaian: {
        title: 'Pencapaian', icon: 'fa-trophy',
        desc: 'Daftar pencapaian yang sudah dan belum selesai.',
        items: [
            ['fa-medal', 'Penjelajah Pemula', 'Selesai'],
            ['fa-medal', 'Kolektor', 'Progres 40%'],
            ['fa-medal', 'Pahlawan', 'Terkunci']
        ]
    },
    guild: {
        title: 'Guild', icon: 'fa-handshake',
        desc: 'Kelola keanggotaan dan aktivitas guild.',
        items: [
            ['fa-users', 'Anggota', 'Lihat daftar anggota'],
            ['fa-calendar-check', 'Aktivitas', 'Misi guild hari ini'],
            ['fa-warehouse', 'Gudang Guild', 'Donasi item']
        ]
    },
    koleksi: {
        title: 'Koleksi Kartu', icon: 'fa-layer-group',
        desc: 'Koleksi kartu yang sudah dikumpulkan.',
        items: [
            ['fa-clone', 'Kartu Umum', '24 / 60'],
            ['fa-clone', 'Kartu Langka', '8 / 30'],
            ['fa-clone', 'Kartu Legendaris', '1 / 10']
        ]
    },
    peta: {
        title: 'Peta Dunia', icon: 'fa-compass',
        desc: 'Jelajahi peta dan temukan lokasi baru.',
        items: [
            ['fa-location-dot', 'Wilayah Awal', 'Terbuka'],
            ['fa-location-dot', 'Hutan Timur', 'Terbuka'],
            ['fa-lock', 'Puncak Salju', 'Terkunci']
        ]
    },

    // ---------- ikon footer ----------
    mail:     { title: 'Mail',     icon: 'fa-envelope',  desc: 'Pesan masuk.',                    items: [['fa-envelope-open', 'Hadiah Selamat Datang', 'Belum diambil']] },
    clock:    { title: 'Clock',    icon: 'fa-clock',     desc: 'Waktu event dan reset harian.',   items: [['fa-rotate', 'Reset Harian', '04:00'], ['fa-calendar-week', 'Reset Mingguan', 'Senin 04:00']] },
    notices:  { title: 'Notices',  icon: 'fa-clipboard', desc: 'Pengumuman terbaru dari game.',   items: [['fa-bullhorn', 'Pembaruan Versi Baru', 'Baca selengkapnya']] },
    camera:   { title: 'Camera',   icon: 'fa-camera',    desc: 'Ambil screenshot momen terbaikmu.', items: [['fa-image', 'Mode Foto', 'Buka kamera'], ['fa-images', 'Galeri', 'Lihat hasil foto']] },
    settings: { title: 'Settings', icon: 'fa-gear',      desc: 'Atur audio, grafis, dan kontrol.', items: [['fa-volume-high', 'Audio', 'Volume musik & efek'], ['fa-display', 'Grafis', 'Kualitas tampilan'], ['fa-gamepad', 'Kontrol', 'Atur tombol']] }
};

/* =========================================================
   ELEMEN
========================================================= */
const $ = (id) => document.getElementById(id);
const viewHome   = $('view-home');
const viewScreen = $('view-screen');
const overlay    = $('modal-overlay');
const viewLogin  = $('view-login');
const menuBox    = document.querySelector('.menu-container');

/* =========================================================
   LOGIN
   CATATAN: ini hanya login tampilan (front-end). Username & password
   di bawah terlihat oleh siapa pun yang membuka file ini, jadi jangan
   dipakai untuk melindungi data sungguhan. Untuk akun asli, validasi
   harus dilakukan di server.
========================================================= */
const DEMO_ACCOUNT = { username: 'Cavandish', password: '123456' };
const SESSION_KEY = 'terminal_login';

let loggedIn = false;
try { loggedIn = sessionStorage.getItem(SESSION_KEY) === '1'; } catch (e) { /* storage tidak tersedia */ }

function setLoggedIn(value) {
    loggedIn = value;
    try {
        if (value) sessionStorage.setItem(SESSION_KEY, '1');
        else sessionStorage.removeItem(SESSION_KEY);
    } catch (e) { /* abaikan */ }
}

function showLogin() {
    closeModal();
    menuBox.hidden = true;
    if (viewLogin.hidden) {
        viewLogin.hidden = false;
        // reset form & restart animasi
        $('login-form').reset();
        $('login-error').textContent = '';
        $('login-pass').type = 'password';
        $('toggle-pass').innerHTML = '<i class="fa-regular fa-eye"></i>';
        viewLogin.style.animation = 'none';
        void viewLogin.offsetWidth;
        viewLogin.style.animation = '';
        $('login-user').focus({ preventScroll: true });
    }
}

function logout() {
    setLoggedIn(false);
    history.replaceState(null, '', location.pathname + location.search + '#login');
    route();
}

$('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = $('login-user').value.trim();
    const pass = $('login-pass').value;
    const error = $('login-error');

    if (!user || !pass) {
        error.textContent = 'Isi username dan password terlebih dahulu.';
        return;
    }
    if (user.toLowerCase() === DEMO_ACCOUNT.username.toLowerCase() && pass === DEMO_ACCOUNT.password) {
        setLoggedIn(true);
        history.replaceState(null, '', location.pathname + location.search);
        route();
    } else {
        error.textContent = 'Username atau password salah.';
        $('login-pass').select();
    }
});

['login-user', 'login-pass'].forEach((id) => {
    $(id).addEventListener('input', () => { $('login-error').textContent = ''; });
});

$('toggle-pass').addEventListener('click', () => {
    const input = $('login-pass');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    $('toggle-pass').innerHTML = '<i class="fa-regular ' + (show ? 'fa-eye-slash' : 'fa-eye') + '"></i>';
    $('toggle-pass').setAttribute('aria-label', show ? 'Sembunyikan password' : 'Tampilkan password');
});

/* =========================================================
   NAVIGASI ANTAR TAMPILAN
   Pakai hash (#toko) supaya tombol Back browser juga jalan.
========================================================= */
function renderScreen(key) {
    const s = SCREENS[key];
    $('screen-icon').className = 'fa-solid ' + s.icon;
    $('screen-name').textContent = s.title;
    $('screen-desc').textContent = s.desc;

    const body = $('screen-body');
    body.innerHTML = '';

    if (!s.items || !s.items.length) {
        body.innerHTML = '<div class="empty-state">Konten untuk menu ini belum tersedia.</div>';
        return;
    }

    s.items.forEach(([icon, name, meta]) => {
        const card = document.createElement('button');
        card.className = 'item-card';
        card.innerHTML = '<i class="fa-solid ' + icon + '"></i><div><strong></strong><small></small></div>';
        card.querySelector('strong').textContent = name;
        card.querySelector('small').textContent = meta;
        body.appendChild(card);
    });
}

function route() {
    if (!loggedIn) { showLogin(); return; }
    viewLogin.hidden = true;
    menuBox.hidden = false;

    const key = location.hash.slice(1);
    const showScreen = key && SCREENS[key];

    if (showScreen) {
        renderScreen(key);
        viewHome.classList.remove('active', 'from-back');
        viewScreen.classList.remove('active');
        void viewScreen.offsetWidth;           // restart animasi
        viewScreen.classList.add('active');
        $('btn-back').focus({ preventScroll: true });
    } else {
        viewScreen.classList.remove('active');
        viewHome.classList.remove('active');
        void viewHome.offsetWidth;
        viewHome.classList.add('active', 'from-back');
    }
}

function openScreen(key) { location.hash = key; }
function goHome() {
    if (location.hash) history.pushState('', document.title, location.pathname + location.search);
    route();
}

window.addEventListener('hashchange', route);
window.addEventListener('popstate', route);

/* Semua tombol dengan data-screen membuka layar barunya */
document.querySelectorAll('[data-screen]').forEach((el) => {
    el.addEventListener('click', () => openScreen(el.dataset.screen));
});
$('btn-back').addEventListener('click', goHome);

/* =========================================================
   MODAL (konfirmasi / info singkat)
========================================================= */
let modalConfirm = null;

function openModal(title, text, onConfirm) {
    $('modal-title').textContent = title;
    $('modal-text').textContent = text;
    modalConfirm = onConfirm || null;
    $('modal-ok').textContent = onConfirm ? 'Ya' : 'Tutup';

    // Tombol "Batal" hanya muncul untuk konfirmasi
    let cancel = $('modal-cancel');
    if (onConfirm && !cancel) {
        cancel = document.createElement('button');
        cancel.id = 'modal-cancel';
        cancel.className = 'action-btn ghost';
        cancel.textContent = 'Batal';
        cancel.addEventListener('click', closeModal);
        $('modal-ok').before(cancel);
    } else if (!onConfirm && cancel) {
        cancel.remove();
    }

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    $('modal-ok').focus();
}

function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    modalConfirm = null;
}

$('modal-ok').addEventListener('click', () => {
    const fn = modalConfirm;
    closeModal();
    if (fn) fn();
});
$('modal-x').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

/* Tombol yang membuka modal lewat atribut data-modal="Judul|Isi" */
document.querySelectorAll('[data-modal]').forEach((el) => {
    el.addEventListener('click', () => {
        const [title, text] = el.dataset.modal.split('|');
        openModal(title, text);
    });
});

/* Keluar (X) / Power: minta konfirmasi, lalu kembali ke halaman login */
function confirmExit() {
    openModal('Keluar', 'Apakah kamu yakin ingin keluar? Kamu akan kembali ke halaman login.', logout);
}
$('btn-close').addEventListener('click', confirmExit);
$('btn-power').addEventListener('click', confirmExit);

/* =========================================================
   KEYBOARD: Esc menutup modal, lalu kembali ke home (hanya setelah login)
========================================================= */
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !loggedIn) return;
    if (overlay.classList.contains('active')) closeModal();
    else if (location.hash) goHome();
});

/* Tampilkan layar yang sesuai saat halaman pertama dibuka */
route();
