const radioProfiles = {
  src: {
    id: 'src',
    label: 'SRC – DSC Funkgerät',
    description:
      'Standardisierte Menüführung für das Seefunk-Seenot- und Sicherheitsfunksystem.',
    home: 'src-home',
    shortcutNode: 'src-shortcuts',
    nodes: {
      'src-home': {
        id: 'src-home',
        title: 'Hauptmenü',
        description: 'Wähle eine Funktion für das DSC-Seefunkgerät.',
        options: [
          { label: 'Kanalwahl', target: 'src-channel' },
          { label: 'DSC Anrufe', target: 'src-dsc-menu' },
          { label: 'Telefonbuch', target: 'src-contacts' },
          { label: 'Favoriten', target: 'src-favorites' },
          { label: 'Einstellungen', target: 'src-settings' }
        ]
      },
      'src-channel': {
        id: 'src-channel',
        title: 'Kanalwahl',
        description: 'Drehknopf simuliert durch Pfeiltasten – Enter bestätigt.',
        options: [
          {
            label: 'Kanal 16 (Notruf)',
            target: 'src-channel-16',
            action: 'setChannel',
            meta: { channel: '16', label: 'Notrufkanal aktiv.' }
          },
          {
            label: 'Kanal 72 (Arbeitskanal)',
            target: 'src-channel-72',
            action: 'setChannel',
            meta: { channel: '72', label: 'Arbeitskanal 72 gewählt.' }
          },
          {
            label: 'Kanal 6 (Schiff-zu-Schiff)',
            target: 'src-channel-6',
            action: 'setChannel',
            meta: { channel: '6', label: 'Direktverkehr auf Kanal 6.' }
          },
          {
            label: 'Dual Watch',
            target: 'src-dual-watch'
          },
          {
            label: 'Scanliste',
            target: 'src-scanlist'
          }
        ]
      },
      'src-channel-16': {
        id: 'src-channel-16',
        title: 'Kanal 16 aktiv',
        description: 'Abhörbereitschaft für Not-, Dringlichkeits- und Sicherheitsverkehr.',
        terminal: true
      },
      'src-channel-72': {
        id: 'src-channel-72',
        title: 'Kanal 72 aktiv',
        description: 'Arbeitskanal für Routineverkehr ist eingestellt.',
        terminal: true
      },
      'src-channel-6': {
        id: 'src-channel-6',
        title: 'Kanal 6 aktiv',
        description: 'Schiff-zu-Schiff-Verkehr auf Kanal 6 möglich.',
        terminal: true
      },
      'src-dual-watch': {
        id: 'src-dual-watch',
        title: 'Dual Watch',
        description: 'Überwache Kanal 16 parallel zu einem Arbeitskanal.',
        options: [
          { label: 'Zweitkanal wählen', target: 'src-dual-select' },
          { label: 'Dual Watch starten', target: 'src-dual-active' }
        ]
      },
      'src-dual-select': {
        id: 'src-dual-select',
        title: 'Zweitkanal',
        description: 'Wähle den zweiten zu überwachenden Kanal.',
        options: [
          {
            label: 'Kanal 72',
            target: 'src-dual-active',
            action: 'setDualWatch',
            meta: { secondary: '72' }
          },
          {
            label: 'Kanal 6',
            target: 'src-dual-active',
            action: 'setDualWatch',
            meta: { secondary: '6' }
          }
        ]
      },
      'src-dual-active': {
        id: 'src-dual-active',
        title: 'Dual Watch aktiv',
        description:
          'Kanal 16 und gewählter Arbeitskanal werden gleichzeitig überwacht.',
        terminal: true
      },
      'src-scanlist': {
        id: 'src-scanlist',
        title: 'Scanliste',
        description: 'Kanäle hinzufügen oder entfernen, um automatisch zu scannen.',
        options: [
          { label: 'Kanäle bearbeiten', target: 'src-scan-edit' },
          { label: 'Scan starten', target: 'src-scan-active' }
        ]
      },
      'src-scan-edit': {
        id: 'src-scan-edit',
        title: 'Scanliste bearbeiten',
        description: 'Füge Arbeitskanäle hinzu oder entferne sie.',
        terminal: true
      },
      'src-scan-active': {
        id: 'src-scan-active',
        title: 'Scan aktiv',
        description: 'Automatischer Scan läuft. Enter beendet.',
        terminal: true
      },
      'src-dsc-menu': {
        id: 'src-dsc-menu',
        title: 'DSC Anrufe',
        description: 'Digital Selective Calling – Wähle den Anruftyp.',
        options: [
          { label: 'Notruf (Distress)', target: 'src-dsc-distress' },
          { label: 'Routine Individuell', target: 'src-dsc-routine' },
          { label: 'Dringlichkeit (Pan Pan)', target: 'src-dsc-urgency' },
          { label: 'Sicherheitsmeldung (Sécurité)', target: 'src-dsc-safety' }
        ]
      },
      'src-dsc-distress': {
        id: 'src-dsc-distress',
        title: 'DSC Distress',
        description: 'Bereite einen digitalen Notruf vor.',
        options: [
          { label: 'Art des Notfalls', target: 'src-dsc-distress-nature' },
          { label: 'Bestätigen & Senden', target: 'src-dsc-distress-send' }
        ]
      },
      'src-dsc-distress-nature': {
        id: 'src-dsc-distress-nature',
        title: 'Notfall auswählen',
        description: 'Wähle eine passende Kategorie.',
        options: [
          {
            label: 'Feuer an Bord',
            target: 'src-dsc-distress',
            action: 'setDistressNature',
            meta: { nature: 'Feuer an Bord' }
          },
          {
            label: 'Leck im Schiff',
            target: 'src-dsc-distress',
            action: 'setDistressNature',
            meta: { nature: 'Wassereinbruch' }
          },
          {
            label: 'Mensch über Bord',
            target: 'src-dsc-distress',
            action: 'setDistressNature',
            meta: { nature: 'MOB' }
          }
        ]
      },
      'src-dsc-distress-send': {
        id: 'src-dsc-distress-send',
        title: 'Notruf bereit',
        description: 'Senden mit Enter. Prüfe GPS und Ursache.',
        terminal: true
      },
      'src-dsc-routine': {
        id: 'src-dsc-routine',
        title: 'Routineanruf',
        description: 'Erstelle einen individuellen DSC Routineanruf.',
        options: [
          { label: 'MMSI auswählen', target: 'src-dsc-routine-mmsi' },
          { label: 'Arbeitskanal wählen', target: 'src-dsc-routine-channel' },
          { label: 'Anruf senden', target: 'src-dsc-routine-send' }
        ]
      },
      'src-dsc-routine-mmsi': {
        id: 'src-dsc-routine-mmsi',
        title: 'MMSI Auswahl',
        description: 'Wähle die Gegenstelle.',
        options: [
          {
            label: 'Küstenfunkstelle MMSI 002111000',
            target: 'src-dsc-routine',
            action: 'setMmsi',
            meta: { mmsi: '002111000', label: 'Küstenfunkstelle' }
          },
          {
            label: 'Yacht „Seeadler“ MMSI 211456789',
            target: 'src-dsc-routine',
            action: 'setMmsi',
            meta: { mmsi: '211456789', label: 'Yacht "Seeadler"' }
          }
        ]
      },
      'src-dsc-routine-channel': {
        id: 'src-dsc-routine-channel',
        title: 'Arbeitskanal',
        description: 'Welcher Kanal soll vorgeschlagen werden?',
        options: [
          {
            label: 'Kanal 72',
            target: 'src-dsc-routine',
            action: 'setRoutineChannel',
            meta: { channel: '72' }
          },
          {
            label: 'Kanal 6',
            target: 'src-dsc-routine',
            action: 'setRoutineChannel',
            meta: { channel: '6' }
          }
        ]
      },
      'src-dsc-routine-send': {
        id: 'src-dsc-routine-send',
        title: 'Routineanruf fertig',
        description: 'DSC Signal wird gesendet.',
        terminal: true
      },
      'src-dsc-urgency': {
        id: 'src-dsc-urgency',
        title: 'Dringlichkeitsmeldung',
        description: 'Wähle Empfänger und Kanal für Pan-Pan.',
        options: [
          { label: 'An alle Schiffe', target: 'src-dsc-urgency-broadcast' },
          { label: 'Küstenfunkstelle', target: 'src-dsc-urgency-coast' }
        ]
      },
      'src-dsc-urgency-broadcast': {
        id: 'src-dsc-urgency-broadcast',
        title: 'Pan Pan an alle',
        description: 'Sendebereit.',
        terminal: true
      },
      'src-dsc-urgency-coast': {
        id: 'src-dsc-urgency-coast',
        title: 'Pan Pan Küstenfunkstelle',
        description: 'Kanal 16 vorgeschlagen.',
        terminal: true
      },
      'src-dsc-safety': {
        id: 'src-dsc-safety',
        title: 'Sicherheitsmeldung',
        description: 'Sécurité Auswahl.',
        options: [
          { label: 'An alle Schiffe', target: 'src-dsc-safety-broadcast' },
          { label: 'Küstenfunkstelle', target: 'src-dsc-safety-coast' }
        ]
      },
      'src-dsc-safety-broadcast': {
        id: 'src-dsc-safety-broadcast',
        title: 'Sécurité an alle',
        description: 'Vorbereiteter Sicherheitsruf.',
        terminal: true
      },
      'src-dsc-safety-coast': {
        id: 'src-dsc-safety-coast',
        title: 'Sécurité Küstenfunkstelle',
        description: 'Arbeitskanal auswählen.',
        terminal: true
      },
      'src-contacts': {
        id: 'src-contacts',
        title: 'Telefonbuch',
        description: 'Gespeicherte MMSI-Ziele einsehen.',
        terminal: true
      },
      'src-favorites': {
        id: 'src-favorites',
        title: 'Favoriten',
        description: 'Schnellzugriff auf häufige Funktionen.',
        terminal: true
      },
      'src-settings': {
        id: 'src-settings',
        title: 'Einstellungen',
        description: 'System, Alarmtöne, GPS-Quelle.',
        terminal: true
      },
      'src-shortcuts': {
        id: 'src-shortcuts',
        title: 'Direktwahl',
        description: 'Schnellzugriff auf kritische Funktionen.',
        options: [
          { label: 'Kanal 16 überwachen', target: 'src-channel-16', action: 'setChannel', meta: { channel: '16' } },
          { label: 'DSC Notruf', target: 'src-dsc-distress' },
          { label: 'Dual Watch starten', target: 'src-dual-watch' }
        ]
      }
    },
    referenceFlows: [
      {
        title: 'DSC Notruf',
        steps: [
          'Home → DSC Anrufe → Notruf (Distress)',
          'Art des Notfalls auswählen',
          'Bestätigen & Senden'
        ]
      },
      {
        title: 'Routine DSC an Yacht',
        steps: [
          'Home → DSC Anrufe → Routine Individuell',
          'MMSI auswählen',
          'Arbeitskanal setzen',
          'Anruf senden'
        ]
      },
      {
        title: 'Dual Watch einrichten',
        steps: [
          'Home → Kanalwahl → Dual Watch',
          'Zweitkanal auswählen',
          'Dual Watch starten'
        ]
      }
    ],
    tasks: [
      {
        id: 'src-guided-distress',
        mode: 'guided',
        title: 'DSC-Notruf vorbereiten',
        description:
          'Übe das Starten eines digitalen Notrufs inkl. Auswahl der Notfallart.',
        instructions: [
          'Wechsle in das DSC-Menü.',
          'Starte den Distress-Dialog.',
          'Lege eine Notfallart fest und bestätige das Senden.'
        ],
        target: 'src-dsc-distress-send',
        success: 'Notruf ist abgesetzt und bereit zur Aussendung.',
        validate: ({ distressNature }) => Boolean(distressNature)
      },
      {
        id: 'src-guided-routine',
        mode: 'guided',
        title: 'Routineanruf an Küstenfunkstelle',
        description:
          'Bereite einen Routineanruf vor und stelle einen passenden Arbeitskanal ein.',
        instructions: [
          'Wähle im DSC-Menü die Routineverbindung.',
          'Entscheide dich für die Küstenfunkstelle.',
          'Schlage Kanal 72 als Arbeitskanal vor.',
          'Sende den Anruf.'
        ],
        target: 'src-dsc-routine-send',
        success: 'Routineanruf ist bereit und wurde digital ausgelöst.',
        validate: ({ mmsi, routineChannel }) =>
          mmsi === '002111000' && routineChannel === '72'
      },
      {
        id: 'src-quiz-working-channel',
        mode: 'quiz',
        title: 'Arbeitskanal für Routineverkehr einstellen',
        description: 'Stelle den UKW-Kanal 72 ein, ohne Hinweise im Menü.',
        instructions: [
          'Benutze die Kanalwahltasten.',
          'Bestätige den Kanal 72.'
        ],
        success: 'Kanal 72 ist aktiv. Bereit für Routineverkehr.',
        validate: ({ activeChannel }) => activeChannel === '72'
      },
      {
        id: 'src-quiz-dual-watch',
        mode: 'quiz',
        title: 'Dual Watch aktivieren',
        description: 'Aktiviere die duale Kanalüberwachung auf Kanal 16 und 6.',
        instructions: [
          'Wechsle in das Dual-Watch-Menü.',
          'Wähle Kanal 6 als Zweitkanal.',
          'Starte Dual Watch.'
        ],
        target: 'src-dual-active',
        success: 'Dual Watch überwacht Kanal 16 und 6.',
        validate: ({ dualWatch }) => dualWatch?.secondary === '6'
      }
    ]
  },
  ubi: {
    id: 'ubi',
    label: 'UBI – Binnenfunkgerät',
    description:
      'Menüstruktur eines typischen UKW-Sprechfunkgeräts für den Binnenbereich.',
    home: 'ubi-home',
    shortcutNode: 'ubi-shortcuts',
    nodes: {
      'ubi-home': {
        id: 'ubi-home',
        title: 'Hauptmenü',
        description: 'UBI Binnenfunk – wähle Betriebsart.',
        options: [
          { label: 'Kanalwahl', target: 'ubi-channel' },
          { label: 'ATIS Funktionen', target: 'ubi-atis' },
          { label: 'Verkehrsarten', target: 'ubi-traffic' },
          { label: 'Sprechgruppen', target: 'ubi-groups' },
          { label: 'Einstellungen', target: 'ubi-settings' }
        ]
      },
      'ubi-channel': {
        id: 'ubi-channel',
        title: 'Kanalwahl Binnen',
        description: 'Wähle regionale Arbeitskanäle oder Verkehrskreise.',
        options: [
          {
            label: 'Kanal 10 (Schiff-zu-Schiff)',
            target: 'ubi-channel-10',
            action: 'setChannel',
            meta: { channel: '10' }
          },
          {
            label: 'Kanal 13 (Brückenfunk)',
            target: 'ubi-channel-13',
            action: 'setChannel',
            meta: { channel: '13' }
          },
          {
            label: 'Kanal 17 (Hafenbetriebsfunk)',
            target: 'ubi-channel-17',
            action: 'setChannel',
            meta: { channel: '17' }
          },
          { label: 'Sperrkanäle', target: 'ubi-locked' }
        ]
      },
      'ubi-channel-10': {
        id: 'ubi-channel-10',
        title: 'Kanal 10 aktiv',
        description: 'Schiff-zu-Schiff-Verkehr möglich.',
        terminal: true
      },
      'ubi-channel-13': {
        id: 'ubi-channel-13',
        title: 'Kanal 13 aktiv',
        description: 'Brücken- und Schleusenfunk bereit.',
        terminal: true
      },
      'ubi-channel-17': {
        id: 'ubi-channel-17',
        title: 'Kanal 17 aktiv',
        description: 'Hafenbetriebsfunk ist aktiv.',
        terminal: true
      },
      'ubi-locked': {
        id: 'ubi-locked',
        title: 'Sperrkanäle',
        description: 'Aktiviere/Deaktiviere z. B. Kanäle 15/17 gemäß Binnenschifffahrtsfunk.',
        options: [
          { label: 'Kanal 15 freigeben', target: 'ubi-locked-release', action: 'toggleLock', meta: { channel: '15' } },
          { label: 'Kanal 17 sperren', target: 'ubi-locked-active', action: 'toggleLock', meta: { channel: '17' } }
        ]
      },
      'ubi-locked-release': {
        id: 'ubi-locked-release',
        title: 'Sperre aufgehoben',
        description: 'Kanal 15 steht wieder zur Verfügung.',
        terminal: true
      },
      'ubi-locked-active': {
        id: 'ubi-locked-active',
        title: 'Kanal gesperrt',
        description: 'Kanal 17 wurde für den Verkehr gesperrt.',
        terminal: true
      },
      'ubi-atis': {
        id: 'ubi-atis',
        title: 'ATIS Funktionen',
        description: 'Automatisches Identifikationssystem für Binnenfunk.',
        options: [
          { label: 'ATIS-Code anzeigen', target: 'ubi-atis-display' },
          { label: 'ATIS senden', target: 'ubi-atis-send' }
        ]
      },
      'ubi-atis-display': {
        id: 'ubi-atis-display',
        title: 'ATIS-Code',
        description: 'ATIS: 996611223 – automatisch mitgesendet.',
        terminal: true
      },
      'ubi-atis-send': {
        id: 'ubi-atis-send',
        title: 'ATIS Aussendung',
        description: 'ATIS-Signal wird beim Aussenden mit übertragen.',
        terminal: true
      },
      'ubi-traffic': {
        id: 'ubi-traffic',
        title: 'Verkehrsarten',
        description: 'Wähle Simplex/Duplex oder ATIS-Betrieb.',
        options: [
          { label: 'Simplex', target: 'ubi-traffic-simplex', action: 'setMode', meta: { mode: 'Simplex' } },
          { label: 'Duplex', target: 'ubi-traffic-duplex', action: 'setMode', meta: { mode: 'Duplex' } },
          { label: 'ATIS Pflicht', target: 'ubi-traffic-atis', action: 'setMode', meta: { mode: 'ATIS' } }
        ]
      },
      'ubi-traffic-simplex': {
        id: 'ubi-traffic-simplex',
        title: 'Simplex aktiv',
        description: 'Senden und Empfangen auf demselben Kanal.',
        terminal: true
      },
      'ubi-traffic-duplex': {
        id: 'ubi-traffic-duplex',
        title: 'Duplex aktiv',
        description: 'Wechselbetrieb mit getrennten Frequenzen.',
        terminal: true
      },
      'ubi-traffic-atis': {
        id: 'ubi-traffic-atis',
        title: 'ATIS Pflicht',
        description: 'ATIS-Signal wird erzwungen.',
        terminal: true
      },
      'ubi-groups': {
        id: 'ubi-groups',
        title: 'Sprechgruppen',
        description: 'Verkehrskreise für Revierverkehr.',
        options: [
          { label: 'Revier Nord', target: 'ubi-groups-north' },
          { label: 'Revier Süd', target: 'ubi-groups-south' },
          { label: 'Verkehrskreis Hafen', target: 'ubi-groups-harbor' }
        ]
      },
      'ubi-groups-north': {
        id: 'ubi-groups-north',
        title: 'Revier Nord',
        description: 'Automatische Kanalvorgabe: 10/13.',
        terminal: true
      },
      'ubi-groups-south': {
        id: 'ubi-groups-south',
        title: 'Revier Süd',
        description: 'Kanalvorgabe 20/21.',
        terminal: true
      },
      'ubi-groups-harbor': {
        id: 'ubi-groups-harbor',
        title: 'Hafenverkehr',
        description: 'ATIS + Hafenkanal.',
        terminal: true
      },
      'ubi-settings': {
        id: 'ubi-settings',
        title: 'Einstellungen',
        description: 'Systemoptionen, Sprache, Lautstärke.',
        terminal: true
      },
      'ubi-shortcuts': {
        id: 'ubi-shortcuts',
        title: 'Direktwahl',
        description: 'Schnellzugriff für Binnenfunk.',
        options: [
          { label: 'Kanal 10 aktivieren', target: 'ubi-channel-10', action: 'setChannel', meta: { channel: '10' } },
          { label: 'ATIS anzeigen', target: 'ubi-atis-display' },
          { label: 'Sperrkanäle öffnen', target: 'ubi-locked' }
        ]
      }
    },
    referenceFlows: [
      {
        title: 'ATIS Code prüfen',
        steps: ['Home → ATIS Funktionen → ATIS-Code anzeigen']
      },
      {
        title: 'Brückenfunk auf Kanal 13',
        steps: ['Home → Kanalwahl → Kanal 13 wählen']
      },
      {
        title: 'Sperrkanal freigeben',
        steps: ['Home → Kanalwahl → Sperrkanäle → Kanal 15 freigeben']
      }
    ],
    tasks: [
      {
        id: 'ubi-guided-atis',
        mode: 'guided',
        title: 'ATIS-Code abrufen',
        description: 'Finde den gespeicherten ATIS-Code des Schiffes.',
        instructions: [
          'Navigiere zu den ATIS-Funktionen.',
          'Wähle die Option zum Anzeigen des Codes.'
        ],
        target: 'ubi-atis-display',
        success: 'ATIS-Code wird angezeigt. Aufgabe erfüllt.'
      },
      {
        id: 'ubi-guided-lock',
        mode: 'guided',
        title: 'Kanal 15 freigeben',
        description: 'Entsperre den Kanal 15 für Betriebsfunk.',
        instructions: [
          'Öffne die Kanalwahl.',
          'Rufe die Sperrkanäle auf.',
          'Setze Kanal 15 wieder frei.'
        ],
        target: 'ubi-locked-release',
        success: 'Kanal 15 steht wieder zur Verfügung.',
        validate: ({ lockStates }) => lockStates?.['15'] === 'free'
      },
      {
        id: 'ubi-quiz-channel-13',
        mode: 'quiz',
        title: 'Brückenfunk vorbereiten',
        description: 'Stelle Kanal 13 ein, um mit einer Schleuse zu sprechen.',
        instructions: ['Wähle den passenden Betriebsfunkkanal.'],
        success: 'Kanal 13 ist aktiv. Bereit für den Schleusenfunk.',
        validate: ({ activeChannel }) => activeChannel === '13'
      },
      {
        id: 'ubi-quiz-mode',
        mode: 'quiz',
        title: 'Verkehrsart Simplex einstellen',
        description: 'Passe die Verkehrsart für Binnenfunkverkehr an.',
        instructions: [
          'Öffne die Verkehrsarten.',
          'Wähle Simplex.'
        ],
        target: 'ubi-traffic-simplex',
        success: 'Simplex-Verkehrsart ist aktiv.',
        validate: ({ trafficMode }) => trafficMode === 'Simplex'
      }
    ]
  }
};

