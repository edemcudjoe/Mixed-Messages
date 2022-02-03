const randomMessage = () => {
    //message parts stored in arrays
    const container1 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    const container2 = ['are to', 'can', 'should', 'will', 'might', 'love to'];
    const container3 = ['feel', 'encounter', 'create', 'meet', 'see', 'get', 'take', 'rekindle', 'make', 'trust', ];
    const container4 = ['the universe', 'a connection', 'someone', 'an opportunity', 'a surprise', 'some good news', 'an old flame', 'a sign', 'some bad news', 'an adventure', 'a financial opportunity', 'soul mate'];
    
    //selection of random pieces from containers and stored in varirables
    let selection1 = container1[Math.floor(Math.random() * container1.length)];
    let selection2 = container2[Math.floor(Math.random() * container2.length)];
    let selection3 = container3[Math.floor(Math.random() * container3.length)];
    let selection4 = container4[Math.floor(Math.random() * container4.length)];

        
}

