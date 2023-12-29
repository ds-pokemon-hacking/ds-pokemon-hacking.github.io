# Contribution Guide
--- 
## Creating a Fork
1) If you don't have one already, you first need to create a [Github account](https://github.com/signup)
2) Go to the [main repo](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io) and click the Fork button in the top right. Check out [Github's official article](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) for more details.

## Creating a new Markdown File
1) Open [guide.md](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/blob/main/templates/guides/guides.md) if you're making a guide, or [resources.md](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/blob/main/templates/resources/resources.md) if you're making a resource, click the *Code* button and copy its contents.
2) In your repo, go to the appropriate folder:
   * If it's for either a gen 4 or 5 game(s), go to either `src/gen4/guides`/`src/gen5/guides` (or `src/gen4/resources`/`src/gen5/resources` for resources) and from there choose the right subfolder
   * If it applies to all games, go to `src/universal/guides` (or `src/universal/resources`)
3) Once you're in the correct folder, click the *Add File*>*Create New File*. You have to name it appropriately:
   * First part of the filename should be the games it applies (unless it's for every game in the generation): for example if it's only for Platinum and HGSS games, it should start with `pt_hgss`
   * The second part of the filename should be what the guide is about: for example, the guide about setting a weather from a script is named `pt-hgss_weather_script`
   * It must have the `.md` extension
   * In the `Universal` folder, you have to create a subfolder with the same name as the file first: you can do so by adding the folder name before the markdown filename; so for example the file address in the uploading screen will look like `guides/new_guide/new_guide.md` if you're adding a universal guide
   * Paste the text you copied from the `guides.md` or `resources.md` template in the body. Now you can start writing the markdown file.

## Markdown Formatting and Images
1) The syntax used must follow the [Markdown Format](https://www.markdownguide.org/basic-syntax/), which is the same as discord uses.
2) Use the template you copypasted as a guideline. Remember that there is a preview button you can use!
3) If you wish to add images to your file, they must first be uploaded to the repo in the appropriate folder:
   * For either the gen4 or gen5 folder, go to the corresponding `resources` subfolder. Create an empty markdown file and create a new folder along with it, named the same as your markdown file name.
   * For the universal folder, create a new folder called `resources` inside the folder with the same name as your file.
   * In the folder you just created, upload your images. Keep the filename recognizable and short enough, and they should be in a png format. Once you've uploaded them, delete the empty markdown file.
4) To link images, you can simply use ```![Optional Description](filepath/image.png) ```. With the *filepath* being relative to your guide's location
   * For example, in the indexing guide the image is linked with `![Indexed Image Example](resources/indexed_image_example.png)`
   * In the Pokémarts guide it looks like `![](resources/pt_hgss-pokemarts/pokemart_script1.PNG)`


## Pull Requests
1) Once you've finished writing your markdown file, click the *Commit Changes* button and commit to your main branch.
2) In order for your file to show up on the wiki you need to edit `SUMMARY.md` and `README.md` in the `src` folder. Add an entry for your file to every game it applies (unless it's in the Universal section).
3) Make sure your branch is up to date before submitting a PR, you can do so by using the *Sync Fork* button in the main page of your repo.
4) In your repository, click the *Pull Requests* tab and then *New Pull Request*. Make sure you are comparing your branch and the main branch of the original repository.
5) Fill in the form and then submit the PR.

## Videos and Local Clone
Videos can be to the repo along images if they're small enough, otherwise they can be embedded to your markdown file from an external hosting service like youtube. You can use html, css or javascript.

Check out the syntax used in [NCER Guide](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/blob/main/src/universal/guides/ncer_sprite_editing/ncer_sprite_editing.md) or the [Knarc Guide](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/blob/main/src/universal/guides/knarc/knarc.md) for examples of embedded videos.
However you can't check if the video will actually play on github's markdown viewer, so you need to host a local clone of the website.

In order to do so you first need to install Cargo and Rust and then build mdbook from source.You may want to check out [mdbook Installation Guide](https://rust-lang.github.io/mdBook/guide/installation.html), 

If you're on Windows:
1) Install [Rust](https://www.rust-lang.org/tools/install)
2) This should install all the tools at `C:\Users\user\.cargo\bin` and add this address to your PATH Environment Variable. Make sure it is actually present.
3) Now launch Windows PowerShell and run the command `cargo install mdbook`
4) Go to the github homepage of your fork, click the green `<> Code ` button and go to *Local*>*Download Zip*, then unzip everything in a folder. Alternatively you can use github desktop to do the same.
5) Open the Windows PowerShell in the folder where you've downloaded the code. You can do so by *Shift+Right Click* in the folder > *Open Windows PowerShell here*
6) Run the command `mdbook serve`, then open your browser (without closing the PowerShell) and go to the address `http://localhost:3000`. If all goes well you should now be hosting a local clone of your repository.
7) You can now check if your video player is being displayed correctly, and also any edit you perform to the files in your folder will be automatically applied to the local website after saving and reloading the page. Closing the PowerShell will shut it down.
