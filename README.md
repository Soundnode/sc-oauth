# HOW TO

This is a quick guide on how to run your own instance of the server for Soundnode and stop reaching the daily limit.

1. You will need to host your sc-oauth somewhere since Soundcloud expects us to have a domain to be able to register with them.
2. After figure out the hosting part you go to Soundcloud, you where can obtain your token here https://developers.soundcloud.com/docs/api/guide
(register a new app).
3. Now that you have the tokens and your app has a host you can replace [these tokens](https://github.com/Soundnode/sc-oauth/blob/master/views/index.html#L14-L16) with your tokens.
4. Final step is replacing the tokens and pointing to your host on [Soundnode](https://github.com/Soundnode/soundnode-app/blob/master/main.js#L14-L15)
