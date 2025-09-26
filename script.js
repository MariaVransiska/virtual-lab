// untuk laman ayat
const verses = [
    "Yohanes 3:16 - Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.",
    "Mazmur 23:1 - TUHAN adalah gembalaku, takkan kekurangan aku.",
    "Filipi 4:13 - Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.",
    "Amsal 3:5-6 - Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri; akuilah Dia dalam segala lakumu, maka Ia akan meluruskan jalanmu.",
    "Yeremia 29:11 - Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.",
    "Yesaya 40:31 - Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka berjalan dan tidak menjadi lelah.",
    "Mazmur 46:1 - Allah itu bagi kita tempat perlindungan dan kekuatan, sebagai penolong dalam kesesakan sangat terbukti.",
    "Matius 11:28 - Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
    "Roma 8:28 - Kita tahu sekarang bahwa Allah turut bekerja dalam segala sesuatu untuk mendatangkan kebaikan bagi mereka yang mengasihi Dia, yaitu bagi mereka yang terpanggil sesuai dengan rencana Allah.",
    "1 Yohanes 5:12 - Barangsiapa memiliki Anak, ia memiliki hidup; barangsiapa tidak memiliki Anak Allah, ia tidak memiliki hidup."
  ];
  function newVerse() {
    if (document.getElementById("verse-box")) {
      document.getElementById("verse-box").textContent =
        verses[Math.floor(Math.random() * verses.length)];
    }
  }
  if (document.getElementById("new-verse")) {
    document.getElementById("new-verse").onclick = newVerse;
    newVerse();
  }
  
  // untuk laman kuis
  const questions = [
    { q: "Siapakah tokoh utama Perjanjian Baru?", a: "Yesus" },
    { q: "Berapa jumlah kitab dalam Perjanjian Lama?", a: "39" },
    { q: "Siapa yang memimpin bangsa Israel keluar dari Mesir?", a: "Musa" },
    { q: "Apa nama kitab pertama dalam Alkitab?", a: "Kejadian" },
    { q: "Siapa raja Israel yang menulis banyak Mazmur?", a: "Daud" },
    { q: "Siapa yang ditelan ikan besar selama tiga hari?", a: "Yunus" },
    { q: "Dimanakah Yesus lahir?", a: "Betlehem" },
    { q: "Siapa rasul yang menyangkal Yesus tiga kali?", a: "Petrus" },
    { q: "Apa mukjizat pertama Yesus menurut Yohanes 2?", a: "Air menjadi anggur" },
    { q: "Siapa yang mengkhianati Yesus?", a: "Yudas" },
    { q: "Berapa murid Yesus yang utama (rasul)?", a: "12" },
    { q: "Apa doa yang diajarkan Yesus dikenal sebagai?", a: "Doa Bapa Kami" },
    { q: "Siapa penulis sebagian besar surat Perjanjian Baru?", a: "Paulus" },
    { q: "Apa nama gunung tempat Yesus menyampaikan Khotbah yang Terkenal?", a: "Bukit" },
    { q: "Siapa hakim perempuan dalam kitab Hakim-hakim?", a: "Debora" },
    { q: "Siapa putra Abraham dan Sara?", a: "Ishak" },
    { q: "Apa buah Roh yang pertama menurut Galatia 5:22?", a: "Kasih" },
    { q: "Siapa nabi yang menantang nabi-nabi Baal di Gunung Karmel?", a: "Elia" },
    { q: "Siapa yang menerima Hukum Taurat di Gunung Sinai?", a: "Musa" },
    { q: "Apa nama sungai tempat Yesus dibaptis?", a: "Yordan" }
  ];
  if (document.getElementById("quiz-questions")) {
    const quizBox = document.getElementById("quiz-questions");
    questions.forEach((x, i) => {
      const wrap = document.createElement("div");
      wrap.innerHTML = `<label for=\"q${i}\">${x.q}</label><br><input id=\"q${i}\" autocomplete=\"off\">`;
      quizBox.appendChild(wrap);
    });
    const quizForm = document.getElementById("quiz-form");
    const submitBtn = document.getElementById("submit-quiz");
    const result = document.getElementById("quiz-result");
    function gradeQuiz() {
      let score = 0;
      questions.forEach((x, i) => {
        const ans = document.getElementById("q" + i).value.trim();
        if (ans.toLowerCase() === x.a.toLowerCase()) score++;
      });
      result.textContent = `Nilai: ${score}/${questions.length}`;
    }
    if (quizForm) {
      quizForm.addEventListener("submit", function(e) {
        e.preventDefault();
        gradeQuiz();
      });
    } else if (submitBtn) {
      submitBtn.onclick = gradeQuiz;
    }
  }
  
  // untuk laman tugas
