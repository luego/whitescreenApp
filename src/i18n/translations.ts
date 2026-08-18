import type { ScreenColor } from "../data/colors";
import { colorDetail } from "./color-content";

export const locales = ["en", "de", "es", "pt", "fr", "it", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English", de: "Deutsch", es: "Español", pt: "Português", fr: "Français", it: "Italiano", nl: "Nederlands",
};

type Copy = {
  colors: Record<string, string>;
  free: string; tool: string; hero: string; click: string; fullscreen: string;
  resolution: string; width: string; height: string; colorsLabel: string; options: string; custom: string;
  simple: string; purpose: (color: string) => string; lead: string;
  cards: Array<{ title: string; text: string }>; whiteCard: { title: string; text: string }; colorCard: { title: string; text: string };
  howLabel: string; howTitle: string; steps: Array<{ title: string; text: string }>;
  faqLabel: string; faqTitle: (color: string) => string; faq: Array<{ q: string; a: string }>;
  more: string; other: string; footer: string; language: string;
  light: string; dark: string; system: string; download: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    colors:{white:"white",black:"black",red:"red",green:"green",blue:"blue",yellow:"yellow",orange:"orange",pink:"pink",purple:"purple",cyan:"cyan",gray:"gray"},
    free:"Free tool · No sign-up",tool:"Online color screen",hero:"A clean surface for lighting, checking your display, or working without distractions.",click:"Click or press F",fullscreen:"Fullscreen",resolution:"Resolution",width:"Width",height:"Height",colorsLabel:"Colors",options:"options",custom:"Custom color",simple:"Simple and useful",purpose:c=>`What is a ${c} screen useful for?`,lead:"A solid color screen helps inspect a display and provides a clean visual surface. It works on computers, phones, tablets, and TVs without downloads.",
    cards:[{title:"Check and clean your display",text:"Find dead pixels, dust, fingerprints, stains, and brightness differences on a uniform surface."},{title:"Create a clean background",text:"Use it as a temporary background for presentations, photos, recordings, or a distraction-free second screen."}],whiteCard:{title:"Light your space",text:"Use the screen brightness as soft light for video calls, photography, reading, or drawing."},colorCard:{title:"Evaluate color",text:"Check contrast, saturation, and color reproduction across different devices."},
    howLabel:"How to use it",howTitle:"Three simple steps",steps:[{title:"Choose a color",text:"Select a preset screen or enter a custom hexadecimal color."},{title:"Adjust your device",text:"Raise or lower the physical screen brightness for your test or use case."},{title:"Open fullscreen",text:"Click the canvas or press F to hide the interface and show only the color."}],
    faqLabel:"Frequently asked questions",faqTitle:c=>`About the ${c} screen`,faq:[{q:"When should I use this screen?",a:"Use it to inspect display uniformity, find defective pixels, clean the screen, or create a distraction-free background."},{q:"Is this tool free?",a:"Yes. It works directly in your browser without accounts, software installations, or payments."},{q:"Can it detect dead pixels?",a:"Yes. Switch between white, black, red, green, and blue. A point that does not change correctly may be dead or stuck."},{q:"Does it work on phones and tablets?",a:"Yes. The interface adapts to small screens and supports fullscreen when the browser and device allow it."},{q:"Can I choose another color?",a:"Yes. Use a preset or enter a hexadecimal value in the custom color control."}],
    more:"More tools",other:"Try other colors",footer:"Made to look good on every screen.",language:"Language",light:"Light theme",dark:"Dark theme",system:"System theme",download:"Download PNG",
  },
  de: {
    colors:{white:"weiße",black:"schwarze",red:"rote",green:"grüne",blue:"blaue",yellow:"gelbe",orange:"orange",pink:"pinke",purple:"violette",cyan:"türkise",gray:"graue"},
    free:"Kostenlos · Keine Anmeldung",tool:"Online-Farbbildschirm",hero:"Eine klare Fläche zum Beleuchten, Prüfen des Displays oder konzentrierten Arbeiten.",click:"Klicken oder F drücken",fullscreen:"Vollbild",resolution:"Auflösung",width:"Breite",height:"Höhe",colorsLabel:"Farben",options:"Optionen",custom:"Eigene Farbe",simple:"Einfach und nützlich",purpose:c=>`Wofür ist ein ${c}r Bildschirm nützlich?`,lead:"Eine einfarbige Fläche hilft bei der Displayprüfung und dient als sauberer visueller Hintergrund. Sie funktioniert ohne Download auf Computer, Handy, Tablet und Fernseher.",
    cards:[{title:"Display prüfen und reinigen",text:"Finde tote Pixel, Staub, Fingerabdrücke, Flecken und Helligkeitsunterschiede."},{title:"Sauberen Hintergrund erstellen",text:"Nutze die Fläche für Präsentationen, Fotos, Aufnahmen oder einen ruhigen Zweitbildschirm."}],whiteCard:{title:"Raum beleuchten",text:"Nutze die Bildschirmhelligkeit als weiches Licht für Videoanrufe, Fotos, Lesen oder Zeichnen."},colorCard:{title:"Farbe beurteilen",text:"Prüfe Kontrast, Sättigung und Farbwiedergabe auf verschiedenen Geräten."},
    howLabel:"Anwendung",howTitle:"Drei einfache Schritte",steps:[{title:"Farbe wählen",text:"Wähle eine Vorgabe oder gib eine eigene Hex-Farbe ein."},{title:"Gerät anpassen",text:"Passe die Bildschirmhelligkeit an den gewünschten Test an."},{title:"Vollbild öffnen",text:"Klicke auf die Fläche oder drücke F, um nur die Farbe anzuzeigen."}],
    faqLabel:"Häufige Fragen",faqTitle:c=>`Alles über den ${c}n Bildschirm`,faq:[{q:"Wann sollte ich diesen Bildschirm verwenden?",a:"Zur Prüfung der Gleichmäßigkeit, zum Finden defekter Pixel, zur Reinigung oder als ruhiger Hintergrund."},{q:"Ist das Werkzeug kostenlos?",a:"Ja. Es funktioniert ohne Konto, Installation oder Zahlung direkt im Browser."},{q:"Kann ich tote Pixel finden?",a:"Ja. Wechsle zwischen Weiß, Schwarz, Rot, Grün und Blau. Ein unveränderter Punkt kann defekt sein."},{q:"Funktioniert es auf Handy und Tablet?",a:"Ja. Die Oberfläche passt sich kleinen Bildschirmen an und unterstützt nach Möglichkeit Vollbild."},{q:"Kann ich eine andere Farbe wählen?",a:"Ja. Nutze eine Vorgabe oder gib einen Hex-Wert ein."}],
    more:"Weitere Werkzeuge",other:"Andere Farben testen",footer:"Für jeden Bildschirm gestaltet.",language:"Sprache",light:"Helles Design",dark:"Dunkles Design",system:"Systemdesign",download:"PNG herunterladen",
  },
  es: {
    colors:{white:"blanca",black:"negra",red:"roja",green:"verde",blue:"azul",yellow:"amarilla",orange:"naranja",pink:"rosa",purple:"morada",cyan:"cian",gray:"gris"},
    free:"Herramienta gratuita · Sin registro",tool:"Pantalla de color online",hero:"Una superficie limpia para iluminar, revisar tu monitor o trabajar sin distracciones.",click:"Haz clic o pulsa F",fullscreen:"Pantalla completa",resolution:"Resolución",width:"Ancho",height:"Alto",colorsLabel:"Colores",options:"opciones",custom:"Color personalizado",simple:"Simple y útil",purpose:c=>`¿Para qué sirve una pantalla ${c}?`,lead:"Una pantalla de color sólido permite revisar el estado de un panel y funciona como una superficie visual limpia. Se adapta a ordenadores, móviles, tabletas y televisores sin descargas.",
    cards:[{title:"Revisar y limpiar el monitor",text:"Localiza píxeles muertos, polvo, huellas, manchas y diferencias de brillo sobre una superficie uniforme."},{title:"Crear un fondo limpio",text:"Úsala para presentaciones, fotografías, grabaciones o una pantalla secundaria sin distracciones."}],whiteCard:{title:"Iluminar tu espacio",text:"Utiliza el brillo como una luz suave para videollamadas, fotografía, lectura o dibujo."},colorCard:{title:"Evaluar el color",text:"Comprueba el contraste, la saturación y la reproducción del tono en diferentes dispositivos."},
    howLabel:"Cómo utilizarla",howTitle:"Lista en tres pasos",steps:[{title:"Elige el color",text:"Selecciona una pantalla predefinida o introduce un color hexadecimal."},{title:"Ajusta tu dispositivo",text:"Sube o baja el brillo físico según la prueba que necesites."},{title:"Abre la pantalla completa",text:"Pulsa el canvas o la tecla F para mostrar únicamente el color."}],
    faqLabel:"Preguntas frecuentes",faqTitle:c=>`Todo sobre la pantalla ${c}`,faq:[{q:"¿Cuándo conviene utilizar esta pantalla?",a:"Para revisar la uniformidad, detectar píxeles defectuosos, limpiar el panel o disponer de un fondo sin distracciones."},{q:"¿Esta herramienta es gratuita?",a:"Sí. Funciona directamente en el navegador sin cuentas, instalaciones ni pagos."},{q:"¿Sirve para detectar píxeles muertos?",a:"Sí. Cambia entre blanco, negro, rojo, verde y azul. Un punto que no cambia puede estar muerto o atascado."},{q:"¿Funciona en móviles y tabletas?",a:"Sí. La interfaz se adapta y permite pantalla completa cuando el dispositivo lo admite."},{q:"¿Puedo elegir otro color?",a:"Sí. Usa un color disponible o introduce un valor hexadecimal."}],
    more:"Más herramientas",other:"Prueba otros colores",footer:"Hecho para verse bien en cualquier pantalla.",language:"Idioma",light:"Tema claro",dark:"Tema oscuro",system:"Tema del sistema",download:"Descargar PNG",
  },
  pt: {
    colors:{white:"branca",black:"preta",red:"vermelha",green:"verde",blue:"azul",yellow:"amarela",orange:"laranja",pink:"rosa",purple:"roxa",cyan:"ciano",gray:"cinza"},
    free:"Ferramenta gratuita · Sem cadastro",tool:"Tela colorida online",hero:"Uma superfície limpa para iluminar, testar a tela ou trabalhar sem distrações.",click:"Clique ou pressione F",fullscreen:"Tela cheia",resolution:"Resolução",width:"Largura",height:"Altura",colorsLabel:"Cores",options:"opções",custom:"Cor personalizada",simple:"Simples e útil",purpose:c=>`Para que serve uma tela ${c}?`,lead:"Uma tela de cor sólida ajuda a verificar o painel e oferece uma superfície visual limpa. Funciona em computadores, celulares, tablets e TVs sem downloads.",
    cards:[{title:"Verificar e limpar a tela",text:"Encontre pixels mortos, poeira, marcas, manchas e diferenças de brilho."},{title:"Criar um fundo limpo",text:"Use em apresentações, fotos, gravações ou como segunda tela sem distrações."}],whiteCard:{title:"Iluminar o ambiente",text:"Use o brilho como luz suave para videochamadas, fotografia, leitura ou desenho."},colorCard:{title:"Avaliar a cor",text:"Verifique contraste, saturação e reprodução de cores em diferentes dispositivos."},
    howLabel:"Como usar",howTitle:"Três passos simples",steps:[{title:"Escolha a cor",text:"Selecione uma cor pronta ou informe um valor hexadecimal."},{title:"Ajuste o dispositivo",text:"Aumente ou diminua o brilho físico conforme necessário."},{title:"Abra em tela cheia",text:"Clique na área ou pressione F para mostrar apenas a cor."}],
    faqLabel:"Perguntas frequentes",faqTitle:c=>`Sobre a tela ${c}`,faq:[{q:"Quando devo usar esta tela?",a:"Para verificar uniformidade, encontrar pixels defeituosos, limpar o painel ou criar um fundo limpo."},{q:"A ferramenta é gratuita?",a:"Sim. Funciona no navegador sem conta, instalação ou pagamento."},{q:"Detecta pixels mortos?",a:"Sim. Alterne entre branco, preto, vermelho, verde e azul e procure pontos que não mudam."},{q:"Funciona em celulares e tablets?",a:"Sim. A interface é responsiva e oferece tela cheia quando disponível."},{q:"Posso escolher outra cor?",a:"Sim. Use uma opção pronta ou informe um valor hexadecimal."}],
    more:"Mais ferramentas",other:"Teste outras cores",footer:"Feito para qualquer tela.",language:"Idioma",light:"Tema claro",dark:"Tema escuro",system:"Tema do sistema",download:"Baixar PNG",
  },
  fr: {
    colors:{white:"blanc",black:"noir",red:"rouge",green:"vert",blue:"bleu",yellow:"jaune",orange:"orange",pink:"rose",purple:"violet",cyan:"cyan",gray:"gris"},
    free:"Outil gratuit · Sans inscription",tool:"Écran couleur en ligne",hero:"Une surface nette pour éclairer, tester votre écran ou travailler sans distraction.",click:"Cliquez ou appuyez sur F",fullscreen:"Plein écran",resolution:"Résolution",width:"Largeur",height:"Hauteur",colorsLabel:"Couleurs",options:"options",custom:"Couleur personnalisée",simple:"Simple et utile",purpose:c=>`À quoi sert un écran ${c} ?`,lead:"Un écran de couleur unie aide à contrôler une dalle et offre une surface visuelle propre. Il fonctionne sans téléchargement sur ordinateur, mobile, tablette et téléviseur.",
    cards:[{title:"Contrôler et nettoyer l’écran",text:"Repérez les pixels morts, la poussière, les traces, les taches et les écarts de luminosité."},{title:"Créer un fond propre",text:"Utilisez-le pour les présentations, photos, vidéos ou comme second écran sans distraction."}],whiteCard:{title:"Éclairer votre espace",text:"Utilisez la luminosité comme lumière douce pour les appels vidéo, la photo, la lecture ou le dessin."},colorCard:{title:"Évaluer la couleur",text:"Contrôlez le contraste, la saturation et le rendu sur différents appareils."},
    howLabel:"Mode d’emploi",howTitle:"Trois étapes simples",steps:[{title:"Choisissez la couleur",text:"Sélectionnez une couleur ou saisissez une valeur hexadécimale."},{title:"Réglez l’appareil",text:"Ajustez la luminosité physique selon votre utilisation."},{title:"Passez en plein écran",text:"Cliquez sur la zone ou appuyez sur F pour ne montrer que la couleur."}],
    faqLabel:"Questions fréquentes",faqTitle:c=>`Tout sur l’écran ${c}`,faq:[{q:"Quand utiliser cet écran ?",a:"Pour vérifier l’uniformité, trouver des pixels défectueux, nettoyer la dalle ou créer un fond sans distraction."},{q:"Cet outil est-il gratuit ?",a:"Oui. Il fonctionne dans le navigateur sans compte, installation ni paiement."},{q:"Détecte-t-il les pixels morts ?",a:"Oui. Alternez blanc, noir, rouge, vert et bleu puis cherchez les points qui ne changent pas."},{q:"Fonctionne-t-il sur mobile et tablette ?",a:"Oui. L’interface est adaptative et propose le plein écran lorsque disponible."},{q:"Puis-je choisir une autre couleur ?",a:"Oui. Utilisez une couleur proposée ou une valeur hexadécimale."}],
    more:"Plus d’outils",other:"Tester d’autres couleurs",footer:"Conçu pour tous les écrans.",language:"Langue",light:"Thème clair",dark:"Thème sombre",system:"Thème système",download:"Télécharger le PNG",
  },
  it: {
    colors:{white:"bianco",black:"nero",red:"rosso",green:"verde",blue:"blu",yellow:"giallo",orange:"arancione",pink:"rosa",purple:"viola",cyan:"ciano",gray:"grigio"},
    free:"Strumento gratuito · Senza registrazione",tool:"Schermo colorato online",hero:"Una superficie pulita per illuminare, controllare lo schermo o lavorare senza distrazioni.",click:"Fai clic o premi F",fullscreen:"Schermo intero",resolution:"Risoluzione",width:"Larghezza",height:"Altezza",colorsLabel:"Colori",options:"opzioni",custom:"Colore personalizzato",simple:"Semplice e utile",purpose:c=>`A cosa serve uno schermo ${c}?`,lead:"Uno schermo a tinta unita aiuta a controllare il pannello e offre una superficie visiva pulita. Funziona senza download su computer, telefoni, tablet e TV.",
    cards:[{title:"Controllare e pulire lo schermo",text:"Trova pixel morti, polvere, impronte, macchie e differenze di luminosità."},{title:"Creare uno sfondo pulito",text:"Usalo per presentazioni, foto, registrazioni o come secondo schermo senza distrazioni."}],whiteCard:{title:"Illuminare lo spazio",text:"Usa la luminosità come luce morbida per videochiamate, fotografia, lettura o disegno."},colorCard:{title:"Valutare il colore",text:"Controlla contrasto, saturazione e resa cromatica su dispositivi diversi."},
    howLabel:"Come usarlo",howTitle:"Tre semplici passaggi",steps:[{title:"Scegli il colore",text:"Seleziona un colore pronto o inserisci un valore esadecimale."},{title:"Regola il dispositivo",text:"Aumenta o riduci la luminosità fisica in base alle esigenze."},{title:"Apri a schermo intero",text:"Fai clic sull’area o premi F per mostrare solo il colore."}],
    faqLabel:"Domande frequenti",faqTitle:c=>`Tutto sullo schermo ${c}`,faq:[{q:"Quando usare questo schermo?",a:"Per controllare l’uniformità, trovare pixel difettosi, pulire il pannello o creare uno sfondo pulito."},{q:"Lo strumento è gratuito?",a:"Sì. Funziona nel browser senza account, installazioni o pagamenti."},{q:"Rileva i pixel morti?",a:"Sì. Alterna bianco, nero, rosso, verde e blu e cerca punti che non cambiano."},{q:"Funziona su telefoni e tablet?",a:"Sì. L’interfaccia è adattiva e supporta lo schermo intero quando disponibile."},{q:"Posso scegliere un altro colore?",a:"Sì. Usa un colore disponibile o inserisci un valore esadecimale."}],
    more:"Altri strumenti",other:"Prova altri colori",footer:"Progettato per ogni schermo.",language:"Lingua",light:"Tema chiaro",dark:"Tema scuro",system:"Tema di sistema",download:"Scarica PNG",
  },
  nl: {
    colors:{white:"wit",black:"zwart",red:"rood",green:"groen",blue:"blauw",yellow:"geel",orange:"oranje",pink:"roze",purple:"paars",cyan:"cyaan",gray:"grijs"},
    free:"Gratis hulpmiddel · Geen account",tool:"Online kleurenscherm",hero:"Een schoon oppervlak voor verlichting, schermcontrole of werken zonder afleiding.",click:"Klik of druk op F",fullscreen:"Volledig scherm",resolution:"Resolutie",width:"Breedte",height:"Hoogte",colorsLabel:"Kleuren",options:"opties",custom:"Aangepaste kleur",simple:"Eenvoudig en nuttig",purpose:c=>`Waarvoor dient een ${c} scherm?`,lead:"Een effen kleur helpt bij schermcontrole en biedt een schoon visueel oppervlak. Het werkt zonder download op computers, telefoons, tablets en tv’s.",
    cards:[{title:"Scherm controleren en reinigen",text:"Vind dode pixels, stof, vingerafdrukken, vlekken en helderheidsverschillen."},{title:"Een schone achtergrond maken",text:"Gebruik het voor presentaties, foto’s, opnamen of een rustig tweede scherm."}],whiteCard:{title:"Je ruimte verlichten",text:"Gebruik de helderheid als zacht licht voor videogesprekken, fotografie, lezen of tekenen."},colorCard:{title:"Kleur beoordelen",text:"Controleer contrast, verzadiging en kleurweergave op verschillende apparaten."},
    howLabel:"Zo werkt het",howTitle:"Drie eenvoudige stappen",steps:[{title:"Kies de kleur",text:"Selecteer een kleur of voer een hexadecimale waarde in."},{title:"Pas het apparaat aan",text:"Verhoog of verlaag de fysieke helderheid naar wens."},{title:"Open volledig scherm",text:"Klik op het vlak of druk op F om alleen de kleur te tonen."}],
    faqLabel:"Veelgestelde vragen",faqTitle:c=>`Alles over het ${c} scherm`,faq:[{q:"Wanneer gebruik ik dit scherm?",a:"Voor uniformiteitscontrole, defecte pixels, schermreiniging of een rustige achtergrond."},{q:"Is dit hulpmiddel gratis?",a:"Ja. Het werkt in de browser zonder account, installatie of betaling."},{q:"Kan ik dode pixels vinden?",a:"Ja. Wissel tussen wit, zwart, rood, groen en blauw en zoek punten die niet veranderen."},{q:"Werkt het op telefoons en tablets?",a:"Ja. De interface past zich aan en ondersteunt volledig scherm waar mogelijk."},{q:"Kan ik een andere kleur kiezen?",a:"Ja. Gebruik een beschikbare kleur of voer een hexadecimale waarde in."}],
    more:"Meer hulpmiddelen",other:"Probeer andere kleuren",footer:"Gemaakt voor elk scherm.",language:"Taal",light:"Licht thema",dark:"Donker thema",system:"Systeemthema",download:"PNG downloaden",
  },
};

