import { BranchVisual, RingsVisual, RootsVisual, SproutVisual } from "@/components/ui/research-visual";

/**
 * The lab's research topics. Home shows `name` + `short`; the Research page
 * shows everything. `related` lists student projects in the lab, past or present.
 * Edit the copy here, not in the pages.
 */
export const TOPICS = [
  {
    id: "on-device",
    name: "Local & on-device AI",
    short: "Models that run on the laptops and phones people already own.",
    visual: SproutVisual,
    story: [
      "Most AI runs in data centers, so every question a student asks leaves their device. Many schools can't accept that, and many students don't have a reliable connection.",
      "We study how far small models can go on ordinary hardware, and how several modest devices can work together. If the data never leaves the machine, there is much less to protect.",
    ],
    questions: [
      "How small can a model get and still be useful?",
      "Which parts of a learning tool actually need the cloud?",
    ],
    related: ["AI home assistant with mesh devices"],
  },
  {
    id: "learning-analytics",
    name: "Learning analytics",
    short: "Using the traces learning leaves behind to see where students get stuck.",
    visual: RingsVisual,
    story: [
      "A grade shows where a student ended up, not how they got there. Drafts, pauses, and the questions they ask tell more of the story.",
      "We look for early signs of struggle and for evidence of which support helps. The results should be something a teacher can act on, using no more data than needed.",
    ],
    questions: [
      "Which signals predict struggle early enough to help?",
      "How can AI summaries support a teacher's judgment instead of replacing it?",
    ],
    related: [],
  },
  {
    id: "nlp-llms",
    name: "NLP & LLMs in education",
    short: "Grading, feedback, and tutoring with language models that act like good teachers.",
    visual: BranchVisual,
    story: [
      "Language models can answer almost any homework question, which is the problem. A good tutor asks a question back or gives a hint instead of the answer.",
      "We fine-tune models to scaffold rather than solve, test AI grading of essays and code against teachers, and generate questions that check reading comprehension.",
    ],
    questions: [
      "Can a model be tuned to scaffold a problem instead of solving it?",
      "Where does AI grading drift from a teacher's?",
    ],
    related: ["AI-assisted grading", "Pedagogical framing and scaffolding", "Question generation"],
  },
  {
    id: "core-ai",
    name: "Core AI research",
    short: "Smaller models, efficient training, and evaluation that counts the cost.",
    visual: RootsVisual,
    story: [
      "Training and running large models takes a lot of electricity. We work on compact architectures and efficient training and fine-tuning that fit on modest hardware.",
      "We also think results should report what they cost in energy and compute, next to how accurate they are.",
    ],
    questions: [
      "How much accuracy do we give up for each bit of compute saved?",
      "How should energy use be reported alongside benchmark scores?",
    ],
    related: [],
  },
] as const;
