/* Placeholder practice items only. No trial facts or clinical claims. */
window.ANTIPLATELET_QUESTIONS = {
  meta: {
    title: "Practice questions",
    examDurationSeconds: 120
  },
  items: [
    {
      id: "q-example-1",
      placeholder: true,
      topic: "acs",
      relatedTrialId: "example-a",
      stem: "EXAMPLE, not a real trial. Which line is the keyed choice on this layout sample?",
      choices: [
        { id: "a", text: "Layout sample line, and this one is the keyed choice." },
        { id: "b", text: "Layout sample line, and this one is not keyed." },
        { id: "c", text: "Another layout sample line, and this one is not keyed." },
        { id: "d", text: "A further layout sample line, and this one is not keyed." }
      ],
      correctId: "a",
      explanation: "The keyed choice is the line that says it is keyed. The other lines say they are not keyed. This item is a layout sample.",
      source: {
        label: "Placeholder source record",
        url: "https://example.invalid/not-a-trial",
        note: "Layout sample. No paper is cited."
      }
    },
    {
      id: "q-example-2",
      placeholder: true,
      topic: "stroke-tia",
      relatedTrialId: "example-b",
      stem: "EXAMPLE, not a real trial. Which line is the keyed choice on this second layout sample?",
      choices: [
        { id: "a", text: "Layout sample line for the second item, and this one is not keyed." },
        { id: "b", text: "Layout sample line for the second item, and this one is the keyed choice." },
        { id: "c", text: "Another layout sample line for the second item, and this one is not keyed." },
        { id: "d", text: "A further layout sample line for the second item, and this one is not keyed." }
      ],
      correctId: "b",
      explanation: "The keyed choice is the line that says it is keyed. The other lines say they are not keyed. This item is a layout sample.",
      source: {
        label: "Placeholder source record",
        url: "https://example.invalid/not-a-trial-b",
        note: "Layout sample. No paper is cited."
      }
    }
  ]
};
