const target = document.getElementById("item");
/* dragenter event fired on the drop target */
target.addEventListener(
  "dragenter",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);
