
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CarFront,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cog,
  Disc3,
  Droplets,
  Fan,
  Gauge,
  MapPin,
  Menu,
  Settings2,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const services = [
  {
    number: "01",
    title: "Periyodik Bakım",
    description:
      "Aracın üretici tavsiyeleri ve kullanım koşulları doğrultusunda bakım ihtiyaçlarının değerlendirilmesi.",
    icon: Settings2,
  },
  {
    number: "02",
    title: "Motor Arıza Tespiti",
    description:
      "Motor sistemlerinin kontrol edilmesi ve arıza belirtilerinin uygun ekipmanlarla değerlendirilmesi.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Fren Sistemleri",
    description:
      "Fren balataları, diskler ve ilgili parçaların kontrolü ile bakım ihtiyaçlarının belirlenmesi.",
    icon: Disc3,
  },
  {
    number: "04",
    title: "Yağ & Filtre Değişimi",
    description:
      "Motor yağı ve filtrelerin araç özelliklerine uygun ürünlerle kontrol ve değişim işlemleri.",
    icon: Droplets,
  },
  {
    number: "05",
    title: "Süspansiyon & Ön Takım",
    description:
      "Sürüş konforu ve yol tutuşuyla ilişkili süspansiyon ve ön takım parçalarının kontrolü.",
    icon: Cog,
  },
  {
    number: "06",
    title: "Klima & İklimlendirme",
    description:
      "Araç klima sisteminin kontrol edilmesi ve ihtiyaç duyulan bakım işlemlerinin planlanması.",
    icon: Fan,
  },
];