const state = {
  profileId: 'src',
  mode: 'free',
  currentNode: null,
  selectedIndex: 0,
  history: [],
  trace: [],
  activeTaskIndex: null,
  taskProgress: {},
  lastAction: null,
  lastOption: null,
  activeChannel: null,
  dualWatch: null,
  distressNature: null,
  mmsi: null,
  routineChannel: null,
  lockStates: {},
  trafficMode: null
};

const displayPrimary = document.getElementById('displayPrimary');
const displaySecondary = document.getElementById('displaySecondary');
const radioTitle = document.getElementById('radioTitle');
const modeChip = document.getElementById('modeChip');
const taskBody = document.getElementById('taskBody');
const taskMeta = document.getElementById('taskMeta');
const taskListEl = document.getElementById('taskList');
const newTaskBtn = document.getElementById('newTaskBtn');
const progressInfo = document.getElementById('progressInfo');

const profileButtons = document.querySelectorAll('.profile-btn');
const modeButtons = document.querySelectorAll('.nav-btn');
const controlButtons = document.querySelectorAll('.control-btn');

profileButtons.forEach((btn) =>
  btn.addEventListener('click', () => switchProfile(btn.dataset.profile))
);
modeButtons.forEach((btn) => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
controlButtons.forEach((btn) =>
  btn.addEventListener('click', () => handleControl(btn.dataset.action))
);
newTaskBtn.addEventListener('click', () => startNextTask(true));
taskListEl.addEventListener('click', (event) => {
  if (state.mode === 'free') return;
  const listItem = event.target.closest('li[data-index]');
  if (!listItem) return;
  const index = Number(listItem.dataset.index);
  if (Number.isNaN(index)) return;
  state.activeTaskIndex = index;
  const tasks = state.taskList || [];
  const task = tasks[index];
  if (!task) return;
  state.currentTask = task;
  setNode(getProfile().home, { resetHistory: true });
  renderActiveTask(task, index, tasks.length);
});

function getProfile() {
  return radioProfiles[state.profileId];
}

function switchProfile(profileId) {
  if (!radioProfiles[profileId]) return;
  state.profileId = profileId;
  state.history = [];
  state.trace = [];
  state.activeChannel = null;
  state.dualWatch = null;
  state.distressNature = null;
  state.mmsi = null;
  state.routineChannel = null;
  state.lockStates = {};
  state.trafficMode = null;
  state.selectedIndex = 0;
  state.activeTaskIndex = null;
  highlightProfile();
  const profile = getProfile();
  radioTitle.textContent = profile.label;
  taskMeta.textContent = profile.description;
  setNode(profile.home, { resetHistory: true });
  setMode(state.mode); // refresh tasks for new profile
}

function setMode(mode) {
  state.mode = mode;
  highlightMode();
  const profile = getProfile();
  const labelMap = {
    free: 'Freies Üben',
    guided: 'Geführte Szenarien',
    quiz: 'Prüfungsmodus'
  };
  modeChip.textContent = labelMap[mode] || 'Training';

  if (mode === 'free') {
    state.currentTask = null;
    state.taskList = [];
    newTaskBtn.disabled = true;
    progressInfo.textContent = '';
    renderReferenceFlows(profile);
    taskMeta.textContent = profile.description;
    return;
  }

  const tasks = profile.tasks.filter((task) => task.mode === mode);
  state.activeTaskIndex = null;
  state.taskList = tasks;
  state.currentTask = null;
  if (!tasks.length) {
    taskBody.innerHTML = '<p>Für diesen Modus sind noch keine Aufgaben hinterlegt.</p>';
    taskListEl.innerHTML = '';
    newTaskBtn.disabled = true;
    progressInfo.textContent = '';
    return;
  }

  newTaskBtn.disabled = false;
  newTaskBtn.textContent = 'Nächste Aufgabe';
  state.activeTaskIndex = 0;
  state.taskList = tasks;
  renderTaskList();
  startNextTask();
}

function renderReferenceFlows(profile) {
  const listItems = profile.referenceFlows
    .map((flow) => {
      const steps = flow.steps.map((step) => `<li>${step}</li>`).join('');
      return `
        <li>
          <div class="task-list-row"><span>${flow.title}</span></div>
          <ol class="task-list-steps">${steps}</ol>
        </li>
      `;
    })
    .join('');
  taskListEl.innerHTML = listItems;
  taskBody.innerHTML = `
    <p><strong>Freies Üben:</strong> Navigiere durch das Funkgerät und erkunde alle Funktionen.</p>
    <p>Nutze die große Anzeige, um dich an die Menüführung zu gewöhnen. Die Referenzabläufe geben dir Vorschläge, was du ausprobieren kannst.</p>
  `;
  progressInfo.textContent = '';
}

function renderTaskList() {
  const tasks = state.taskList || [];
  const progress = state.taskProgress[progressKey()] || {};
  taskListEl.innerHTML = tasks
    .map((task, index) => {
      const status = progress[task.id]?.status;
      const emoji = status === 'done' ? '✅' : status === 'failed' ? '⚠️' : '⏳';
      const activeClass = index === state.activeTaskIndex ? 'active' : '';
      return `
        <li data-index="${index}" class="${activeClass}">
          <div class="task-list-row"><span>${task.title}</span><span>${emoji}</span></div>
        </li>
      `;
    })
    .join('');
}

function progressKey() {
  return `${state.profileId}-${state.mode}`;
}

function setNode(nodeId, { resetHistory = false } = {}) {
  const profile = getProfile();
  const node = profile.nodes[nodeId];
  if (!node) return;

  if (resetHistory) {
    state.history = [];
    state.trace = [nodeId];
  } else {
    if (state.currentNode) {
      state.history.push(state.currentNode.id);
    }
    state.trace.push(nodeId);
  }

  state.currentNode = node;
  state.selectedIndex = 0;
  state.lastOption = null;
  renderNode();
  checkTaskCompletion();
}

function renderNode() {
  const node = state.currentNode;
  if (!node) return;
  displayPrimary.textContent = node.title;

  if (node.options && node.options.length) {
    const optionsHtml = node.options
      .map((option, index) => {
        const activeClass = index === state.selectedIndex ? 'active' : '';
        return `<li class="${activeClass}">${option.label}</li>`;
      })
      .join('');
    displaySecondary.innerHTML = `
      <p class="display-hint">${node.description || ''}</p>
      <ul class="display-menu">${optionsHtml}</ul>
    `;
  } else {
    displaySecondary.innerHTML = `<p class="display-hint">${node.description || ''}</p>`;
  }
}

function handleControl(action) {
  state.lastAction = action;
  const node = state.currentNode;
  if (!node) return;

  switch (action) {
    case 'home':
      setNode(getProfile().home, { resetHistory: true });
      break;
    case 'back':
      if (state.history.length) {
        const previous = state.history.pop();
        state.trace.push(previous);
        state.currentNode = getProfile().nodes[previous];
        state.selectedIndex = 0;
        renderNode();
        checkTaskCompletion();
      }
      break;
    case 'up':
      if (node.options && node.options.length) {
        state.selectedIndex = (state.selectedIndex - 1 + node.options.length) % node.options.length;
        renderNode();
      }
      break;
    case 'down':
      if (node.options && node.options.length) {
        state.selectedIndex = (state.selectedIndex + 1) % node.options.length;
        renderNode();
      }
      break;
    case 'confirm':
      if (node.options && node.options[state.selectedIndex]) {
        const option = node.options[state.selectedIndex];
        executeOption(option);
      }
      break;
    case 'shortcut':
      const profile = getProfile();
      if (profile.shortcutNode) {
        setNode(profile.shortcutNode);
      }
      break;
    default:
      break;
  }
}

function executeOption(option) {
  state.lastOption = option;
  if (option.action) {
    handleAction(option.action, option.meta || {});
  }
  if (option.target) {
    setNode(option.target);
  }
}

function handleAction(action, meta) {
  switch (action) {
    case 'setChannel':
      state.activeChannel = meta.channel;
      break;
    case 'setDualWatch':
      state.dualWatch = { secondary: meta.secondary || null };
      state.activeChannel = '16';
      break;
    case 'setDistressNature':
      state.distressNature = meta.nature;
      break;
    case 'setMmsi':
      state.mmsi = meta.mmsi;
      break;
    case 'setRoutineChannel':
      state.routineChannel = meta.channel;
      break;
    case 'toggleLock':
      state.lockStates = { ...state.lockStates, [meta.channel]: meta.channel === '15' ? 'free' : 'locked' };
      break;
    case 'setMode':
      state.trafficMode = meta.mode;
      break;
    default:
      break;
  }
}

function startNextTask(forceAdvance = false) {
  const tasks = state.taskList || [];
  if (!tasks.length) return;
  const key = progressKey();
  const progress = state.taskProgress[key] || {};

  let nextIndex = state.activeTaskIndex ?? 0;
  if (forceAdvance) {
    nextIndex = (nextIndex + 1) % tasks.length;
  } else {
    const firstPending = tasks.findIndex((task) => progress[task.id]?.status !== 'done');
    nextIndex = firstPending >= 0 ? firstPending : nextIndex;
  }

  state.activeTaskIndex = nextIndex;
  const task = tasks[nextIndex];
  state.currentTask = task;
  resetTaskContext();
  setNode(getProfile().home, { resetHistory: true });
  renderActiveTask(task, nextIndex, tasks.length);
}

function renderActiveTask(task, index, total) {
  const steps = task.instructions
    .map((step) => `<li>${step}</li>`)
    .join('');
  taskBody.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <ol>${steps}</ol>
    <p class="task-hint">Tipp: Die blauen Direkttasten helfen beim schnellen Navigieren.</p>
  `;
  progressInfo.textContent = `Aufgabe ${index + 1} von ${total}`;
  renderTaskList();
}

function checkTaskCompletion() {
  const task = state.currentTask;
  if (!task || state.mode === 'free') return;

  const context = {
    node: state.currentNode,
    trace: [...state.trace],
    activeChannel: state.activeChannel,
    dualWatch: state.dualWatch,
    distressNature: state.distressNature,
    mmsi: state.mmsi,
    routineChannel: state.routineChannel,
    lockStates: state.lockStates,
    trafficMode: state.trafficMode,
    lastAction: state.lastAction,
    lastOption: state.lastOption
  };

  const reachedTarget = task.target ? state.currentNode?.id === task.target : true;
  const validation = task.validate ? task.validate(context) : true;

  if (reachedTarget && validation) {
    markTaskDone(task, context);
  }
}

function markTaskDone(task, context) {
  const key = progressKey();
  const progress = state.taskProgress[key] || {};
  if (progress[task.id]?.status === 'done') return;
  progress[task.id] = { status: 'done', context, finishedAt: new Date().toISOString() };
  state.taskProgress[key] = progress;
  renderTaskList();
  showSuccess(task);
}

function showSuccess(task) {
  taskBody.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.success}</p>
    <p>Nutze "Nächste Aufgabe", um weiter zu trainieren oder wiederhole den Ablauf.</p>
  `;
}

function highlightProfile() {
  profileButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.profile === state.profileId);
  });
}

function highlightMode() {
  modeButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mode === state.mode);
  });
}

function resetTaskContext() {
  state.activeChannel = null;
  state.dualWatch = null;
  state.distressNature = null;
  state.mmsi = null;
  state.routineChannel = null;
  state.lockStates = {};
  state.trafficMode = null;
  state.lastOption = null;
}

switchProfile('src');
setMode('free');
