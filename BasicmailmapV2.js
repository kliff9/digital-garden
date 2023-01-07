/* This Code is a very simplfied version of how I think .mailmap is implemented with git log using javascipt without using Linked-List


Step 1. console.log the usually information
Step 2. Check if .mailmap exist When We get to Author Line
Step 2a. Make sure that .mailmap has the correct credentials
(Nothing is mispelled or any other errors) if so, extract the infomation
Step 2b. if Information was extracted from .mailmap then use the value
provided by .mailmap instead of the orginal credentials after confirming that the data matches
*/

//-------------- .mailmap ---------------- \\
const email = "<GOAT@gmail.com>" || null;
const email2change = "<example@gmail.com>" || null;
let ismailmap = true;

//-------------- Mailmap function ---------------- \\

let modified_List;
let mailmap_info = {};

function modified_with_mailmap(old_email, new_email) {
  mailmap_info[old_email] = new_email;
  modified_List = List_commits;

  for (let i = 0; i < modified_List.length; i++) {
    if (modified_List[i].Author.includes(Object.keys(mailmap_info))) {
      modified_List[i].Author = mailmap_info[email2change];
      console.log(modified_List[i].Author);
    }
  }
  return modified_List;
}

//-------------- List of commits---------------- \\

let List_commits = [
  {
    commit: "c9345051c0abd408875bccdca833076362230fa3",
    Author: "Marti <martisbvk@gmail.com>",
    Date: "Thu Dec 22 14:25:59 2022 -0500",
    message: "Create foam topic",
  },

  {
    commit: "bf2ce41ecb6c92a00f71c5987b6d5410f5c7b811",
    Author: "Example <example@gmail.com>",
    Date: "Thu Dec 23 15:25:59 2022 -0500",
    message: "Create isomorphic-git topic",
  },
];

// ------------- git log function  --------------- \\

function gitlog_(Active_List) {
  for (let i = 0; i < Active_List.length; i++) {
    console.log(
      "Commit: ",
      Active_List[i].commit,
      "Arthor: ",
      Active_List[i].Author
    ); // always print the original
  }
}

// ------------- git log function with mailmap --------------- \\
function main() {
  if (ismailmap) {
    let new_modified_list = modified_with_mailmap(email2change, email);
    gitlog_(new_modified_list);
  } else {
    gitlog_(List_commits);
  }
}
main();
