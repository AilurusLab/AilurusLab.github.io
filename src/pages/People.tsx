import { NavBar } from "@/components/ui/nav-bar";
import { Footer } from "@/components/ui/footer";
import { BackToTheTop } from "@/components/ui/back-to-the-top";
import { StudentCard, type StudentCardProps } from "@/components/ui/student-card";
import { JoinLab } from "@/components/ui/join-lab";
import { LeafBullet } from "@/components/ui/nature";
import { PageHeader } from "@/components/ui/page-header";
import { useHashScroll } from "@/lib/use-hash-scroll";

// ---- Customize these -------------------------------------------------------
const DIRECTOR: StudentCardProps = {
  name: "Eduardo Davalos",
  role: "Lab Director • Assistant Professor, Trinity University",
  bio: "Works on AI in education, human-AI interaction, and on-device machine learning.",
  photoSrc: "/eduardo_davalos.webp",
  links: [{ label: "Website", href: "https://edavalosanaya.github.io" }],
};

const STUDENTS: StudentCardProps[] = [
  { name: "Jaden Kai Rangel", role: "Undergraduate", project: "AI-Assisted Grading" },
  {
    name: "Charlie Grimm",
    role: "Undergraduate",
    project: "Fine-Tuning LLMs for Pedagogical Framing and Scaffolding",
  },
];

const ALUMNI = [
  { name: "Vincent Liu", years: "Summer 2026", destination: "AI Home Assistant with Mesh Device Capabilities" },
  { name: "Trieu Truong", years: "2025", destination: "Product Engineer Intern @ Tend" },
  { name: "Nafees-ul Haque", years: "2025", destination: "Product Management Fellow @ Product Space" },
  { name: "Tristan Van", years: "2025", destination: "Software Engineer Intern @ Capital One" },
  {
    name: "Anthony Chang",
    years: "2024-2025",
    destination: "LLMs for Question Generation in Reading Comprehension Assessment",
  },
  { name: "Yashvitha Thatigotla", years: "2023-2025", destination: "Software Dev @ Optum" },
];
// ----------------------------------------------------------------------------

export function PeoplePage() {
  useHashScroll();

  return (
    <>
      <NavBar />
      <PageHeader title="People">Students from CS, CE, Psychology, and Education.</PageHeader>

      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
        <section aria-label="Director">
          <h2 className="text-2xl font-semibold tracking-tight">Director</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <StudentCard {...DIRECTOR} />
          </div>
        </section>

        <section className="mt-14" aria-label="Current students">
          <h2 className="text-2xl font-semibold tracking-tight">Current students</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {STUDENTS.map((s) => (
              <StudentCard key={s.name} {...s} />
            ))}
          </div>
        </section>

        <section className="mt-14" aria-label="Alumni">
          <h2 className="text-2xl font-semibold tracking-tight">Alumni</h2>
          {/* A vine running down the list, with a leaf at each person */}
          <ol className="relative mt-6 ml-2 border-l-2 border-bamboo/50 pl-8">
            {ALUMNI.map((a) => (
              <li key={a.name} className="relative pb-6 last:pb-0">
                <LeafBullet className="absolute -left-[2.6rem] top-1 size-5 rounded-full bg-paper" />
                <p>
                  <span className="font-semibold">{a.name}</span>
                  <span className="ml-2 text-sm text-bark/80">{a.years}</span>
                </p>
                <p className="text-sm text-muted-foreground">{a.destination}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <JoinLab />

      <Footer />
      <BackToTheTop />
    </>
  );
}
