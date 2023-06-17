//will need on page load to generate the new domain when the page is loaded, maybe add a button



//declare arrays to store values we need to access by the for loop to create the string for domain
//we will need to concantenate three words from three arrays below
    let pronoun = ['the','our'];
    let adj = ['happy','little'];
    let noun = ['lemon','cafe'];

//create a for loop, the nest another for loop inside of it. nested loop because we have to access more than one array

    for (let i=0; i < pronoun.length; i++) {
        for (let n=0; n < adj.length; n++) {
            for (let m=0; m < noun.length; m++) {
                console.log(`${pronoun[i]}${adj[n]}${noun[m]}.com`);
            }
        }
    }
    
    
    