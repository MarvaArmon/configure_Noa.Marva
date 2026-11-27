/* =====================================================================
   רכיבי מערכת העירוי · המקור העדכני (האתר הוא המקור, הוחלט 25.11.2026)
   ---------------------------------------------------------------------
   מקורות: "IV-Pole-Components.pdf" (גרסה 24.11.2026) ורשימת הרכיבים
   שבתוך IV Pole Layout Studio (תפקיד הרכיב, ורכיבים שירדו).

   שדות:
     id      מק"ט
     group   קבוצה (ראו GROUPS)
     name    שם הרכיב
     model   יצרן ודגם
     size    מידות במ"מ, אורך × רוחב × גובה (טקסט)
     weight  משקל ליחידה בק"ג (null = אין עדיין)
     qty     כמות
     source  מקור הנתון
     status  'final' סופי | 'check' בבדיקה | 'open' עוד לא נבחר
     role    מה הרכיב עושה, במשפט אחד
     note    הערות
     link    קישור (אפשר כמה, מערך של {label, url})
   רכיבים שירדו נמצאים ב-DROPPED, עם why (למה ירד) ו-when (מתי).
   ===================================================================== */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.componentsVersion = '24.11.2026';
window.SITE_DATA.systemLabel = 'מערכת הנעה C · גלגלים צרים Ø170 · 24 וולט · גובה מערכת 120 ס"מ';

window.SITE_DATA.GROUPS = [
  { key: 'drive', label: 'הנעה' },
  { key: 'power', label: 'אנרגיה' },
  { key: 'brain', label: 'מוח ובקרה' },
  { key: 'sense', label: 'חיישנים' },
  { key: 'ui', label: 'ממשק משתמש' },
  { key: 'med', label: 'ציוד רפואי הנישא על הכלי' },
  { key: 'str', label: 'מבנה' },
  { key: 'open', label: 'פתוח: עוד לא נבחר' }
];

