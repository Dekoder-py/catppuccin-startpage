// User configuration for the startpage. Update the palette, location, and your preferred tabs, categories, and links.

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Auckland",
    scale: "C",
  },
  clock: {
    format: "I:m p",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://www.google.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.maroon,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.mauve,
            },
            {
              name: "apple",
              url: "https://apple.com",
              icon: "brand-apple",
              icon_color: palette.peach,
            },
            {
              name: "catppuccin",
              url: "https://catppuccin.com",
              icon: "cat",
              icon_color: palette.mauve,
            },

          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.mauve,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.peach,
            },
            {
              name: "tablericons",
              url: "https://tabler.io/icons",
              icon: "icons",
              icon_color: palette.blue,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "udemy",
              url: "https://udemy.com/join/login-popup/?passwordredirect=True",
              icon: "brain",
              icon_color: palette.mauve,
            },
          ],
        },

      ],
    },
    {
      name: "school",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "classroom",
              url: "https://classroom.google.com/",
              icon: "chalkboard",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://drive.google.com/",
              icon: "brand-google-drive",
              icon_color: palette.yellow,
            },
            {
              name: "schoolKiwi",
              url: "https://marcellin.school.kiwi/",
              icon: "school",
              icon_color: palette.blue,
            },
            {
              name: "gmail",
              url: "https://mail.google.com/",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "nzqa",
              url: "https://taku.nzqa.govt.nz/learner-home/",
              icon: "building-bank",
              icon_color: palette.teal,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
