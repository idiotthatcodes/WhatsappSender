// Default value for belOptie
var belOptie = "Optie 1, Best";
var locatie = "Best";
var mail = "best@maastelecom.nl";
function updateContextMenuTitle() {
  chrome.contextMenus.update("Note2", {
    title: `Bel Optie: ${belOptie}`,
  });
	
  
}

function ExtensionOnClick(info) {
  if (info.menuItemId === "whatsappChat") {
    const phoneNumber = info.selectionText;

    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant, \n\n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;

    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "outofcontract") {
    const phoneNumber = info.selectionText;

    // Beste klant,  \n\n U heeft via onze winkel een abonnement afgesloten op uw mobiele telefoon. Inmiddels is dit abonnement verlopen en is het gekomen in een variabel contract. \nDe prijs van het abonnement blijft hierbij langzaam stijgen. Tevens kunt u hierdoor niet meer kosteloos gebruiken van onze service in de winkel en kan het zijn dat uw telefoon hierdoor gevoelig is geworden voor online fraude. \nOm gebruik te kunnen maken van onze expertise en service in de winkel is het raadzaam om uw telefoon en contract na te laten kijken in onze winkel. \n\nOm verzekerd te blijven van een goede service hebben wij verschillende providers in ons portfolio. \nBij verlenging van uw contract krijgt u gratis voor de duur van uw abonnement ons servicepakket gold. \nWij nodigen u graag uit in onze winkel in Best. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,  \n\nU heeft via onze winkel een abonnement afgesloten op uw mobiele telefoon. Inmiddels is dit abonnement verlopen en is het gekomen in een variabel contract. \n\nDe prijs van het abonnement blijft hierbij langzaam stijgen. Tevens kunt u hierdoor niet meer kosteloos gebruiken van onze service in de winkel en kan het zijn dat uw telefoon hierdoor gevoelig is geworden voor online fraude. \n\nOm gebruik te kunnen maken van onze expertise en service in de winkel is het raadzaam om uw telefoon en contract na te laten kijken in onze winkel. \n\nOm verzekerd te blijven van een goede service hebben wij verschillende providers in ons portfolio. \nBij verlenging van uw contract krijgt u gratis voor de duur van uw abonnement ons servicepakket gold. \nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie} \n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;

    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "kpn_verlengbaar") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nu heeft via onze winkel een KPN abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "vodafone_verlengbaar") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nu heeft via onze winkel een Vodafone abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "ben_verlengbaar") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nu heeft via onze winkel een BEN abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "odido_verlengbaar") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nu heeft via onze winkel een Odido abonnement afgesloten dat inmiddels al een tijdje in de verlengperiode zit. Wij zouden u graag even spreken over de tevredenheid met het abonnement, en/of bij tevredenheid het contract weer vast te zetten om u te verzekeren van de beste deal. \nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://https://telecombinatie.nl/afspraak  \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "youfone_verlengbaar") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nU heeft via onze winkel een abonnement afgesloten bij Youfone op uw mobiele telefoon. Inmiddels is dit abonnement in de verleng periode gekomen. Wij bieden geen ondersteuning meer voor de providers Youfone en Lebara vanwege hun slechte service. Om verzekerd te blijven van een goede service hebben wij verschillende alternatieven als provider. Hierdoor blijft u tevens verzekerd van de juiste prijs.\nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "lebara_verlengbaar") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nU heeft via onze winkel een abonnement afgesloten bij Lebara op uw mobiele telefoon. Inmiddels is dit abonnement in de verleng periode gekomen. Wij bieden geen ondersteuning meer voor de providers Youfone en Lebara vanwege hun slechte service. Om verzekerd te blijven van een goede service hebben wij verschillende alternatieven als provider. Hierdoor blijft u tevens verzekerd van de juiste prijs.\nWij nodigen u graag uit in onze winkel. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "gg_bericht") {
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant,\n\nWij hebben u een aantal keer geprobeerd te bereiken over het mobiele abonnement bij onze winkel die inmiddels in de verlengperiode is gekomen. Graag zouden wij u hierover even spreken om de opties even na te gaan. Dit kan zowel telefonisch als in de winkel. \nWij nodigen u graag uit in onze winkel in ${locatie}. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL });
  }
  if (info.menuItemId === "winback"){
    const phoneNumber = info.selectionText;
    const whatsappURL = `https://web.whatsapp.com/send?phone=31${phoneNumber}&text=${encodeURIComponent(
      `Beste klant, \n\n Wij hebben u al een tijdje gemist in onze winkel. In de loop van de tijd is hierdoor het contract uit zijn looptijd gegaan. Dit kan gevolgen hebben voor uw pakket en de bijbehorende prijs van het abonnement. In de afgelopen tijd zijn door diverse providers de prijzen behoorlijk verhoogt door de indexering op de contracten. Hierdoor is het interessant om langs de winkel te komen, om samen te kijken of het lonend is om te verlengen of dat juist overstappen gaat lonen voor u. In alles ontzorgen wij u met deze aanvraag. Dit kan u maandelijks een mooie besparing op leveren. Tevens kunt u dan weer volop genieten van de service en expertise van onze medewerkers in onze winkel. U krijgt dan ook weer gratis ons service pakket gold voor de duur van de looptijd van u contract, helemaal gratis!\n\nWij nodigen u graag uit in onze winkel in ${locatie}. \n\nU kunt ons altijd bereiken via de onderstaande gegevens.\n\n📞 085 111 9393 ${belOptie}\n💻 ${mail}. \nOf plan een afspraak: https://telecombinatie.nl/afspraak \n\nTot ziens 📞📱  \n\nMet vriendelijke groet, \nTeam Maas Telecombinatie ${locatie}.`
    )}`;
    chrome.tabs.create({ url: whatsappURL});
  }
}

chrome.contextMenus.onClicked.addListener(ExtensionOnClick);

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case "optie1":
      belOptie = "Optie 1, Best";
      locatie = "Best";
      mail = "best@maastelecom.nl";
      break;
    case "optie2":
      belOptie = "Optie 2, Vught";
      locatie = "Vught";
      mail = "vught@maastelecom.nl";
      break;
    case "optie3":
      belOptie = "Optie 3, Schijndel";
      locatie = "Schijndel";
      mail = "schijndel@maastelecom.nl";
      break;
    case "optie4":
      belOptie = "Optie 4, Veldhoven";
      locatie = "Veldhoven";
      mail = "veldhoven@maastelecom.nl";
      break;
    default:
      locatie = "Best";
      mail = "best@maastelecom.nl";
      break;
  }
  updateContextMenuTitle();
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: `Bel Optie: ${belOptie}`,
    contexts: ["selection"],
    id: "Note2",
    enabled: false,
  });

  let parentMenuItem = chrome.contextMenus.create({
    title: "Locatie (Bel Optie)",
    contexts: ["selection"],
    id: "parentMenuItem",
  });

  // Create sub-menu items to change belOptie value
  chrome.contextMenus.create({
    title: "Optie 1, Best",
    parentId: parentMenuItem,
    contexts: ["selection"],
    id: "optie1",
  });

  chrome.contextMenus.create({
    title: "Optie 2, Vught",
    parentId: parentMenuItem,
    contexts: ["selection"],
    id: "optie2",
  });

  chrome.contextMenus.create({
    title: "Optie 3, Schijndel",
    parentId: parentMenuItem,
    contexts: ["selection"],
    id: "optie3",
  });

  chrome.contextMenus.create({
    title: "Optie 4, Veldhoven",
    parentId: parentMenuItem,
    contexts: ["selection"],
    id: "optie4",
  });
  chrome.contextMenus.create({
    title: "-----------------",
    contexts: ["selection"],
    id: "devider1",
    enabled: false
  })
  chrome.contextMenus.create({
    title: "Open een WhatsApp Chat",
    contexts: ["selection"],
    id: "whatsappChat",
  });
  chrome.contextMenus.create({
    title: "-----------------",
    contexts: ["selection"],
    id: "devider2",
    enabled: false
  })
  let VBP = chrome.contextMenus.create({
    title: "'U bent verlengbaar' berichten..",
    contexts: ["selection"],
    id: "VBP"
  });

  let kpn_verlengbaar = chrome.contextMenus.create({
    title: "KPN Verlengbaar",
    parentId: "VBP",
    contexts: ["selection"],
    id: "kpn_verlengbaar",
  });

  let ben_verlengbaar = chrome.contextMenus.create({
    title: "BEN Verlengbaar",
    parentId: "VBP",
    contexts: ["selection"],
    id: "ben_verlengbaar",
  });

  let vodafone_verlengbaar = chrome.contextMenus.create({
    title: "Vodafone Verlengbaar",
    parentId: "VBP",
    contexts: ["selection"],
    id: "vodafone_verlengbaar",
  });
  let odido_verlengbaar = chrome.contextMenus.create({
    title: "Odido Verlengbaar",
    parentId: "VBP",
    contexts: ["selection"],
    id: "odido_verlengbaar",
  });

  let youfone_verlengbaar = chrome.contextMenus.create({
    title: "Youfone Verlengbaar",
    parentId: "VBP",
    contexts: ["selection"],
    id: "youfone_verlengbaar",
  });

  let lebara_verlengbaar = chrome.contextMenus.create({
    title: "Lebara Verlengbaar",
    parentId: "VBP",
    contexts: ["selection"],
    id: "lebara_verlengbaar",
  });

  let ABP = chrome.contextMenus.create({
    title: "Andere berichten..",
    contexts: ["selection"],
    id: "ABP"
  });

  let gg_bericht = chrome.contextMenus.create({
    title: "Telefonisch geen gehoor..",
    contexts: ["selection"],
    id: "gg_bericht",
    parentId: "ABP"
  });

  let outofcontract = chrome.contextMenus.create({
    title: "Out-of-Contract",
    contexts: ["selection"],
    id: "outofcontract",
    parentId: "ABP"
  });

  let winback = chrome.contextMenus.create({
    title: "Winback",
    contexts: ["selection"],
    id: "winback",
    parentId: "ABP"
  })
});
