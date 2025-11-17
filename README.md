### Netlifly Website
https://messages-from-anon.netlify.app/

### About 
I was inspired by viral videos of strangers writing notes anonymously about a secret, a fear or something they are afraid to share and putting it in a jar. I thought it was very wholesome and wanted to create a platform/app where others can do the same 
but online. Its a platform for judgment-free sharing. 

## How It Works 
Users write their message in the input field and are allowed to select a random avatar of a set of 9, obtained from the Dicebear API via random seed queries. There is a series of useStates and mapping to display image urls for toggling the avatar selection value and selected avatars. When a user has selected an avatar, typed into the textarea field, and clicks the "Publish" button, it pushes the text content to a thread at the bottom of the page, including their text content and selected avatar. 

## Unsolve problems and Future Add-Ons
Currently, messages are not stored when the page is re-rendered, as Netlify does not support storage. But, I am considering using localStorage in the future to mitigate this! I plan to do further styling, add a word count to prevent users from writing essays. Instructions and an About/Mission statement section. To prevent too many submissions, I plan to add timer/time delay so the oldest submissions disappear after 3-5 days. There might be archive to display favorites, or top viewed, but it might be contradictory to the message I'm trying to convey--which us vulnerability and sharing something without judgement. 