// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Baltimore",
    scale: "F",
  },
  clock: {
    format: "K:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      q: ["https://www.qwant.com/?q=", "Qwant"],
      w: ["https://www.startpage.com/?q=", "Startpage"],
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
    },
    default: "p",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/banner_19.gif",
      categories: [
        {
          name: "quick links",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/feed/subscriptions",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.mauve,
            },
            {
              name: "music",
              url: "https://bandcamp.com/discover",
              icon: "music",
              icon_color: palette.peach,
            }
          ],
        },
        {
          name: "productive",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "itch.io",
              url: "https://www.itch.io",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
            {
              name: "nexusmods",
              url: "https://www.nexusmods.com/games",
              icon: "tornado",
              icon_color: palette.mauve,
            },
            {
              name: "choice of games",
              url: "https://forum.choiceofgames.com/",
              icon: "book",
              icon_color: palette.peach,
            },
            {
              name: "lichess",
              url: "https://lichess.org/",
              icon: "chess",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "docs",
      background_url: "src/img/banners/banner_21.gif",
      categories: [
        {
          name: "linux & programming",
          links: [
            {
              name: "bazzite",
              url: "https://docs.bazzite.gg/",
              icon: "circle-triangle",
              icon_color: palette.mauve,
            },
            {
              name: "arch",
              url: "https://wiki.archlinux.org/title/Main_page",
              icon: "letter-a",
              icon_color: palette.blue,
            },
            {
              name: "fedora",
              url: "https://docs.fedoraproject.org/en-US/docs/",
              icon: "brand-redhat",
              icon_color: palette.red,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "useful",
          links: [
            {
              name: "wikipedia",
              url: "https://en.wikipedia.org",
              icon: "brand-wikipedia",
              icon_color: palette.mauve,
            },
            {
              name: "repair",
              url: "https://repair.wiki/w/Main_Page",
              icon: "hammer",
              icon_color: palette.red,
            },
            {
              name: "ifixit",
              url: "https://www.ifixit.com/Guide",
              icon: "devices",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "runescape",
              url: "https://runescape.wiki",
              icon: "letter-r",
              icon_color: palette.mauve,
            },
            {
              name: "bg3",
              url: "https://bg3.wiki/",
              icon: "sword",
              icon_color: palette.blue,
            },
            {
              name: "speedruns",
              url: "https://www.speedrun.com",
              icon: "wind",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "media",
      background_url: "src/img/banners/banner_20.gif",
      categories: [
        {
          name: "books",
          links: [
            {
              name: "audible",
              url: "https://www.audible.com/",
              icon: "book-2",
              icon_color: palette.red,
            },
            {
              name: "goodreads",
              url: "https://www.goodreads.com/",
              icon: "books",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "streaming",
          links: [
            {
              name: "netflix",
              url: "https://www.netflix.com/",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
            {
              name: "prime video",
              url: "https://www.amazon.com/gp/video/storefront/",
              icon: "video",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "shopping",
          links: [
            {
              name: "amazon",
              url: "https://www.amazon.com/",
              icon: "brand-amazon",
              icon_color: palette.red,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "pcpartpicker",
              url: "https://pcpartpicker.com/",
              icon: "device-desktop",
              icon_color: palette.blue,
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
root.style.setProperty("--accent", palette.pink);
