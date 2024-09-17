document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const topic = document.getElementById('topic').value;
    const reason = document.getElementById('reason').value;
    const date = document.getElementById('date').value;
    const additional = document.getElementById('additional').value;
  
    // Array of dynamic parts for the email
    const greetings = [
      "Dear [Recipient's Name],",
      "Hello [Recipient's Name],",
      "Hi [Recipient's Name],",
      "Greetings [Recipient's Name],"
    ];
  
    const openingLines = [
      `I hope this message finds you well. I wanted to discuss "${topic}".`,
      `I am writing to bring to your attention the matter of "${topic}".`,
      `I wanted to touch base with you regarding "${topic}".`,
      `I hope you are doing well. I am reaching out regarding "${topic}".`
    ];
  
    const closingLines = [
      "Looking forward to your reply.",
      "I would appreciate your feedback.",
      "I await your response.",
      "I hope to hear from you soon."
    ];
  
    const bestRegards = [
      "Best regards,",
      "Sincerely,",
      "Kind regards,",
      "Yours truly,"
    ];
  
    // Randomly pick one line from each section
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const openingLine = openingLines[Math.floor(Math.random() * openingLines.length)];
    const closingLine = closingLines[Math.floor(Math.random() * closingLines.length)];
    const signOff = bestRegards[Math.floor(Math.random() * bestRegards.length)];
  
    // Construct the email dynamically
    const emailTemplate = `
      Subject: ${topic}
      
      ${greeting}
      
      ${openingLine}
      The reason for this message is: "${reason}".
      Kindly respond by ${date}.
      
      ${additional ? 'Additional details: ' + additional : ''}
  
      ${closingLine}
      
      ${signOff}
      [Your Name]
    `;
  
    // Display the email in the result section
    document.getElementById('emailContent').innerText = emailTemplate;
    document.getElementById('result').style.display = 'block';
  });
  