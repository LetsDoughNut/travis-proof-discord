const Eris = require('eris');

const client = new Eris(process.env.TEST_TOKEN, {
    maxShards: 64
});

console.log(`
This is a Travis "proof".
This document only proves that a Client ID has the following statistics.
Please view the commit on GitHub to validate the code.

Waiting for the client to connect...
`);

if (!process.env.TEST_TOKEN) {
    console.error(`
No token was provided to the Eris client!
Use the environment variable "TEST_TOKEN" to pass a token to the script.
    `);
    process.exit(1);
}

client.on('ready', () => {
    console.log(`
== START OF "PROOF" ==

This "proof" certifies that a bot with ID "${client.user.id}" holds the following statistics

Guild Count:          ${client.guilds.size}
Users Visible to Bot: ${client.users.size}

== END OF "PROOF" ==
    `);
    process.exit(0);
});

client.connect();
