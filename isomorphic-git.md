## mailmap
### reference

- [mailmap](https://git-scm.com/docs/gitmailmap)
- [pretty formats](https://git-scm.com/docs/pretty-formats)

plumbing commands that use the mailmap file: 
- git diff-tree 
- git rev-list
- git cat-file

porcelain commands that use the mailmap file: 
- git log 
- git shortlog 
- git show 
- git blame 
- git check-mailmap

files that store mailmap information:
- .mailmap 
- git config: `mailmap.file`,  `mailmap.blob`

## todo - kliff

- [ ] create a test repository that contains
  - commits from multiple emails
  - a mailmap mapping those emails to a single canonical email
- [ ] push the test repository to github
- [ ] write a node program to read the objects in the repository and display the author info

## todo - moussa

- [ ] read [git internal structure](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain)
- [ ] pick an issue to work on
