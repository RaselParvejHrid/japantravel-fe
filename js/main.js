// Function to update the content based on language
function updateContent(language) {
  $("[id]").each(function () {
    const id = $(this).attr("id");
    if (UIText[id][language]) {
      //UIText is defined in /js/UIText.js
      $(this).text(UIText[id][language]);
    }
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

// Set default language on document ready
$(document).ready(() => {
  const currentSiteLanguage = localStorage.getItem("currentSiteLanguage");
  if (!["en", "bn"].includes(currentSiteLanguage)) {
    localStorage.setItem("currentSiteLanguage", "en");
    updateContent("en");
  } else {
    updateContent(currentSiteLanguage);
  }
});
