export const generalQuestions = [
  {
    id: "freeTime",
    label: "How many hours of free time do you have per day?",
    type: "number",
    min: 0,
    max: 24,
    step: 0.5,
  },
  {
    id: "sleepHours",
    label: "How many hours do you sleep per night on average?",
    type: "number",
    min: 0,
    max: 24,
    step: 0.5,
  },
  {
    id: "studyPreference",
    label: "When do you prefer to study?",
    type: "select",
    options: [
      { value: "morning", label: "Morning" },
      { value: "afternoon", label: "Afternoon" },
      { value: "evening", label: "Evening" },
      { value: "night", label: "Night" },
    ],
  },
  {
    id: "studyEnvironment",
    label: "What is your preferred study environment?",
    type: "radio",
    options: [
      { value: "quiet", label: "Quiet room" },
      { value: "background_noise", label: "With background noise" },
      { value: "music", label: "With music" },
      { value: "group", label: "In a group" },
    ],
  },
  {
    id: "learningStyle",
    label: "What learning styles work best for you? (Select all that apply)",
    type: "checkbox",
    options: [
      { value: "visual", label: "Visual (images, diagrams)" },
      { value: "auditory", label: "Auditory (listening, discussing)" },
      { value: "reading", label: "Reading/Writing" },
      { value: "kinesthetic", label: "Kinesthetic (hands-on activities)" },
    ],
  },
];

export const subjectQuestions = [
  {
    id: "name",
    label: "Subject Name",
    type: "text",
    placeholder: "e.g., Mathematics, History, Physics",
  },
  {
    id: "proficiency",
    label: "How would you rate your proficiency in this subject?",
    type: "range",
    min: 1,
    max: 10,
    step: 1,
  },
  {
    id: "importance",
    label: "How important is this subject to you?",
    type: "range",
    min: 1,
    max: 10,
    step: 1,
  },
  {
    id: "difficulty",
    label: "How difficult do you find this subject?",
    type: "range",
    min: 1,
    max: 10,
    step: 1,
  },
  {
    id: "studyTime",
    label: "How many hours per week do you want to dedicate to this subject?",
    type: "number",
    min: 0,
    max: 168,
    step: 0.5,
  },
];