window.SITE_DATA.COMPONENTS = [
  /* ---------- הנעה ---------- */
  { id: 'DRV-01', group: 'drive', name: 'גלגל הנעה עם מנוע בטבור',
    model: 'ZLTECH ZLLG65ASM250 V3.0 · 24 V · 6.5″', size: 'Ø170 × 65', weight: 3.0, qty: 2,
    source: 'יצרן (שרטוט התקנה)', status: 'check',
    role: 'המנוע יושב בתוך הגלגל. שני הגלגלים מניעים את הכלי ומסובבים אותו.',
    note: 'גוף 65 מ"מ + פלנג\' 3 מ"מ = 68 מ"מ עד התושבת. צמיג גומי ברוחב 41 מ"מ, Shore 65A. ציר M14 בולט 41 מ"מ פנימה. מומנט 4 N·m (שיא 12). עד 100 ק"ג לזוג.',
    link: [{ label: 'aifitlab.com', url: 'https://www.aifitlab.com' }, { label: 'zlingkj.com', url: 'https://www.zlingkj.com' }] },
  { id: 'DRV-02', group: 'drive', name: 'בקר מנועים כפול',
    model: 'ZLTECH ZLAC8015D · 24–48 V · 2 × 15 A', size: '150 × 97 × 31', weight: 0.4, qty: 1,
    source: 'מידות: מדריך היצרן · משקל: מוכר, לא אומת', status: 'check',
    role: 'בקר אחד לשני המנועים. מקבל את פקודות הנסיעה מהמוח התחתון.',
    note: 'RS485 / CANbus. לא נמצא דף מוצר ישיר; הקישור הוא למדריך.',
    link: [{ label: 'manualshive.com', url: 'https://www.manualshive.com' }] },
  { id: 'DRV-03', group: 'drive', name: 'גלגל עזר מסתובב',
    model: 'Tente Linea 5940UAP075P30-10 LH · twin wheel Ø75', size: 'Ø121 × 78', weight: 0.214, qty: 2,
    source: 'יצרן', status: 'check',
    role: 'גלגל שמסתובב בחופשיות. שניים כאלה מחזיקים את הכלי זקוף, בלי רגלית.',
    note: 'Ø121 = מעטפת הסיבוב, 78 = גובה כולל. אחד 170 מ"מ לפני ציר הגלגלים ואחד 170 מ"מ אחריו, על קו האמצע. צמיג PU Shore 92A, לא מוליך. עומס 90 ק"ג לגלגל. תקן EN 12530.',
    link: [{ label: 'tente.com', url: 'https://www.tente.com' }] },

  /* ---------- אנרגיה ---------- */
  { id: 'PWR-01', group: 'power', name: 'סוללה ראשית',
    model: 'LiTech LRL2420 · LiFePO4 · 25.6 V · 20 Ah · 512 Wh', size: '222 × 135 × 181', weight: 5.0, qty: 1,
    source: 'יצרן', status: 'check',
    role: 'מזינה את המנועים ואת כל שאר המערכות. המשקל שלה, נמוך בבסיס, גם מייצב את הכלי.',
    note: 'טווח מתח 20–29.2 V. זרם רציף 20 A, שיא 25 A. ברגי M6.',
    link: [{ label: 'litechpower.com', url: 'https://www.litechpower.com' }] },
  { id: 'PWR-04', group: 'power', name: 'ממיר מתח DC-DC',
    model: 'TRACO TEN 60-4812WIN · 60 W · 12 V', size: '50.8 × 25.4 × 10.2', weight: 0.033, qty: 1,
    source: 'מידות: יצרן · משקל: מהאפליקציה', status: 'check',
    role: 'מוריד את מתח הסוללה ל-12 וולט עבור המחשבים.',
    note: 'כניסה 18–75 V: מתאים לסוללת 24 V.',
    link: [{ label: 'uk.rs-online.com', url: 'https://uk.rs-online.com' }] },
  { id: 'PWR-05', group: 'power', name: 'מגע עגינה לטעינה',
    model: 'RoboPad Charging Kit · collector 90 mm · 100 A', size: '90 × 56 × 32', weight: 0.1, qty: 1,
    source: 'יצרן', status: 'check',
    role: 'מגעי טעינה בתחתית הכלי, שנפגשים עם לוח הבסיס בתחנה.',
    note: 'מותקן בתחתית הבסיס. המידה במצב מכווץ (פתוח: 42). בסיס הטעינה ברצפה: 140 × 90 × 10.',
    link: [{ label: 'eu.robotshop.com', url: 'https://eu.robotshop.com' }] },

  /* ---------- מוח ובקרה ---------- */
  { id: 'CTL-01', group: 'brain', name: 'מחשב ראשי ("מוח עליון")',
    model: 'NVIDIA Jetson Orin Nano Super Developer Kit', size: '103 × 90.5 × 34.8', weight: 0.3, qty: 1,
    source: 'מידות: מוכר · משקל: מהאפליקציה', status: 'check',
    role: 'קורא את המצלמות והרדאר, עוקב אחרי המטופל ומחליט לאן לנסוע.',
    note: '',
    link: [{ label: 'nvidia.com', url: 'https://www.nvidia.com' }] },
  { id: 'CTL-02', group: 'brain', name: 'בקר זמן-אמת ("מוח תחתון")',
    model: 'PJRC Teensy 4.1 + Mini Platform', size: '137 × 76.2 × 28', weight: 0.09, qty: 1,
    source: 'אורך ורוחב: יצרן · גובה ומשקל: הערכה', status: 'check',
    role: 'מפעיל את המנועים ומדווח על המיקום ב-Wi-Fi.',
    note: '',
    link: [{ label: 'protosupplies.com', url: 'https://protosupplies.com' }] },

  /* ---------- חיישנים ---------- */
  { id: 'SNS-01', group: 'sense', name: 'מצלמת עומק קדמית',
    model: 'Intel RealSense D455f', size: '124 × 29 × 26.8', weight: 0.133, qty: 1,
    source: 'יצרן', status: 'check',
    role: 'העיניים הראשיות: רואה את המטופל ומודדת את המרחק אליו.',
    note: 'טווח 0.6–6 מ\'.',
    link: [{ label: 'intel.com', url: 'https://www.intel.com' }] },
  { id: 'SNS-02', group: 'sense', name: 'מצלמת צד',
    model: 'Arducam IMX219 Wide Angle (B0179)', size: '25 × 24 × 18.5', weight: 0.008, qty: 2,
    source: 'לוח: יצרן · גובה ומשקל: מהאפליקציה', status: 'check',
    role: 'שומרות על המטופל בתמונה כשהוא מסתובב או זז הצידה.',
    note: 'זווית ראייה 175° באלכסון.',
    link: [{ label: 'arducam.com', url: 'https://www.arducam.com' }] },
  { id: 'SNS-03', group: 'sense', name: 'מכ"ם (רדאר)',
    model: 'TI IWR6843AOPEVM', size: '49 × 15.6 × 3', weight: 0.008, qty: 1,
    source: 'הערכה', status: 'check',
    role: 'מודד מרחק ומהירות בגלי רדיו, מאחורי חלון פלסטיק בקליפה.',
    note: 'המידה היא חלק הרדאר בלבד, אחרי ניתוק הלוח הנוסף.',
    link: [{ label: 'ti.com', url: 'https://www.ti.com' }] },
  { id: 'SNS-04', group: 'sense', name: 'מקלט GPS',
    model: 'SparkFun GPS Breakout NEO-M9N', size: '41 × 33 × 4', weight: 0.007, qty: 1,
    source: 'גובה: הערכה', status: 'check',
    role: 'מיקום בחוץ, בשביל המפה בעמדת האחיות.',
    note: 'יש 3 גרסאות אנטנה (SMA / U.FL / שבב). הקישור לגרסת U.FL. לוודא איזו נבחרה.',
    link: [{ label: 'sparkfun.com', url: 'https://www.sparkfun.com' }] },
  { id: 'SNS-05', group: 'sense', name: 'חיישן תנועה IMU',
    model: 'TDK InvenSense ICM-42688-P', size: '3 × 2.5 × 0.91', weight: 0, qty: 1,
    source: 'יצרן', status: 'check',
    role: 'מודד הטיה ותאוצה של הכלי, מאות פעמים בשנייה.',
    note: 'משקל זניח (פחות מ-10 גרם).',
    link: [{ label: 'invensense.tdk.com', url: 'https://invensense.tdk.com' }] },
  { id: 'SNS-06', group: 'sense', name: 'לוח חיישן מגע',
    model: 'Microchip EV24Z38A + MTCH1010', size: '70 × 35 × 8', weight: 0.013, qty: 1,
    source: 'גובה: הערכה', status: 'check',
    role: 'מזהה שיד נוגעת בידית, כדי שהכלי יאותת למטופל (למשל בהבהוב).',
    note: '',
    link: [{ label: 'microchip.com', url: 'https://www.microchip.com' }] },
  { id: 'SNS-07', group: 'sense', name: 'תא עומס',
    model: 'TE Connectivity FX29 · 100 lbf', size: '19.7 × 19.7 × 5.45', weight: 0.006, qty: 1,
    source: 'מהאפליקציה, לא אומת מול היצרן', status: 'check',
    role: 'מודד כמה חזק המטופל נשען על הידית.',
    note: '',
    link: [{ label: 'te.com', url: 'https://www.te.com' }] },

  /* ---------- ממשק משתמש ---------- */
  { id: 'UI-01', group: 'ui', name: 'מסך',
    model: 'טרם נבחר', size: '230 × 150 × 10', weight: 0.52, qty: 1,
    source: 'מקום שמור', status: 'check',
    role: 'מציג את מצב הכלי למטופל ולצוות.',
    note: 'מידה זמנית. לבחור דגם ולעדכן מידות.',
    link: [] },

  /* ---------- ציוד רפואי ---------- */
  { id: 'MED-02', group: 'med', name: 'שקית עירוי',
    model: 'שקית גמישה 1000 mL', size: '130 × 45 × 330', weight: 1.0, qty: 4,
    source: 'הערכה', status: 'check',
    role: 'הנוזל לעירוי. צריכה להיות תלויה מעל המשאבה.',
    note: '4 שקיות כשמותקנות 2 משאבות Plum Solo; אחרת 3.',
    link: [] },
  { id: 'MED-03', group: 'med', name: 'משאבת עירוי נפחית',
    model: 'ICU Medical Plum Solo', size: '165 × 165 × 216', weight: 3.2, qty: 2,
    source: 'יצרן (לפי האפליקציה)', status: 'check',
    role: 'דוחפת נוזל משקית תלויה אל הצינורית, בקצב מוגדר.',
    note: 'בלי תפסן המוט, עם סוללה. ערוץ אחד בכל רגע.',
    link: [{ label: 'מפרט יצרן', url: 'https://icumed.com/media/p5qnqzwh/p25-6759-r1_plum-solo-specification-sheet.pdf' }] },
  { id: 'MED-04', group: 'med', name: 'משאבת מזרק',
    model: 'ICU Medical Medfusion 4000', size: '270 × 145 × 160', weight: 2.04, qty: 1,
    source: 'יצרן', status: 'check',
    role: 'משאבת מזרק לנפחים קטנים: דוחפת תרופה ממזרק אל הצינורית, בקצב מוגדר.',
    note: '',
    link: [{ label: 'מדריך יצרן', url: 'https://www.icumed.com/media/ipelltd0/10024593-002_enpdf-medfusion-4000-v16-122022.pdf' }] },

  /* ---------- מבנה ---------- */
  { id: 'STR-01', group: 'str', name: 'משקולת נגד',
    model: 'לוח פלדה, ייצור עצמי', size: '300 × 80 × 27', weight: 5.0, qty: 1,
    source: 'מהאפליקציה', status: 'check',
    role: 'משקל נוסף נמוך בבסיס. מוריד את מרכז הכובד כדי שהכלי הגבוה לא ייפול.',
    note: 'במרכז, במקום הכי נמוך שפנוי. "Fit for 10°" ב-Part2 נותן מינימום של 2 ק"ג; נבחרו 5 ק"ג בשביל מרווח.',
    link: [] },

  /* ---------- פתוח ---------- */
  { id: 'OPN-01', group: 'open', name: 'מטען לסוללה הראשית',
    model: 'טרם נבחר', size: '', weight: null, qty: 1,
    source: '', status: 'open',
    role: 'טוען את הסוללה הראשית בתחנת העגינה.',
    note: 'מטען LiFePO4 ל-8 תאים, מתח טעינה 29.2 V, עם חיבור לתחנת העגינה.',
    link: [] },
  { id: 'OPN-02', group: 'open', name: 'מפסק חירום ונתיך ראשי',
    model: 'טרם נבחר', size: '', weight: null, qty: 1,
    source: '', status: 'open',
    role: 'עוצר את הכלי מיד, ומגן על המערכת מקצר.',
    note: 'לחצן עצירה אדום שמנתק את המנועים, ונתיך ליד הסוללה.',
    link: [] },
  { id: 'OPN-03', group: 'open', name: 'שלד ומעטפת',
    model: 'עיצוב עצמי', size: '', weight: null, qty: 1,
    source: 'הערכה', status: 'open',
    role: 'המבנה שמחזיק הכול, והקליפה שמכסה אותו.',
    note: 'הערכה: כ-10 ק"ג. לא נספר בסיכום עד שיהיה משקל.',
    link: [] }
];

