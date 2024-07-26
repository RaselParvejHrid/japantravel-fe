// Function to update the content based on language
function updateContent(language) {
  $("[id]").each(function () {
    const id = $(this).attr("id");
    console.log(id);

    if (!UIText[id]) return;

    if (UIText[id][language]) {
      //UIText is defined in /js/UIText.js
      $(this).text(UIText[id][language]);
    }
    console.log("Done");
  });
}

// Function to change language
function changeLanguage(language) {
  if (!["en", "bn"].includes(language)) return;

  localStorage.setItem("currentSiteLanguage", language);

  if (language === "en") {
    $("body").removeClass("bn");
  }

  if (language === "bn") {
    $("body").addClass("bn");
  }

  updateContent(language);
}

$(document).ready(() => {
  // Registering Event Listeners for Language Switchers
  $("#english-button").on("change", () => changeLanguage("en"));
  $("#bangla-button").on("change", () => changeLanguage("bn"));

  //Setting Site Language
  const currentSiteLanguage = localStorage.getItem("currentSiteLanguage");
  if (!["en", "bn"].includes(currentSiteLanguage)) {
    changeLanguage("en");
  } else {
    changeLanguage(currentSiteLanguage);
  }
});
