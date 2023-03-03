import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/meghanhogan/meghanhogan.github.io.git",
    user: {
      name: "Meghan Hogan", // update to use your name
      email: "meghannellhogan@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
