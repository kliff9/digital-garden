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

1. When the git log command is run, the git program is invoked with the log command. The git program then starts executing the log command.

2. The git program searches the local repository for the commit history. In the local repository, the commit history is stored in a data structure called a linked list, where each commit is represented as a node in the list. The linked list is stored in a file called the packed-refs file

3. The git program traverses the linked list and extracts the relevant information for each commit. This includes the commit hash, author, message, timestamp, and any other metadata that is stored with the commit.

4. The extracted information is then formatted and printed to the console. The default formatting for git log includes the commit hash, author, timestamp, and commit message, with each commit being displayed on a separate line.
