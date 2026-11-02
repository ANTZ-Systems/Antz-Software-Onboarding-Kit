/* Full guides: one per kit, laid out from its source deck (References/Kit Details, References/Module Details Pages).
   Each guide is a banner, then parts; a part holds cards, and each card opens its screens in the gallery.
   A part can instead hold actions (a phone beside numbered tiles, each opening its screen), flow (numbered
   steps in order) or compare (a capability-by-type table).
   area: the module area whose colours the page takes (default the Getting Started colours).
   back: the kit page or module page the guide belongs to; its pager leads back there.
   A screen's src is a file name in assets/guide/<guide id>/ (WebP, extension left off).
   On a card, thumb picks which screen its picture uses (default the first) and peek (0 to 1) how far down it looks.
   English only for now: other languages show this text until it is translated. */
window.ANTZ_GUIDES = {
  'getting-started': {
    source: '03_Getting started · Getting Started Kit',
    title: 'Getting Started',
    kicker: 'Antz Systems · Onboarding',
    sub: 'Your first walkthrough of the Antz app: the home screen, the quick-action shortcuts, navigation and your own profile. Everything you need to find your way around on day one.',
    audience: ['Keepers', 'Veterinarians', 'Caretakers', 'Curators', 'New starters'],
    back: 'getting-started',
    parts: [
      {
        id: 'home',
        label: 'Part 01 · Where you land',
        title: 'The home screen',
        lede: 'The first thing you see every time you open Antz. Search, insights, what is pending, the media feed and the navigation bar give you the state of your site at a glance.',
        /* The at-a-glance overview: a wide card whose numbered surfaces each open their own screen */
        glance: {
          title: 'Home at a glance',
          desc: 'Your home screen pulls the whole day into one view. Pick a surface to see it on the phone; each one is covered in its own card below.',
          shots: [
            { src: 'home-top', icon: 'focus', title: 'Profile, Search, QR, Focus Hub & Notifications', desc: 'Everything at the top of the home screen: open your profile, search or scan to find any enclosure or animal, jump to bookmarked favourites and check alerts.' },
            { src: 'home-pending', icon: 'priority', title: 'Pending To-Do', desc: 'What needs your attention: animal audit score, allocations, necropsy and administration.' },
            { src: 'home-insights', icon: 'report', title: 'Key Insights', desc: 'View natality and mortality stats for this month.' },
            { src: 'home-media', icon: 'announce', title: 'Media Feed', desc: 'Announcements and notes, with images and documents attached.' },
            { src: 'home-nav', icon: 'home', title: 'Navigation Bar', desc: 'Home, Menu, Help Desk, Notes and Chat, always one tap away.' },
            { src: 'home-quick', icon: 'add', title: 'Quick Actions', desc: 'A shortcut menu for the actions and workflows you use most.' }
          ]
        },
        cards: [
          {
            id: 'search', title: 'Search, QR Scanner & Focus Hub', icon: 'focus',
            desc: 'The fastest way to reach anything, all from the top of the home screen.',
            shots: [
              { src: 'search', title: 'Search bar', desc: 'Find any animal, enclosure, note or record by name or ID.' },
              { src: 'qr', title: 'QR Scanner', desc: 'Scan an enclosure or animal tag to open its record instantly.' },
              { src: 'focus', title: 'Focus Hub', desc: 'Mark animals and enclosures as favourites, and bookmark notes, medical records and lab requests.' },
              { src: 'notif', title: 'Notifications', desc: 'Stay on top of alerts, approvals and updates as they happen.' }
            ]
          },
          {
            id: 'pending', title: 'Pending To-Do', icon: 'priority',
            desc: 'Counts of animals and records still waiting on you. Every pending type follows the same three steps: home count, site-wise breakdown, then the module with the site filter applied.',
            /* Shown in the card's screen window, under every one of its screens */
            flow: {
              label: 'How every pending card works',
              steps: [
                { icon: 'home', title: 'Homepage overview', desc: 'A live count on the home screen for the records still pending.' },
                { icon: 'areas', title: 'Site-wise breakdown', desc: 'Open the summary to see counts split by each site.' },
                { icon: 'filter', title: 'Filtered redirection', desc: 'Tap through to the module with the site filter already applied.' }
              ]
            },
            shots: [
              { src: 'pending-audit', title: 'Animal Audit score', desc: 'Audit the animal count in every enclosure periodically.' },
              { src: 'pending-admin', title: 'Pending Administration', desc: 'Medical administration processes yet to be completed.' },
              { src: 'pending-necropsy', title: 'Total Pending Necropsy', desc: 'Necropsies pending across all sites and stages.' },
              { src: 'pending-allocation', title: 'Pending Allocations', desc: 'Animals received at sites, awaiting enclosure allocation.' }
            ]
          },
          {
            id: 'insights', title: 'Key Insights', icon: 'report', peek: 0.25,
            desc: 'A live pulse of your site: births, losses and arrivals, for today, yesterday or this month.',
            shots: [
              { src: 'insights', title: 'Key Insights', desc: 'Natality shows new births across your sites, Mortality the deaths logged, and View All opens the full breakdown and history.' }
            ]
          },
          {
            id: 'feed', title: 'Media Feed', icon: 'announce', peek: 0.7,
            desc: 'Notes and announcements from across the organisation, with the photos, videos and documents attached to them.',
            shots: [
              { src: 'home-media', title: 'Announcements', desc: 'General announcements for the wider team, and important ones flagged so they surface first.' },
              { src: 'feed', title: 'Notes & attachments', desc: 'Time-stamped observations from colleagues, with photos, videos and documents that open right inside the feed.' }
            ]
          },
          {
            id: 'nav', title: 'Navigation Bar', icon: 'home', thumb: 1,
            desc: 'Pinned to the bottom of every screen: five destinations always one tap away, plus the green + for quick actions.',
            shots: [
              { src: 'nav-home', title: 'Home', desc: 'Pending to-do, Key Insights and the media feed.' },
              { src: 'nav-menu', title: 'Menu', desc: 'Every module available to you, in one grid.' },
              { src: 'nav-helpdesk', title: 'Help Desk', desc: 'Create, approve or reject, and fulfil requests.' },
              { src: 'nav-notes', title: 'Notes', desc: 'Daily animal, enclosure and operations updates.' },
              { src: 'nav-chat', title: 'Chat', desc: 'Message teammates one to one or in groups, with a badge for unread.' }
            ]
          }
        ]
      },
      {
        id: 'profile',
        label: 'Part 02 · Setup',
        title: 'Your profile & settings',
        lede: 'Your account, set up your way: who you are, what you can access, your activity and files, and the small controls that keep the account yours.',
        cards: [
          {
            id: 'profile', title: 'My Profile', icon: 'users',
            desc: 'Everything tied to your account, across a row of tabs.',
            shots: [
              { src: 'profile-about', title: 'About', desc: 'Staff ID, designation and department.' },
              { src: 'profile-permissions', title: 'Permissions', desc: 'Role-based and module access.' },
              { src: 'profile-education', title: 'Education', desc: 'Institute, course, year and marks.' },
              { src: 'profile-idproofs', title: 'ID Proofs', desc: 'Identity documents and attachments.' },
              { src: 'profile-work', title: 'Work Experience', desc: 'Previous company, role and dates.' },
              { src: 'profile-devices', title: 'Devices', desc: 'Signed-in devices and when each was last active.' },
              { src: 'profile-journal', title: 'Journal', desc: 'Your day-by-day activity timeline.' },
              { src: 'profile-incharge', title: 'In charge of', desc: 'Animals you are responsible for, and the keeper history timeline.' }
            ]
          },
          {
            id: 'journal', title: 'Journal & Media', icon: 'note',
            desc: 'Two personal spaces: a record of what you did, and a library of what you uploaded.',
            shots: [
              { src: 'journal', title: 'My Journal', desc: 'A day-by-day record of activities and logins, in order, with timestamps.' },
              { src: 'media', title: 'My Media', desc: 'Images, videos, PDFs, documents and sheets you have uploaded, in one library.' }
            ]
          },
          {
            id: 'settings', title: 'My Settings', icon: 'shield',
            desc: 'Manage your security and privacy: change your PIN or password, or hide stats on shared screens.',
            shots: [
              { src: 'settings', title: 'My Settings', desc: 'Change PIN, change password, and Hide Stats to keep figures off the screen when others are looking on.' }
            ]
          },
          {
            id: 'language', title: 'Language & Logout', icon: 'chat', peek: 0.45,
            desc: 'Switch the app to the language you are most comfortable in, and log out securely when your shift ends.',
            shots: [
              { src: 'menu-lang', title: 'The profile menu', desc: 'Find Change Language in the side menu. Logout, at the bottom, ends your session so the device is safe to hand on.' },
              { src: 'lang-dialog', title: 'Select Language', desc: 'Pick from twelve languages; the whole app switches straight away.' }
            ]
          }
        ]
      },
      {
        id: 'quick',
        label: 'Part 03 · The green + button',
        title: 'Quick actions',
        lede: 'Tap [fab] and a sheet of shortcuts slides up: every record, note, medical entry and transfer you will create on a shift, started from one place, wherever you are in the app.',
        /* One overview screen, then one tile per shortcut, in the sheet's own order (left to right, row by row);
           every tile opens the same gallery at its own screen */
        actions: {
          overview: { src: 'quick-actions', title: 'The Quick Actions sheet', desc: 'Sixteen shortcuts in all, split across three screens of the sheet.' },
          shots: [
            { src: 'qa-site', title: '+ Site', desc: 'Register a new facility or location.' },
            { src: 'qa-section', title: '+ Section', desc: 'Create a section within a site.' },
            { src: 'qa-request', title: '+ Request', desc: 'Raise a help desk request.' },
            { src: 'qa-note', title: '+ Note', desc: 'Log a quick observation.' },
            { src: 'qa-enclosure', title: '+ Enclosure', desc: 'Create an enclosure under a section.' },
            { src: 'qa-accession', title: '+ Accession', desc: 'Add a single animal, a batch or a group to an enclosure.' },
            { src: 'qa-user', title: '+ User', desc: 'Create a user account and set its access.' },
            { src: 'qa-medical', title: '+ Medical', desc: 'Create single, batch and group records, direct or scheduled.' },
            { src: 'qa-master', title: 'Master', desc: 'Foundational data setup.' },
            { src: 'qa-transfer', title: 'Transfer Animal', desc: 'In-house, inter-site and external transfers.' },
            { src: 'qa-dispense', title: 'Dispense Medicine', desc: 'Issue prescribed medicines to vets.' },
            { src: 'qa-missing', title: '+ Missing / Escaped', desc: 'Log a critical incident.' },
            { src: 'qa-announcement', title: 'Announcement', desc: 'Broadcast an update to sites, roles or users.' },
            { src: 'qa-fetaldeath', title: '+ Fetal Death', desc: 'Record offspring loss.' },
            { src: 'qa-addeggs', title: '+ Add Eggs', desc: 'Log eggs for incubation tracking.' },
            { src: 'qa-hospitalize', title: '+ Hospitalize', desc: 'Raise a request to hospitalise an animal for treatment.' }
          ]
        }
      }
    ],
    close: {
      label: 'By the end of this guide',
      title: 'You are up and running',
      lede: 'Four things mark the end of getting started, each one something you can now do on your own.',
      items: [
        { icon: 'signin', title: 'Get in & oriented', desc: 'Log in to your workspace and read the home screen at a glance: insights, what is pending, and the latest from your team.' },
        { icon: 'compass', title: 'Move with confidence', desc: 'Use search, the Focus Hub and the navigation bar to reach any record or module in a couple of taps.' },
        { icon: 'add', title: 'Take your first actions', desc: 'Add records, log notes, raise medical entries and start transfers from the quick actions behind the + button.' },
        { icon: 'edit', title: 'Make it yours', desc: 'Set up your profile, manage your journal and media, choose your language, and understand the permissions behind your role.' }
      ]
    }
  },
  /* Pilot module guide, from References/Module Details Pages/10_Animal transfer (Animal Transfer Kit) */
  'animal-transfer': {
    source: '10_Animal transfer · Animal Transfer Kit',
    title: 'Animal Transfer',
    kicker: 'Animal Records & Movement',
    sub: 'How animals move within and beyond the organisation: every request, approval and allocation, documented and secure. A focused walkthrough of the Transfer module.',
    audience: ['In-house', 'Inter-site', 'External', 'Approvals'],
    area: 'animal',
    back: 'animal-transfer',
    parts: [
      {
        id: 'capabilities',
        label: 'Part 01 · The module',
        title: 'Six core capabilities',
        lede: 'Records and manages all animal movements within and outside the organisation, tracking requests, approvals and allocations for secure, well-documented relocation between enclosures, sites and institutions.',
        chain: true,
        cards: [
          { id: 'types', title: 'Transfer types', icon: 'transfer', desc: 'In-house, inter-site and external transfers.',
            shots: [{ src: 'transfer-types', title: 'Choose transfer type', desc: 'Pick in-house, inter-site or external when you start a transfer.' }] },
          { id: 'approve', title: 'Approve / Reject', icon: 'approve', desc: 'Authorisation from designated site authorities.',
            shots: [{ src: 'approve-reject', title: 'Approve or reject', desc: 'The site authority approves or rejects an inter-site transfer request.' }] },
          { id: 'cancel', title: 'Cancel', icon: 'alert', desc: 'Cancel or reject requests and reinitiate as needed.',
            shots: [{ src: 'cancel', title: 'Cancel transfer', desc: 'The cancel option on an inter-site transfer.' }] },
          { id: 'security', title: 'Security check-in / out', icon: 'shield', desc: 'Controlled check-in and check-out for inter-site and external moves.',
            shots: [{ src: 'security', title: 'Security clearance & checkout', desc: 'Security clears and checks out an inter-site transfer.' }] },
          { id: 'allocation', title: 'Allocation', icon: 'home', desc: 'On arrival, allocate to an enclosure and notify staff.',
            shots: [{ src: 'allocation', title: 'Allocate enclosures', desc: 'On arrival, allocate the animals to enclosures for an inter-site transfer.' }] },
          { id: 'log', title: 'Transfer log', icon: 'report', desc: 'Full status history with timestamps.',
            shots: [{ src: 'transfer-log', title: 'Transfer log', desc: 'The full, timestamped status history of the transfer.' }] }
        ]
      },
      {
        id: 'record',
        label: 'Part 02 · In the app',
        title: 'A transfer record, in one view',
        lede: 'Keepers see the whole picture on their phone: who, what, why and where it stands.',
        /* No overview screen: the phone shows the first step, and pointing at a step shows its screen */
        actions: {
          title: 'The transfer record', numbered: true,
          desc: 'Five parts of one inter-site transfer, each highlighted on the screen.',
          shots: [
            { src: 'record-header', title: 'Request header', desc: 'ID, transfer type and site, captured up top.' },
            { src: 'record-team', title: 'Reason & team', desc: 'Why the animal is moving and who is handling it.' },
            { src: 'record-approval', title: 'Approval', desc: 'The authorising site authority, shown with a verified check.' },
            { src: 'record-comments', title: 'Comments & communication', desc: 'Add comments for coordination and record-keeping.' },
            { src: 'record-status', title: 'Live status', desc: 'A timestamped progress bar, from request to Transfer Completed.' }
          ]
        }
      },
      {
        id: 'lifecycle',
        label: 'Part 03 · Workflow',
        title: 'The transfer lifecycle',
        lede: 'Every transfer follows one consistent path, so each request stays accountable from the moment it is raised to the moment the animal is settled in its new enclosure.',
        flow: [
          { icon: 'add', title: 'Request', desc: 'A keeper raises a request with the reason, animals and destination.' },
          { icon: 'approve', title: 'Approval', desc: 'The site authority authorises the move before it proceeds.' },
          { icon: 'shield', title: 'Check-out / Check-in', desc: 'Security logs the animal leaving its location and arriving at the next.' },
          { icon: 'home', title: 'Allocation', desc: 'On arrival the animal is checked in and allocated to an enclosure.' },
          { icon: 'history', title: 'Log', desc: 'Every action is recorded with timestamps and users.' }
        ]
      },
      {
        id: 'types',
        label: 'Part 04 · Compared',
        title: 'Three transfer types',
        lede: 'Approval and request management work the same way across every transfer; only the logistics change. Inter-site and external moves add a transport step that in-house moves do not need.',
        /* Column order follows the deck's cells (its header row has In-house and Inter-site swapped) */
        compare: {
          corner: 'Capability',
          types: [
            { title: 'In-house', sub: 'Within the site', tone: 'green' },
            { title: 'Inter-site', sub: 'Between your sites', tone: 'clay' },
            { title: 'External', sub: 'Between institutions', tone: 'yellow' }
          ],
          rows: [
            { title: 'Transfer approval', desc: 'Authorisation from site authorities.', icon: 'shield',
              cells: [{ ok: true, text: 'Required' }, { ok: true, text: 'Required' }, { ok: true, text: 'Required' }] },
            { title: 'Logistics & tracking', desc: 'Timeline and staff notifications.', icon: 'transfer',
              cells: [{ ok: true, text: 'Tracked', note: 'No transport step' }, { ok: true, text: 'Tracked', note: 'Transport managed' }, { ok: true, text: 'Tracked', note: 'Transport managed' }] },
            { title: 'Revoke transfer', desc: 'Withdraws an approved transfer request before site B approves.', icon: 'alert',
              cells: [{ ok: false, text: 'Not available' }, { ok: true, text: 'Available', note: 'Inter-site only' }, { ok: false, text: 'Not available' }] },
            { title: 'Request management', desc: 'Cancel or reject, then reinitiate.', icon: 'manage',
              cells: [{ ok: true, text: 'Supported' }, { ok: true, text: 'Supported' }, { ok: true, text: 'Supported' }] }
          ]
        }
      }
    ],
    close: {
      label: 'In short',
      title: 'Every move, on record',
      lede: 'Animal Transfer keeps every in-house, inter-site and external move documented, approved and tracked, from request to allocation.'
    }
  },
  /* ---- Module guides (merged from References/Module Details Pages) ---- */
  /* From References/Module Details Pages/04_Notes Module (Notes Module Kit) */
  'notes-module': {
    source: '04_Notes Module · Notes Module Kit',
    title: 'Notes Module',
    kicker: 'Records & Communication',
    sub: 'One place to log what happens with your animals, enclosures and operations: structured, time-stamped and shared with the right people. This guide walks through finding notes, filtering, creating them and collaborating.',
    audience: ['Keepers', 'Veterinarians', 'Curators', 'Caretakers', 'All roles'],
    area: 'records',
    back: 'notes-module',
    parts: [
      {
        id: 'list',
        label: 'Part 01 · Finding & reading',
        title: 'The Notes list',
        lede: 'The Notes module centralises daily updates, observations and incidents linked to sites, sections, enclosures and animals. Every note your team logs lands in one feed: structured, time-stamped and easy to retrieve.',
        actions: {
          title: 'The Notes list', numbered: true,
          desc: 'Seven parts of the Notes list, each highlighted on the screen.',
          shots: [
            { src: 'list-tabs', title: 'My Notes & All Notes', desc: 'Switch between notes you created and every note you are authorised to see.' },
            { src: 'list-search', title: 'Search bar', desc: 'Quickly find notes using keywords or tags within the chosen category.' },
            { src: 'list-filters', title: 'Filters', desc: 'Open the filter panel to narrow the feed to just what is relevant.' },
            { src: 'list-card', title: 'Note card', desc: 'Note type, description, who noted it and when, the entry and the linked entity, at a glance.' },
            { src: 'list-priority', title: 'Priority flag', desc: 'A colour-coded urgency marker, so critical notes stand out instantly.' },
            { src: 'list-attachments', title: 'Attachments', desc: 'Images, videos and documents preview right inside the card.' },
            { src: 'list-add', title: 'Add a note', desc: 'The + button opens the new note form from anywhere in the list.' }
          ]
        }
      },
      {
        id: 'filters',
        label: 'Part 02 · Narrow it down',
        title: 'Filters & search',
        lede: 'When the feed gets long, the filter panel cuts it down to exactly the notes you need. Combine categories, search by keyword, then apply.',
        actions: {
          title: 'The filter panel', numbered: true,
          desc: 'Three controls on the filter panel, each highlighted on the screen.',
          shots: [
            { src: 'filter-categories', title: 'Filter categories', desc: 'Note Type and Priority, each showing how many filters are active.' },
            { src: 'filter-types', title: 'Note types', desc: 'Grouped by purpose, such as Feeding & Diet and Medical, to sort notes by what they are about.' },
            { src: 'filter-apply', title: 'Apply filters', desc: 'Confirm your selection and return to a feed of only the relevant notes.' }
          ]
        }
      },
      {
        id: 'create',
        label: 'Part 03 · Logging the work',
        title: 'Create a note',
        lede: 'The [fab] button opens New Notes. Choose a purpose, write what you saw, link it to the right record and add evidence. Every field is there to keep entries consistent.',
        actions: {
          title: 'The New Notes form', numbered: true,
          desc: 'Seven fields on the New Notes form, each highlighted on the screen.',
          shots: [
            { src: 'new-type', title: 'Note Type', desc: 'Choose the purpose to help organise the update.' },
            { src: 'new-enter', title: 'Enter Notes', desc: 'Write the details of the observation or incident.' },
            { src: 'new-record-date', title: 'Record Date', desc: 'Select the past date when the task was performed.' },
            { src: 'new-notify', title: 'Notify members', desc: 'Instantly alert specific team members about this note.' },
            { src: 'new-entity', title: 'Select Entity', desc: 'Link the note to an animal, enclosure, section or site.' },
            { src: 'new-attachments', title: 'Attachments', desc: 'Add images, videos or documents, up to 32 MB.' },
            { src: 'new-priority', title: 'Priority', desc: 'Set the urgency level: Low, Moderate, High or Critical.' }
          ]
        }
      },
      {
        id: 'detail',
        label: 'Part 04 · Collaborating',
        title: 'The note in detail',
        lede: 'Open any note for the full record: who logged it, what it is linked to, the evidence attached and the team\'s response. Permissions decide what you can change.',
        actions: {
          title: 'An open note', numbered: true,
          desc: 'Six parts of one note, each highlighted on the screen.',
          shots: [
            { src: 'detail-bookmark', title: 'Bookmark notes', desc: 'Save a note to find it quickly in your bookmark listings later.' },
            { src: 'detail-edit-delete', title: 'Edit, listen & delete', desc: 'Modify, listen via audio or remove the note, based on your assigned permissions.' },
            { src: 'detail-notified', title: 'Notified to', desc: 'The users notified about this note, alerted the moment it is logged.' },
            { src: 'detail-entity', title: 'Linked entity & visibility', desc: 'The note also appears on the linked animal, site or section page for full context.' },
            { src: 'detail-attachments', title: 'Attachments', desc: 'The supporting images and documents added to the note.' },
            { src: 'detail-like-comment', title: 'Like & comment', desc: 'React and discuss to keep the team aligned on the note.' }
          ]
        }
      }
    ],
    close: {
      label: 'In a nutshell',
      title: 'Four things to remember',
      lede: 'Good data plus good insights equals healthy animals, and it starts with a well-kept note.',
      items: [
        { icon: 'note', title: 'One feed for everything', desc: 'Daily updates, observations and incidents, all time-stamped and split into My Notes and All Notes.' },
        { icon: 'filter', title: 'Find any note fast', desc: 'Filter by type, priority, who noted it or what it is tagged to, and search by keyword or tag.' },
        { icon: 'edit', title: 'Capture it properly', desc: 'Categorise, link to a record, attach evidence, set priority and notify the right people.' },
        { icon: 'users', title: 'Keep the team aligned', desc: 'Notes surface on linked records, and likes and comments keep the conversation in context.' }
      ]
    }
  },
  /* From References/Module Details Pages/06_User Module (1) (User Module) */
  'user-management': {
    source: '06_User Module (1) · User Module',
    title: 'User Management',
    kicker: 'Records & Communication',
    sub: 'Secure, centralised management of accounts, roles and permissions: onboarding, access control, activity logs and accountability, in one record beneath every teammate.',
    audience: ['Profiles', 'Roles & Permissions', 'Access Control', 'Devices & Activity', 'Directory'],
    area: 'records',
    back: 'user-management',
    parts: [
      {
        id: 'capabilities',
        label: 'Part 01 · The module',
        title: 'What the module does',
        /* One screen per card: the window steps on through all five cards rather than stopping at each */
        chain: true,
        lede: 'Create and manage every account, set what each role can reach, and keep a record of who signed in and from where. Users also get secure login with OTP recovery delivered over SMS or WhatsApp.',
        /* The overview slide has no screens: each card opens the matching screen from the walkthrough slides.
           Login & Recovery has no screen anywhere in the deck, so it is kept in the lede rather than as a card.
           The deck lists two different sets of example roles (overview and roles slide), so the card names only roles common to both and the app. */
        cards: [
          { id: 'profile', title: 'Profile creation & management', icon: 'users', desc: 'Store user details: name, contact, staff ID, date of birth and blood group.',
            shots: [{ src: 'add-identity', scroll: { head: 'form-head', body: 'form-identity', full: 'form-identity-full', at: 238 }, title: 'Add User Basic Info', desc: 'The form that captures a new user\'s identity, contact and personal details.' }] },
          { id: 'access', title: 'Access control', icon: 'shield', desc: 'Restrict by site or section, activate or deactivate accounts, with auto-timeout.',
            shots: [{ src: 'access-scope', title: 'Access permissions', desc: 'Location, pharmacy, organisation, nursery, necropsy centre and hospital access for one user.' }] },
          { id: 'roles', title: 'Roles & permissions', icon: 'access', desc: 'Assign roles, such as Curator or Vet, and set their access rights per module.',
            shots: [{ src: 'role-permissions', scroll: { head: 'perm-head', body: 'perm-body', full: 'perm-full', at: 0, auto: true }, title: 'Role permissions', desc: 'Choose a role and see the rights it holds in each module.' }] },
          { id: 'activity', title: 'Activity tracking', icon: 'devices', desc: 'See last login and device details, and deactivate a device if needed.',
            shots: [
              { src: 'profile-devices', title: 'Devices', desc: 'Signed-in devices, each with its device ID and last active time.' },
              { src: 'profile-journal', title: 'Journal', desc: 'A date strip and the user\'s daily activity log.' }
            ] },
          { id: 'info', title: 'Additional info', icon: 'note', desc: 'Record education and work history, and upload ID proofs to the profile.',
            shots: [
              { src: 'profile-education', title: 'Education', desc: 'Institute name, course, year of passing out and marks.' },
              { src: 'profile-idproofs', title: 'ID proofs', desc: 'An identity document number with its attachment.' },
              { src: 'profile-work', title: 'Work experience', desc: 'Company name, join and end dates, location, designation and industry type.' }
            ] }
        ]
      },
      {
        id: 'onboarding',
        label: 'Part 02 · Add a user',
        title: 'Onboarding a user',
        lede: 'Adding a teammate starts with one form. Capture who they are, and the account is created with a secure password out of the box.',
        /* The deck draws this form in HTML rather than as a capture; these screens are renders of that form.
           scroll: in the screen window the form scrolls under its fixed top bar (head), opening at `at` (image px) */
        actions: {
          title: 'The Add User form', numbered: true,
          desc: 'Six parts of the Add User Basic Info form, each highlighted on the screen.',
          shots: [
            { src: 'add-photo', scroll: { head: 'form-head', body: 'form-photo', full: 'form-photo-full', at: 0 }, title: 'Profile picture', desc: 'Add a photo so the user is easy to recognise in lists.' },
            { src: 'add-identity', scroll: { head: 'form-head', body: 'form-identity', full: 'form-identity-full', at: 238 }, title: 'Identity', desc: 'Full name, email and address.' },
            { src: 'add-password', scroll: { head: 'form-head', body: 'form-password', full: 'form-password-full', at: 766 }, title: 'Auto-generated password', desc: 'A secure password is created automatically when the user is added.' },
            { src: 'add-mobile', scroll: { head: 'form-head', body: 'form-mobile', full: 'form-mobile-full', at: 948 }, title: 'Country code & mobile', desc: 'The international dialling code with the contact number.' },
            { src: 'add-staff-id', scroll: { head: 'form-head', body: 'form-staff-id', full: 'form-staff-id-full', at: 1080 }, title: 'Staff ID', desc: 'Tie the account to the facility\'s own staff number.' },
            { src: 'add-personal', scroll: { head: 'form-head', body: 'form-personal', full: 'form-personal-full', at: 1212 }, title: 'Personal', desc: 'Date of birth, gender, marital status, age and blood group.' }
          ]
        }
      },
      {
        id: 'roles',
        label: 'Part 03 · Who can do what',
        title: 'Roles, permissions & access',
        /* The window steps between both cards with its arrows; the permissions screen scrolls on its own, up and down,
           under its fixed status bar, as on the deck's page */
        chain: true,
        lede: 'Pick a role, then tune exactly what it can reach. Permissions run per module; access runs per place. Grant or modify view, add, edit or delete rights, applied per module, per role or per individual user.',
        cards: [
          { id: 'scope', title: 'Access scope mapping', icon: 'areas', desc: 'Map the user to sites, pharmacies, nurseries, hospitals and necropsy centres.',
            shots: [{ src: 'access-scope', title: 'Access permissions', desc: 'Location, pharmacy, organisation, nursery, necropsy centre and hospital access on the Edit Permissions screen.' }] },
          { id: 'modules', title: 'Roles & module permissions', icon: 'access', desc: 'Choose a role, then grant View, Add, Edit or Delete per module.',
            shots: [{ src: 'role-permissions', scroll: { head: 'perm-head', body: 'perm-body', full: 'perm-full', at: 0, auto: true }, title: 'Role permissions', desc: 'A Zoologist role with its module permissions for collection, housing, mortality and more.' }] }
        ]
      },
      {
        id: 'profile',
        label: 'Part 04 · One record per person',
        title: 'The user profile',
        lede: 'Everything tied to an account sits across a row of tabs on the user\'s profile.',
        actions: {
          title: 'The profile tabs', numbered: true,
          desc: 'Eight tabs on one user profile, each shown on the screen.',
          shots: [
            { src: 'profile-about', title: 'About', desc: 'Staff ID, designation and department.' },
            { src: 'profile-permissions', title: 'Permissions', desc: 'Role-based and module access.' },
            { src: 'profile-education', title: 'Education', desc: 'Institute, course, year and marks.' },
            { src: 'profile-idproofs', title: 'ID proofs', desc: 'Identity documents and attachments.' },
            { src: 'profile-work', title: 'Work experience', desc: 'Previous companies, roles and dates.' },
            { src: 'profile-devices', title: 'Devices', desc: 'Signed-in devices and when each was last active.' },
            { src: 'profile-journal', title: 'Journal', desc: 'The day-by-day activity timeline.' },
            { src: 'profile-incharge', title: 'In charge of', desc: 'Animals the user is responsible for, and the keeper history timeline.' }
          ]
        }
      },
      {
        id: 'directory',
        label: 'Part 05 · Everyone, at a glance',
        title: 'Users directory',
        /* The window steps between both cards with its arrows and shows, under each screen's text, what every row
           of the list offers, as on the deck's directory page */
        chain: true,
        notes: {
          label: 'On every row',
          items: [
            { icon: 'search', lead: 'Search', text: 'by name, role or staff number.' },
            { icon: 'chat', lead: 'Call & chat', text: 'a teammate without leaving the list.' },
            { icon: 'history', lead: 'Last active', text: 'time, so you know who\'s online.' }
          ]
        },
        lede: 'The directory opens on a live count of your team and lets you reach anyone in a tap. Search by name, role or staff number, call or chat a teammate without leaving the list, and see each person\'s last active time.',
        cards: [
          { id: 'people', title: 'By users', icon: 'users', desc: 'Total, active today and blocked — then the full searchable list.',
            shots: [{ src: 'directory-people', title: 'Users by people', keep: true, desc: 'Total, active today and blocked — then the full searchable list.' }] },
          { id: 'sites', title: 'By site', icon: 'areas', desc: 'The same counts rolled up per facility, site by site.',
            shots: [{ src: 'directory-sites', title: 'Users by site', desc: 'The same counts rolled up per facility, site by site.' }] }
        ]
      },
      {
        id: 'filters',
        label: 'Part 06 · Narrow it down',
        /* One screen per card: the window steps between both with its arrows */
        chain: true,
        title: 'Filters & activity logs',
        lede: 'Narrow the directory down by role or status, and read the activity trail for anyone. The activity log filters actions by user and time range, covering logins, animal and medical records, facility, diet, notes and breeding.',
        /* The deck says the directory can be sliced "four ways" but shows only two filters (role and status), so the count is left out */
        cards: [
          { id: 'role', title: 'Role filter', icon: 'filter', desc: 'View users by their designated role, with a live count for each.',
            shots: [{ src: 'filter-role', title: 'Choose Role', desc: 'Every role in the directory, each with a live count of its users.' }] },
          { id: 'status', title: 'Status & activity filter', icon: 'eye', desc: 'Show all users, or those inactive for more than 7 or 15 days.',
            shots: [{ src: 'filter-status', title: 'Filter by status', desc: 'Show All, Inactive For More Than 7 Days or Inactive For More Than 15 Days.' }] }
        ]
      }
    ],
    close: {
      label: 'The User Module, end to end',
      title: 'One record beneath every teammate',
      lede: 'Secure accounts, the right access, a full record per person, and an activity trail you can trust: from a teammate\'s first day to the audit trail behind their last action.',
      items: [
        { icon: 'add', title: 'Onboard in one form', desc: 'Create an account with identity, contact and staff details, and a secure auto-generated password, in a single pass.' },
        { icon: 'access', title: 'Right access, every role', desc: 'Assign a role, tune module permissions, and map access to the exact sites, pharmacies and centres a user should reach.' },
        { icon: 'note', title: 'A complete record', desc: 'Education, work history, ID proofs, signed-in devices and the animals each user is in charge of, all on one profile.' },
        { icon: 'shield', title: 'Accountability built in', desc: 'Last login, device details and a date-filtered activity journal keep every action traceable across the directory.' }
      ]
    }
  },
  /* From References/Module Details Pages/07_Collection (Collection Module Kit) */
  'collection': {
    source: '07_Collection · Collection Module Kit',
    title: 'Collection',
    kicker: 'Animal Records & Movement',
    sub: 'The central hub for an institution\'s animal collection: record species, track individual animals and maintain accurate histories across every taxonomic level.',
    audience: ['Zookeepers', 'Veterinarians', 'Animal dietitians', 'Conservation biologists', 'Research scientists'],
    area: 'animal',
    back: 'collection',
    parts: [
      {
        id: 'taxonomy',
        label: 'Part 01 · The module',
        title: 'The taxonomic hierarchy',
        lede: 'The Collection module manages and documents every aspect of an institution\'s animal collection. Every species sits on one ladder of five ranks, here for the ring-tailed lemur.',
        /* The deck's tap-a-rank taxonomy chain, shown as ordered steps */
        flow: [
          { icon: 'areas', title: 'Class', desc: 'The broadest grouping, here Mammalia, the mammals.' },
          { icon: 'manage', title: 'Order', desc: 'A group of related families within the class, here Primates.' },
          { icon: 'users', title: 'Family', desc: 'Related genera that share defining traits, here Lemuridae.' },
          { icon: 'link', title: 'Genus', desc: 'A cluster of very closely related species, here Lemur.' },
          { icon: 'pets', title: 'Species', desc: 'A single distinct animal type, the record you manage: here Lemur catta.' }
        ]
      },
      {
        id: 'overview',
        label: 'Part 02 · Species overview',
        title: 'The whole collection, at a glance',
        lede: 'One screen frames the whole collection: taxonomic classification, species lists, gender-wise population and accession and birth counts, with search and filters by common, scientific or local name.',
        /* The deck quotes "1,036 species across 8,563 animals"; its screens show 59 species and 2,461 animals, so no figures are given */
        actions: {
          title: 'The Collections overview', numbered: true,
          desc: 'Seven ways to read or narrow the population, each highlighted on the screen.',
          shots: [
            { src: 'ov-search', title: 'Search bar', desc: 'Find animals by class, common, scientific or local name.' },
            { src: 'ov-filter', title: 'Filter', desc: 'Narrow the data by site or a custom date range.' },
            { src: 'ov-population', title: 'Species & population', desc: 'Live totals of species and animals in the collection.' },
            { src: 'ov-accession', title: 'Accession & birth', desc: 'New arrivals and births over the chosen period.' },
            { src: 'ov-taxonomy', title: 'Taxonomic ranks', desc: 'Browse by class, order, family, genus and species.' },
            { src: 'species-list', title: 'Species list', desc: 'Each species with its population by gender: male, female, undetermined and indeterminate.' },
            { src: 'animal-list', title: 'Animal population', desc: 'Every individual animal with its AAID, species and enclosure.' }
          ]
        }
      },
      {
        id: 'species',
        label: 'Part 03 · Species management',
        title: 'Everything about one species',
        lede: 'Open any species and a row of tabs holds everything recorded against it: identity, location, health, lineage and end-of-life records, each with its own status tracking.',
        /* The deck's copy says the example is the Scarlet Macaw; every screen shows the Tiger */
        cards: [
          { id: 'identity', title: 'Identity & population', icon: 'species', desc: 'Species info, population, sub-species, morph or breed, and sites.',
            shots: [
              { src: 'species-info', title: 'Species Info', desc: 'About the species, with its attributes, behaviour, habitat and protection.' },
              { src: 'population', title: 'Population', desc: 'Every individual, with its AID, enclosure, section and site.' },
              { src: 'sub-species', title: 'Sub Species', desc: 'The sub-species recorded under the species.' },
              { src: 'morph-breed', title: 'Morph / Breed', desc: 'Morphs, breeds and localities for the species, with gender-wise counts.' },
              { src: 'sites', title: 'Sites', desc: 'Population per site, with sex-wise badges.' }
            ] },
          { id: 'location', title: 'Location & health', icon: 'medical', desc: 'Sections, enclosures, medical records and taxonomy.',
            shots: [
              { src: 'sections', title: 'Sections', desc: 'Counts by section: male, female, undetermined and indeterminate.' },
              { src: 'enclosures', title: 'Enclosures', desc: 'The population broken down by enclosure.' },
              { src: 'medical', title: 'Medical Records', desc: 'Counts of medical records, symptoms, clinical assessments, prescriptions, vaccinations and deworming.' },
              { src: 'taxonomy', title: 'Taxonomy', desc: 'The species lineage, from species to genus, family and order.' }
            ] },
          { id: 'records', title: 'Records', icon: 'report', desc: 'Mortality, necropsy, diet and tags.',
            shots: [
              { src: 'mortality', title: 'Mortality', desc: 'Deceased animals with their enclosure and cause.' },
              { src: 'necropsy', title: 'Necropsy', desc: 'Necropsy requests grouped by Pending, Draft and Completed.' },
              { src: 'diet', title: 'Diet', desc: 'Diet plans attached to the species, with the dietitian and date.' },
              { src: 'tags', title: 'Tags', desc: 'Public and private tags, searchable and filterable.' }
            ] }
        ]
      },
      {
        id: 'batch',
        label: 'Part 04 · Batch assessment',
        title: 'Assess a whole species at once',
        lede: 'One flow assesses every animal in a species, with quick group data input, smart sequential navigation and filters by site, gender or life stage.',
        /* The deck says navigation advances to "bill height"; its screen shows Length and Testing, so the parameter is not named */
        actions: {
          title: 'Add a batch assessment', numbered: true,
          desc: 'It launches from the species\' quick-action menu and opens the Species Assessment screen.',
          shots: [
            { src: 'batch-launch', title: 'Add Batch Assessment', desc: 'Launch from the species\' quick-action menu to assess all animals together.' },
            { src: 'batch-assess', title: 'Group data input', desc: 'Add an entry per animal, such as weight, for many animals at once.' },
            { src: 'batch-nav', title: 'Smart navigation', desc: 'Step through animals and parameters in sequence.' },
            { src: 'batch-filters', title: 'Filters', desc: 'Filter the assessment by site, gender and life stage.' }
          ]
        }
      }
    ],
    close: {
      label: 'In summary',
      title: 'One module, one collection',
      lede: 'From a single species to the whole institution: recorded, classified and assessed in one place.',
      items: [
        { icon: 'eye', title: 'See the whole collection', desc: 'Species lists, gender-wise population and accession and birth counts across all five taxonomic ranks, searchable by common, scientific or local name.' },
        { icon: 'pets', title: 'Manage every species', desc: 'Population, morph or breed, location, medical, taxonomy, diet, mortality and necropsy, each tracked against the species.' },
        { icon: 'batch', title: 'Assess in batches', desc: 'Collective assessments with group data input and smart sequential navigation, filtered by site, gender or life stage.' },
        { icon: 'shield', title: 'Keep it accurate and private', desc: 'Role-based permissions for Insights, Location Access and the Animal Module, with Hide Insight to keep figures off shared screens.' }
      ]
    }
  },
  /* From References/Module Details Pages/Housing Module  kit (Housing Module Kit) */
  'housing': {
    source: 'Housing Module  kit · Housing Module Kit',
    title: 'Housing',
    kicker: 'Animal Records & Movement',
    sub: 'Manage animal habitats across every site, section and enclosure: organised, navigable and trackable from one place.',
    audience: ['Sites', 'Sections', 'Enclosures', 'Quick actions'],
    area: 'animal',
    back: 'housing',
    parts: [
      {
        id: 'model',
        label: 'Part 01 · The housing model',
        title: 'How housing is organised',
        lede: 'A site contains sections, and each section contains enclosures. An enclosure can hold a single animal, a batch or a group of animals.',
        /* The deck's hierarchy slide plus its "An enclosure may contain" slide, as one unit: each level is a button
           to its part of this page, beside a diagram of the containment path */
        hierarchy: {
          levels: [
            { icon: 'compass', title: 'Site', jump: 'site', desc: 'The top level: an entire facility such as a zoo or reserve. It holds sections, species and every animal record.' },
            { icon: 'areas', title: 'Section', jump: 'section', desc: 'A themed grouping inside a site, such as Big Cats, that gathers related enclosures together for easier management.' },
            { icon: 'home', title: 'Enclosure', jump: 'enclosure', desc: 'The individual habitat where animals live: the most granular level for records and daily care.' }
          ],
          holds: { title: 'Each enclosure holds', items: [
            { icon: 'pets', title: 'Single animal', desc: 'One animal on its own record' },
            { icon: 'batch', title: 'Batch of animals', desc: 'One species, managed as one record' },
            { icon: 'users', title: 'Group of animals', desc: 'A larger group of one species' }
          ] }
        }
      },
      {
        id: 'site',
        label: 'Part 02 · Site management',
        title: 'The site page',
        lede: 'The Site Overview gives a high-level summary of a selected site: view key statistics at a glance, reach the site contact, and navigate through its sections, species and animal records.',
        actions: {
          title: 'The site header', numbered: true,
          desc: 'The parts of the site header, each highlighted on the screen.',
          shots: [
            { src: 'site-name', title: 'Site name', desc: 'The name of the selected site.' },
            { src: 'site-contact', title: 'Site contact', desc: 'The primary contact person responsible for the site.' },
            { src: 'site-callmsg', title: 'Call & message', desc: 'Reach the site administrator instantly.' },
            { src: 'site-menu', title: 'Edit Site (⋮)', desc: 'Extra site actions in the three-dot menu.' },
            { src: 'site', title: 'Summary panel', desc: 'Counts of the species, animals and sections in the site.' }
          ]
        }
      },
      {
        id: 'site-tabs',
        label: 'Part 03 · Site tabs',
        title: 'Seventeen site tabs and quick actions',
        lede: 'All 17 tabs on a site, split across three screens. Reorder them anytime with Rearrange Tabs, or tap the green + for the quick actions sheet.',
        cards: [
          { id: 'site-g1', title: 'Sections, species & notes', icon: 'areas', desc: 'Edit Site, Sections, Species, Animals Under Treatment, Notes and Assessment.',
            shots: [
              { src: 'site-tab-edit', title: 'Edit Site', desc: 'Update and manage the details of an existing site so information stays accurate across the platform.' },
              { src: 'site-tab-sections', title: 'Sections', desc: 'All sections available within the site.' },
              { src: 'site-tab-species', title: 'Species', desc: 'All species currently present at the site.' },
              { src: 'site-tab-treatment', title: 'Animals Under Treatment', desc: 'A real-time overview of all animals currently receiving medical attention, for faster access to patient records.' },
              { src: 'site-tab-notes', title: 'Notes', desc: 'A centralised space to record, view and manage observations related to the site.' },
              { src: 'site-tab-assessment', title: 'Assessment', desc: 'Create, manage and complete assessment checklists for the site.' }
            ] },
          { id: 'site-g2', title: 'Medical, transfers & people', icon: 'users', desc: 'Medical, Animal Transfers, Teams, Media, Users and Incharges.',
            shots: [
              { src: 'site-tab-medical', title: 'Medical', desc: 'A consolidated overview of the medical records created for animals belonging to the site.' },
              { src: 'site-tab-transfers', title: 'Animal Transfers', desc: 'A centralised view of all transfer requests by type: in-house, inter-site and external.' },
              { src: 'site-tab-teams', title: 'Teams', desc: 'Assign the Transfer Team and Security Team for animal transfers, and define approval authority.' },
              { src: 'site-tab-media', title: 'Media', desc: 'A centralised repository for all multimedia files associated with the site.' },
              { src: 'site-tab-users', title: 'Users', desc: 'A directory of all users associated with the site: view roles and contact them directly.' },
              { src: 'site-tab-incharges', title: 'Incharges', desc: 'Assign and manage the personnel accountable for the site\'s daily operations and coordination.' }
            ] },
          { id: 'site-g3', title: 'Mortality, hospital & tags', icon: 'medical', desc: 'Mortality, Food Wastage, Hospital Transfer, Hospitalized Animals and Tags.',
            shots: [
              { src: 'site-tab-mortality', title: 'Mortality', desc: 'A consolidated view of all animal mortality records within the site, for analysis and reporting.' },
              { src: 'site-tab-food-wastage', title: 'Food Wastage', desc: 'Food that was prepared but not consumed across the site.' },
              { src: 'site-tab-hospital-transfer', title: 'Hospital Transfer', desc: 'Transfers between enclosures and the hospital: Pending, In Transit, Accepted, Rejected and Cancelled.' },
              { src: 'site-tab-hospitalized', title: 'Hospitalized Animals', desc: 'All animals belonging to the site currently admitted to the hospital.' },
              { src: 'site-tab-tags', title: 'Tags', desc: 'Create, assign and remove tags to organise, categorise and quickly identify sites.' }
            ] },
          { id: 'site-quick', title: 'Quick actions', icon: 'add', desc: 'Tap the green + and a sheet slides up: tap any action to jump straight to it.',
            shots: [
              { src: 'site-quick', title: 'Quick actions sheet', desc: 'The site\'s quick actions sheet, opened from the green + button.' },
              { src: 'site-quick-batch', title: 'Batch Assessment', desc: 'Record assessments for species belonging to a selected site.' },
              { src: 'site-quick-tag', title: 'Add Tags', desc: 'Create and assign tags to organise and categorise the site.' },
              { src: 'site-quick-note', title: 'Add Note', desc: 'Quickly create and save notes for the selected entity.' },
              { src: 'site-quick-section', title: 'Add Section', desc: 'Create new sections within the site to organise and manage enclosures efficiently.' },
              { src: 'site-quick-home', title: 'Home', desc: 'Return to the Home dashboard.' }
            ] }
        ]
      },
      {
        id: 'section',
        label: 'Part 04 · Section management',
        title: 'The section page',
        lede: 'The Section page is a centralised view of everything inside one section of a site: monitor enclosures, species, animals, notes, assessments, medical records and more.',
        /* The deck's data gives the section summary as Species, Animals and Sections; its slide and screen show Enclosures */
        actions: {
          title: 'The section header', numbered: true,
          desc: 'The parts of the section header, each highlighted on the screen.',
          shots: [
            { src: 'section-name', title: 'Section name', desc: 'The name of the selected section.' },
            { src: 'section-contact', title: 'Section contact', desc: 'The primary contact person for the section.' },
            { src: 'section-callmsg', title: 'Call & message', desc: 'Reach the section administrator instantly.' },
            { src: 'section-menu', title: 'Edit Section (⋮)', desc: 'Extra section actions in the three-dot menu.' },
            { src: 'section', title: 'Summary panel', desc: 'Counts of the species, animals and enclosures in the section.' }
          ]
        }
      },
      {
        id: 'section-tabs',
        label: 'Part 05 · Section tabs',
        title: 'Fourteen section tabs and quick actions',
        lede: 'All 14 tabs on a section, split across three screens. Reorder them anytime with Rearrange Tabs, or tap the green + for the quick actions sheet.',
        cards: [
          { id: 'section-g1', title: 'Enclosures, species & notes', icon: 'manage', desc: 'QR Code, Edit Section, Enclosure, Species and Notes.',
            shots: [
              { src: 'section-tab-qr', title: 'QR Code', desc: 'Scan, download or share QR codes for quick identification and instant access to section details.' },
              { src: 'section-tab-edit', title: 'Edit Section', desc: 'Update and manage the details of an existing section so information stays accurate.' },
              { src: 'section-tab-enclosure', title: 'Enclosure', desc: 'All enclosures available in the section.' },
              { src: 'section-tab-species', title: 'Species', desc: 'All species currently available in the section.' },
              { src: 'section-tab-notes', title: 'Notes', desc: 'A centralised space to record, view and manage observations for the section.' }
            ] },
          { id: 'section-g2', title: 'Assessment, medical & people', icon: 'users', desc: 'Assessment, Medical, Media, Users and Incharges.',
            shots: [
              { src: 'section-tab-assessment', title: 'Assessment', desc: 'Create, manage and complete assessment checklists for the section.' },
              { src: 'section-tab-medical', title: 'Medical', desc: 'A consolidated overview of medical activities and health records for the section.' },
              { src: 'section-tab-media', title: 'Media', desc: 'A centralised repository for all multimedia files associated with the section.' },
              { src: 'section-tab-users', title: 'Users', desc: 'A directory of all users associated with the section, with roles and direct contact.' },
              { src: 'section-tab-incharges', title: 'Incharges', desc: 'Assign and manage the personnel accountable for daily operations in the section.' }
            ] },
          { id: 'section-g3', title: 'Mortality, treatment & tags', icon: 'medical', desc: 'Mortality, Animals Under Treatment, Food Wastage and Tags.',
            shots: [
              { src: 'section-tab-mortality', title: 'Mortality', desc: 'A consolidated view of all animal mortality records within the section.' },
              { src: 'section-tab-treatment', title: 'Animals Under Treatment', desc: 'A real-time overview of animals currently receiving medical attention in the section.' },
              { src: 'section-tab-food-wastage', title: 'Food Wastage', desc: 'Food that was prepared but not consumed across the section.' },
              { src: 'section-tab-tags', title: 'Tags', desc: 'Create, edit or remove tags to organise, categorise and identify sections.' }
            ] },
          { id: 'section-quick', title: 'Quick actions', icon: 'add', desc: 'Tap the green + and a sheet slides up: tap any action to jump straight to it.',
            shots: [
              { src: 'section-quick', title: 'Quick actions sheet', desc: 'The section\'s quick actions sheet, opened from the green + button.' },
              { src: 'section-quick-batch', title: 'Batch Assessment', desc: 'Record assessments for species belonging to a selected section.' },
              { src: 'section-quick-tag', title: 'Add Tags', desc: 'Create and assign tags to organise and categorise records.' },
              { src: 'section-quick-note', title: 'Add Note', desc: 'Quickly create and save notes for animals, enclosures or other entities.' },
              { src: 'section-quick-enclosure', title: 'Add Enclosure', desc: 'Create a new enclosure and assign it to the right site and section.' },
              { src: 'section-quick-home', title: 'Home', desc: 'Return to the Home dashboard.' }
            ] }
        ]
      },
      {
        id: 'enclosure',
        label: 'Part 06 · Enclosure management',
        title: 'The enclosure page',
        lede: 'The Enclosure page brings everything about a single enclosure together: monitor it, view the species and animals housed within, manage records and access enclosure activities from one location.',
        actions: {
          title: 'The enclosure header', numbered: true,
          desc: 'The parts of the enclosure header, each highlighted on the screen.',
          shots: [
            { src: 'enclosure-name', title: 'Enclosure name', desc: 'The name of the selected enclosure.' },
            { src: 'enclosure-contact', title: 'Enclosure contact', desc: 'The primary contact person for the enclosure.' },
            { src: 'enclosure-callmsg', title: 'Call & message', desc: 'Reach the enclosure administrator instantly.' },
            { src: 'enclosure-menu', title: 'Edit Enclosure (⋮)', desc: 'Extra enclosure actions in the three-dot menu.' },
            { src: 'enclosure', title: 'Summary panel', desc: 'Counts of the species and animals in the enclosure.' }
          ]
        }
      },
      {
        id: 'enclosure-tabs',
        label: 'Part 07 · Enclosure tabs',
        title: 'Fourteen enclosure tabs and quick actions',
        lede: 'All 14 tabs on an enclosure, split across three screens. Reorder them anytime with Rearrange Tabs, or tap the green + for the quick actions sheet.',
        cards: [
          { id: 'enclosure-g1', title: 'Overview & species', icon: 'home', desc: 'Mark as Favourite, QR Code, Edit Enclosure, Overview and Species.',
            shots: [
              { src: 'enclosure-tab-favourite', title: 'Mark as Favourite', desc: 'Add the enclosure to your Favourites for quick access from the Focus Hub.' },
              { src: 'enclosure-tab-qr', title: 'QR Code', desc: 'Scan, download or share QR codes for quick access to enclosure details.' },
              { src: 'enclosure-tab-edit', title: 'Edit Enclosure', desc: 'Update and manage the details of an existing enclosure so information stays accurate.' },
              { src: 'enclosure-tab-overview', title: 'Overview', desc: 'The enclosure\'s key info: name, parent enclosure, site and section, enclosure and environment type, sunlight and movability.' },
              { src: 'enclosure-tab-species', title: 'Species', desc: 'All species currently housed in the enclosure.' }
            ] },
          { id: 'enclosure-g2', title: 'Notes, health & media', icon: 'medical', desc: 'Notes, Assessment, Medical, Pool / Lab Request and Media.',
            shots: [
              { src: 'enclosure-tab-notes', title: 'Notes', desc: 'A centralised space to record, view and manage observations for the enclosure.' },
              { src: 'enclosure-tab-assessment', title: 'Assessment', desc: 'Create, manage and complete assessment checklists for the enclosure.' },
              { src: 'enclosure-tab-medical', title: 'Medical', desc: 'A consolidated view of the medical records for all animals housed in the enclosure.' },
              { src: 'enclosure-tab-pool-lab', title: 'Pool / Lab Request', desc: 'Pool lab requests linked to the enclosure, here with none yet recorded.' },
              { src: 'enclosure-tab-media', title: 'Media', desc: 'A centralised repository for all multimedia files associated with the enclosure.' }
            ] },
          { id: 'enclosure-g3', title: 'Incharges, tags & audit', icon: 'approve', desc: 'Incharges, Food Wastage, Tags and Audit.',
            shots: [
              { src: 'enclosure-tab-incharges', title: 'Incharges', desc: 'Assign the personnel accountable for daily operations in the enclosure.' },
              { src: 'enclosure-tab-food-wastage', title: 'Food Wastage', desc: 'Record, update or delete food wastage at the enclosure level.' },
              { src: 'enclosure-tab-tags', title: 'Tags', desc: 'Create and manage tags to organise, categorise and identify enclosures.' },
              { src: 'enclosure-tab-audit', title: 'Audit', desc: 'Verify that the animals physically present in the enclosure match the records in the system.' }
            ] },
          { id: 'enclosure-quick', title: 'Quick actions', icon: 'add', desc: 'Tap the green + and a sheet slides up: tap any action to jump straight to it.',
            shots: [
              { src: 'enclosure-quick', title: 'Quick actions sheet', desc: 'The enclosure\'s quick actions sheet, opened from the green + button.' },
              { src: 'enclosure-quick-batch', title: 'Batch Assessment', desc: 'Record assessments for species belonging to a selected enclosure.' },
              { src: 'enclosure-quick-tag', title: 'Add Tag', desc: 'Create and assign tags to organise and categorise records.' },
              { src: 'enclosure-quick-note', title: 'Add Note', desc: 'Create and save notes related to the enclosure.' },
              { src: 'enclosure-quick-sub', title: 'Add Sub Enclosure', desc: 'Create a sub-enclosure nested within this enclosure.' },
              { src: 'enclosure-quick-animal', title: 'Add Animal', desc: 'Add a new animal directly into this enclosure.' },
              { src: 'enclosure-quick-home', title: 'Home', desc: 'Return to the Home dashboard.' }
            ] }
        ]
      },
      {
        id: 'contents',
        label: 'Part 08 · What lives inside',
        title: 'An enclosure may contain',
        lede: 'Depending on how the animals are housed and tracked, every enclosure holds one of three record types.',
        /* The deck's "An enclosure may contain" slide, with the Add screen for each record type */
        chain: true,
        cards: [
          { id: 'contents-single', title: 'Single animal', icon: 'pets', desc: 'One animal on its own record.',
            shots: [{ src: 'holds-single', title: 'Single animal', desc: 'Add Animal with Single selected: species, accession type and date, ownership term, enclosure and sex type.' }] },
          { id: 'contents-batch', title: 'Batch of animals', icon: 'batch', desc: 'One species, managed as one record.',
            shots: [{ src: 'holds-batch', title: 'Batch of animals', desc: 'Add Animal with Batch selected: a count each of male, female, undetermined and indeterminate, then the basic information.' }] },
          { id: 'contents-group', title: 'Group of animals', icon: 'users', desc: 'A larger group of one species.',
            shots: [{ src: 'holds-group', title: 'Group of animals', desc: 'Add Group of Animals: a total count, accession details, species, enclosure, sex type and collection type.' }] }
        ]
      },
      {
        id: 'features',
        label: 'Part 09 · Compared',
        title: 'Feature availability',
        lede: 'Most features work at every level of housing. Transfers, teams and hospital tracking live at the site; treatment tracking and user access stop at the section.',
        /* Rows and marks as in the deck's matrix. Three marks do not match the deck's own tab lists: Mortality is marked for
           Enclosure but is not among its 14 tabs; QR Code is marked for Site, whose 17 tabs and header show none; Favourites is
           marked for Site and Section, but only the enclosure has Mark as Favourite. Left as the deck has them, pending a check. */
        compare: {
          corner: 'Feature',
          types: [
            { title: 'Site', sub: 'The whole facility', tone: 'green' },
            { title: 'Section', sub: 'A group of enclosures', tone: 'clay' },
            { title: 'Enclosure', sub: 'The individual habitat', tone: 'yellow' }
          ],
          rows: [
            { title: 'Navigation shortcuts', desc: 'Tabs you can reorder with Rearrange Tabs.', icon: 'compass',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Administration', desc: 'Edit the details of the site, section or enclosure.', icon: 'edit',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Overview', desc: 'Key statistics at a glance in the summary panel.', icon: 'report',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Species listing', desc: 'The species present at that level.', icon: 'species',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Treatment tracking', desc: 'Animals currently receiving medical attention.', icon: 'medicine',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: false, text: 'Not available' }] },
            { title: 'Notes', desc: 'Record, view and manage observations.', icon: 'note',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Assessment', desc: 'Create, manage and complete assessment checklists.', icon: 'approve',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Medical records', desc: 'A consolidated view of medical records.', icon: 'medical',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Animal transfers', desc: 'In-house, inter-site and external transfer requests.', icon: 'transfer',
              cells: [{ ok: true, text: 'Available' }, { ok: false, text: 'Not available' }, { ok: false, text: 'Not available' }] },
            { title: 'Team management', desc: 'Transfer Team, Security Team and approval authority.', icon: 'users',
              cells: [{ ok: true, text: 'Available' }, { ok: false, text: 'Not available' }, { ok: false, text: 'Not available' }] },
            { title: 'Media upload', desc: 'A repository for multimedia files.', icon: 'add',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'User access', desc: 'A directory of users, with roles and direct contact.', icon: 'access',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: false, text: 'Not available' }] },
            { title: 'Incharge assignment', desc: 'The personnel accountable for daily operations.', icon: 'manage',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Mortality tracking', desc: 'Animal mortality records for analysis and reporting.', icon: 'alert',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Food wastage', desc: 'Food prepared but not consumed.', icon: 'diet',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Hospital tracking', desc: 'Transfers between enclosures and the hospital.', icon: 'medical',
              cells: [{ ok: true, text: 'Available' }, { ok: false, text: 'Not available' }, { ok: false, text: 'Not available' }] },
            { title: 'Hospitalized animals', desc: 'Animals currently admitted to the hospital.', icon: 'pets',
              cells: [{ ok: true, text: 'Available' }, { ok: false, text: 'Not available' }, { ok: false, text: 'Not available' }] },
            { title: 'QR code', desc: 'Scan, download or share for instant access.', icon: 'link',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Favourites & bookmark', desc: 'Quick access from the Focus Hub.', icon: 'focus',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Tags', desc: 'Organise, categorise and identify.', icon: 'tag',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] },
            { title: 'Batch assessment', desc: 'Record assessments for the species at that level.', icon: 'approve',
              cells: [{ ok: true, text: 'Available' }, { ok: true, text: 'Available' }, { ok: true, text: 'Available' }] }
          ]
        }
      }
    ],
    close: {
      label: 'You\'re ready',
      title: 'That\'s the Housing module',
      lede: 'You now know how habitats are organised and how to work at every level of the hierarchy.',
      items: [
        { icon: 'compass', title: 'Site', desc: 'The whole facility: its sections, species and every animal record in one place.' },
        { icon: 'areas', title: 'Section', desc: 'A themed grouping of enclosures for easier day-to-day management.' },
        { icon: 'home', title: 'Enclosure', desc: 'The individual habitat: the most granular level for records and care.' }
      ]
    }
  },
  /* From References/Module Details Pages/09_Animal management (Animal Management Kit) */
  'animal-management': {
    source: '09_Animal management · Animal Management Kit',
    title: 'Animal Management',
    kicker: 'Animal Records & Movement',
    sub: 'Every animal record in one place: active, transferred, missing or deleted. Browse the collection, open a full profile, and track each animal\'s journey from accession to incharge handover.',
    audience: ['Zookeepers', 'Veterinarians', 'Animal dietitians', 'Conservation biologists', 'Zoo directors'],
    area: 'animal',
    back: 'animal-management',
    parts: [
      {
        id: 'lists',
        label: 'Part 01 · The lists',
        title: 'Five lists, one database',
        /* The deck's "What it does" slide has no screens, so its text is folded into this lede */
        lede: 'The Animals Module brings all animal records together, whether active, transferred, missing or deleted. The home of the module is a tabbed list: every animal sits in exactly one state, and you switch between them without leaving the screen.',
        actions: {
          title: 'The Animals list', numbered: true,
          desc: 'Five tabs over one database. Point at a tab to see it on the phone.',
          shots: [
            { src: 'list-recent', title: 'Recently Added', desc: 'Newly accessioned animals.' },
            { src: 'list-all', title: 'All Animals', desc: 'The complete database, searchable and filterable.' },
            { src: 'list-transferred', title: 'Transferred Animals', desc: 'Animals moved between sites or enclosures.' },
            { src: 'list-deleted', title: 'Deleted Animals', desc: 'Records of removed animals.' },
            { src: 'list-missing', title: 'Missing / Escaped Animals', desc: 'Animals flagged missing or escaped.' }
          ]
        }
      },
      {
        id: 'card',
        label: 'Part 02 · The card',
        title: 'Read an animal at a glance',
        lede: 'Each animal card carries the identity, the quick-access tools and the actions you reach for most, before you ever open the full profile.',
        actions: {
          title: 'Anatomy of a card', numbered: true,
          desc: 'Four things on every card, each highlighted on the screen.',
          shots: [
            { src: 'card-keyinfo', title: 'Key information', desc: 'Common and scientific name, breed or morph, sex, life stage, enclosure, animal ID and identifier name.' },
            { src: 'card-fav', title: 'Favourites', desc: 'Star an animal for quick access and easier tracking from the Focus Hub.' },
            { src: 'card-qr', title: 'Animal QR code', desc: 'Download, share or scan the QR code for instant identification and record access.' },
            { src: 'card-menu', title: 'Three-dot menu', desc: 'Update and split counts for group animal entries, for precise record management.' }
          ]
        }
      },
      {
        id: 'profile',
        label: 'Part 03 · The profile',
        title: 'The animal profile',
        lede: 'Open any animal and view the full record: a tabbed profile that carries identity, care, history and handover in one place, with deep data and no crowded screen.',
        cards: [
          { id: 'overview', title: 'Overview & context menu', icon: 'eye', desc: 'The front page of every animal, and one-tap access to the actions keepers log most.',
            shots: [
              { src: 'overview', title: 'Overview', desc: 'Animal ID, birth date, collection and sexing type, ownership term, accession date, age, contraception, organisation and enclosure.' },
              { src: 'context', title: 'Context menu', desc: 'Record fetal death, report missing or escaped, add notes, start transfers, log mortality and medical records, hospitalise and record eggs laid.' }
            ] },
          { id: 'science', title: 'Taxonomy & assessment', icon: 'species', desc: 'Classified from the species record, then assessed across five welfare domains.',
            shots: [
              { src: 'taxonomy', title: 'Taxonomy', desc: 'The class, order, family, genus and species the animal belongs to, drawn from the species register.' },
              { src: 'assessment', title: 'Assessment', desc: 'Physical Health, Behaviour, Environment, Mental Domain and Nutrition, for targeted data collection.' }
            ] },
          { id: 'records', title: 'Care records & journal', icon: 'note', desc: 'Notes, the event journal, medical history and media, read as one continuous thread of care.',
            shots: [
              { src: 'journal', title: 'Journal', desc: 'A timeline of every event: medical, transfer, mortality, necropsy and fetal death.' },
              { src: 'medical', title: 'Medical records', desc: 'Assessments, symptoms, prescriptions, vaccination, deworming, supplements and lab requests.' },
              { src: 'notes', title: 'Notes', desc: 'All notes for the animal across its site, section and enclosure.' },
              { src: 'media', title: 'Media', desc: 'Manage animal-related images, videos and documents.' }
            ] },
          { id: 'identity', title: 'Identity, history & lineage', icon: 'history', desc: 'Identifiers, housing history, incidents, diet, lineage and offspring: the tabs that situate an animal in its world.',
            shots: [
              { src: 'identifier', title: 'Identifier', desc: 'Add, edit or delete a local identifier: set its type and name, mark it primary and upload images.' },
              { src: 'history', title: 'History', desc: 'Current and past enclosure details.' },
              { src: 'incidents', title: 'Incidents', desc: 'View, edit and track missing or found incident reports.' },
              { src: 'diet', title: 'Diet', desc: 'Up-to-date diet plans for the animal, for nutritional management.' },
              { src: 'lineage', title: 'Lineage', desc: 'Track the genetic and breeding history of the animal.' },
              { src: 'offspring', title: 'Offspring', desc: 'Record and manage the progeny of the selected animal.' }
            ] },
          { id: 'handover', title: 'Transfer & incharge', icon: 'transfer', desc: 'Hospital transfer status and the chain of responsibility travel with the record.',
            shots: [
              { src: 'hospital', title: 'Hospital transfer', desc: 'Track requests through Pending, In-transit, Accepted, Cancelled or Rejected.' },
              { src: 'incharge', title: 'Incharges', desc: 'Who is currently assigned, with a timeline of current and previous incharges for accountability.' }
            ] },
          { id: 'tags', title: 'Tags', icon: 'tag', desc: 'Label an animal for quick filtering by group, condition or care priority.',
            shots: [
              { src: 'tags', title: 'Tags', desc: 'The animal\'s tags, shown on its profile header too. Search and filter them, switch between Public and Private tags, and add one with the green +.' }
            ] }
        ]
      }
    ],
    close: {
      label: 'In short',
      title: 'One record, kept well',
      lede: 'Good data, good insights, healthy animals. The Animals Module is where that chain begins.',
      items: [
        { icon: 'manage', title: 'One record, five lists', desc: 'Recently added, all animals, transferred, deleted and missing: every animal in exactly one state, switchable in place.' },
        { icon: 'eye', title: 'The card, then the profile', desc: 'Identity, favourites, QR and quick actions on the card; the full tabbed profile one tap deeper.' },
        { icon: 'medical', title: 'Care kept as one thread', desc: 'Overview, taxonomy, assessment, journal, medical, media, history and lineage, all hung off the same animal.' },
        { icon: 'transfer', title: 'Moved and accounted for', desc: 'Transfers carry their status and the incharge chain travels with the animal, gated by clear role permissions.' }
      ]
    }
  },
  /* From References/Module Details Pages/Medical Records PPT Kit (Medical Records Kit) */
  'medical-records': {
    source: 'Medical Records PPT Kit · Medical Records Kit',
    title: 'Medical Records',
    kicker: 'Medical & Treatment',
    sub: 'Record, track and manage animal health: diagnoses, prescriptions, treatments and follow-ups. This walkthrough takes new veterinarians and para-vets through the module, screen by screen.',
    audience: ['Veterinarians', 'Para-Veterinarians', 'Diagnoses', 'Prescriptions', 'Lab Requests'],
    area: 'medical',
    back: 'medical-records',
    parts: [
      {
        id: 'module',
        label: 'Part 01 · The module',
        title: 'The Medical module',
        lede: 'Record, track and manage animal health, including diagnoses, prescriptions and treatments, with organised histories and coordination across the vet team.',
        chain: true,
        cards: [
          { id: 'create', title: 'Record creation', icon: 'add', desc: 'Single, batch, group, scheduled or direct workflows, with lab requests and exact date and time logging.',
            shots: [{ src: 'create', title: 'Record creation', desc: 'Quick actions for Single, Group and Batch records, Pool Lab Request, Direct Administer, Prescription, Vaccination and Deworming, and Schedule Vaccination.' }] },
          { id: 'overview', title: 'Record overview', icon: 'eye', desc: 'A quick summary showing doctor details and the animal profile for easy reference.',
            shots: [{ src: 'overview', title: 'Record overview', desc: 'Medical record MED-09501 with the doctor, animal profile, case type and symptoms.' }] },
          { id: 'edit', title: 'Bookmark, edit, delete & download', icon: 'edit', desc: 'Bookmark, modify or remove records. Downloaded reports are emailed to the registered address.',
            shots: [{ src: 'bookmark-edit', title: 'Bookmark & edit', desc: 'A medical record with the bookmark, edit and more-options icons highlighted at the top.' }] },
          { id: 'journal', title: 'Medical journal timeline', icon: 'note', desc: 'A chronological log of every add and edit action, with full traceability.',
            shots: [{ src: 'journal', title: 'Medical journal', desc: 'The journal timeline, with dated entries for Edit Symptoms and Transfer To Hospital.' }] },
          { id: 'reassign', title: 'Reassign records', icon: 'users', desc: 'Doctors with edit permission can reassign a record created by another vet to themselves.',
            shots: [{ src: 'reassign', title: 'Reassign record', desc: 'The confirmation dialog: do you want to reassign this medical record to yourself?' }] }
        ]
      },
      {
        id: 'create',
        label: 'Part 02 · Where care begins',
        title: 'Record creation options',
        lede: 'Every medical record starts the same way: pick a workflow, set the exact date and time, and choose the case type. There are several routes in, each suited to a different moment of care.',
        cards: [
          { id: 'quick', title: 'Quick Actions menu', icon: 'add', desc: 'Add a single, batch, group or scheduled record, or a direct administer or prescription, from one shortcut menu.',
            shots: [{ src: 'quick-actions', title: 'Add Medical Record', desc: 'Quick actions for Single, Group and Batch medical records, Pool Lab Request, Direct Administer, Prescription and Vaccination, and Schedule Vaccination.' }] },
          { id: 'animal', title: 'Flexible entry from the animal page', icon: 'pets', desc: 'Add a record straight from an animal\'s details, with a selectable record date and time to log the entry accurately.',
            shots: [{ src: 'animal-page', title: 'Record date & time', desc: 'Add Medical Record with the record date and time, the selected giraffe and the clinical sections below.' }] },
          { id: 'case', title: 'Animal case type selection', icon: 'tag', desc: 'Choose a predefined case type (Standard, Supplements, Vaccination or Quarantine) for structured, categorised records.',
            shots: [{ src: 'case-type', title: 'Case type', desc: 'Add Medical Record with the Standard case type highlighted.' }] }
        ]
      },
      {
        id: 'clinical',
        label: 'Part 03 · The detail that matters',
        title: 'The clinical record',
        lede: 'Inside a record, the clinical picture builds up: notes and assessments, symptoms, diagnosis and prescriptions, then lab requests, files and the doctor\'s advice for follow-up.',
        /* Deck slides 7, 8 and 9 (three highlighted tours of the Add Medical Record form) joined into one tour */
        actions: {
          title: 'Add Medical Record', numbered: true,
          desc: 'Each section of the form, highlighted in turn. Templates save time: frequently used symptoms, assessments and prescriptions can be stored and reapplied to the next record in a couple of taps.',
          shots: [
            { src: 'clinical-notes', title: 'Clinical notes', desc: 'Record and manage clinical observations for caretakers and team members, for clear communication.' },
            { src: 'assessments', title: 'Assessments', desc: 'Animal-specific metrics, such as weight, beak length and enclosure details, for accurate health tracking.' },
            { src: 'symptoms', title: 'Symptoms', desc: 'Search a list of common symptoms or reuse custom templates, and record duration and severity for each.' },
            { src: 'clinical-assessment', title: 'Clinical assessments', desc: 'Select an assessment from a searchable list or a saved template, with duration and severity captured.' },
            { src: 'prescription', title: 'Prescriptions', desc: 'Regular-interval or single-frequency schedules, with multiple dosages, durations, delivery routes and caretaker notes.' },
            { src: 'attachments', title: 'Attachments', desc: 'Upload supporting files such as lab reports or reference documents.' },
            { src: 'advice', title: 'Doctor\'s advice & follow-up', desc: 'Enter or select advice for para-vets and set a follow-up date to keep care on track.' },
            { src: 'lab-request', title: 'Lab requests', desc: 'Raise a request by selecting the laboratory centre and the tests required for the sample.' }
          ]
        }
      },
      {
        id: 'summary',
        label: 'Part 04 · Once the record exists',
        title: 'Medical record summary',
        lede: 'The record\'s home view. See a record at a glance, change it, and trace every change through its journal.',
        actions: {
          title: 'Record MED29-18848', numbered: true,
          desc: 'Five areas of a real record screen, each highlighted on the phone.',
          shots: [
            { src: 'summary-overview', title: 'Record overview', desc: 'A concise summary: the attending doctor\'s details and the animal\'s profile for fast reference.' },
            { src: 'summary-edit', title: 'Edit record', desc: 'Update the record if changes or corrections are needed.' },
            { src: 'summary-delete', title: 'Delete & download record', desc: 'Remove the record, or download the report, which is sent to the registered email address.' },
            { src: 'summary-timeline', title: 'Medical journal timeline', desc: 'A chronological view of every add and edit action, for transparency and traceability.' },
            { src: 'summary-administer', title: 'Direct administration', desc: 'Administer a prescribed medicine directly, with a hand-off to the Administer module.' }
          ]
        }
      },
      {
        id: 'journal',
        label: 'Part 05 · Every change',
        title: 'Medical journal',
        lede: 'Every change, on the record forever.',
        actions: {
          title: 'The medical journal', numbered: true,
          desc: 'The journal tab of an animal, and the tools that narrow it down.',
          shots: [
            { src: 'journal-logs', title: 'Chronological logs', desc: 'A time-ordered log of every add and edit action, for transparency and traceability.' },
            { src: 'journal-tabs', title: 'Split tabs', desc: 'Updates split into Medical, Administer, Supplement, Vaccination, Deworming and Fetal death tabs, for clearer tracking.' },
            { src: 'journal-filter', title: 'Filter by user & timeline', desc: 'Narrow the log by the user who acted and by date, for easy auditing.' }
          ]
        }
      },
      {
        id: 'stats',
        label: 'Part 06 · Listing & stats',
        title: 'Record listing & health stats',
        lede: 'The module\'s front door: the health of the whole collection at a glance, where statistics and filters turn many records into a clear picture.',
        /* The deck says complaints and diagnoses; the app screens label these Symptoms and Clinical Assessment, so the copy follows the app */
        actions: {
          title: 'Medical stats', numbered: true,
          desc: 'Four areas of the Medical dashboard, each highlighted on the phone.',
          shots: [
            { src: 'stats-health', title: 'Health statistics', desc: 'Total counts of sick animals and affected species, and an at-a-glance view of current health issues.' },
            { src: 'stats-filters', title: 'Advanced filters', desc: 'Narrow by site, date range and status, active or closed, across every category.' },
            { src: 'stats-category', title: 'Category-wise stats', desc: 'Separate counts for records, symptoms, clinical assessments and prescriptions show how cases are distributed.' },
            { src: 'stats-categories', title: 'Record categories', desc: 'Jump into medical records, symptoms, clinical assessments, prescriptions and more from one screen.' }
          ]
        }
      },
      {
        id: 'lists',
        label: 'Part 07 · Lists & retrieval',
        title: 'Symptoms, clinical assessments, prescriptions and more',
        lede: 'Every category is a filterable, searchable list.',
        actions: {
          title: 'Medical record list', numbered: true,
          desc: 'Four areas of the record list, each highlighted on the phone.',
          shots: [
            { src: 'list-my-all', title: 'My / All medical records', desc: 'Switch between your own records and every record across the site.' },
            { src: 'list-search', title: 'Search & filter', desc: 'Filter for active symptoms, clinical assessments and prescriptions, and search to retrieve any record fast.' },
            { src: 'list-cards', title: 'Record cards', desc: 'Each card carries the record ID, case type, date and the animal\'s profile at a glance.' },
            { src: 'list-categories', title: 'Category lists', desc: 'Symptoms, Clinical Assessment, Prescriptions, Vaccination, Deworming, Supplement and Lab lists, by species or by type, grouped into active and closed cases.' }
          ]
        }
      }
    ],
    close: {
      label: 'From the Antz team',
      title: 'You\'re set',
      lede: 'Keep this guide close in your first weeks with the Medical module: every part is a reference you can return to. Questions or ideas to improve a workflow? The Help Desk is one tap away.'
    }
  },
  /* From References/Module Details Pages/SYMPTOMS, CLINICAL ASSESSMENT and PRESCRIPTION (Medical Assessment Interactive Kit) */
  'symptoms-clinical-assessment-prescription': {
    source: 'SYMPTOMS, CLINICAL ASSESSMENT and PRESCRIPTION · Medical Assessment Interactive Kit',
    title: 'Symptoms, Clinical Assessment & Prescription',
    kicker: 'Medical & Treatment',
    sub: 'A walkthrough of the three medical-analytics screens: recorded symptoms, clinical assessments and prescribed treatments. Each lists its records by species or by type, grouped into active and closed cases, and every row drills down to the full medical record.',
    audience: ['Veterinarians', 'Para-Veterinarians', 'New starters'],
    area: 'medical',
    back: 'symptoms-clinical-assessment-prescription',
    parts: [
      {
        id: 'symptoms',
        label: 'Part 01 · Medical analytics',
        title: 'Symptoms',
        lede: 'Lists recorded symptoms by species or by symptom type, split into active and closed cases for clear tracking and management.',
        actions: {
          title: 'From symptom to record', numbered: true,
          desc: 'See the most commonly recorded symptoms across species and track occurrence over time, then drill into any symptom in three steps.',
          shots: [
            { src: 'symptoms-step1', title: 'Browse the symptom list', desc: 'Tap to switch the summary between a species count and a by-symptom breakdown.' },
            { src: 'symptoms-step2', title: 'Open active / closed cases', desc: 'Every symptom drills into its live and resolved medical records.' },
            { src: 'symptoms-step3', title: 'Read the full record', desc: 'Open a case for the animal, clinician, site and clinical notes, with case type, symptoms and clinical assessment.' }
          ]
        }
      },
      {
        id: 'clinical',
        label: 'Part 02 · Medical analytics',
        title: 'Clinical Assessment',
        lede: 'Displays clinical assessments by species or by assessment type, with active and closed status grouping for comprehensive tracking.',
        actions: {
          title: 'From condition to record', numbered: true,
          desc: 'Monitor assessments performed across animals and see which conditions recur most, from liver disease to bloat.',
          shots: [
            { src: 'clinical-step1', title: 'Browse conditions', desc: 'Conditions listed by species or by assessment, with the most frequent diagnoses first.' },
            { src: 'clinical-step2', title: 'Open active / closed cases', desc: 'Track ongoing versus resolved assessments for a condition.' },
            { src: 'clinical-step3', title: 'Read the full record', desc: 'Open any case for the animal, diagnosis, clinician and site.' }
          ]
        }
      },
      {
        id: 'prescription',
        label: 'Part 03 · Medical analytics',
        title: 'Prescription',
        lede: 'Access prescription records by species or by medicine usage, with active and closed status to streamline monitoring and management.',
        actions: {
          title: 'From medicine to record', numbered: true,
          desc: 'View commonly prescribed medicines and treatment patterns across species. Controlled substances are CS-flagged for compliance at a glance.',
          shots: [
            { src: 'prescription-step1', title: 'Browse medicines', desc: 'Medicines listed by species or by prescription, each with its count.' },
            { src: 'prescription-step2', title: 'Open active / closed courses', desc: 'Separate live treatment courses from completed ones, each showing frequency, dose, duration and date range.' },
            { src: 'prescription-step3', title: 'Read the full record', desc: 'The full medical record with an active prescription.' }
          ]
        }
      }
    ],
    close: {
      label: 'From the Antz team',
      title: 'Thank you',
      lede: 'That\'s the medical-analytics walkthrough. Keep this guide close in your first weeks: every screen here mirrors the live app. Questions or ideas to improve a workflow? The Help Desk is one tap away.'
    }
  },
  /* From References/Module Details Pages/Vaccination Interactive Kit (Vaccination Interactive Kit) */
  'vaccination': {
    source: 'Vaccination Interactive Kit · Vaccination Interactive Kit',
    title: 'Vaccination',
    kicker: 'Medical & Treatment',
    sub: 'The complete vaccination lifecycle in one module: schedule and administer, track every status, record dosage and follow-up, and keep a fully traceable history for better disease prevention and clinical compliance.',
    audience: ['Veterinarians', 'Para-Veterinarians', 'Clinical teams'],
    area: 'medical',
    back: 'vaccination',
    parts: [
      {
        id: 'hub',
        label: 'Part 01 · The module',
        title: 'The status hub',
        lede: 'Open Vaccination for any site and you land here. Every vaccination is organised into a status, and two actions let you add new ones.',
        actions: {
          title: 'Vaccination hub', numbered: true,
          desc: 'Five statuses and two ways to add, each highlighted on the screen.',
          shots: [
            { src: 'hub-upcoming', title: 'Upcoming', desc: 'Scheduled vaccinations coming due, by date and site.' },
            { src: 'hub-pending', title: 'Pending', desc: 'Scheduled but not yet administered, awaiting action.' },
            { src: 'hub-completed', title: 'Completed', desc: 'View or revoke administered vaccinations, by date and site.' },
            { src: 'hub-skipped', title: 'Skipped', desc: 'View postponed vaccines with a reason and reschedule date.' },
            { src: 'hub-stopped', title: 'Stopped Vaccine', desc: 'View halted vaccinations that are not required.' },
            { src: 'hub-administer', title: 'Direct Administer', desc: 'Record a vaccine you are giving now or gave in the past.' },
            { src: 'hub-schedule', title: 'Schedule Vaccination', desc: 'Plan a vaccination ahead with its medicine, date and site.' }
          ]
        }
      },
      {
        id: 'statuses',
        label: 'Part 02 · Status views',
        title: 'Status-based views',
        lede: 'Every vaccination lives in exactly one status. The five views make monitoring simple: you always know what is coming, what is waiting, and what is done.',
        chain: true,
        cards: [
          { id: 'upcoming', title: 'Upcoming', icon: 'bell', desc: 'All upcoming vaccinations by date and site, so nothing is missed.',
            shots: [{ src: 'status-upcoming', title: 'Upcoming', desc: 'All upcoming vaccinations by date and site, so nothing is missed.' }] },
          { id: 'pending', title: 'Pending', icon: 'priority', desc: 'Scheduled vaccinations awaiting administration, by date and site.',
            shots: [{ src: 'status-pending', title: 'Pending', desc: 'Scheduled vaccinations awaiting administration, by date and site.' }] },
          { id: 'completed', title: 'Completed', icon: 'approve', desc: 'All administered vaccinations, with full dosage and batch history.',
            shots: [{ src: 'status-completed', title: 'Completed', desc: 'All administered vaccinations, with full dosage and batch history.' }] },
          { id: 'skipped', title: 'Skipped', icon: 'edit', desc: 'Postponed vaccinations, each with a reason and reschedule date.',
            shots: [{ src: 'status-skipped', title: 'Skipped', desc: 'Postponed vaccinations, each with a reason and reschedule date.' }] },
          { id: 'stopped', title: 'Stopped', icon: 'alert', desc: 'Halted vaccinations, kept on record and re-schedulable.',
            shots: [{ src: 'status-stopped', title: 'Stopped', desc: 'Halted vaccinations, kept on record and re-schedulable.' }] }
        ]
      },
      {
        id: 'add',
        label: 'Part 03 · Add',
        title: 'Schedule or direct administer',
        lede: 'Adding a vaccination gives you two paths. Plan one for later, or record one you are giving right now: both capture the same medicine and date details. Direct administer adds the recording step covered next.',
        chain: true,
        cards: [
          { id: 'schedule', title: 'Schedule vaccination', icon: 'add', desc: 'Plan ahead: set the medicine, date and site. It lands in Upcoming and moves to Pending as it comes due.',
            shots: [{ src: 'add-schedule', title: 'Schedule vaccination', desc: 'Plan ahead: set the medicine, date and site. It lands in Upcoming and moves to Pending as it comes due.' }] },
          { id: 'direct', title: 'Direct administer', icon: 'vaccine', desc: 'Record a vaccine you are giving now or gave in the past, and capture dosage and batch on the spot. It goes straight to Completed.',
            shots: [{ src: 'add-administer', title: 'Direct administer', desc: 'Record a vaccine you are giving now or gave in the past, and capture dosage and batch on the spot. It goes straight to Completed.' }] }
        ]
      },
      {
        id: 'recording',
        label: 'Part 04 · Recording',
        title: 'Administration recording',
        lede: 'When a vaccine is given, the module captures everything needed for an accurate, traceable record.',
        actions: {
          title: 'What gets captured', numbered: true,
          desc: 'Five fields on the Add Vaccine form, each highlighted on the screen.',
          shots: [
            { src: 'record-dose-type', title: 'Dose type: fixed or weight-based', desc: 'Choose a set dose, or calculate it from the animal\'s current weight.' },
            { src: 'record-quantity', title: 'Dosage quantity', desc: 'Enter the amount to administer, drawn against available stock.' },
            { src: 'record-route', title: 'Delivery route', desc: 'How it was given: intramuscular, subcutaneous, oral and more.' },
            { src: 'record-followup', title: 'Next follow-up date (optional)', desc: 'Set the next-dose date and it schedules the follow-up for you.' },
            { src: 'record-batch', title: 'Batch number (mandatory)', desc: 'Record the vial\'s batch for recall traceability and audit.' }
          ]
        }
      },
      {
        id: 'skip-stop',
        label: 'Part 05 · Skip & stop',
        title: 'Skip, stop & administer',
        lede: 'Plans change. Postpone a dose or halt a course entirely: both always require a reason, so the history stays complete. Skip and stop follow the same flow: select the dose, add the reason (required), then reschedule or stop.',
        chain: true,
        cards: [
          { id: 'reschedule', title: 'Reschedule', icon: 'edit', desc: 'Postpone this dose. Add a mandatory reason and a follow-up date; it moves to Skipped, then back when due.',
            shots: [{ src: 'action-reschedule', title: 'Reschedule', desc: 'Postpone this dose. Add a mandatory reason and a follow-up date; it moves to Skipped, then back when due.' }] },
          { id: 'stop', title: 'Stop', icon: 'alert', desc: 'Halt the vaccination with a reason. It moves to Stopped and can be rescheduled later if needed.',
            shots: [{ src: 'action-stop', title: 'Stop', desc: 'Halt the vaccination with a reason. It moves to Stopped and can be rescheduled later if needed.' }] },
          { id: 'administer', title: 'Administer', icon: 'approve', desc: 'Record it on the spot or as given in the past, and the vaccination moves straight to Completed.',
            shots: [{ src: 'action-administer', title: 'Administer', desc: 'Record it on the spot or as given in the past, and the vaccination moves straight to Completed.' }] }
        ]
      }
    ],
    close: {
      label: 'In short',
      title: 'One complete lifecycle',
      lede: 'Four capabilities carry a vaccination from planned to permanent record: timely, accurate and fully traceable.',
      items: [
        { icon: 'filter', title: 'Track by status', desc: 'Upcoming, Pending, Completed, Skipped and Stopped keep every dose visible and nothing missed.' },
        { icon: 'vaccine', title: 'Schedule or administer', desc: 'Plan a dose for later or record one given now, both defined by medicine, date and site.' },
        { icon: 'edit', title: 'Record accurately', desc: 'Dosage, batch, route, notes and follow-up captured on administration for full compliance.' },
        { icon: 'history', title: 'Skip, stop & trace', desc: 'Postpone or halt with a mandatory reason, and reach every record from Animal, Housing or Medical.' }
      ]
    }
  },
  /* From References/Module Details Pages/Deworming Interactive Kit (Deworming Interactive Kit) */
  /* Three actions: the deck labels this slide "Two actions" but lists three (skip, stop, administer) */
  'deworming': {
    source: 'Deworming Interactive Kit · Deworming Interactive Kit',
    title: 'Deworming',
    kicker: 'Medical & Treatment',
    sub: 'The complete parasite-control lifecycle in one module: schedule and administer, track every status, record dosage and follow-up, and keep a fully traceable history for timely, well-documented deworming.',
    audience: ['Veterinarians', 'Para-Veterinarians', 'Clinical teams'],
    area: 'medical',
    back: 'deworming',
    parts: [
      {
        id: 'hub',
        label: 'Part 01 · The module',
        title: 'The status hub',
        lede: 'Open Deworming for any site and you land here. Every deworming is organised into a status, and two actions let you add new ones.',
        actions: {
          title: 'Deworming hub', numbered: true,
          desc: 'Five statuses and two ways to add, each highlighted on the screen.',
          shots: [
            { src: 'hub-upcoming', title: 'Upcoming', desc: 'Scheduled deworming coming due, by date and site.' },
            { src: 'hub-pending', title: 'Pending', desc: 'Scheduled but not yet administered, awaiting action.' },
            { src: 'hub-completed', title: 'Completed', desc: 'View or revoke all administered deworming, by date and site.' },
            { src: 'hub-skipped', title: 'Skipped', desc: 'View postponed deworming medicine with a reason and reschedule date.' },
            { src: 'hub-stopped', title: 'Stopped Deworming', desc: 'View halted deworming that is not required.' },
            { src: 'hub-administer', title: 'Direct Administer', desc: 'Record a dose you are giving now or gave in the past.' },
            { src: 'hub-schedule', title: 'Schedule Deworming', desc: 'Plan a deworming ahead with its medicine, date and site.' }
          ]
        }
      },
      {
        id: 'statuses',
        label: 'Part 02 · Status views',
        title: 'Status-based views',
        lede: 'Every deworming lives in exactly one status. The five views make monitoring simple: you always know what is coming, what is waiting, and what is done.',
        chain: true,
        cards: [
          { id: 'upcoming', title: 'Upcoming', icon: 'bell', desc: 'All upcoming deworming by date and site, so nothing is missed.',
            shots: [{ src: 'status-upcoming', title: 'Upcoming', desc: 'All upcoming deworming by date and site, so nothing is missed.' }] },
          { id: 'pending', title: 'Pending', icon: 'priority', desc: 'Scheduled deworming awaiting administration, by date and site.',
            shots: [{ src: 'status-pending', title: 'Pending', desc: 'Scheduled deworming awaiting administration, by date and site.' }] },
          { id: 'completed', title: 'Completed', icon: 'approve', desc: 'View or revoke administered deworming, with full dosage and batch history.',
            shots: [{ src: 'status-completed', title: 'Completed', desc: 'View or revoke administered deworming, with full dosage and batch history.' }] },
          { id: 'skipped', title: 'Skipped', icon: 'edit', desc: 'Postponed deworming, each with a reason and reschedule date.',
            shots: [{ src: 'status-skipped', title: 'Skipped', desc: 'Postponed deworming, each with a reason and reschedule date.' }] },
          { id: 'stopped', title: 'Stopped', icon: 'alert', desc: 'Halted deworming, kept on record and re-schedulable.',
            shots: [{ src: 'status-stopped', title: 'Stopped', desc: 'Halted deworming, kept on record and re-schedulable.' }] }
        ]
      },
      {
        id: 'add',
        label: 'Part 03 · Add',
        title: 'Schedule or direct administer',
        lede: 'Adding a deworming gives you two paths. Plan one for later, or record one you are giving right now: both capture the same medicine and date details. Direct administer adds the recording step covered next.',
        chain: true,
        cards: [
          { id: 'schedule', title: 'Schedule deworming', icon: 'add', desc: 'Plan ahead: set the medicine, date and site. It lands in Upcoming and moves to Pending as it comes due.',
            shots: [{ src: 'add-schedule', title: 'Schedule deworming', desc: 'Plan ahead: set the medicine, date and site. It lands in Upcoming and moves to Pending as it comes due.' }] },
          { id: 'direct', title: 'Direct administer', icon: 'medicine', desc: 'Record a dose you are giving now or gave in the past, and capture dosage and batch on the spot. It goes straight to Completed.',
            shots: [{ src: 'add-administer', title: 'Direct administer', desc: 'Record a dose you are giving now or gave in the past, and capture dosage and batch on the spot. It goes straight to Completed.' }] }
        ]
      },
      {
        id: 'recording',
        label: 'Part 04 · Recording',
        title: 'Administration recording',
        lede: 'When a deworming is given, the module captures everything needed for an accurate, traceable record.',
        actions: {
          title: 'What gets captured', numbered: true,
          desc: 'Five fields on the Add Medicine form, each highlighted on the screen.',
          shots: [
            { src: 'record-dose-type', title: 'Dose type: fixed or weight-based', desc: 'Choose a set dose, or calculate it from the animal\'s current weight.' },
            { src: 'record-quantity', title: 'Dosage quantity', desc: 'Enter the amount to administer, drawn against available stock.' },
            { src: 'record-route', title: 'Delivery route', desc: 'How it was given: oral, intramuscular, subcutaneous and more.' },
            { src: 'record-followup', title: 'Next follow-up date (optional)', desc: 'Set the next-dose date and it schedules the follow-up for you.' },
            { src: 'record-batch', title: 'Batch number (mandatory)', desc: 'Record the medicine\'s batch for recall traceability and audit.' }
          ]
        }
      },
      {
        id: 'skip-stop',
        label: 'Part 05 · Skip & stop',
        title: 'Skip, stop & administer',
        lede: 'Plans change. Postpone a dose or halt a course entirely: both always require a reason, so the history stays complete. Skip and stop follow the same flow: select the dose, add the reason (required), then reschedule or stop.',
        chain: true,
        cards: [
          { id: 'reschedule', title: 'Skip & reschedule', icon: 'edit', desc: 'Postpone this dose. Add a mandatory reason and a follow-up date; it moves to Skipped, then back when due.',
            shots: [{ src: 'action-reschedule', title: 'Skip & reschedule', desc: 'Postpone this dose. Add a mandatory reason and a follow-up date; it moves to Skipped, then back when due.' }] },
          { id: 'stop', title: 'Stop', icon: 'alert', desc: 'Halt the deworming with a reason. It moves to Stopped and can be rescheduled later if needed.',
            shots: [{ src: 'action-stop', title: 'Stop', desc: 'Halt the deworming with a reason. It moves to Stopped and can be rescheduled later if needed.' }] },
          { id: 'administer', title: 'Administer', icon: 'approve', desc: 'Record it on the spot or as given in the past, and it moves straight to Completed.',
            shots: [{ src: 'action-administer', title: 'Administer', desc: 'Record it on the spot or as given in the past, and it moves straight to Completed.' }] }
        ]
      }
    ],
    close: {
      label: 'In short',
      title: 'One complete lifecycle',
      lede: 'Four capabilities carry a deworming from planned to permanent record: timely, accurate and fully traceable.',
      items: [
        { icon: 'filter', title: 'Track by status', desc: 'Upcoming, Pending, Completed, Skipped and Stopped keep every dose visible and nothing missed.' },
        { icon: 'medicine', title: 'Schedule or administer', desc: 'Plan a dose for later or record one given now, both defined by medicine, date and site.' },
        { icon: 'edit', title: 'Record accurately', desc: 'Dosage, batch, route, notes and follow-up captured on administration for full compliance.' },
        { icon: 'history', title: 'Skip, stop & trace', desc: 'Postpone or halt with a mandatory reason, and reach every record from Animal, Housing or Medical.' }
      ]
    }
  },
  /* From References/Module Details Pages/Supplement Interactive Kit (Supplement Interactive Kit) */
  /* sub: the deck cover calls this module "parasite-control and deworming treatments" (copied from Deworming); wording follows the site intro: nutritional and dietary supplement programmes */
  /* hub-stopped: the highlighted row in this screen reads "Stopped Vaccine", not "Stopped Supplements" as on the other hub screens */
  'supplements': {
    source: 'Supplement Interactive Kit · Supplement Interactive Kit',
    title: 'Supplements',
    kicker: 'Medical & Treatment',
    sub: 'Systematic recording and monitoring of nutritional and dietary supplement programmes in one module: schedule and administer, track every status, capture dosage and follow-up, and keep a fully traceable history for timely care and clinical compliance.',
    audience: ['Veterinarians', 'Para-Veterinarians', 'Clinical teams'],
    area: 'medical',
    back: 'supplements',
    parts: [
      {
        id: 'hub',
        label: 'Part 01 · The module',
        title: 'The status hub',
        lede: 'Open Supplements for any site and you land here. Every treatment is organised into a status, and two actions let you add new ones.',
        actions: {
          title: 'Supplement hub', numbered: true,
          desc: 'Five statuses and two ways to add, each highlighted on the screen.',
          shots: [
            { src: 'hub-upcoming', title: 'Upcoming', desc: 'Scheduled supplements coming due, by date and site.' },
            { src: 'hub-pending', title: 'Pending', desc: 'Scheduled but not yet administered, awaiting action.' },
            { src: 'hub-completed', title: 'Completed', desc: 'View or revoke administered supplements, by date and site.' },
            { src: 'hub-skipped', title: 'Skipped', desc: 'Postponed supplements with a reason and reschedule date.' },
            { src: 'hub-stopped', title: 'Stopped Supplements', desc: 'Halted supplements that are no longer required.' },
            { src: 'hub-administer', title: 'Direct Administer', desc: 'Record a supplement you are giving now or gave in the past.' },
            { src: 'hub-schedule', title: 'Schedule Supplements', desc: 'Plan a supplement ahead with its medicine, date and site.' }
          ]
        }
      },
      {
        id: 'statuses',
        label: 'Part 02 · Status views',
        title: 'Status-based views',
        lede: 'Every supplement lives in exactly one status. The five views make monitoring simple: you always know what is coming, what is waiting, and what is done.',
        chain: true,
        cards: [
          { id: 'upcoming', title: 'Upcoming', icon: 'bell', desc: 'All upcoming supplements by date and site, so nothing is missed.',
            shots: [{ src: 'status-upcoming', title: 'Upcoming', desc: 'All upcoming supplements by date and site, so nothing is missed.' }] },
          { id: 'pending', title: 'Pending', icon: 'priority', desc: 'Scheduled supplements awaiting administration, by date and site.',
            shots: [{ src: 'status-pending', title: 'Pending', desc: 'Scheduled supplements awaiting administration, by date and site.' }] },
          { id: 'completed', title: 'Completed', icon: 'approve', desc: 'All administered supplements, with full dosage and batch history.',
            shots: [{ src: 'status-completed', title: 'Completed', desc: 'All administered supplements, with full dosage and batch history.' }] },
          { id: 'skipped', title: 'Skipped', icon: 'edit', desc: 'Postponed supplements, each with a reason and reschedule date.',
            shots: [{ src: 'status-skipped', title: 'Skipped', desc: 'Postponed supplements, each with a reason and reschedule date.' }] },
          { id: 'stopped', title: 'Stopped', icon: 'alert', desc: 'Halted supplements, kept on record and re-schedulable.',
            shots: [{ src: 'status-stopped', title: 'Stopped', desc: 'Halted supplements, kept on record and re-schedulable.' }] }
        ]
      },
      {
        id: 'add',
        label: 'Part 03 · Add',
        title: 'Schedule or direct administer',
        lede: 'Adding a supplement gives you two paths. Plan one for later, or record one you are giving right now: both capture the same medicine and date details. Direct administer adds the recording step covered next.',
        chain: true,
        cards: [
          { id: 'schedule', title: 'Schedule supplement', icon: 'add', desc: 'Plan ahead: set the medicine, date and site. It lands in Upcoming and moves to Pending as it comes due.',
            shots: [{ src: 'add-schedule', title: 'Schedule supplement', desc: 'Plan ahead: set the medicine, date and site. It lands in Upcoming and moves to Pending as it comes due.' }] },
          { id: 'direct', title: 'Direct administer', icon: 'medicine', desc: 'Record a supplement you are giving now, or one given in the past, and capture dosage and batch on the spot. It goes straight to Completed.',
            shots: [{ src: 'add-administer', title: 'Direct administer', desc: 'Record a supplement you are giving now, or one given in the past, and capture dosage and batch on the spot. It goes straight to Completed.' }] }
        ]
      },
      {
        id: 'recording',
        label: 'Part 04 · Recording',
        title: 'Administration recording',
        lede: 'When a supplement is given, the module captures everything needed for an accurate, traceable record.',
        actions: {
          title: 'What gets captured', numbered: true,
          desc: 'Five fields on the Add Supplements form, each highlighted on the screen.',
          shots: [
            { src: 'record-dose-type', title: 'Dose type: fixed or weight-based', desc: 'Choose a set dose, or calculate it from the animal\'s current weight.' },
            { src: 'record-quantity', title: 'Dosage quantity', desc: 'Enter the amount to administer, drawn against available stock.' },
            { src: 'record-route', title: 'Delivery route', desc: 'How it was given: oral, intramuscular, subcutaneous and more.' },
            { src: 'record-followup', title: 'Next follow-up date (optional)', desc: 'Set the next-dose date and it schedules the follow-up for you.' },
            { src: 'record-batch', title: 'Batch number (mandatory)', desc: 'Record the vial\'s batch for recall traceability and audit.' }
          ]
        }
      },
      {
        id: 'skip-stop',
        label: 'Part 05 · Skip & stop',
        title: 'Skip, stop & administer',
        lede: 'Plans change. Postpone a dose or halt a course entirely: both always require a reason, so the history stays complete. Skip and stop follow the same flow: select the dose, add the reason (required), then reschedule or stop.',
        chain: true,
        cards: [
          { id: 'reschedule', title: 'Reschedule', icon: 'edit', desc: 'Postpone this dose. Add a mandatory reason and a follow-up date; it moves to Skipped, then back when due.',
            shots: [{ src: 'action-reschedule', title: 'Reschedule', desc: 'Postpone this dose. Add a mandatory reason and a follow-up date; it moves to Skipped, then back when due.' }] },
          { id: 'stop', title: 'Stop', icon: 'alert', desc: 'Halt the supplement with a reason. It moves to Stopped and can be rescheduled later if needed.',
            shots: [{ src: 'action-stop', title: 'Stop', desc: 'Halt the supplement with a reason. It moves to Stopped and can be rescheduled later if needed.' }] },
          { id: 'administer', title: 'Administer', icon: 'approve', desc: 'Record it on the spot, or as given in the past, and the supplement moves straight to Completed.',
            shots: [{ src: 'action-administer', title: 'Administer', desc: 'Record it on the spot, or as given in the past, and the supplement moves straight to Completed.' }] }
        ]
      }
    ],
    close: {
      label: 'In short',
      title: 'One complete lifecycle',
      lede: 'Four capabilities carry a supplement from planned to permanent record: timely, accurate and fully traceable.',
      items: [
        { icon: 'filter', title: 'Track by status', desc: 'Upcoming, Pending, Completed, Skipped and Stopped keep every dose visible and nothing missed.' },
        { icon: 'diet', title: 'Schedule or administer', desc: 'Plan a dose for later or record one given now, both defined by medicine, date and site.' },
        { icon: 'edit', title: 'Record accurately', desc: 'Dose type, dosage, batch, route, notes and follow-up captured on administration for full compliance.' },
        { icon: 'history', title: 'Skip, stop & trace', desc: 'Postpone or halt with a mandatory reason, and reach every record from Animal, Housing or Medical.' }
      ]
    }
  },
  /* From References/Module Details Pages/HIMS Interactive Kit Design (App) (HIMS Interactive Kit) */
  'hospital-information-management-system-app': {
    source: 'HIMS Interactive Kit Design (App) · HIMS Interactive Kit',
    title: 'Hospital Information Management System (App)',
    kicker: 'Medical & Treatment',
    /* The cover also promises admission, monitoring, treatment and discharge; this app kit covers only transfer, status tracking and security, so the sub keeps to those */
    sub: 'The reference for moving animals to the hospital on the app: raising transfer requests, following their status and passing security at every gate, with complete medical traceability at every stage.',
    audience: ['Veterinarians', 'Para-Vets', 'Hospital staff'],
    area: 'medical',
    back: 'hospital-information-management-system-app',
    parts: [
      {
        id: 'journey',
        label: 'Part 01 · End to end',
        title: 'The hospital journey',
        lede: 'Every hospitalisation follows the same shape: three stages, one path.',
        flow: [
          { icon: 'transfer', title: 'Transfer', desc: 'Request and move the animal from the enclosure.' },
          { icon: 'focus', title: 'Track', desc: 'Follow the request status.' },
          { icon: 'shield', title: 'Security', desc: 'Check in and out at each gate.' }
        ]
      },
      {
        id: 'request',
        label: 'Part 02 · Enclosure to hospital',
        title: 'Transfer requests',
        lede: 'Raise a request to move an animal from its enclosure to the hospital, with medical ID, visit type, purpose and attachments. Complete the pre-transfer checklist, then load and dispatch.',
        /* The deck's second step is a three-screen sequence (checklist, load, move to security); each screen is its own tile here */
        actions: {
          title: 'Walk through it', numbered: true,
          desc: 'Once dispatched, the request enters the tracking flow: follow its status through to acceptance.',
          shots: [
            { src: 'raise-request', title: 'Raise a transfer request', desc: 'Pick the animal, medical ID, visit type, purpose and attachments on the Hospitalize animal screen.' },
            { src: 'fill-checklist', title: 'Fill the checklist', desc: 'With the status at Transfer Initiated, complete the pre-transfer checklist.' },
            { src: 'load-animals', title: 'Load animals', desc: 'Once the checklist is filled for transfer, confirm loading with Load Animals.' },
            { src: 'move-to-security', title: 'Move to security check', desc: 'With the animal loaded for transfer, send it on with Move to Security Check.' }
          ]
        }
      },
      {
        id: 'status',
        label: 'Part 03 · Site & enclosure view',
        title: 'Status tracking',
        lede: 'Every transfer case moves through defined stages, visible from both the site and enclosure level. At a glance, keepers and vets can see where each animal is and act on anything waiting.',
        actions: {
          title: 'The five statuses', numbered: true,
          desc: 'Each status opens its queue as it appears in the app.',
          shots: [
            { src: 'status-pending', title: 'Pending', desc: 'Raised and awaiting the receiving hospital\'s response.' },
            { src: 'status-in-transit', title: 'In Transit', desc: 'Checked out of the site and on its way to the hospital.' },
            { src: 'status-accepted', title: 'Accepted', desc: 'Received at the hospital and ready for admission.' },
            { src: 'status-cancelled', title: 'Cancelled', desc: 'Called off by the originating team before hand-over.' },
            { src: 'status-rejected', title: 'Rejected', desc: 'Declined by the hospital, with a reason recorded.' }
          ]
        }
      },
      {
        id: 'security',
        label: 'Part 04 · Controlled movement',
        title: 'Security check-out & check-in',
        lede: 'Every animal movement is gated. Security scans the animal out and in at both the site boundary and the hospital, so an accepted transfer can only move once it has been verified at each checkpoint, and the whole trail is logged.',
        actions: {
          title: 'Walk through it', numbered: true,
          desc: 'The site checkpoint guards the outer boundary as animals leave for the hospital. The hospital checkpoint confirms arrival and, later, the return journey home.',
          shots: [
            { src: 'site-checkout', title: 'Site gate check-out', desc: 'Verify the animal leaving the site boundary with the Security Checkout action.' },
            { src: 'hospital-checkin', title: 'Hospital check-in', desc: 'Confirm safe arrival at the hospital gate with the Security Checkin action.' },
            { src: 'movement-log', title: 'Movement log', desc: 'Every in and out event, time-stamped by checkpoint.' }
          ]
        }
      }
    ],
    close: {
      label: 'Support',
      title: 'Stuck on a step? Getting help',
      lede: 'Keep this guide handy on day one. When you need a hand with a live case, reach the team through the app: help is one tap from any screen.',
      items: [
        { icon: 'help', title: 'In-app helpdesk', desc: 'Menu, then Helpdesk.' },
        { icon: 'chat', title: 'Team chat', desc: 'Ask your site admin.' }
      ]
    }
  },
  /* From References/Module Details Pages/Mortality Interactive Kit (Mortality Kit) */
  'mortality': {
    source: 'Mortality Interactive Kit · Mortality Kit',
    title: 'Mortality',
    kicker: 'Mortality & Lifecycle',
    sub: 'A working guide to recording animal deaths, managing necropsy detail and tracking carcass movement between sites. Every screen explained, every step in order.',
    audience: ['Veterinarians', 'Para-veterinarians', 'Keepers', 'New starters'],
    area: 'mortality',
    back: 'mortality',
    parts: [
      {
        id: 'module',
        label: 'Part 01 · The module',
        title: 'Mortality at a glance',
        lede: 'Everything around an animal death lives in one module: the live dashboard, the listings, the full record, and the controls to correct it. It improves transparency, speeds up decisions and supports better welfare monitoring.',
        chain: true,
        cards: [
          { id: 'dashboard', title: 'Mortality dashboard', icon: 'report', desc: 'Totals for deaths, affected species and causes.',
            shots: [{ src: 'dashboard', title: 'Mortality dashboard', desc: 'Totals for deaths, affected species and causes.' }] },
          { id: 'listings', title: 'Multi-view listings', icon: 'species', desc: 'Records by animal, species or cause, linked to profiles.',
            shots: [{ src: 'listings', title: 'Multi-view listings', desc: 'Records by animal, species or cause, linked to profiles.' }] },
          { id: 'search', title: 'Advanced search & filters', icon: 'filter', desc: 'Search by species, cause, location, date or keyword.',
            shots: [{ src: 'search', title: 'Advanced search & filters', desc: 'Search by species, cause, location, date or keyword.' }] },
          { id: 'record', title: 'Deceased animal records', icon: 'note', desc: 'Full death detail: cause, ID, enclosure, site and sex.',
            shots: [{ src: 'record', title: 'Deceased animal records', desc: 'Full death detail: cause, ID, enclosure, site and sex.' }] },
          { id: 'edit', title: 'Edit records', icon: 'edit', desc: 'Edit mortality reports after entry to keep them accurate.',
            shots: [{ src: 'edit', title: 'Edit records', desc: 'Edit mortality reports after entry to keep them accurate.' }] },
          { id: 'revoke', title: 'Revoke records', icon: 'alert', desc: 'Revoke incorrect records to restore active status.',
            shots: [{ src: 'revoke', title: 'Revoke records', desc: 'Revoke incorrect records to restore active status.' }] },
          { id: 'carcass', title: 'Carcass transfer', icon: 'transfer', desc: 'View and track carcass movement between locations.',
            shots: [{ src: 'carcass', title: 'Carcass transfer', desc: 'View and track carcass movement between locations.' }] }
        ]
      },
      {
        id: 'record',
        label: 'Part 02 · In the app',
        title: 'Reading a record',
        lede: 'Every mortality in the list reads the same way: who reported it, when it happened, which animal, where it was held, why, and where the carcass is now.',
        actions: {
          title: 'The mortality record', numbered: true,
          desc: 'Six parts of one record in the mortality list, each highlighted on the screen.',
          shots: [
            { src: 'read-reporter', title: 'Reporter & time', desc: 'The keeper or vet who logged it, with the exact mortality date and time.' },
            { src: 'read-aid', title: 'Animal ID & species', desc: 'Internal AID with common and scientific names.' },
            { src: 'read-location', title: 'Location', desc: 'The enclosure, section and site the animal was held at.' },
            { src: 'read-cause', title: 'Cause of death', desc: 'The recorded cause: suspicious, undetermined, disease and more.' },
            { src: 'read-necropsy', title: 'Necropsy status', desc: 'Whether a necropsy is still pending, in progress or complete.' },
            { src: 'read-carcass', title: 'Carcass location', desc: 'Where the carcass is now: at site or at the necropsy facility.' }
          ]
        }
      },
      {
        id: 'carcass-transfer',
        label: 'Part 03 · Carcass transfer',
        title: 'Carcass transfer',
        lede: 'Track and record carcass movement between sites and necropsy centres, with status at every stage and a comment thread to keep the team in step. It improves transparency, ensures compliance and supports efficient post-mortality management.',
        /* The deck also draws a Loading Checklist phone screen in HTML, but no tile opens it and it is not a capture, so it is left out */
        chain: true,
        cards: [
          { id: 'status', title: 'Status tracking', icon: 'manage', desc: 'Monitor transfer stages: Pending, In Transit, Completed and Canceled.',
            shots: [{ src: 'transfer-status', title: 'Status tracking', desc: 'Monitor transfer stages: Pending, In Transit, Completed and Canceled.' }] },
          { id: 'search', title: 'Search & filters', icon: 'filter', desc: 'Easily search and filter transfers by status.',
            shots: [{ src: 'transfer-search', title: 'Search & filters', desc: 'Easily search and filter transfers by status.' }] },
          { id: 'record', title: 'Carcass transfer', icon: 'transfer', desc: 'Track and record carcass movement between sites or necropsy centres.',
            shots: [{ src: 'transfer-form', title: 'Carcass transfer', desc: 'Track and record carcass movement between sites or necropsy centres.' }] },
          { id: 'updates', title: 'Real-time status updates', icon: 'bell', desc: 'Update the status: Transfer Initiated, Checklist Filled, Loading Pending.',
            shots: [{ src: 'transfer-updates', title: 'Real-time status updates', desc: 'Update the status: Transfer Initiated, Checklist Filled, Loading Pending.' }] },
          { id: 'comments', title: 'Comments & communication', icon: 'chat', desc: 'Add comments for coordination and record-keeping.',
            shots: [{ src: 'transfer-comments', title: 'Comments & communication', desc: 'Add comments for coordination and record-keeping.' }] }
        ]
      }
    ],
    close: {
      label: 'By the end of this guide',
      title: 'You can run the full loop',
      lede: 'That is the Mortality Module and Carcass Transfer end to end: four tasks you can now carry out on your own, from the moment of a death to a signed-off transfer.',
      items: [
        { icon: 'note', title: 'Record a death', desc: 'Open the module, read the dashboard, and file a complete deceased-animal record with cause, location and evidence.' },
        { icon: 'filter', title: 'Find anything fast', desc: 'Read records by animal, species or cause, and use advanced search and filters to isolate exactly what you need.' },
        { icon: 'edit', title: 'Keep records honest', desc: 'Edit a report after entry as findings come in, or revoke an incorrect record to restore the animal to active status.' },
        { icon: 'transfer', title: 'Move it safely', desc: 'Raise a carcass transfer, fill the loading checklist, and track it through every status to completion.' }
      ]
    }
  },
  /* From References/Module Details Pages/Necropsy and Carcass Transfer Kit (Necropsy & Carcass Transfer Kit) */
  'necropsy': {
    source: 'Necropsy and Carcass Transfer Kit · Necropsy & Carcass Transfer Kit',
    title: 'Necropsy',
    kicker: 'Mortality & Lifecycle',
    sub: 'Two modules, one mortality workflow. Document post-mortem examinations end to end, and track every carcass as it moves to a necropsy centre, with the transparency, accountability and compliance the work demands.',
    audience: ['Necropsy module', 'Carcass transfer', 'Veterinarians', 'Para-veterinarians'],
    area: 'mortality',
    back: 'necropsy',
    parts: [
      {
        id: 'module',
        label: 'Part 01 · The module',
        title: 'Inside the module',
        lede: 'The Necropsy module documents post-mortem examinations with detailed observations, organ-specific findings and medical conclusions. Seven surfaces carry it, from finding a record to reading its full timeline.',
        chain: true,
        cards: [
          { id: 'search', title: 'Search & filters', icon: 'filter', desc: 'Search by animal or species; filter by site, date and priority.',
            shots: [{ src: 'search', title: 'Search & filters', desc: 'Search by animal or species; filter by site, date and priority.' }] },
          { id: 'status', title: 'Status tracking', icon: 'manage', desc: 'Monitor stages: Incoming, Pending, Draft and Completed.',
            shots: [{ src: 'status', title: 'Status tracking', desc: 'Monitor stages: Incoming, Pending, Draft and Completed.' }] },
          { id: 'card', title: 'Animal card & request info', icon: 'tag', desc: 'AID, species, location, cause, requester and priority.',
            shots: [{ src: 'animal-card', title: 'Animal card & request info', desc: 'AID, species, location, cause, requester and priority.' }] },
          { id: 'carcass', title: 'Carcass transfer', icon: 'transfer', desc: 'View transfer requests: Pending Acceptance and Received.',
            shots: [{ src: 'carcass-list', title: 'Carcass transfer', desc: 'View transfer requests: Pending Acceptance and Received.' }] },
          { id: 'request', title: 'Detailed request view', icon: 'note', desc: 'The full report: cause, condition and notes. Update, draft or submit.',
            shots: [{ src: 'request', title: 'Detailed request view', desc: 'The full report: cause, condition and notes. Update, draft or submit.' }] },
          { id: 'download', title: 'Download report', icon: 'report', desc: 'Export reports or drafts as PDFs for records and offline use.',
            shots: [{ src: 'download', title: 'Download report', desc: 'Export reports or drafts as PDFs for records and offline use.' }] },
          { id: 'timeline', title: 'Timeline', icon: 'eye', desc: 'Every action tracked with the user and a timestamp.',
            shots: [{ src: 'timeline', title: 'Timeline', desc: 'Every action tracked with the user and a timestamp.' }] }
        ]
      },
      {
        id: 'request',
        label: 'Part 02 · In the app',
        title: 'The detailed request view',
        lede: 'Open any record for the full report: animal profile, time since death, mortality information and current status. Update the record, save it as a draft, or submit once finalised.',
        actions: {
          title: 'The necropsy request', numbered: true,
          desc: 'Five parts of one necropsy request, each highlighted on the screen.',
          shots: [
            { src: 'req-header', title: 'Animal & mortality header', desc: 'AID, species, enclosure, site, time since death and requester.' },
            { src: 'req-report', title: 'Mortality report', desc: 'Suspected cause, date and time of death, and carcass condition.' },
            { src: 'req-status', title: 'Current status', desc: 'Displays the record\'s current status along with date.' },
            { src: 'req-add', title: 'Add necropsy', desc: 'Begin the examination entry from the Update Necropsy action at the bottom.' },
            { src: 'req-update', title: 'Update, draft & submit', desc: 'Update the necropsy details, then save as draft or submit when finalised.' }
          ]
        }
      },
      {
        id: 'finding',
        label: 'Part 03 · Carcass transfer',
        title: 'Finding transfers, fast',
        lede: 'Carcass Transfer streamlines carcass movement tracking from the originating site to the necropsy centre. Across the transfer list, two controls keep the right requests in front of you.',
        chain: true,
        cards: [
          { id: 'search', title: 'Search & filters', icon: 'filter', desc: 'Search transfers by animal ID and filter by status, such as Pending Acceptance and Received, to focus on what needs action now.',
            shots: [{ src: 'find-search', title: 'Search & filters', desc: 'Search transfers by animal ID and filter by status, such as Pending Acceptance and Received, to focus on what needs action now.' }] },
          { id: 'centre', title: 'Necropsy centre filtering', icon: 'lab', desc: 'View and monitor only the transfers bound for a selected necropsy centre: ideal when one team owns a single destination.',
            shots: [{ src: 'find-centre', title: 'Necropsy centre filtering', desc: 'View and monitor only the transfers bound for a selected necropsy centre: ideal when one team owns a single destination.' }] }
        ]
      },
      {
        id: 'transfer',
        label: 'Part 04 · In the app',
        title: 'A transfer, end to end',
        lede: 'Each transfer request carries everything the receiving centre needs: its route, contents, conversation and live status.',
        actions: {
          title: 'The carcass transfer request', numbered: true,
          desc: 'Five parts of one transfer request, each highlighted on the screen.',
          shots: [
            { src: 'ct-route', title: 'Route & necropsy centre', desc: 'Origin site to destination centre, with a scannable code.' },
            /* The deck's text says this shows how many carcasses are in the request; its screen highlights the Transfer Checklist row, so the desc follows the screen */
            { src: 'ct-contents', title: 'Transfer contents', desc: 'The transfer checklist for the request, with View to open it in full.' },
            { src: 'ct-comments', title: 'Comments & communication', desc: 'Add comments for coordination and a record of the hand-off.' },
            { src: 'ct-status', title: 'Status tracking', desc: 'The live stage of the transfer, with See all for its history.' },
            { src: 'ct-accept', title: 'Accept for necropsy', desc: 'The centre accepts the incoming request to begin processing.' }
          ]
        }
      }
    ],
    close: {
      label: 'The mortality workflow, end to end',
      title: 'You can run the whole flow',
      lede: 'From a logged mortality to an accepted carcass at the necropsy centre, four moves carry the work, each one something the two modules let you do on your own.',
      items: [
        { icon: 'lab', title: 'Document a necropsy', desc: 'Open a record, complete the mortality report, save as draft and submit once finalised, with organ-level findings and conclusions.' },
        { icon: 'filter', title: 'Find & track records', desc: 'Search, filter and group by centre, then follow each record across Incoming, Pending, Draft and Completed.' },
        { icon: 'transfer', title: 'Move a carcass to a centre', desc: 'Raise and monitor transfer requests by route and status, with full transparency from origin to destination.' },
        { icon: 'approve', title: 'Accept & coordinate', desc: 'Accept incoming transfers for necropsy and keep the hand-off on record with comments for coordination.' }
      ]
    }
  },
  /* From References/Module Details Pages/Egg Management Interactive Kit (Egg Management Kit) */
  /* Text and order follow Egg Management Kit.dc.html (12 pages). That deck draws its screens as live HTML mock-ups,
     so the screens are the real captures it was built from: the highlighted tablet captures in assets/ (shown on the
     same slides of "Egg Management Kit copy.dc.html") and the web captures in uploads/ for the live view and Egg Details */
  'egg-management-web': {
    source: 'Egg Management Interactive Kit · Egg Management Kit',
    title: 'Egg Management (Web)',
    kicker: 'Mortality & Lifecycle',
    sub: 'The web console for tracking every egg from collection to hatch. The dashboard, your nurseries, incubator rooms and incubators, all backed by one traceable record.',
    audience: ['Curators', 'Keepers', 'Breeding staff', 'New users'],
    area: 'mortality',
    back: 'egg-management-web',
    parts: [
      {
        id: 'dashboard',
        label: 'Part 01 · Real-time view',
        title: 'Egg dashboard',
        lede: 'Real-time statistics and reports on egg inventory, hatch rates and egg movement. Analyse the numbers by species, site or nursery to monitor breeding success and spot trends early.',
        actions: {
          title: 'Eggs Stats', numbered: true,
          desc: 'Five parts of the egg dashboard, each highlighted on the screen.',
          shots: [
            { src: 'dashboard-tabs', device: 'tablet', title: 'Dashboard tabs', desc: 'Switch between Eggs by Species, Sites and Nurseries.' },
            { src: 'dashboard-totals', device: 'tablet', title: 'Live totals', desc: 'Eggs in Nest, Eggs to Nursery, Hatched, Egg Discard and Total Eggs.' },
            { src: 'dashboard-search', device: 'tablet', title: 'Search', desc: 'Find a specific species, site or nursery in the data.' },
            { src: 'dashboard-download', device: 'tablet', title: 'Download', desc: 'Export the displayed data for reporting or offline analysis.' },
            { src: 'dashboard-table', device: 'tablet', title: 'The stats table', desc: 'Per-species totals: hatch rate, discards and where eggs are now.' }
          ]
        }
      },
      {
        id: 'facilities',
        label: 'Part 02 · Facilities',
        title: 'Nurseries, rooms and incubators',
        lede: 'Configure nurseries, rooms and incubators once, and every egg has a place to go. Each one has its own list, with search, filters and a button to add more.',
        /* The deck gives each facility its own page; here they are one card each */
        cards: [
          { id: 'nursery', title: 'Nursery', icon: 'home', thumb: 3,
            desc: 'View and manage nursery records across sites. Track capacity and availability at a glance: how many rooms and incubators each nursery holds, and whether it is active.',
            shots: [
              { src: 'nursery-search', device: 'tablet', title: 'Search', desc: 'Find a nursery by name in the search bar.' },
              { src: 'nursery-site', device: 'tablet', title: 'Site filter', desc: 'Narrow the list to nurseries at one location.' },
              /* The deck calls this New Nursery; the button on the screen reads Add New */
              { src: 'nursery-add', device: 'tablet', title: 'New nursery', desc: 'Add nurseries with Add New as breeding facilities expand.' },
              { src: 'nursery-table', device: 'tablet', title: 'Nursery list', desc: 'SL. No., name, rooms, incubators, site, status and added by.' }
            ] },
          { id: 'rooms', title: 'Incubator rooms', icon: 'areas', thumb: 4,
            desc: 'Manage and monitor every incubator room inside your nurseries. See which nursery and site a room belongs to, how many incubators it holds, and whether it is operational.',
            shots: [
              { src: 'rooms-search', device: 'tablet', title: 'Search', desc: 'Find an incubator room by its name.' },
              { src: 'rooms-nursery', device: 'tablet', title: 'Nursery filter', desc: 'Show only rooms in a selected nursery.' },
              { src: 'rooms-status', device: 'tablet', title: 'Status filter', desc: 'Filter rooms by Active or Inactive.' },
              { src: 'rooms-add', device: 'tablet', title: 'Add New', desc: 'Create a room and assign it to a nursery.' },
              { src: 'rooms-table', device: 'tablet', title: 'Room list', desc: 'SL. No., room, nursery, site, incubator count, status and created by.' }
            ] },
          { id: 'incubators', title: 'Incubators', icon: 'egg', thumb: 3,
            desc: 'A centralised view of every incubator in the organisation. Track availability, monitor egg occupancy, and manage allocation across sites and nursery rooms.',
            shots: [
              { src: 'incubators-search', device: 'tablet', title: 'Search', desc: 'Find an incubator by its ID or name.' },
              { src: 'incubators-status', device: 'tablet', title: 'Status filter', desc: 'Filter incubators by Active or Inactive.' },
              { src: 'incubators-add', device: 'tablet', title: 'Add New', desc: 'Register an incubator and assign it to a room and site.' },
              { src: 'incubators-table', device: 'tablet', title: 'Egg count & list', desc: 'Live occupancy, availability and location per incubator.' }
            ] }
        ]
      },
      {
        id: 'egg-list',
        label: 'Part 03 · The Egg List',
        title: 'The Egg List',
        lede: 'A single, filterable view of every egg in the system, from the moment it is collected until it is incubated, hatched, discarded or archived. From the list you can allocate, discard or transfer an egg, or create a new Animal ID.',
        /* The deck's sixth point, Egg actions, has no screen of its own (the copy deck falls back to the lifecycle tabs), so it is in the lede instead */
        actions: {
          title: 'The Egg List', numbered: true,
          desc: 'Five parts of the Egg List, each highlighted on the screen.',
          shots: [
            { src: 'egg-list-lifecycle-tabs', device: 'tablet', title: 'Lifecycle tabs', desc: 'Received, Incubation, Hatched, To Be Discarded, Discarded and All.' },
            { src: 'egg-list-search', device: 'tablet', title: 'Search any egg', desc: 'Find an egg by its identifier or other details.' },
            { src: 'egg-list-filters', device: 'tablet', title: 'Nursery filter & more', desc: 'Narrow records to one nursery, or apply extra filters.' },
            { src: 'egg-list-download', device: 'tablet', title: 'Download & export', desc: 'Export the current egg records for reporting or analysis.' },
            { src: 'egg-list-table', device: 'tablet', title: 'The egg records', desc: 'One row per egg: identifier, species, condition and status.' }
          ]
        }
      },
      {
        id: 'status-tabs',
        label: 'Part 04 · Live view',
        title: 'Egg status tabs',
        lede: 'Six lifecycle tabs, six different views of the same eggs. The sixth, All, shows every egg, at every stage, in one unfiltered list.',
        chain: true,
        cards: [
          { id: 'received', title: 'Received', icon: 'add', desc: 'Every egg just collected, with species, site, nursery and who brought it in.',
            shots: [{ src: 'tab-received', device: 'web', title: 'Received', desc: 'Every egg just collected, with species, site, nursery and who brought it in.' }] },
          { id: 'incubation', title: 'Incubation', icon: 'egg', desc: 'Days in incubation, weight and size, tracked per egg.',
            shots: [{ src: 'tab-incubation', device: 'web', title: 'Incubation', desc: 'Days in incubation, weight and size, tracked per egg.' }] },
          { id: 'hatched', title: 'Hatched', icon: 'pets', desc: 'Gender and identifier once known, plus a link to create the chick\'s Animal ID.',
            shots: [{ src: 'tab-hatched', device: 'web', title: 'Hatched', desc: 'Gender and identifier once known, plus a link to create the chick\'s Animal ID.' }] },
          { id: 'to-be-discarded', title: 'To Be Discarded', icon: 'alert', desc: 'Eggs flagged with a reason, selectable for a batch discard request.',
            shots: [{ src: 'tab-to-be-discarded', device: 'web', title: 'To Be Discarded', desc: 'Eggs flagged with a reason, selectable for a batch discard request.' }] },
          { id: 'discarded', title: 'Discarded', icon: 'shield', desc: 'Batch discard requests, each held for a security check before it is final.',
            shots: [{ src: 'tab-discarded', device: 'web', title: 'Discarded', desc: 'Batch discard requests, each held for a security check before it is final.' }] },
          { id: 'all', title: 'All', icon: 'egg', desc: 'Provides a consolidated view of all egg records across different stages, regardless of their current status.',
            shots: [{ src: 'tab-all', device: 'web', title: 'All', desc: 'Provides a consolidated view of all egg records across different stages, regardless of their current status.' }] }
        ]
      },
      {
        id: 'details',
        label: 'Part 05 · Single record',
        title: 'Egg details',
        lede: 'Open any egg from the list to see its full record: where it is, where it came from, and how it is tracked over time.',
        /* One screen in the deck: each point opens the Egg Details capture with its own part highlighted */
        glance: {
          title: 'Egg details at a glance',
          desc: 'Five parts of one egg record. Pick a part to see it on the screen.',
          shots: [
            { src: 'egg-details-identity', device: 'web', icon: 'tag', title: 'Identity strip', desc: 'Egg ID, age, current weight and condition, plus who last updated it.' },
            { src: 'egg-details-incubator', device: 'web', icon: 'home', title: 'Incubator location', desc: 'Current room and incubator, with temperature and humidity, and Transfer to move eggs to another incubator.' },
            { src: 'egg-details-history', device: 'web', icon: 'note', title: 'Egg history', desc: 'Site, section and clutch, parentage links, collection date and initial measurements.' },
            { src: 'egg-details-weight', device: 'web', icon: 'report', title: 'Weight tracking', desc: 'A growth chart plotted from every logged weigh-in, with the log itself alongside.' },
            { src: 'egg-details-comments', device: 'web', icon: 'chat', title: 'Comments', desc: 'Leave a note on the record for the next keeper to see.' }
          ]
        }
      },
      {
        id: 'lifecycle',
        label: 'Part 06 · In short',
        title: 'The egg lifecycle',
        lede: 'Every egg follows the same path through the system. Configure the facilities once, then let each record move through these stages, with the dashboard and reports tracking the whole way.',
        /* The deck draws two branching charts (in the nest, in the nursery) from field notes; they are merged into one
           ordered path here. In the nest chart, "Hatch, Create an Animal ID" and "Fertile, Hatch, Create an Animal" are two
           near-identical branches, and the nursery chart says "transfer egg to nursery" for an egg already there */
        flow: [
          { icon: 'egg', title: 'Egg in nest or nursery', desc: 'The egg is recorded in the nest, or in the nursery for artificial incubation.' },
          { icon: 'incubate', title: 'Incubate', desc: 'Incubate the egg and set its status: fertile or infertile.' },
          { icon: 'hatch', title: 'Hatch', desc: 'A fertile egg hatches. Create an Animal ID for the chick.' },
          { icon: 'alert', title: 'To be discarded', desc: 'A ruined egg is marked To Be Discarded.' },
          { icon: 'discard', title: 'Egg discarded summary', desc: 'Discarded eggs are recorded in the egg discarded summary.' }
        ]
      }
    ],
    close: {
      label: 'Get started',
      title: 'Happy hatching',
      lede: 'That is the Egg Management module end to end. Open the console and start with your nurseries; the rest of the lifecycle follows from there. Good data and good insights make healthy animals.'
    }
  },
  /* From References/Module Details Pages/Help desk interactive kit (Help Desk Kit) */
  'helpdesk-module': {
    source: 'Help desk interactive kit · Help Desk Kit',
    title: 'Helpdesk Module',
    kicker: 'Operations & Oversight',
    sub: 'The Request module for raising and tracking requests for resources, maintenance and services, with accountability, faster resolution and coordination across every department.',
    audience: ['All user roles', 'Requests by status', 'Request management', 'Cost management', 'Fulfilment'],
    area: 'operations',
    back: 'helpdesk-module',
    parts: [
      {
        id: 'home',
        label: 'Part 01 · The screen',
        title: 'The Help Desk home',
        lede: 'One place to raise, track and resolve every request. Every request lives on one screen, organised by status, so you can track pending, approved, rejected, cancelled, in-progress and completed requests in one transparent view.',
        /* Tab counts differ between the slide's tiles, the image alts and the screenshots, so no counts are quoted */
        actions: {
          title: 'The status tabs', numbered: true,
          desc: 'Point at a status to see exactly what it shows on the phone.',
          shots: [
            { src: 'status-pending', title: 'Pending Approval', desc: 'Requests awaiting approval from one or more approvers, with My Approvals, Awaiting Costing and All filters. Act on the ones assigned to you.' },
            { src: 'status-approved', title: 'Approved', desc: 'Requests approved and ready to move to the next stage of the workflow.' },
            { src: 'status-rejected', title: 'Rejected', desc: 'Requests declined during approval. Open one to read the reason and take corrective action if needed.' },
            { src: 'status-cancelled', title: 'Cancelled', desc: 'Requests no longer active. A new request is needed to proceed.' },
            { src: 'status-all', title: 'All', desc: 'Every request across all statuses, regardless of its stage.' }
          ]
        }
      },
      {
        id: 'capabilities',
        label: 'Part 02 · The module',
        title: 'Raise it, cost it, decide, close it out',
        lede: 'The Request module brings accountability to every ask, speeds up resolution, and keeps departments coordinated, from the moment a request is raised to the moment it is fulfilled.',
        cards: [
          { id: 'requests', title: 'Request management', icon: 'help', desc: 'Raise a new request with full detail, edit it before it is processed, cancel it when it is no longer needed, or reject it with a reason.',
            shots: [
              { src: 'request-raise', title: 'Raise Request', desc: 'Create and submit a new request with all the required details.' },
              { src: 'request-edit', title: 'Edit Request', desc: 'Update an existing request before it is processed.' },
              { src: 'request-cancel', title: 'Cancel Request', desc: 'Withdraw a request that is no longer needed, giving a reason.' },
              /* The slide says "after approval"; the deck's source text says "during approval", which matches the rest of the deck */
              { src: 'request-reject', title: 'Reject Request', desc: 'Decline a request during approval and provide a reason.' }
            ] },
          { id: 'costs', title: 'Cost management', icon: 'database', desc: 'Build the budget for a request before you commit: add, edit, duplicate or delete cost estimates.',
            shots: [
              { src: 'cost-add', title: 'Add Cost Estimate', desc: 'Create a new estimate for the requested items or services.' },
              { src: 'cost-edit', title: 'Edit Cost Estimate', desc: 'Modify an estimate to update pricing or other details.' },
              { src: 'cost-duplicate', title: 'Duplicate Cost Estimate', desc: 'Copy an estimate with a swipe, to reuse it for a similar request.' },
              { src: 'cost-delete', title: 'Delete Cost Estimate', desc: 'Remove an estimate no longer needed or made by mistake, with a swipe.' }
            ] },
          { id: 'approval', title: 'Approval', icon: 'approve', desc: 'Requests assigned to you wait in Pending Approval. Approval is permission-gated: only users with approval rights can approve or reject a request.',
            shots: [
              { src: 'approve', title: 'Approve requests', desc: 'Review the request and its estimate, then approve to advance it to the next stage.' },
              { src: 'reject', title: 'Reject requests', desc: 'Decline a request that cannot proceed and provide a reason for the requester.' }
            ] },
          /* The deck pairs these two screens with the opposite tiles: the Complete Request sheet is marking as completed, and the completed request with Move Back To In-Progress is the reversion */
          { id: 'fulfilment', title: 'Fulfilment & reversion', icon: 'edit', desc: 'When the work is done, the responsible department marks the request completed. If more work or a correction is needed, it reverts to in-progress.',
            shots: [
              { src: 'complete', title: 'Mark as Completed', desc: 'Confirm the work or service is done, with completion notes, team size, people involved and attachments.' },
              { src: 'revert', title: 'Revert to In Progress', desc: 'Return a completed request to the active workflow with Move Back To In-Progress, instead of raising a new request.' }
            ] }
        ]
      },
      {
        id: 'roles',
        label: 'Part 03 · Roles',
        title: 'Everyone raises, permissions decide the rest',
        lede: 'The Help Desk is open to all user roles. Who can approve, cost and fulfil is governed by permissions, so each person sees only the actions that belong to them.',
        /* Built from the deck's three role lists; a cross means the action is not in that role's list */
        compare: {
          corner: 'Action',
          types: [
            { title: 'Requester', sub: 'Raises the request', tone: 'green' },
            { title: 'Approver', sub: 'Approves or rejects', tone: 'clay' },
            { title: 'Department', sub: 'Costs and fulfils', tone: 'yellow' }
          ],
          rows: [
            { title: 'Raise a request', desc: 'Open to all user roles.', icon: 'add',
              cells: [{ ok: true, text: 'Yes' }, { ok: true, text: 'Yes' }, { ok: true, text: 'Yes' }] },
            { title: 'Edit, cancel, track status', desc: 'Manage your own request.', icon: 'edit',
              cells: [{ ok: true, text: 'Yes' }, { ok: false, text: 'Not in role' }, { ok: false, text: 'Not in role' }] },
            { title: 'Approve or reject', desc: 'From the My Approvals queue.', icon: 'approve',
              cells: [{ ok: false, text: 'Not in role' }, { ok: true, text: 'Yes', note: 'Approval rights' }, { ok: false, text: 'Not in role' }] },
            { title: 'Cost estimates', desc: 'Add, edit, duplicate or delete.', icon: 'database',
              cells: [{ ok: false, text: 'Not in role' }, { ok: false, text: 'Not in role' }, { ok: true, text: 'Yes' }] },
            { title: 'Complete or revert', desc: 'Mark as Completed, Revert to In Progress.', icon: 'priority',
              cells: [{ ok: false, text: 'Not in role' }, { ok: false, text: 'Not in role' }, { ok: true, text: 'Yes' }] }
          ]
        }
      },
      {
        id: 'lifecycle',
        label: 'Part 04 · Workflow',
        title: 'The request lifecycle',
        lede: 'Every request moves along one path, from raised to completed. Approval, costing and fulfilment are the gates between stages. A rejected request can be corrected and resubmitted; a cancelled one needs a new request; a completed one can be reverted to finish or fix the work.',
        flow: [
          { icon: 'add', title: 'Raise Request', desc: 'A new request is created with full details.' },
          { icon: 'cost', title: 'Add Costing', desc: 'Estimates are added for the items and services.' },
          { icon: 'approve', title: 'Approve / Reject', desc: 'Approvers review and approve or reject it.' },
          { icon: 'progress', title: 'Move to In-progress', desc: 'The approved request moves into active work.' },
          { icon: 'done', title: 'Completed', desc: 'Work is done and the request is closed.' },
          { icon: 'undo', title: 'Move back to In-progress', desc: 'Sent back to In Progress when more work is needed.' }
        ]
      }
    ],
    close: {
      label: 'You\'re ready',
      title: 'Run the Help Desk',
      lede: 'Raise it, route it, resolve it: every request accounted for, from the first tap to the final tick. Good data, good coordination, better care.',
      items: [
        { icon: 'filter', title: 'View requests by status', desc: 'One transparent list across pending, approved, rejected, cancelled, in-progress and completed, with My Approvals, Awaiting Costing and All filters on top.' },
        { icon: 'manage', title: 'Request management', desc: 'Raise, edit, cancel or reject. Every request carries its details and priority, and a clear reason when it is declined.' },
        { icon: 'cost', title: 'Cost management', desc: 'Add, edit, duplicate or delete estimates so the budget for items and services is set before the work begins.' },
        { icon: 'done', title: 'Fulfilment & reversion', desc: 'Mark work completed when it is done, or revert it to in-progress when more work or a correction is needed.' }
      ]
    }
  },
  /* From References/Module Details Pages/Security Module PowerPoint Kit (Security Module Kit) */
  'security': {
    source: 'Security Module PowerPoint Kit · Security Module Kit',
    title: 'Security',
    kicker: 'Operations & Oversight',
    sub: 'Controlled movement and full accountability for every egg, animal, hospital and carcass transfer, and a record of who cleared it.',
    audience: ['Filter', 'Check-in & check-out', 'Transfer types'],
    area: 'operations',
    back: 'security',
    parts: [
      {
        id: 'module',
        label: 'Part 01 · The module',
        title: 'What Security covers',
        lede: 'The Security module oversees site permissions and every egg, animal, hospital and carcass transfer, ensuring controlled movement and full accountability for who handled what, and when.',
        cards: [
          { id: 'filter', title: 'Filter functionality', icon: 'filter', desc: 'Filter records by status for focused review: Show All, Checkout Pending or Security Checkout Cleared.',
            shots: [{ src: 'filter', title: 'Filter By dialog', desc: 'The Filter By dialog with Show All selected, above Checkout Pending and Security Checkout Cleared.' }] },
          { id: 'checkout', title: 'Check-in & check-out', icon: 'shield', desc: 'Authorised security checks records in and out across every transfer type.',
            shots: [{ src: 'check-in-out', title: 'Security check-in', desc: 'A hospital transfer cleared at checkout, ready for security check-in at the hospital.' }] }
        ]
      },
      {
        id: 'transfers',
        label: 'Part 02 · Movement & transfers',
        title: 'Transfer types',
        lede: 'Five transfer types move through Security, each held for a checkout: animal and inter-site moves, egg transfer, egg discard, hospital and carcass transfers.',
        /* The deck's image alts call these "detail" screens, but they show each tab's transfer list; the descs follow what the screens show */
        actions: {
          title: 'The Security tabs', numbered: true,
          desc: 'Five transfer types, each on its own tab of the site\'s Security screen.',
          shots: [
            { src: 'animal-transfer', title: 'Animal Transfer', desc: 'In-house and inter-site moves, held until security clears checkout.' },
            { src: 'egg-transfer', title: 'Egg Transfer', desc: 'Egg moves to nurseries, tracked from pending to delivered.' },
            { src: 'egg-discard', title: 'Egg Discard', desc: 'Discarded eggs, verified and signed off by the security officer.' },
            { src: 'hospital-transfer', title: 'Hospital Transfer', desc: 'Animals to and from the hospital, gated by a security checkout.' },
            { src: 'carcass-transfer', title: 'Carcass Transfer', desc: 'Carcass moves to the necropsy unit, with full chain of custody.' }
          ]
        }
      }
    ],
    close: {
      label: 'From the Antz team',
      title: 'You are set',
      lede: 'That is the Security module. Every screen here mirrors what you will see in the app, and the Help Desk is one tap away.'
    }
  },
  /* From References/Module Details Pages/Reports Module Web Kit (Reports Module Web Kit) */
  'reports-web': {
    source: 'Reports Module Web Kit · Reports Module Web Kit',
    title: 'Reports (Web)',
    kicker: 'Operations & Oversight',
    sub: 'Reports, read at a glance. Categorised data on every key animal event, from births and deaths to transfers and assessments, turned into clean, downloadable reports across the web app.',
    audience: ['Population', 'Activity', 'Observations', 'Diaries', 'Site & enclosure'],
    area: 'operations',
    back: 'reports-web',
    parts: [
      {
        id: 'population',
        label: 'Part 01 · Population & activity',
        title: 'Everything, reportable',
        /* The overview slide has no screens, so its three features are folded into this lede.
           The deck's live report explorer (slides 4 and 5) is an HTML mock-up, not a capture, so it is not used */
        lede: 'The Reports module presents categorised data on key animal events under clear headings. Refine any report by date range, site or species, customise the view with show / hide columns, gender-wise toggles and site selection, and download it for offline use, sharing or compliance.',
        cards: [
          { id: 'species', title: 'Species General Report', icon: 'species', desc: 'Population by species, with a clear male / female breakdown.',
            shots: [{ src: 'species', device: 'tablet', title: 'Species General Report', desc: 'Male, female, indeterminate and undetermined counts per species, with a site filter, show / hide columns and Download report.' }] },
          { id: 'daily', title: 'Daily Report', icon: 'report', desc: 'A day of activity: natality, transfers, mortality and assessments.',
            shots: [{ src: 'daily', device: 'tablet', title: 'Daily Report', desc: 'Past and upcoming reports, grouped by natality, accession, mortality, assessment and transfer, with a download for each row.' }] },
          { id: 'list', title: 'Animal Report List', icon: 'batch', desc: 'Detailed animal records, filterable by species, site and attributes.',
            shots: [{ src: 'animal-list', device: 'tablet', title: 'Animal Report List', desc: 'Each animal\'s age, breed, variant, enclosure, section and site, with Antz animal ID, microchip and ring number columns, filters and show / hide.' }] }
        ]
      },
      {
        id: 'care',
        label: 'Part 02 · Care & observations',
        title: 'Care and observation reports',
        lede: 'Welfare assessments, keeper assignments and the observation log for an individual animal, each ready to filter and download.',
        cards: [
          { id: 'assessment', title: 'Animal Assessment Report', icon: 'medical', desc: 'Body-condition assessments that surface welfare concerns early.',
            shots: [{ src: 'assessment', device: 'tablet', title: 'Animal Assessment Report', desc: 'Pick the species and assessment type, then generate each animal\'s body condition (Overweight, Ideal or N/A) with dates.' }] },
          { id: 'keeper', title: 'Animal Keeper Report', icon: 'users', desc: 'Keepers assigned to each animal, animal-wise or keeper-wise.',
            shots: [{ src: 'keeper', device: 'tablet', title: 'Animal Keeper Report', desc: 'Animal-wise or keeper-wise views showing where each animal lives, its caretaker count and primary keeper, ready to download.' }] },
          { id: 'observation', title: 'Animal Observation Report', icon: 'eye', desc: 'Every observation recorded for one individual animal.',
            shots: [{ src: 'observation', device: 'tablet', title: 'Animal Observation Report', desc: 'The animal in focus, filters by observation type, sub-type, date range or free text, and the exportable observation log.' }] }
        ]
      },
      {
        id: 'diaries',
        label: 'Part 03 · Diaries & site',
        title: 'Diaries, counts and site reports',
        lede: 'What each keeper and biologist recorded, how many animals each enclosure holds, and every observation logged across a site.',
        cards: [
          { id: 'keeper-diary', title: 'Keeper\'s Diary', icon: 'note', desc: 'Every observation a keeper recorded, to view and download.',
            shots: [{ src: 'keeper-diary', device: 'tablet', title: 'Keeper\'s Diary', desc: 'Pick whose diary to review, drill into an observation type and sub-type such as Feeding and Diet, and download all entries.' }] },
          /* The deck's Biologist's Diary capture shows a veterinarian's diary with no rows */
          { id: 'biologist-diary', title: 'Biologist\'s Diary', icon: 'lab', desc: 'Every observation a biologist recorded, to view and download.',
            shots: [{ src: 'biologist-diary', device: 'tablet', title: 'Biologist\'s Diary', desc: 'Pick whose diary to review, filter by observation type, sub-type and date range, and download all entries.' }] },
          /* The capture's on-screen title reads Animal Count Register */
          { id: 'enclosure', title: 'Enclosure Count Report', icon: 'home', desc: 'Animal- or species-wise counts for an enclosure within a site.',
            shots: [{ src: 'enclosure-count', device: 'tablet', title: 'Enclosure Count Report', desc: 'Search by species, see the site, section and enclosure count summary, and list each animal with its enclosure and gender.' }] },
          /* The capture's on-screen title reads Daily Report */
          { id: 'daily-site', title: 'Daily Site Report', icon: 'areas', desc: 'All observations recorded for a whole site, ready to download.',
            shots: [{ src: 'daily-site', device: 'tablet', title: 'Daily Site Report', desc: 'The sites in scope, filters by AID, observation type, sub-type or date range, and the date, entity and type of every entry.' }] }
        ]
      }
    ],
    close: {
      label: 'In short',
      title: 'What to remember',
      lede: 'That\'s the Reports module on the web: categorised, filterable and downloadable insight on every animal event.',
      items: [
        { icon: 'report', title: '10 reports, one sidebar', desc: 'Stock, activity, observations, diaries and site reports all live under Reports. Switch with a click.' },
        { icon: 'filter', title: 'Filter to what matters', desc: 'Date range, site and species narrow every report; gender-wise and show / hide columns reshape the view.' },
        { icon: 'database', title: 'Download anything', desc: 'Every report exports for offline use, sharing or compliance in a click.' },
        { icon: 'users', title: 'Open to all roles', desc: 'Available to every role; individual reports appear as their permissions are enabled.' }
      ]
    }
  }
  /* ---- end of module guides ---- */
};