export function localizedPath(locale: Locale, color?: ScreenColor) {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return color?.slug ? `${prefix}/${color.slug}/` : `${prefix || ""}/`;
}

export function colorName(locale: Locale, color: ScreenColor) {
  return copy[locale].colors[color.name.toLowerCase()];
}

export function screenHeading(locale: Locale, color: ScreenColor) {
  const name = colorName(locale, color);
  const headings: Record<Locale, string> = {
    en: `${color.name} Screen`, de: `${name.charAt(0).toUpperCase() + name.slice(1)}r Bildschirm`, es: `Pantalla ${name}`, pt: `Tela ${name}`, fr: `Écran ${name}`, it: `Schermo ${name}`, nl: `${name.charAt(0).toUpperCase() + name.slice(1)} scherm`,
  };
  return headings[locale];
}

export function pageMeta(locale: Locale, color: ScreenColor) {
  const name = colorName(locale, color);
  const detail = colorDetail(locale, color);
  const titles: Record<Locale, string> = {
    en: `${color.name} Screen Online — Free Fullscreen Color`, de: `${color.name} Screen Online — ${name}r Vollbildschirm`, es: `Pantalla ${name} online — Color a pantalla completa`, pt: `Tela ${name} online — Cor em tela cheia`, fr: `Écran ${name} en ligne — Couleur en plein écran`, it: `Schermo ${name} online — Colore a schermo intero`, nl: `${color.name} scherm online — Kleur op volledig scherm`,
  };
  const descriptions: Record<Locale, string> = {
    en:`${detail.title}. Free ${name} screen for display testing, cleaning, and fullscreen backgrounds. No download.`,de:`${detail.title}. Kostenloser ${name}r Bildschirm zum Testen, Reinigen und als Vollbild-Hintergrund.`,es:`${detail.title}. Pantalla ${name} gratis para probar y limpiar el monitor o usar como fondo completo.`,pt:`${detail.title}. Tela ${name} grátis para testar e limpar o monitor ou usar como fundo em tela cheia.`,fr:`${detail.title}. Écran ${name} gratuit pour tester et nettoyer le moniteur ou créer un fond plein écran.`,it:`${detail.title}. Schermo ${name} gratuito per testare e pulire il monitor o creare uno sfondo intero.`,nl:`${detail.title}. Gratis ${name} scherm voor schermtests, reiniging en achtergronden op volledig scherm.`,
  };
  return { title: titles[locale], description: descriptions[locale] };
}
