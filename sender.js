var belOptie = "Optie 1, Best"

function ExtensionOnClick(info) {
    if (info.menuItemId === "whatsappChat") {
        
        const phoneNumber = info.selectionText;
        
        
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant, \n\n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`;
        
        
        chrome.tabs.create({ url: whatsappURL });
    } 
    if(info.menuItemId === "outofcontract") {
        const phoneNumber = info.selectionText;

        // Beste klant,  \n\n U heeft via onze winkel een abonnement afgesloten op uw mobiele telefoon. Inmiddels is dit abonnement verlopen en is het gekomen in een variabel contract. \nDe prijs van het abonnement blijft hierbij langzaam stijgen. Tevens kunt u hierdoor niet meer kosteloos gebruiken van onze service in de winkel en kan het zijn dat uw telefoon hierdoor gevoelig is geworden voor online fraude. \nOm gebruik te kunnen maken van onze expertise en service in de winkel is het raadzaam om uw telefoon en contract na te laten kijken in onze winkel. \n\nOm verzekerd te blijven van een goede service hebben wij verschillende providers in ons portfolio. \nBij verlenging van uw contract krijgt u gratis voor de duur van uw abonnement ons servicepakket gold. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,  \n\nU heeft via onze winkel een abonnement afgesloten op uw mobiele telefoon. Inmiddels is dit abonnement verlopen en is het gekomen in een variabel contract. \n\nDe prijs van het abonnement blijft hierbij langzaam stijgen. Tevens kunt u hierdoor niet meer kosteloos gebruiken van onze service in de winkel en kan het zijn dat uw telefoon hierdoor gevoelig is geworden voor online fraude. \n\nOm gebruik te kunnen maken van onze expertise en service in de winkel is het raadzaam om uw telefoon en contract na te laten kijken in onze winkel. \n\nOm verzekerd te blijven van een goede service hebben wij verschillende providers in ons portfolio. \nBij verlenging van uw contract krijgt u gratis voor de duur van uw abonnement ons servicepakket gold. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie} \n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`

        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "kpn_verlengbaar"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nu heeft via onze winkel een KPN abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "vodafone_verlengbaar"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nu heeft via onze winkel een Vodafone abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "ben_verlengbaar"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nu heeft via onze winkel een BEN abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "odido_verlengbaar"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nu heeft via onze winkel een Odido abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://https://telecombinatie.nl/afspraak  \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "youfone_verlengbaar"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nU heeft via onze winkel een abonnement afgesloten bij Youfone op uw mobiele telefoon. Inmiddels is dit abonnement in de verleng periode gekomen. Wij bieden geen ondersteuning meer voor de providers Youfone en Lebara vanwege hun slechte service. Om verzekerd te blijven van een goede service hebben wij verschillende alternatieven als provider. Hierdoor blijft u tevens verzekerd van de juiste prijs.\nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "lebara_verlengbaar"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nU heeft via onze winkel een abonnement afgesloten bij Lebara op uw mobiele telefoon. Inmiddels is dit abonnement in de verleng periode gekomen. Wij bieden geen ondersteuning meer voor de providers Youfone en Lebara vanwege hun slechte service. Om verzekerd te blijven van een goede service hebben wij verschillende alternatieven als provider. Hierdoor blijft u tevens verzekerd van de juiste prijs.\nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
    if(info.menuItemId === "gg_bericht"){
        const phoneNumber = info.selectionText;
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,\n\nWij hebben u een aantal keer geprobeerd te bereiken over het mobiele abonnement bij onze winkel die inmiddels in de verlengperiode is gekomen. Graag zouden wij u hierover even spreken om de opties even na te gaan. Dit kan zowel telefonisch als in de winkel. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`
        chrome.tabs.create({url:whatsappURL})
    }
}


chrome.contextMenus.onClicked.addListener(ExtensionOnClick);


chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: `Bel Optie: ${belOptie}`,
        contexts: ["selection"],
        id: "Note2",
        enabled: false
    })
    chrome.contextMenus.create({
        title: "Open een WhatsApp Chat",
        contexts: ["selection"], 
        id: "whatsappChat" 
    });

    chrome.contextMenus.create({
        title: "'U bent verlengbaar' berichten..",
        contexts: ["selection"],
        id: "Note1",
        enabled: false
    })

    let kpn_verlengbaar = chrome.contextMenus.create({
        title: 'KPN Verlengbaar',
        contexts: ["selection"],
        id: 'kpn_verlengbaar'
    })

    let ben_verlengbaar = chrome.contextMenus.create({
        title: 'BEN Verlengbaar',
        contexts: ["selection"],
        id: 'ben_verlengbaar'
    })

    let vodafone_verlengbaar = chrome.contextMenus.create({
        title: 'Vodafone Verlengbaar',
        contexts: ["selection"],
        id: 'vodafone_verlengbaar'
    })
    let odido_verlengbaar = chrome.contextMenus.create({
        title: 'Odido Verlengbaar',
        contexts: ["selection"],
        id: 'odido_verlengbaar'
    })

    let youfone_verlengbaar = chrome.contextMenus.create({
        title: 'Youfone Verlengbaar',
        contexts: ["selection"],
        id: 'youfone_verlengbaar'
    })

    let lebara_verlengbaar = chrome.contextMenus.create({
        title: 'Lebara Verlengbaar',
        contexts: ["selection"],
        id: 'lebara_verlengbaar'
    })

    chrome.contextMenus.create({
        title: "Andere berichten..",
        contexts: ["selection"],
        id: "Note3",
        enabled: false
    })

    let gg_bericht = chrome.contextMenus.create({
        title: 'Telefonisch geen gehoor..',
        contexts: ["selection"],
        id: 'gg_bericht'
    })


    let outofcontract = chrome.contextMenus.create({
        title: 'Out-of-Contract',
        contexts: ["selection"],
        id: 'outofcontract'
    })
});