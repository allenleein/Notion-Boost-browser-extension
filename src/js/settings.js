// settings and their default value
export const defaultSettings = {
  displayOutline: true,
  hideHelpBtn: false,
  bolderTextInDark: false,
  smallTextFullWidth: false,
  hideComments: false,
  scrollTopBtn: false,
  hideSlashMenuAfterSpace: false,
  disableSlashMenu: false,
  leftAlignImage: false,
  showHoverText: false,
  hideHiddenColumns: false,
};

export const settingDetails = [
  {
    func: "displayOutline",
    name: "Show Outline",
    desc:
      "Show sticky outline (table of contents) for pages that have headings",
  },
  {
    func: "smallTextFullWidth",
    name: "Small text & Full width for all pages",
    desc: "Set small text and full width for all pages by default",
  },
  {
    func: "scrollTopBtn",
    name: "'Scroll to top' button",
    desc: "Add button at bottom-right corner for scrolling back to top",
  },
  {
    func: "hideSlashMenuAfterSpace",
    name: "Close slash command menu after space",
    desc: "Close slash command popup menu '/' by pressing space key",
    disable_func: "disableSlashMenu",
  },
  {
    func: "disableSlashMenu",
    name: "Don't show slash command menu when pressing '/'",
    desc: "Don't show slash command popup menu when pressing '/'",
    disable_func: "hideSlashMenuAfterSpace",
  },
  {
    func: "showHoverText",
    name: "Show full text on hover",
    desc: "Show full text in table cells on mouse hover",
  },
  {
    func: "leftAlignImage",
    name: "Left align images",
    desc: "Align document images to left instead of center",
  },
  {
    func: "bolderTextInDark",
    name: "Bolder text in dark mode",
    desc: "Fix poorly recognizable bold text in dark mode",
  },
  {
    func: "hideHelpBtn",
    name: "Hide Help button from pages",
    desc: "",
  },
  {
    func: "hideHiddenColumns",
    name: "Hide 'Hidden columns' in board view",
    desc: "Truly hide 'Hidden columns' in Kanban board view",
  },
  {
    func: "hideComments",
    name: "Hide comments section from pages",
    desc: "",
  },
];
