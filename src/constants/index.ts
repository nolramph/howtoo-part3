import { generateAutoTopic } from "../utils/helper-utils"

export const NAVIGATION_ITEMS = [
  {
    title: "Home",
    url: "/",
    icon: "",
  },
  {
    title: "Home Topics",
    url: "/hometopics",
    icon: "",
  },
  {
    title: "Accordion",
    url: "/accordion",
    icon: "",
  },
  ...generateAutoTopic(5),
]
