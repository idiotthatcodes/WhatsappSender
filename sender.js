var belOptie = "Optie 1, Best"

function ExtensionOnClick(info) {
    if (info.menuItemId === "whatsappChat") {
        
        const phoneNumber = info.selectionText;
        
        
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant, \n\n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: www.telecombinatie.nl/afspraak\n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`;
        
        
        chrome.tabs.create({ url: whatsappURL });
    } 
    if(info.menuItemId === "outofcontract") {
        const phoneNumber = info.selectionText;

        // Beste klant,  \n\n U heeft via onze winkel een abonnement afgesloten op uw mobiele telefoon. Inmiddels is dit abonnement verlopen en is het gekomen in een variabel contract. \nDe prijs van het abonnement blijft hierbij langzaam stijgen. Tevens kunt u hierdoor niet meer kosteloos gebruiken van onze service in de winkel en kan het zijn dat uw telefoon hierdoor gevoelig is geworden voor online fraude. \nOm gebruik te kunnen maken van onze expertise en service in de winkel is het raadzaam om uw telefoon en contract na te laten kijken in onze winkel. \n\nOm verzekerd te blijven van een goede service hebben wij verschillende providers in ons portfolio. \nBij verlenging van uw contract krijgt u gratis voor de duur van uw abonnement ons servicepakket gold. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 best@maastelecom.nl. \nOf plan een afspraak: www.telecombinatie.nl/afspraak\n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.
        const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(`Beste klant,  \n\nU heeft via onze winkel een abonnement afgesloten op uw mobiele telefoon. Inmiddels is dit abonnement verlopen en is het gekomen in een variabel contract. \n\nDe prijs van het abonnement blijft hierbij langzaam stijgen. Tevens kunt u hierdoor niet meer kosteloos gebruiken van onze service in de winkel en kan het zijn dat uw telefoon hierdoor gevoelig is geworden voor online fraude. \n\nOm gebruik te kunnen maken van onze expertise en service in de winkel is het raadzaam om uw telefoon en contract na te laten kijken in onze winkel. \n\nOm verzekerd te blijven van een goede service hebben wij verschillende providers in ons portfolio. \nBij verlenging van uw contract krijgt u gratis voor de duur van uw abonnement ons servicepakket gold. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie} \n💻 best@maastelecom.nl. \nOf plan een afspraak: www.telecombinatie.nl/afspraak\n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie Best.`)}`

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