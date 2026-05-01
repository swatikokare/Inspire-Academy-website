import { useEffect, useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  ClipboardCheck,
  HelpCircle,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  School,
  Sparkles,
  Trophy,
  Users,
  X,
  BarChart3,
  Calculator,
  FileText,
  Languages,
  Laptop,
  Landmark,
  NotebookPen,
  PenLine,
  Repeat2,
  ShieldCheck,
} from "lucide-react";

const academy = {
  phonePrimary: "8073278427",
  phoneSecondary: "9731177590",
  address: "MIG / A-565, near Suryacity Park",
  batch: "6 PM - 8 PM",
  whatsapp: "918073278427",
  // Replace this with your exact Google Maps URL later.
  mapUrl: "https://www.google.com/maps/search/?api=1&query=MIG%20A-565%20near%20Suryacity%20Park",
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why" },
  { label: "Subjects", href: "#subjects" },
  { label: "Contact", href: "#contact" },
];

const badges = [
  { label: "7 Years Experience", icon: Award },
  { label: "Qualified Teachers", icon: GraduationCap },
  { label: "Concept Clarity", icon: Lightbulb },
  { label: "All Subjects", icon: BookOpen },
];

const whyCards = [
  {
    title: "7 Years Teaching Experience",
    text: "Steady academic guidance shaped by years of classroom and tuition experience.",
    icon: Trophy,
  },
  {
    title: "Qualified Teachers",
    text: "Dedicated mentors who keep lessons structured, friendly, and goal-focused.",
    icon: GraduationCap,
  },
  {
    title: "Concept Clarity",
    text: "Students learn the why behind each topic before moving into practice.",
    icon: Brain,
  },
  {
    title: "Confidence Building",
    text: "Supportive learning habits help students ask, answer, and improve.",
    icon: Sparkles,
  },
  {
    title: "Result-Oriented Learning",
    text: "Regular revision, tests, and feedback keep exam preparation on track.",
    icon: BarChart3,
  },
  {
    title: "Individual Attention",
    text: "Small-batch focus helps every child get the guidance they need.",
    icon: Users,
  },
];

const subjects = [
  {
    name: "Math",
    icon: Calculator,
    description: "Build strong fundamentals, faster problem-solving, and exam-ready accuracy.",
  },
  {
    name: "Science",
    icon: Microscope,
    description: "Understand concepts through examples, diagrams, experiments, and revision.",
  },
  {
    name: "English",
    icon: PenLine,
    description: "Improve grammar, reading, writing skills, vocabulary, and school performance.",
  },
  {
    name: "Social Studies",
    icon: Landmark,
    description: "Make history, civics, geography, and economics easier to remember and write.",
  },
  {
    name: "Hindi / Kannada",
    icon: Languages,
    description: "Strengthen language basics, comprehension, grammar, and confident expression.",
  },
  {
    name: "Computer Basics",
    icon: Laptop,
    description: "Learn practical digital skills with clear explanations and guided practice.",
  },
];

const programTracks = [
  {
    id: "primary",
    label: "Grade 1-4",
    title: "Foundation Builders",
    text: "Gentle, habit-focused tuition for early learners who need strong basics and school confidence.",
    focus: ["Reading habits", "Math basics", "Homework support", "Daily discipline"],
    icon: BookOpen,
  },
  {
    id: "middle",
    label: "Grade 5-7",
    title: "Concept Strengtheners",
    text: "Structured support for students moving into deeper Math, Science, languages, and exam writing.",
    focus: ["Concept clarity", "Chapter practice", "Doubt clearing", "Regular revision"],
    icon: Brain,
  },
  {
    id: "senior",
    label: "Grade 8-10",
    title: "Exam Ready Batch",
    text: "Focused preparation for board-facing classes with stronger revision cycles and performance tracking.",
    focus: ["Math and Science", "Test practice", "Answer writing", "Confidence building"],
    icon: Trophy,
  },
];