if (document.getElementById("dropzone")) {
  const drop = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-input");
  const fileList = document.getElementById("file-list");
  const submitBtn = document.getElementById("submit-files");
  const statusMsg = document.getElementById("submit-status");

  let uploadedFiles = [];

  drop.onclick = () => fileInput.click();
  drop.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  };
  drop.ondrop = (e) => {
    e.preventDefault();
    [...e.dataTransfer.files].forEach(addFile);
  };
  drop.ondragover = (e) => e.preventDefault();
  fileInput.onchange = (e) => [...e.target.files].forEach(addFile);

  function addFile(file) {
    uploadedFiles.push(file);
    const item = document.createElement("div");
    item.textContent = file.name;
    fileList.appendChild(item);
  }

  submitBtn.addEventListener("click", () => {
    if (uploadedFiles.length === 0) {
      statusMsg.textContent = "⚠️ Tidak ada file yang diupload!";
      return;
    }
    // untuk submit
    statusMsg.textContent = `✅ ${uploadedFiles.length} file berhasil disubmit!`;
    // untuk simpen file - simulasi aja
    const fileNames = uploadedFiles.map(f => f.name);
    localStorage.setItem("submittedFiles", JSON.stringify(fileNames));
  });
}

  
  // untuk laman jurnal
  if (document.getElementById("journal-text")) {
    const journalArea = document.getElementById("journal-text");
    const saveJournalBtn = document.getElementById("save-journal");
    const clearJournalBtn = document.getElementById("clear-journal");
    const statusText = document.getElementById("status");

    const savedNote = localStorage.getItem("journalNote");
    if (savedNote) {
      journalArea.value = savedNote;
    }

    saveJournalBtn.addEventListener("click", () => {
      localStorage.setItem("journalNote", journalArea.value);
      statusText.textContent = "✅ Catatan berhasil disimpan!";
      setTimeout(() => (statusText.textContent = ""), 2000);
    });

    clearJournalBtn.addEventListener("click", () => {
      journalArea.value = "";
      localStorage.removeItem("journalNote");
      statusText.textContent = "🗑 Catatan dihapus!";
      setTimeout(() => (statusText.textContent = ""), 2000);
    });
  }
  
  // untuk laman profile
(function() {
  const form = document.getElementById("profile-form");
  if (!form) return;
  const nameEl = document.getElementById("name");
  const genderEl = document.getElementById("gender");
  const nimEl = document.getElementById("nim");
  const kelasEl = document.getElementById("kelas");
  const avatar = document.getElementById("user-avatar");
  const savedProfileBox = document.getElementById("saved-profile");

  function renderSavedProfile(p) {
    const rows = [];
    const add = (k, v) => { if (v) rows.push(`<div class=\"profile-info-row\"><div class=\"profile-info-key\">${k}</div><div class=\"profile-info-value\">${v}</div></div>`); };
    add('Nama', p.name);
    add('Gender', p.gender ? (p.gender === 'female' ? 'Perempuan' : 'Laki-laki') : '');
    add('NIM', p.nim);
    add('Kelas', p.kelas);
    savedProfileBox.innerHTML = rows.join("");
  }

  function loadProfile() {
    return {
      name: localStorage.getItem("user-name") || "",
      gender: localStorage.getItem("user-gender") || "male",
      nim: localStorage.getItem("user-nim") || "",
      kelas: localStorage.getItem("user-kelas") || "",
    };
  }

  function saveProfile(p) {
    localStorage.setItem("user-name", p.name || "");
    localStorage.setItem("user-gender", p.gender || "male");
    localStorage.setItem("user-nim", p.nim || "");
    localStorage.setItem("user-kelas", p.kelas || "");
  }
  
  const saved = loadProfile();
  nameEl.value = saved.name;
  genderEl.value = saved.gender;
  nimEl.value = saved.nim;
  kelasEl.value = saved.kelas;
  avatar.src = saved.gender === "female" ? "png/icon profile cewe.png" : "png/icon profile cowo.png";
  renderSavedProfile(saved);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const profile = {
      name: (nameEl.value || "").trim(),
      gender: genderEl.value,
      nim: (nimEl.value || "").trim(),
      kelas: (kelasEl.value || "").trim(),
    };
    avatar.src = profile.gender === "female" ? "png/icon profile cewe.png" : "png/icon profile cowo.png";
    saveProfile(profile);
    renderSavedProfile(profile);
  });
})();
  