/* ---------- רכיבים שירדו: לתיעוד בלבד, לא נספרים בסיכום ---------- */
window.SITE_DATA.DROPPED = [
  { id: 'PWR-02', name: 'סוללת גיבוי', model: 'Bioenno BLF-1203AB · LiFePO4 · 12 V · 3 Ah', size: '110 × 75 × 27', weight: 0.4, qty: 1,
    why: 'ירדה מהרשימה.', when: '25.11' },
  { id: 'PWR-03', name: 'מטען לסוללת הגיבוי', model: 'Powerwerx DCDC-8A', size: '137 × 76 × 30', weight: 0.52, qty: 1,
    why: 'ירד יחד עם סוללת הגיבוי.', when: '25.11' },
  { id: 'A', name: 'גלגל הנעה + מנוע בטבור', model: 'Segway Ninebot S, צמיג 70/65-6.5', size: 'Ø267 × 70', weight: 3.45, qty: 2,
    why: 'הנעה A: איזון עצמי על שני גלגלים. הוחלף בהנעה דיפרנציאלית עם גלגלים מסתובבים.', when: '17–22.11' },
  { id: 'A', name: 'בקר מנועים', model: 'Flipsky Dual 75100', size: '107 × 103 × 18.5', weight: 0.32, qty: 1,
    why: 'הנעה A.', when: '17–22.11' },
  { id: 'A', name: 'סוללה ראשית', model: 'NC1502-B · 54.3 V · 310 Wh', size: '308 × 180 × 43', weight: 1.9, qty: 1,
    why: 'הנעה A.', when: '17–22.11' },
  { id: 'B', name: 'גלגל הנעה', model: 'ZLTECH ZLLG80ASM800 V2.0 · 8″ · 48 V 800 W', size: 'Ø200 × 96', weight: 8.5, qty: 2,
    why: 'הנעה B. הוחלף בגלגלים הצרים של הנעה C (170 מ"מ, 24 וולט).', when: '24.11' },
  { id: 'B', name: 'בקר מנועים', model: 'ZLTECH ZLAC8030L · 48 V 30 A', size: '149.6 × 111.9 × 30.8', weight: 0.6, qty: 2,
    why: 'הנעה B.', when: '24.11' },
  { id: 'B', name: 'סוללה ראשית', model: 'LiTech LP13S2P5A40AL003 · 48 V 8.4 Ah · 404 Wh', size: '309 × 80 × 65', weight: 2.35, qty: 1,
    why: 'הנעה B.', when: '24.11' },
  { id: 'B', name: 'גלגל עזר מסתובב', model: 'Tente 2470PJP100P30 · Ø100', size: 'Ø100 × 60, גובה 135', weight: 0.582, qty: 2,
    why: 'הוחלף בגלגל הכפול הנמוך Tente Linea Ø75.', when: '24.11' },
  { id: 'רגלית', name: 'מפעיל רגלית', model: 'Actuonix P16-50-256-12', size: '105.5 × 22 × 22', weight: 0.095, qty: 1,
    why: 'הרגלית ירדה: הכלי עומד על ארבעה גלגלים.', when: '22.11' },
  { id: 'רגלית', name: 'בקר למפעיל', model: 'Pololu DRV8874', size: '17.8 × 15.2 × 3', weight: 0.0009, qty: 1,
    why: 'הרגלית ירדה.', when: '22.11' },
  { id: 'MED-01', name: 'בלון חמצן', model: 'בלון פלדה 5 ל\' · 200 bar · כ-1000 ל\' חמצן', size: 'Ø140 × 560', weight: 9.5, qty: 1,
    why: 'הוצא מהתצורה. 8.3 ק"ג ריק, 9.5 ק"ג מלא.', when: '16.11' },
  { id: 'MED-05', name: 'משאבת מזרק (תצורה חלופית)', model: 'BD Alaris GH', size: '310 × 121 × 200', weight: 2.4, qty: 3,
    why: 'הוחלפה ב-Plum Solo וב-Medfusion 4000. 2.4 ק"ג לפי היצרן; באפליקציה 2.7 ק"ג (עם תפסן).', when: '' }
];
