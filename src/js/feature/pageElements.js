import { getElement, onElementLoaded } from "../utility";

const notionHelpBtnCls = ".notion-help-button";
const notionBodyCls = ".notion-body";
const notionAppId = "#notion-app";
const notionCursorListener = ".notion-cursor-listener";

export function hideComments(isEnabled) {
  try {
    console.log(`feature: hideComments: ${isEnabled}`);

    onElementLoaded(notionCursorListener)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionCursorListener);
          if (isEnabled) {
            el.classList.add("hideComments-nb");
          } else {
            el.classList.remove("hideComments-nb");
          }
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function smallTextFullWidth(isEnabled) {
  try {
    console.log(`feature: smallTextFullWidth: ${isEnabled}`);

    onElementLoaded(notionCursorListener)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionCursorListener);
          if (isEnabled) {
            el.classList.add("smallTextFullWidth-nb");
          } else {
            el.classList.remove("smallTextFullWidth-nb");
          }
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function bolderTextInDark(isEnabled) {
  try {
    console.log(`feature: bolderTextInDark: ${isEnabled}`);

    onElementLoaded(notionBodyCls)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionBodyCls);
          if (isEnabled) {
            el.classList.add("bolder");
          } else {
            el.classList.remove("bolder");
          }
          // console.log(`${notionBodyCls} style is ${el.style.display}`);
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function hideHelpBtn(isHidden) {
  try {
    console.log(`feature: hideHelpBtn: ${isHidden}`);

    onElementLoaded(notionHelpBtnCls)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionHelpBtnCls);
          if (isHidden) {
            el.style.display = "none";
          } else {
            el.style.display = "flex";
          }
          console.log(`${notionHelpBtnCls} style is ${el.style.display}`);
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function hideSlashMenuAfterSpace(isEnabled) {
  try {
    console.log(`feature: hideSlashMenuAfterSpace: ${isEnabled}`);

    onElementLoaded(notionAppId)
      .then((isPresent) => {
        if (isPresent) {
          if (isEnabled) {
            getElement(notionAppId).addEventListener(
              "keydown",
              hideSlashMenuAfterSpaceEvent
            );
          } else {
            getElement(notionAppId).removeEventListener(
              "keydown",
              hideSlashMenuAfterSpaceEvent
            );
          }
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function disableSlashMenu(isEnabled) {
  try {
    console.log(`feature: disableSlashMenu: ${isEnabled}`);

    onElementLoaded(notionAppId)
      .then((isPresent) => {
        if (isPresent) {
          if (isEnabled) {
            // this preceeds 'hideSlashMenuAfterSpaceEvent' so remove that first
            getElement(notionAppId).removeEventListener(
              "keydown",
              hideSlashMenuAfterSpaceEvent
            );

            // simulate click for both events to prevent menu from appearing
            getElement(notionAppId).addEventListener(
              "keydown",
              disableSlashMenuEvent
            );
            getElement(notionAppId).addEventListener(
              "keyup",
              disableSlashMenuEvent
            );
          } else {
            getElement(notionAppId).removeEventListener(
              "keydown",
              disableSlashMenuEvent
            );
            getElement(notionAppId).removeEventListener(
              "keyup",
              disableSlashMenuEvent
            );
          }
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function leftAlignImage(isEnabled) {
  try {
    console.log(`feature: leftAlignImage: ${isEnabled}`);

    onElementLoaded(notionCursorListener)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionCursorListener);
          if (isEnabled) {
            el.classList.add("leftAlignImage");
          } else {
            el.classList.remove("leftAlignImage");
          }
          // console.log(`${notionBodyCls} style is ${el.style.display}`);
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function showHoverText(isEnabled) {
  try {
    console.log(`feature: showHoverText: ${isEnabled}`);

    onElementLoaded(notionCursorListener)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionCursorListener);
          if (isEnabled) {
            el.classList.add("showHoverText");
          } else {
            el.classList.remove("showHoverText");
          }
          // console.log(`${notionCursorListener} style is ${el.style.display}`);
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

export function hideHiddenColumns(isHidden) {
  try {
    console.log(`feature: hideHiddenColumns: ${isHidden}`);

    onElementLoaded(notionCursorListener)
      .then((isPresent) => {
        if (isPresent) {
          const el = getElement(notionCursorListener);
          if (isHidden) {
            el.classList.add("hideHiddenColumns");
          } else {
            el.classList.remove("hideHiddenColumns");
          }
          // console.log(`${notionBodyCls} style is ${el.style.display}`);
        }
        return null;
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

// #region ## ----------------- internal methods ----------------- ##

function isSlashMenuVisible() {
  // this selector covers both scenario of slash menu when it appears in main doc or inside popup doc
  const slashMenuCls =
    "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div > div > div > div:nth-child(2) > div > div > div > div > div.notion-scroller.vertical";
  const isVisible = getElement(slashMenuCls) !== null;
  return isVisible;
}

function hideSlashMenuAfterSpaceEvent(e) {
  try {
    const spaceKey = " ";
    if (e.key === spaceKey) {
      const cursorPos = window.getSelection().getRangeAt(0).startOffset;
      const lastChar = e.target.textContent[cursorPos - 1];
      if (lastChar === "/") {
        if (isSlashMenuVisible()) {
          // hide slash menu by clicking
          e.target.click();
          console.info("slash menu hid");
        }
      }
    }
  } catch (x) {
    console.log(`Error: ${JSON.stringify(x)}`);
  }
}

function disableSlashMenuEvent(e) {
  const slashKey = "/";
  if (e.key === slashKey) {
    // hide menu before it's appearing
    e.target.click();
    console.info("slash menu hid");
  }
}

// #endregion
