# Contribution Guide
> Author(s): [SpagoAsparago](https://github.com/SpagoAsparago), [PlatinumMaster](https://github.com/PlatinumMaster)
--- 

## Creating a Fork
1) If you don't have one already, you first need to create a [GitHub account](https://github.com/signup)
2) Go to the [main repo](https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io) and click the Fork button in the top right. Check out [GitHub's official article](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) for more details.

## Running and Editing Docusaurus Locally
In order to see exactly what your changes will do, it is best to run Docusaurus locally, so you can have a live development environment. 

### Prerequisites
Before you can run Docusaurus locally, you need to have the following installed on your machine:
- A text editor, such as [Visual Studio Code](https://code.visualstudio.com/download) or [Sublime Text](https://www.sublimetext.com/3).
- [Node.js](https://nodejs.org/en/download/) (version 12 or newer).
- [npm](https://www.npmjs.com/get-npm) (version 5.2 or newer).
- [Git](https://git-scm.com/downloads).

These are necessary to clone the repository, install dependencies, and start the local server.

> Note on instructions: where `<` and `>` symbols are used to encapsulate some text, this means a user- or situation-specific value should be entered, the `<` and `>` symbols themselves should not be included.  
> For example `<your account name>` should be `JoeBloggs123` or similar, not `<JoeBloggs123>`.

### First Time Setup Steps
1) [Fork the repository](#creating-a-fork). 
2) Open a terminal (e.g. Command Line, Powershell...etc.).
3) If you haven't configured Git on your machine, you need to do so before pulling from GitHub. Run the following commands in your terminal:  
    - Set your Git username:
      ```
      git config --global user.name "<GitHub Account Name>"
      ```
    - Set your Git email address:
      ```
      git config --global user.email "your-email@example.com"
      ```

4) If you haven't connected your GitHub account with SSH, follow these steps to [generate a new SSH key & add it to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent):

    - Run this command, substituting in the email address associated with your GitHub account. When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.
      ```
      ssh-keygen -t ed25519 -b 4096 -C "your-email@example.com"
      ```

    - Start the ssh-agent in the background:
      ```
      eval "$(ssh-agent -s)"
      ```

    - Add your SSH private key to the ssh-agent:
      ```
      ssh-add ~/.ssh/id_rsa
      ```
    - Copy the SSH key to your clipboard.

    - Go to your GitHub account settings, select "SSH and GPG keys" and click on "New SSH key". Paste your key into the "Key" field and click "Add SSH key".

5) [Test the SSH connection is working correctly](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

6) [Specify a "remote upstream" repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork) for synchronising changes made in the main repo to yours.

    - Run this command to confirm no **upstream** fetch and push remote repos exist (only **origin** fetch and pull).
      ```
      git remote -v
      ```

    - Configure the upstream repository to the main DS Pokémon Hacking repository
      ```
      git remote add upstream https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io.git
      ```

    - Confirm this has been successfully applied (two new **upstream** entries are visible)
      ```
      git remote -v
      ```

7) Now, you can clone the repository to your local machine. You can do this by running `git clone git@github.com:<your account name>/ds-pokemon-hacking.github.io.git` in your terminal.

8) Navigate to the project directory with `cd ds-pokemon-hacking.github.io`.

9) Install the necessary dependencies with `npm install`.

      - If you encounter a `running scripts is disabled on this system` message, you will need to change the execution policy in effect to allow signed scripts.
      - For example by assigning the `CurrentUser` scope to the `RemoteSigned` policy
      - For more details, see [here](https://learn.microsoft.com/en-gb/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5)

10) Once the dependencies are installed, you can start the local server with `npm run start`.

11) The local server should now be running. You can access it by opening your web browser and navigating to `http://localhost:3000`.

Remember, any changes you make to the files in the project directory will be reflected in the local server, allowing you to preview your changes in real time.

### Continuing Making Local Changes
If you want to restart the server to continue making changes in local after a break (when the local server was stopped) and seeing the live changes.  

