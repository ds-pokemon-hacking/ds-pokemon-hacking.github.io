# Contribution Guide

## Creating a Fork
1) If you don't have one already, you first need to create a [Github account](https://github.com/signup).  
2) Go to the [main repo](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io) and click the Fork button in the top right. Check out [Github's official article](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) for more details.

## Creating a new Markdown File
1) Open [guide.md](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/blob/main/templates/guides/guides.md) if you're making a guide, or [resources.md](https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/blob/main/templates/resources/resources.md) if you're making a resource, click the *Code* button and copy its contents.
2) In your repo, go to the appropriate folder:
   * If your addition is for a specific generation (or one of its ), go to either `src/gen4/guides`/`src/gen5/guides` (or `src/gen4/resources`/`src/gen5/resources` for resources) and from there choose the right subfolder
   * If it applies to all games, go to `src/universal/guides` (or `src/universal/resources`)
3) Once you're in the correct folder, click the *Add File*>*Create New File*. You have to name it appropriately:
   * First part of the filename should be the games it applies (unless it's for every game in the generation): for example if it's only for Platinum and HGSS games, it should start with `pt_hgss`
   * The second part of the filename should be what the guide is about: for example, the guide about setting a weather from a script is named `pt-hgss_weather_script`
   * It must have the `.md` extension
   * In the `Universal` folder, you have to create a subfolder with the same name as the file first: you can do so by adding the folder name before the markdown filename; so for example the file address in the uploading screen will look like `guides/new_guide/new_guide.md` if you're adding a universal guide
   * Paste the text you copied from the `guides.md` or `resources.md` template in the body. Now you can start writing the markdown file.

## Markdown Formatting and Images
1) The syntax used must follow the [Markdown Format](https://www.markdownguide.org/basic-syntax/), which is the same as Discord uses.
2) Use the template you copypasted as a guideline. Remember that there is a preview button you can use!
3) If you wish to add images to your file, they must first be uploaded to the repo in the appropriate folder:
   * For either the `gen4` or `gen5` folder, go to the corresponding `resources` subfolder. Create an empty markdown file and create a new folder along with it, named the same as your markdown file name.
   * For the `universal` folder, create a new folder called `resources` inside the folder with the same name as your file.
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