const steps = [
  {
    number: "01",
    title: "ARAÇ KABUL",
    description:
      "Araç bilgileri ve iletilen şikâyetler değerlendirilir.",
  },
  {
    number: "02",
    title: "TEKNİK KONTROL",
    description:
      "İlgili sistemler incelenir ve gerekli kontroller yapılır.",
  },
  {
    number: "03",
    title: "BİLGİLENDİRME",
    description:
      "Tespitler ve önerilen işlemler araç sahibiyle paylaşılır.",
  },
  {
    number: "04",
    title: "SERVİS İŞLEMİ",
    description:
      "Onaylanan bakım veya onarım işlemleri gerçekleştirilir.",
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1100&q=85",
    title: "TEKNİK SERVİS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85",
    title: "OTOMOTİV TUTKUSU",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=85",
    title: "BAKIM & KONTROL",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => {
    setMenuOpen(false);
    setDemoOpen(true);
  };

  useEffect(() => {
    if (!demoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDemoOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [demoOpen]);

  return (
    <main>
      {/* ÜST BİLGİ */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Wrench size={13} />
            OTOMOTİV BAKIM & SERVİS
          </span>
          <span>APEX AUTO SERVICE — DEMO WEB SİTESİ</span>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="site-header">
        <div className="container nav-inner">
          <a
            href="#anasayfa"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark">
              <Activity size={29} strokeWidth={2.6} />
            </span>
            <span className="brand-text">
              APEX<span>.</span>
              <small>AUTO SERVICE</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#anasayfa" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </a>
            <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>
              Hakkımızda
            </a>
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>
              Hizmetler
            </a>
            <a href="#surec" onClick={() => setMenuOpen(false)}>
              Servis Süreci
            </a>
            <a href="#galeri" onClick={() => setMenuOpen(false)}>
              Galeri
            </a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>
              İletişim
            </a>
          </nav>

          <button
            type="button"
            className="nav-cta"
            onClick={openDemo}
          >
            SERVİS RANDEVUSU
            <ArrowUpRight size={17} />
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section" id="anasayfa">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=90"
            alt="Sportif otomobil"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-eyebrow">
              <span />
              ENGINEERED FOR THE ROAD
            </span>

            <h1>
              PERFORMANSIN
              <br />
              ARKASINDA
              <br />
              <em>GÜVEN VAR.</em>
            </h1>

            <p>
              Aracınızın bakım ve onarım ihtiyaçlarına
              teknik, planlı ve özenli bir yaklaşım.
              Her kilometrede daha bilinçli bir sürüş
              deneyimi için yanınızdayız.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={openDemo}
              >
                SERVİS RANDEVUSU
                <ArrowUpRight size={19} />
              </button>

              <a href="#hizmetler" className="button button-outline">
                HİZMETLERİ KEŞFET
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="container hero-bottom">
          <a href="#hakkimizda">
            DAHA FAZLASINI KEŞFET
            <ArrowDown size={17} />
          </a>
          <span>PRECISION. CARE. PERFORMANCE.</span>
        </div>
      </section>

      {/* DEĞER ŞERİDİ */}
      <section className="feature-strip">
        <div className="container feature-grid">
          <div>
            <ShieldCheck size={26} strokeWidth={1.6} />
            <span>ÖZENLİ SERVİS YAKLAŞIMI</span>
          </div>
          <div>
            <Gauge size={26} strokeWidth={1.6} />
            <span>TEKNİK DEĞERLENDİRME</span>
          </div>
          <div>
            <Wrench size={26} strokeWidth={1.6} />
            <span>BAKIM & ONARIM</span>
          </div>
          <div>
            <CheckCircle2 size={26} strokeWidth={1.6} />
            <span>ŞEFFAF BİLGİLENDİRME</span>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section
        className="about-section section-padding"
        id="hakkimizda"
      >
        <div className="container about-grid">
          <motion.div
            className="about-images"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              className="about-main-image"
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1100&q=85"
              alt="Otomotiv servisinde bakım çalışması"
            />

            <div className="about-badge">
              <Wrench size={28} />
              <span>
                TEKNİK
                <br />
                YAKLAŞIM
                <br />
                ÖZENLİ BAKIM
              </span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">
              APEX AUTO SERVICE HAKKINDA
            </span>

            <h2>
              HER DETAYDA
              <br />
              <em>TEKNİK BİR</em>
              <br />
              YAKLAŞIM.
            </h2>

            <p>
              Apex Auto Service, araç bakım ve onarım
              hizmetlerini düzenli kontrol, açık iletişim
              ve teknik değerlendirme anlayışıyla ele
              alan örnek bir otomotiv servis konseptidir.
            </p>

            <p>
              Bir aracın performansı, pek çok sistemin
              uyum içinde çalışmasına bağlıdır.
              Bu nedenle bakım sürecini yalnızca bir
              işlem olarak değil, aracın genel durumunu
              anlamaya yönelik bütüncül bir değerlendirme
              olarak görüyoruz.
            </p>

            <p>
              Araç sahibinin süreç boyunca bilgilendirilmesi
              ve önerilen işlemlerin anlaşılır biçimde
              açıklanması yaklaşımımızın merkezindedir.
            </p>

            <a href="#hizmetler" className="text-link">
              HİZMETLERİMİZİ İNCELEYİN
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section
        className="services-section section-padding"
        id="hizmetler"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                SERVİS HİZMETLERİ
              </span>

              <h2>
                ARACINIZ İÇİN
                <br />
                <em>TEKNİK ÇÖZÜMLER.</em>
              </h2>
            </div>

            <p>
              Günlük kullanımdan uzun yolculuklara,
              aracınızın farklı sistemlerine yönelik
              bakım ve kontrol hizmetleri.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="service-card-top">
                    <span>{service.number}</span>
                    <Icon size={34} strokeWidth={1.45} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <button
                    type="button"
                    className="service-link"
                    onClick={openDemo}
                  >
                    DETAYLI BİLGİ
                    <ArrowUpRight size={18} />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="statement-section">
        <div className="statement-background">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1900&q=85"
            alt="Sportif otomobil"
          />
        </div>

        <div className="container statement-content">
          <span className="section-eyebrow">
            APEX AUTO SERVICE
          </span>

          <h2>
            HER KİLOMETREDE
            <br />
            <em>DOĞRU BAKIMIN</em>
            <br />
            ÖNEMİ.
          </h2>

          <a href="#surec">
            SERVİS SÜRECİMİZ
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* SERVİS SÜRECİ */}
      <section
        className="process-section section-padding"
        id="surec"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                NASIL ÇALIŞIYORUZ?
              </span>

              <h2>
                PLANLI BİR
                <br />
                <em>SERVİS SÜRECİ.</em>
              </h2>
            </div>

            <p>
              Araç kabulünden bakım işlemlerine kadar
              her aşamanın anlaşılır şekilde ilerlemesi.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <motion.div
                className="process-card"
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-line" />

                <h3>{step.title}</h3>
                <p>{step.description}</p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="process-arrow"
                    size={20}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section
        className="gallery-section section-padding"
        id="galeri"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                SERVİSTEN KARELER
              </span>

              <h2>
                OTOMOTİVE
                <br />
                <em>YAKINDAN BAKIŞ.</em>
              </h2>
            </div>

            <p>
              Otomotiv dünyasının teknik detaylarını
              ve servis atmosferini yansıtan görseller.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <motion.div
                className="gallery-item"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} />

                <div className="gallery-overlay">
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="gallery-disclaimer">
            * Görseller otomotiv servisi atmosferini
            temsil etmek amacıyla kullanılmıştır;
            gerçek bir Apex Auto Service işletmesine
            ait değildir.
          </p>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section
        className="contact-section section-padding"
        id="iletisim"
      >
        <div className="container contact-grid">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">
              SERVİS & İLETİŞİM
            </span>

            <h2>
              ARACINIZ İÇİN
              <br />
              <em>İLK ADIMI</em>
              <br />
              ATIN.
            </h2>

            <p>
              Aracınızın bakım ve kontrol ihtiyaçlarını
              değerlendirmek için servis sürecini
              keşfedin. Bu alan örnek bir otomotiv
              işletmesi web sitesini göstermektedir.
            </p>

            <button
              type="button"
              className="button button-primary"
              onClick={openDemo}
            >
              SERVİS RANDEVUSU
              <CalendarDays size={18} />
            </button>
          </motion.div>

          <div className="contact-card">
            <div className="contact-card-heading">
              <Clock3 size={24} strokeWidth={1.5} />
              <h3>ÇALIŞMA SAATLERİ</h3>
            </div>

            <div className="hours-row">
              <span>Pazartesi – Cuma</span>
              <strong>08.30 – 18.30</strong>
            </div>

            <div className="hours-row">
              <span>Cumartesi</span>
              <strong>09.00 – 15.00</strong>
            </div>

            <div className="hours-row">
              <span>Pazar</span>
              <strong>Kapalı</strong>
            </div>

            <div className="contact-location">
              <MapPin size={19} />
              <span>Örnek Konum, Türkiye</span>
            </div>

            <small>
              * Saatler ve konum bilgileri örnektir.
              Bu demo üzerinden gerçek servis
              randevusu oluşturulamaz.
            </small>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-about">
            <a
              href="#anasayfa"
              className="brand footer-brand"
            >
              <span className="brand-mark">
                <Activity size={29} strokeWidth={2.6} />
              </span>

              <span className="brand-text">
                APEX<span>.</span>
                <small>AUTO SERVICE</small>
              </span>
            </a>

            <p>
              Otomotiv bakım ve servis ihtiyaçlarına
              teknik, planlı ve özenli bir yaklaşım.
            </p>

            <small>
              TYGenerate tarafından hazırlanmış
              örnek oto servis web sitesi.
            </small>
          </div>

          <div className="footer-links">
            <h4>KEŞFEDİN</h4>
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#hizmetler">Hizmetler</a>
            <a href="#surec">Servis Süreci</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">İletişim</a>
          </div>

          <div className="footer-links">
            <h4>İLETİŞİM</h4>
            <span>
              <MapPin size={16} />
              Örnek Konum, Türkiye
            </span>
            <span>
              <Clock3 size={16} />
              Örnek çalışma saatleri
            </span>
            <a
              href="https://instagram.com/tygenerate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} />
              TYGenerate Instagram
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Apex Auto Service — Demo Web Sitesi
          </span>
          <span>
            DESIGNED BY <strong>TYGENERATE</strong>
          </span>
        </div>
      </footer>

      {/* DEMO MODAL */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              className="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="modal-close"
                aria-label="Pencereyi kapat"
                onClick={() => setDemoOpen(false)}
              >
                <X size={22} />
              </button>

              <div className="modal-icon">
                <Wrench size={35} strokeWidth={1.5} />
              </div>

              <span className="section-eyebrow">
                TYGENERATE DEMO PROJESİ
              </span>

              <h2 id="demo-modal-title">
                BU BİR <em>DEMO</em> SİTEDİR.
              </h2>

              <p>
                Apex Auto Service, TYGenerate
                tarafından hazırlanmış örnek bir
                oto tamir ve bakım web sitesi
                tasarımıdır.
              </p>

              <p>
                Servis randevusu, iletişim ve işletme
                bilgileri tanıtım amaçlıdır.
                Gerçek bir işletme için bu özellikler
                ihtiyaca göre geliştirilebilir.
              </p>

              <button
                type="button"
                className="button button-primary"
                onClick={() => setDemoOpen(false)}
              >
                ANLADIM
                <ArrowRight size={18} />
              </button>

              <small>
                DESIGNED BY <strong>TYGENERATE</strong>
              </small>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