Follow steps 8 and 10 in the [First Time Setup Steps](#first-time-setup-steps) to restart the local server.

### Synchronising from the Main Repo
Once a PR has been merged or cancelled, if you wish to start a new set of changes, it is good practice to avoid potential problems with the following PR, to refresh the user remote repo from the main repo. This also removes some noise (commits in the PR that are already merged). To do this, the following steps can be completed:  
1) [Synchronise the remote user repo (fork)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui).
      - Navigate to user remote repo (`https://github.com/<GitHub user name>/ds-pokemon-hacking.github.io`)
      - This should show as at least one commit behind the main repo (and possibly also several in front)
      - Select `Sync Fork` button
      - If the user remote repo is one or more commits **in front** of the main repo: choose `Discard existing commits`
      - If the user remote repo is only **behind** the main repo: choose `Update branch`
      - GitHub should now read as: "This branch is up to date with `ds-pokemon-hacking/ds-pokemon-hacking.github.io:main`."
2) Delete the existing local user repo folder from your machine: this allows a clean clone to be taken.
3) Recreate the local user repo (cloned from the remote user repo) & build the local repo: As per steps 7-11 from the [First Time Setup Steps](#first-time-setup-steps).

## Creating a New Guide/Resource
1) Open [guide.md](https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/blob/main/templates/guides/guides.md) if you're making a guide, or [resources.md](https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/blob/main/templates/resources/resources.md) if you're making a resource, click the *Code* button and copy its contents.
2) In your repository, go to the appropriate folder:
    - If it's for Generation IV, `docs/generation-iv/<guides/resources>`.
    - If it's for Generation V, `docs/generation-v/<guides/resources>`.
    - If it's all generations, `docs/universal/<guides/resources>`.
3) Create a new folder with the following naming convention: `<game(s)>-<title>`.
    - If it applies to all games/is universal (or Generations IV and V), just name it `title`.
    - If your guide/resource title has more than one words in it, write all of the words while keeping a `_` between them.
    - If your guide/resource applies to a single game, just put the shorthand for the game there.
      - For example, a Code Injection guide for Platinum would be named `pt-code_injection`.
    - If your guide/resource applies to multiple games, bunch the game names together (keeping a `_` between them).
      - For example, a Code Injection guide for both Black 2 and White 2 would be named `bw_b2w2-code_injection`.
4) Create a file within this folder named `<game(s)>-<title>.md`. In other words: with exactly the same name as the folder. This will contain your guide/resource content.
5) Open the file within a text editor, and paste the template data you copied earlier into it.
   
Now you're ready to go! Your tutorial should now show up under the category you added it to. Just go ahead and start editing it.

## Syntax, Images, Video
1) The syntax used must follow the [Markdown Format](https://www.markdownguide.org/basic-syntax/), which is the same as Discord uses. You can also use [HTML](https://www.w3schools.com/html/) directives directly, but this may prove to be less stable (and Docusaurus will complain if it does not support it).
2) Use the template you pasted in as a guideline, as well as existing information on the repository.
3) If you wish to add images to your guide/resource, make a subfolder within your guide/resource folder, put your image there and link to it with the following syntax: ```![Optional Description](filepath/image.png)```, where `filepath` is relative to your guide/resource location.
4) Videos can be embedded within the repository if they are small enough. If not, you must host them somewhere else, then embed them in your Markdown file from an external hosting service like YouTube.

## Saving Changes to GitHub, Pull Requests
### Saving Changes
When you are finished, you need to commit your changes. 

To do so:
1. Open your terminal, and change directory into your local copy of the repository with `cd <path/to/ds-pokemon-hacking.github.io>`.
2. Run `git add .` to add all of the files.
3. Run `git commit -m "<Your commit message>"` to log your changes.
4. Run `git push origin main` to push your changes to remote.
5. If all goes according to plan, your changes will be on your fork at `https://github.com/<your account name>/ds-pokemon-hacking.github.io`.

### Pull Requests
After you have pushed your changes to your forked repository, you can create a pull request to propose your changes to the original repository.<br/>
**Make sure it builds and looks correct before submitting your pull request.**

1. Navigate to the original repository.
2. From the "Pull Requests" tab at the top of the page, click the New pull request button.
3. On the Compare page, click compare across forks.
4. Confirm that the base fork is the repository you'd like to merge changes into. The head fork is your fork with the changes you'd like to merge.
5. Click Create Pull Request again and type a title and description for your pull request.
6. To create a pull request that is ready for review, click Create Pull Request. 
7. Afterwards, it will be reviewed by one of the maintainers, and comments made if needed. 
8. If no changes are needed, it will be merged in, and appear on the site within a few minutes!
   
A pull request can be created at any time, but is commonly done so after all changes have been made. 
For more details, you can check out [GitHub's official guide](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