const journeySteps = [
  {
    title: "Orientation",
    text: "We understand the child's class, board, strengths, and learning gaps.",
    icon: ClipboardCheck,
  },
  {
    title: "Concept Class",
    text: "Each topic is explained clearly before students move into exercises.",
    icon: Lightbulb,
  },
  {
    title: "Daily Practice",
    text: "Short practice routines help lessons become steady habits.",
    icon: NotebookPen,
  },
  {
    title: "Revision Loop",
    text: "Regular revision and doubt clearing keep older chapters fresh.",
    icon: Repeat2,
  },
  {
    title: "Exam Prep",
    text: "Tests, answer-writing practice, and feedback prepare students calmly.",
    icon: FileText,
  },
];

const parentStories = [
  {
    name: "For parents",
    text: "Regular practice, doubt clearing, and a calm routine help students feel more prepared.",
  },
  {
    name: "For younger learners",
    text: "Patient explanation and homework support make daily study feel less stressful.",
  },
  {
    name: "For exam classes",
    text: "Revision cycles and answer-writing practice help students approach tests with confidence.",
  },
];

const quickResources = [
  { title: "Admission Guidance", text: "Understand batches, boards, and grade-wise support.", icon: HeartHandshake },
  { title: "Exam Preparation", text: "Revision plans, tests, and answer-writing practice.", icon: FileText },
  { title: "Talk to a Teacher", text: "Call or WhatsApp to discuss your child's needs.", icon: HelpCircle },
];

const readinessQuestions = [
  "Does your child revise school lessons every day?",
  "Are Math or Science doubts cleared quickly?",
  "Does your child feel confident before tests?",
  "Is there a fixed study routine after school?",
];

