db = db.getSiblingDB("shootizy");

db.emailTemplates.insert([
  {
    templateId: "BOOKING_CONFIRM",
    subject: "Votre réservation est confirmée",
    html: `
      Bonjour,<br/>
      <br/>
      Votre réservation est confirmée pour le <b>[DATE]</b> à <b>[TIMESLOT]</b>.<br/>
      <br/>
      Merci de votre confiance !<br/>
      <br/>
      Cordialement,<br/>
      Shootizy
    `,
  },
  {
    templateId: "BOOKING_CANCEL",
    subject: "Votre réservation est annulée",
    html: `
      Bonjour,<br/>
      <br/>
      Nous ne sommes pas en mesure de donner suite à votre réservation pour le <b>[DATE]</b> à <b>[TIMESLOT]</b>.<br/>
      Par conséquent, elle a été annulée.<br/>
      <br/>
      Merci de votre compréhension !<br/>
      <br/>
      Cordialement,<br/>
      Shootizy
    `,
  },
]);

// Create index for fast search
db.emailTemplates.createIndex({ templateId: 1 }, { unique: true });
