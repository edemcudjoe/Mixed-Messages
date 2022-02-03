const randomMessage = () => {
    //message parts stored in arrays
    const container1 = ['Aries', 'Tauruses', 'Geminis', 'Cancers', 'Leos', 'Virgos', 'Libras', 'Scorpios', 'Sagittariuses', 'Capricorns', 'Aquariuses', 'Pisces'];
    const container2 = ['are to', 'can', 'should', 'will', 'might', 'love to'];
    const container3 = ['find', 'encounter', 'create', 'meet', 'see', 'get', 'take', 'rekindle', 'make', 'trust', 'engage'];
    const container4 = ['the universe', 'a connection', 'someone', 'an opportunity', 'a surprise', 'some good news', 'an old flame', 'a sign', 'some bad news', 'an adventure', 'a financial opportunity', 'a soul mate'];
    
    //selection of random pieces from containers and stored in varirables
    let selection1 = container1[Math.floor(Math.random() * container1.length)];
    let selection2 = container2[Math.floor(Math.random() * container2.length)];
    let selection3 = container3[Math.floor(Math.random() * container3.length)];
    let selection4 = container4[Math.floor(Math.random() * container4.length)];

    //returns a message made up of random selections
    return `${selection1} ${selection2} ${selection3} ${selection4}`;        
}

console.log(randomMessage());