const faqs = [
  {
    question: "Which classes can enroll?",
    answer: "Admissions are open for Grade 1 to 10 for ICSE, CBSE, and State Board students.",
  },
  {
    question: "What subjects are covered?",
    answer: "All subjects are supported, with special focus on Math and Science concept clarity.",
  },
  {
    question: "What is the batch timing?",
    answer: "The main batch timing is 6 PM to 8 PM.",
  },
  {
    question: "How do I confirm admission?",
    answer: "Call or WhatsApp 8073278427 or 9731177590 to check seat availability and next steps.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedTrack, setSelectedTrack] = useState(programTracks[0]);

  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${academy.whatsapp}?text=${encodeURIComponent(
        "Hello Inspire Academy, I would like to know about admissions for 2026-2027.",
      )}`,
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-ink">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero whatsappUrl={whatsappUrl} />
        <ProgramFinder
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
          whatsappUrl={whatsappUrl}
        />
        <ReadinessChecker whatsappUrl={whatsappUrl} />
        <WhyChoose />
        <SubjectExplorer selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
        <LearningJourney />
        <QuoteSection />
        <ParentProof whatsappUrl={whatsappUrl} />
        <FaqSection />
        <Contact whatsappUrl={whatsappUrl} />
      </main>
      <Footer />
      <FloatingWhatsapp whatsappUrl={whatsappUrl} />
    </div>
  );
}

function AcademyLogo({ compact = false, markOnly = false }) {
  return (
    <div className={`flex items-center ${compact ? "gap-3" : "gap-4"}`}>
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-white shadow-glow ${
          compact ? "h-12 w-12" : "h-14 w-14"
        }`}
      >
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-10 w-10">
          <path d="M32 7l3.2 7.1 7.8.8-5.8 5.3 1.6 7.6L32 24l-6.8 3.8 1.6-7.6-5.8-5.3 7.8-.8L32 7z" fill="#f5b51b" />
          <path d="M15 31c7.2.2 12.6 2 17 5.8 4.4-3.8 9.8-5.6 17-5.8v16.4c-6.9.1-12.2 1.8-17 5.5-4.8-3.7-10.1-5.4-17-5.5V31z" fill="#08275f" />
          <path d="M20 36c4.2.5 7.5 1.8 10.2 4.1M44 36c-4.2.5-7.5 1.8-10.2 4.1M20 42c4.2.4 7.5 1.5 10.2 3.6M44 42c-4.2.4-7.5 1.5-10.2 3.6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="32" cy="25" r="4" fill="#f5b51b" />
        </svg>
      </div>
      {!markOnly && (
        <div>
          <p className={`font-display font-black leading-none tracking-wide ${compact ? "text-lg" : "text-xl"}`}>
            Inspire Academy
          </p>
          <p className={`font-semibold text-gold ${compact ? "text-xs" : "text-xs"}`}>Learn Today, Lead Tomorrow</p>
        </div>
      )}
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 text-navy shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" onClick={closeMenu} className="flex min-w-0 items-center text-navy">
          <span className="sm:hidden">
            <AcademyLogo compact />
          </span>
          <span className="hidden sm:block">
            <AcademyLogo />
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-ivory hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={`tel:${academy.phonePrimary}`}
            className="flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-navy transition hover:bg-ivory"
          >
            <Phone size={16} />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-black">Call Now</span>
              <span className="text-[11px] font-bold text-slate-500">{academy.phonePrimary}, {academy.phoneSecondary}</span>
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-navy px-5 py-2 text-sm font-black text-white shadow-[0_12px_24px_rgba(8,39,95,0.18)] transition hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
          >
            Register
            <ChevronRight size={16} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy xl:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[999] h-dvh overflow-y-auto bg-navy-dark/95 px-4 py-4 text-white backdrop-blur-xl xl:hidden">
          <div className="flex items-center justify-between">
            <AcademyLogo compact />
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20"
            >
              <X />
            </button>
          </div>

          <div className="mt-10 grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl bg-white/10 px-5 py-4 text-lg font-black transition active:bg-gold active:text-navy hover:bg-gold hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={`tel:${academy.phonePrimary}`}
              onClick={closeMenu}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-black text-navy"
            >
              Call Now
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-2xl bg-gold px-4 py-3 text-center text-sm font-black text-navy"
            >
              Enroll Today
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ whatsappUrl }) {
  const [selectedGoal, setSelectedGoal] = useState(programTracks[0]);
  const GoalIcon = selectedGoal.icon;
  const heroImages = [
    {
      src: "https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg",
      alt: "Indian students studying together",
      className: "h-40 sm:h-48 lg:h-52",
      position: "object-center",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/041/486/564/non_2x/schoolboy-reading-a-book-knowledge-and-education-concept-children-study-at-school-or-at-home-illustration-vector.jpg",
      alt: "Schoolboy reading a book illustration",
      className: "h-32 sm:h-36 lg:h-40",
      position: "object-center",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/036/179/471/non_2x/reading-on-pile-of-books-happy-students-sit-on-big-book-stack-read-and-learn-books-festival-poster-for-bookstore-library-concept-vector.jpg",
      alt: "Students reading on pile of books illustration",
      className: "h-32 sm:h-36 lg:h-40",
      position: "object-center",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#eaf6fb] pt-20 text-navy sm:pt-24">
      <div className="mx-auto max-w-7xl bg-white shadow-[0_20px_60px_rgba(8,39,95,0.08)]">
        <div className="bg-gold px-4 py-2 text-center text-xs font-black text-navy sm:text-sm">
          Are you a student or school parent looking for focused tuition? Talk to us.
        </div>

        <div className="reveal grid items-center gap-8 px-4 py-8 sm:px-8 lg:min-h-[calc(100vh-180px)] lg:grid-cols-[1.02fr_0.98fr] lg:px-14 lg:py-10">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-gold">100% focus on concept clarity</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-black leading-[1.08] tracking-normal text-navy sm:text-4xl lg:text-5xl">
              Find the right tuition support for your child
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600">
              Inspire Academy helps Grade 1 to 10 students build stronger basics, clearer concepts, and better confidence for school exams.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#programs"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-black text-navy shadow-glow transition hover:-translate-y-1 hover:bg-navy hover:text-white"
              >
                Get started
                <ChevronRight size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-navy shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-ivory"
              >
                <MessageCircle size={20} />
                See how it works
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
              {["Grade 1-10", "ICSE", "CBSE", "State Board"].map((item) => (
                <div key={item} className="rounded-xl bg-[#f6fbff] px-3 py-3 text-center text-xs font-black text-navy ring-1 ring-sky-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-gold/20" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gold/15" />
            <div className="relative grid grid-cols-2 gap-4">
              {/* Replace these image URLs with your own student/classroom photos later. */}
              <div className="space-y-4">
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className={`${heroImages[0].className} ${heroImages[0].position} w-full rounded-[1.5rem] object-cover shadow-premium`}
                />
                <div className="rounded-[1.5rem] bg-gold p-5 text-navy shadow-glow">
                  <p className="text-xs font-black uppercase tracking-wide">Batch</p>
                  <p className="mt-1 font-display text-2xl font-black">6-8 PM</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className={`${heroImages[1].className} ${heroImages[1].position} w-full rounded-[1.5rem] object-cover shadow-premium`}
                />
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className={`${heroImages[2].className} ${heroImages[2].position} w-full rounded-[1.5rem] object-cover shadow-premium`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid bg-[#0874f2] text-white sm:grid-cols-4">
          {[
            ["7+", "Years Experience"],
            ["10", "Grades Covered"],
            ["3", "Boards Supported"],
            ["2", "Focused Hours"],
          ].map(([value, label]) => (
            <div key={label} className="border-white/15 px-6 py-4 text-center sm:border-r">
              <p className="font-display text-2xl font-black">{value}</p>
              <p className="mt-1 text-sm font-semibold text-white/80">{label}</p>
            </div>
          ))}
        </div>

        <div className="reveal bg-white px-4 py-6 sm:px-8 lg:px-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_14px_36px_rgba(8,39,95,0.08)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">Select class group</p>
                <p className="mt-1 font-display text-xl font-black text-navy">Explore the right path for your child</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[640px]">
                {programTracks.map((track) => {
                  const Icon = track.icon;
                  const active = selectedGoal.id === track.id;
                  return (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => setSelectedGoal(track)}
                      className={`rounded-xl border p-4 text-left transition hover:-translate-y-1 ${
                        active ? "border-[#1684c7] bg-[#1684c7] text-white shadow-[0_16px_34px_rgba(22,132,199,0.24)]" : "border-slate-100 bg-ivory text-navy hover:border-gold"
                      }`}
                    >
                      <Icon className={active ? "text-white" : "text-gold"} size={25} />
                      <p className="mt-3 text-sm font-black uppercase tracking-wide">{track.label}</p>
                      <p className="mt-1 font-display text-lg font-black">{track.title}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-ivory p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy">
                    <GoalIcon size={25} />
                  </div>
                  <div>
                    <p className="font-display text-xl font-black text-navy">{selectedGoal.title}</p>
                    <p className="text-sm font-semibold text-slate-600">{selectedGoal.text}</p>
                  </div>
                </div>
                <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-[#1684c7]">
                  View Details
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramFinder({ selectedTrack, setSelectedTrack, whatsappUrl }) {
  const TrackIcon = selectedTrack.icon;

  return (
    <section id="programs" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Select Your Child's Class"
          title="Find the right tuition path in one tap."
          text="Choose a grade group to see the learning focus, support style, and next step for admissions."
        />

        <div className="reveal mt-10 grid gap-4 rounded-2xl border border-slate-100 bg-ivory p-3 shadow-premium lg:grid-cols-[0.75fr_1.25fr] lg:p-5">
          <div className="grid gap-3">
            {programTracks.map((track) => {
              const Icon = track.icon;
              const active = selectedTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrack(track)}
                  className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition hover:-translate-y-0.5 ${
                    active
                      ? "border-gold bg-navy text-white shadow-premium"
                      : "border-slate-100 bg-white text-navy hover:border-gold/50"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      active ? "bg-gold text-navy" : "bg-gold-soft text-navy"
                    }`}
                  >
                    <Icon size={25} />
                  </span>
                  <span>
                    <span className="block text-sm font-black uppercase tracking-[0.14em] text-gold">{track.label}</span>
                    <span className="mt-1 block font-display text-lg font-black">{track.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(8,39,95,0.08)] lg:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] bg-gold-soft" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold text-navy shadow-glow">
                  <TrackIcon size={34} />
                </div>
                <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-accent">Recommended Path</p>
                <h3 className="mt-2 font-display text-xl font-black text-navy sm:text-2xl">{selectedTrack.title}</h3>
                <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">{selectedTrack.text}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {selectedTrack.focus.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-ivory p-3 font-bold text-navy">
                      <CheckCircle2 className="shrink-0 text-gold" size={20} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-navy p-5 text-white">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Admissions Open</p>
                <p className="mt-3 font-display text-2xl font-black">2026-2027</p>
                <div className="mt-5 grid gap-3">
                  <MiniInfo icon={School} label="Boards" value="ICSE / CBSE / State" />
                  <MiniInfo icon={Clock} label="Batch" value={academy.batch} />
                  <MiniInfo icon={ShieldCheck} label="Support" value="Small-batch attention" />
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-black text-navy transition hover:bg-white"
                >
                  Check Seat Availability
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadinessChecker({ whatsappUrl }) {
  const [answers, setAnswers] = useState(() => readinessQuestions.map(() => false));
  const score = answers.filter(Boolean).length;
  const result =
    score >= 3
      ? "Your child already has a good study base. Inspire can help sharpen exam confidence."
      : score >= 1
        ? "Your child may benefit from guided practice, doubt clearing, and a steady study routine."
        : "A structured tuition routine can help build stronger daily discipline and concept clarity.";

  const toggleAnswer = (index) => {
    setAnswers((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)));
  };

  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-accent">Interactive Check</p>
          <h2 className="mt-3 font-display text-2xl font-black leading-tight text-navy sm:text-3xl">
            Is your child ready for the next academic year?
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-slate-600">
            Tap the statements that feel true. This quick check helps parents understand where tuition support may help most.
          </p>
        </div>

        <div className="reveal rounded-2xl bg-white p-5 shadow-premium sm:p-6">
          <div className="grid gap-3">
            {readinessQuestions.map((question, index) => (
              <button
                key={question}
                type="button"
                onClick={() => toggleAnswer(index)}
                className={`flex items-center gap-4 rounded-xl border p-4 text-left transition hover:-translate-y-0.5 ${
                  answers[index] ? "border-gold bg-gold-soft text-navy" : "border-slate-100 bg-white text-slate-700"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                    answers[index] ? "border-gold bg-gold text-navy" : "border-slate-200 text-slate-300"
                  }`}
                >
                  <CheckCircle2 size={18} />
                </span>
                <span className="font-bold">{question}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-navy p-5 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Readiness Score</p>
                <p className="mt-2 font-display text-2xl font-black">{score}/4</p>
              </div>
              <p className="max-w-xl text-sm font-semibold leading-6 text-white/75">{result}</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-black text-navy transition hover:bg-white"
            >
              Discuss This With Us
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniInfo({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
      <Icon className="text-gold" size={20} />
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-white/60">{label}</p>
        <p className="font-black">{value}</p>
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, text, center = true, theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div className={`reveal mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${isDark ? "text-gold" : "text-accent"}`}>
        {kicker}
      </p>
      <h2 className={`mt-3 font-display text-2xl font-black leading-tight sm:text-3xl ${isDark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base font-medium leading-7 sm:text-lg ${isDark ? "text-white/70" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function WhyChoose() {
  return (
    <section id="why" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeader
        kicker="Why Choose Inspire Academy"
        title="A focused learning space where students feel guided, capable, and ready."
        text="Interactive support, consistent revision, and clear teaching help students build better habits across the academic year."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyCards.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="reveal group rounded-xl border border-slate-100 bg-white p-6 shadow-[0_12px_34px_rgba(8,39,95,0.08)] transition duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-premium"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-soft text-navy transition group-hover:bg-gold">
              <Icon size={29} />
            </div>
            <h3 className="font-display text-xl font-black text-navy">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SubjectExplorer({ selectedSubject, setSelectedSubject }) {
  const SelectedIcon = selectedSubject.icon;

  return (
    <section id="subjects" className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Interactive Subject Explorer"
          title="Tap a subject to see how we help."
          text="Each subject is taught with practice, revision, and confidence-building support."
          theme="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              const active = selectedSubject.name === subject.name;
              return (
                <button
                  type="button"
                  key={subject.name}
                  onClick={() => setSelectedSubject(subject)}
                  className={`rounded-xl border p-5 text-left shadow-lg transition duration-300 hover:-translate-y-1 ${
                    active
                      ? "border-gold bg-gold text-navy shadow-glow"
                      : "border-white/10 bg-white/10 text-white hover:border-gold/60 hover:bg-white/20"
                  }`}
                >
                  <Icon size={30} className={active ? "text-navy" : "text-gold"} />
                  <p className="mt-4 font-display text-xl font-black">{subject.name}</p>
                </button>
              );
            })}
          </div>

          <div className="reveal rounded-2xl border border-white/10 bg-white p-6 text-navy shadow-premium lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold text-navy shadow-glow">
              <SelectedIcon size={36} />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-accent">Selected Subject</p>
            <h3 className="mt-3 font-display text-2xl font-black">{selectedSubject.name}</h3>
            <p className="mt-5 text-base font-medium leading-7 text-slate-600">{selectedSubject.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Clear basics", "Guided practice", "Regular revision", "Exam readiness"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-gold-soft p-3 font-bold">
                  <CheckCircle2 className="shrink-0 text-navy" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningJourney() {
  return (
    <section className="relative overflow-hidden bg-[#0f75bc] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 learning-rays opacity-30" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Student Journey at Inspire"
          title="A simple path from doubt to confidence."
          text="The goal is not only finishing chapters. Students learn how to study, revise, ask doubts, and walk into exams with calm confidence."
          theme="dark"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {journeySteps.map(({ title, text, icon: Icon }, index) => (
            <article
              key={title}
              className={`reveal relative rounded-2xl border border-white/20 bg-white p-5 text-navy shadow-premium transition hover:-translate-y-2 ${
                index % 2 === 1 ? "lg:mt-12" : ""
              }`}
            >
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-lg font-black text-navy shadow-glow">
                {index + 1}
              </div>
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold">
                <Icon size={28} />
              </div>
              <h3 className="mt-5 font-display text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 grid gap-4 rounded-2xl bg-navy p-5 shadow-premium sm:grid-cols-3">
          <JourneyMetric value="Daily" label="practice rhythm" />
          <JourneyMetric value="Weekly" label="revision focus" />
          <JourneyMetric value="Exam" label="readiness support" />
        </div>
      </div>
    </section>
  );
}

function JourneyMetric({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 p-5 text-center">
      <p className="font-display text-2xl font-black text-gold">{value}</p>
      <p className="mt-1 text-sm font-bold uppercase tracking-wide text-white/70">{label}</p>
    </div>
  );
}

function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-navy-dark px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 academic-grid opacity-25" />
      <div className="reveal relative mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-glow">
          <BookOpen size={34} />
        </div>
        <blockquote className="font-display text-xl font-black leading-tight sm:text-3xl">
          "The more that you read, the more things you will know. The more that you learn, the more places you&apos;ll go."
        </blockquote>
        <p className="mt-6 text-xl font-black text-gold">- Dr. Seuss</p>
      </div>
    </section>
  );
}

function ParentProof({ whatsappUrl }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Parent Trust"
          title="What families value most: clarity, discipline, and care."
          text="A clear learning routine matters as much as completing chapters. These are the outcomes Inspire Academy is designed to support."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {parentStories.map((story) => (
            <article
              key={story.name}
              className="reveal rounded-2xl border border-slate-100 bg-ivory p-6 shadow-[0_14px_36px_rgba(8,39,95,0.08)] transition hover:-translate-y-2 hover:bg-white"
            >
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }, (_, index) => (
                  <Sparkles key={index} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="text-base font-semibold leading-7 text-slate-700">{story.text}</p>
              <p className="mt-5 font-display text-base font-black text-navy">{story.name}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
          <div className="reveal rounded-2xl bg-navy p-6 text-white shadow-premium sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Do More With Inspire</p>
            <h3 className="mt-3 font-display text-2xl font-black">One call can clarify the right batch for your child.</h3>
            <p className="mt-4 text-base font-medium leading-7 text-white/75">
              Share the grade, board, and subject challenges. We will guide you on whether Inspire Academy is the right fit.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-black text-navy shadow-glow transition hover:bg-white"
            >
              Call or WhatsApp Now
              <MessageCircle size={18} />
            </a>
          </div>

          <div className="grid gap-4">
            {quickResources.map(({ title, text, icon: Icon }) => (
              <article key={title} className="reveal flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_rgba(8,39,95,0.07)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-navy">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-black text-navy">{title}</h4>
                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-accent">Admission Help</p>
          <h2 className="mt-3 font-display text-2xl font-black leading-tight text-navy sm:text-3xl">
            Quick answers before you call.
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-slate-600">
            Clear admission information helps you decide quickly and call with the right questions.
          </p>
        </div>

        <div className="reveal grid gap-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <article key={faq.question} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_12px_30px_rgba(8,39,95,0.07)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg font-black text-navy">{faq.question}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${open ? "bg-gold text-navy rotate-90" : "bg-ivory text-navy"}`}>
                    <ChevronRight size={19} />
                  </span>
                </button>
                {open && <p className="border-t border-slate-100 px-5 pb-5 pt-4 font-semibold leading-7 text-slate-600">{faq.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ whatsappUrl }) {
  return (
    <section id="contact" className="bg-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Contact"
          title="Ready to enroll? Call, WhatsApp, or visit Inspire Academy."
          text="Admissions are open for Grade 1 to 10 for the 2026-2027 academic year."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <ContactCard
            icon={Phone}
            title="Call / WhatsApp"
            value={`${academy.phonePrimary}, ${academy.phoneSecondary}`}
          />
          <ContactCard icon={MapPin} title="Visit Us" value={academy.address} />
          <ContactCard icon={Clock} title="Batch" value={academy.batch} />
        </div>

        <div className="reveal mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${academy.phonePrimary}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 py-3 font-black text-white shadow-premium transition hover:-translate-y-1 hover:bg-navy-dark"
          >
            <Phone size={20} />
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-black text-navy shadow-glow transition hover:-translate-y-1 hover:bg-white"
          >
            <MessageCircle size={20} />
            WhatsApp Now
          </a>
          <a
            href={academy.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-7 py-3 font-black text-navy shadow-sm transition hover:-translate-y-1 hover:border-gold hover:bg-gold-soft"
          >
            <MapPin size={20} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, value }) {
  return (
    <article className="reveal rounded-xl bg-white p-6 shadow-[0_14px_36px_rgba(8,39,95,0.09)] transition hover:-translate-y-1 hover:shadow-premium">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy">
        <Icon size={29} />
      </div>
      <h3 className="mt-6 font-display text-xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-lg font-bold leading-7 text-slate-700">{value}</p>
    </article>
  );
}

function FloatingWhatsapp({ whatsappUrl }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.4)] transition hover:-translate-y-1"
    >
      <MessageCircle size={30} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-navy px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-black">Inspire Academy Tuition Center</p>
          <p className="mt-1 font-semibold text-gold">Learn Today, Lead Tomorrow</p>
        </div>
        <div className="text-sm font-semibold leading-7 text-white/75 md:text-right">
          <p>Call / WhatsApp: {academy.phonePrimary}, {academy.phoneSecondary}</p>
          <p>{academy.address}</p>
          <p>(c) 2026 Inspire Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
