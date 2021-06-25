To initiate the site:
In VSCode open HelpingFamiliesNelson-Vue folder.
Open a bash terminal and enter "cd backend" followed by "node server.js"
This will begin the api.

Open another terminal and enter "cd frontend" followed by "npm serve --port 8081"

There are several users you may wish to know about:

username: OldiesInNeed, password: Password123
username: VictorySquareFamilies, password: Password123
username: BigBrotherBigSister, password: Password123

These users are beneficiaries and when a charity user submits a vote in the poll, they receive a token if they were voted for!
This can be seen in the Profile page.
As I am using a local mongodb, you will need to create these users to test. 
Input anything for the other fields in registration as long as the username is right it will work.

For a charity member, you need to acquire tokens by uploading clothes in the donation window. The charity user will receive one token for each item and they 
will be able to see their tokens and items in their profile. A charity user can then vote for their choice in the poll on the home page and their tokens will
decrease for every vote until they have been depleted.

The db name is hfn-db that you will be able to find using MongoDBCompass once the site has been run.

That is essentially the system!