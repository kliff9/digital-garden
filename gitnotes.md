⚫ Git Objects?
Git uses a variety of objects to store and manage data. The four main types of objects in Git are:
Blobs: Blobs store file data. When you add a file to the staging area or commit a change, Git stores the contents of the file in a blob object.
Trees: Trees represent the file structure of a Git repository. They contain a list of file names and pointers to the corresponding blob objects, which contain the actual file contents. Trees also have pointers to other trees, allowing them to represent the nested directory structure of a project. Trees are similar to folders in a file system in that they can contain other files and directories.
Commits: Commits represent a snapshot of the repository at a particular point in time. They store metadata about the commit, such as the author, message, and parent commit(s), as well as a reference to the top-level tree of the commit.
Tags: Tags are used to label specific commits for easy reference. They can be used to mark release points or to annotate important commits in the history of a project.
Git stores these objects in a simple, flat structure within the .git directory of a repository. Each object is stored in a file named with its SHA-1 hash, and the contents of the object are stored in a compressed, binary format.

⚫ git add + git commit commands
when you run the git add and git commit commands — it stores blobs for the files that have changed, updates the index, writes out trees, and writes commit objects that reference the top-level trees and the commits that came immediately before them.
⚫ How Git Objects are stored
Git stores its objects in a simple key-value database that maps object names (hashes) to the contents of the objects. Each object is stored in a file with a name that is the hash of the object's contents, and the contents of the object are stored in the file.
