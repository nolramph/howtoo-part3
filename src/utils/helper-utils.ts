export const generateAutoTopic = (length: number) =>
  Array.from({ length: length }, (_, i) => ({
    title: `TOPIC ${i + 1}`,
    url: `/topic${i + 1}`,
    icon: `icon${i + 1}`,
  }))

export const generateAccordionItems = (length: number) =>
  Array.from({ length: length }, (_, i) => ({
    title: "LOREM IPSUM",
    content:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
  }))
