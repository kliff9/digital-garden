## Git Objects?

Git objects are the fundamental building blocks of a Git repository. They are used to store and track the history of a repository, as well as the current state of the files in the repository. The object database is a key-value store, where the keys are the unique identifiers (sha1 values) of the objects, and the values are the objects themselves. Git uses a variety of objects to store and manage data. The four main types of objects in Git are:

- Blobs: Blobs store file data. When you add a file to the staging area or commit a change, Git stores the contents of the file in a blob object.

- Trees: Trees represent the file structure of a Git repository. They contain a list of file names and pointers to the corresponding blob objects, which contain the actual file contents. Trees also have pointers to other trees, allowing them to represent the nested directory structure of a project. Trees are similar to folders in a file system in that they can contain other files and directories.

- Commits: Commits represent a snapshot of the repository at a particular point in time. They store metadata about the commit, such as the author, message, and parent commit(s), as well as a reference to the top-level tree of the commit.

- Tags: Tags are used to label specific commits for easy reference. They can be used to mark release points or to annotate important commits in the history of a project.

### git add + git commit commands (Example)

#### git add

1. It takes a snapshot of your changes and stores it in a special data structure called a blob object and stores in the Git database and assigns it a unique identifier (a hash).

1a. For all files that have beed added/modified, A new reference has been created to the blob object in the index

#### git commit

2. A new tree object that reflects the current state of the repository. This includes the file names and references to the blob objects that hold the contents of those files.

3. Git takes the changes that are staged in the index and stores them in a new commit object. (metadata about the commit: such as the commit message, author, and timestamp)

4. Git stores the commit object in the Git database and assigns it a unique identifier (a hash).

5. Git updates the reference to the latest commit in the repository, so that you can access your changes from the repository.

Overall, Git objects are a critical part of how Git works and are essential for tracking and managing the contents of a Git repository.

## Explain how the implementation of git log work

To implement git log, Git first retrieves the commit objects that make up the history for the current branch. It does this by traversing the commit graph starting from the branch's reference

1. Git starts at the reference (e.g., HEAD) for the current branch and follows the commit graph backwards by traversing the parent links of each commit.

2. It retrieves the commit objects for all commits in the branch's history and stores them in memory.

3. Git formats the commit information for each commit, including the commit hash, author, date, and message.

4. It displays the formatted commit information to the user, with the most recent commit at the top by default.

## How Would I implement mailmap

1. The git log command is run with the --use-mailmap option. This tells Git to use the mailmap feature when generating the output for the command.

2. The mailmap function is called by the git log command. This function is responsible for applying the email address mappings specified in the ".mailmap" file to the commit history.

3. The mailmap function reads the ".mailmap" file and parses it, building a data structure that maps each email address to the corresponding author name.

4. The mailmap function retrieves the commit history for the repository. This is a list of all the commits in the repository, with each commit represented as an object containing information about the commit, such as the commit message, author name, and author email address.

5. The mailmap function iterates through the list of commits, looking up each commit's author email address in the data structure created in step 3. If a mapping is found, the function replaces the commit's author name and email with the mapped values. If no mapping is found, the commit's original author name and email are used.

6. The mailmap function returns the modified list of commits to the git log command.

7. The git log command outputs the commit information to the user, using the modified author names and emails provided by the mailmap function.

## Stopped, realizing I need to learn Linked

```
gitlog()

check if mailmap exist (assuming it exist and is formated correctly)

for (let i = 0; i < gitlog.length; i++)
    Console.log(commit), (readline?, pause node untill key press)

    if any mailmaps.old_email in data.Author:
        Console.log('Author', mailmap email)
    else:
        Console.log('Author', orginal email)
    Console.log(date_), (readline?, pause node untill key press)
    Console.log(commit_message), (readline?, pause node untill key press)



```
