this.addEventListener("install", (event) => {
  console.log("Installed");
});

this.addEventListener("activate", (event) => {
  console.log("Activated");
});

this.addEventListener("fetch", (event) => {
  console.log("Fetch request");
});
