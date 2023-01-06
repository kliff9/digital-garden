
/* This Code is a very simplfied version of how I think .mailmap is implemented with git log

Step 1. Check if .mailmap exist
Step 1a If it exist Extract Information
Step 2. console.log the usually information
Step 2a. Make sure that .mailmap has the correct credentials (Nothing is mispelled or any other errors)
Step 2b. if Information was extracted from .mailmap then use the value 
provided by .mailmap instead of the orginal credentials after confirming that the data matches
*/


//-------------- .mailmap ---------------- \\
const email = '<GOAT@gmail.com>' || null
const email2change = '<example@gmail.com>' || null


//-------------- Mailmap function ---------------- \\

let mailmap = {};

function addmailmap(old_email, new_email){
    mailmap[old_email] = new_email;


}

addmailmap(email2change,email)


//-------------- List of commits---------------- \\

let gitlog = [
    {
    'commit': 'c9345051c0abd408875bccdca833076362230fa3',
    'Author': 'Marti <martisbvk@gmail.com>',
    'Date':   'Thu Dec 22 14:25:59 2022 -0500',
    'message' : 'Create foam topic'
    },


    {
    'commit': 'bf2ce41ecb6c92a00f71c5987b6d5410f5c7b811',
    'Author': 'Example <example@gmail.com>',
    'Date':   'Thu Dec 23 15:25:59 2022 -0500',
    'message' : 'Create isomorphic-git topic'
    }

]



function gitlog_() {
    
    for (let i = 0; i < gitlog.length; i++) 
    {

        if ( gitlog[i].Author.includes(Object.keys(mailmap) & mailmap)) 
        {
            console.log('Commit: ', gitlog[i].commit ,' Arthor: Example', mailmap[email2change]) // print the new mailmap info if it exist

        } else 
        {
        console.log('Commit: ', gitlog[i].commit ,'Arthor: ', gitlog[i].Author) // always print the original 
        }
    }   
}
        
gitlog_() // Hypothetically checks for .mailmap and adjust any Necessary changes.


