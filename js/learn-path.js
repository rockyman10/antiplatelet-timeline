/* Orientation path. Teaches the page shell. It does not state medication results. */
window.ANTIPLATELET_LEARN_PATH = {
  meta: {
    id: "orientation",
    title: "Learn path",
    subtitle: "How this timeline is organized"
  },
  steps: [
    {
      id: "lanes",
      title: "Lanes and years",
      body: "Each lane is one antiplatelet topic. Years run along the top of the timeline, starting in 1999. A marker opens the trial card for that year."
    },
    {
      id: "snapshot",
      title: "Trial snapshot",
      body: "A marker opens one Trial snapshot. More details keeps the same fields, then adds limitations, any guideline that cites the trial, the locus for that citation, sources, and where the numbers were read. A card can also carry a link to the anticoagulation timeline when that trial is covered there.",
      action: { kind: "trial", id: "example-a", label: "Open the example snapshot" }
    },
    {
      id: "practice",
      title: "Practice questions",
      body: "Study mode shows an explanation after an answer. Exam mode is timed and holds explanations until the sitting is submitted.",
      action: { kind: "practice", label: "Open a practice question" }
    }
  ]
};
