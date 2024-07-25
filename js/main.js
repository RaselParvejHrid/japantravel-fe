// Function to update the content based on language
function updateContent(language) {
  $("[id]").each(function () {
    const id = $(this).attr("id");
    if (UIText[id][language]) {
      $(this).text(UIText[id][language]);
    }
  });
}

// Function to change language
function changeLanguage(language) {
  if (!["en", "bn"].includes(language)) return;

  updateContent(language);
}

// Set default language on document ready
$(document).ready(() => {
  updateContent("en");
});
