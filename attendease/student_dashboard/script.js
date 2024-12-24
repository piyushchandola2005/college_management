document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const closeChatbot = document.getElementById("closeChatbot");
    const chatbotMessages = document.getElementById("chatbotMessages");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const questions = document.querySelectorAll(".question");
  
    const subjectAttendance = {
      DAA: "27/30",
      DBMS: "24/30",
      AI: "28/30",
      WT: "26/30",
    };
  
    const facultyContacts = {
      DAA: "Mr. Vivek: +91 98765 43210",
      DBMS: "Mr. Ashish: +91 87654 32109",
      AI: "Mr. Tyagi: +91 76543 21098",
      WT: "Mr. Ashish: +91 87654 32109",
    };
  
    const botResponses = {
      attendance: () => {
        return (
          "📊 Attendance Report:\n" +
          Object.entries(subjectAttendance)
            .map(([subject, attendance]) => `${subject}: ${attendance}`)
            .join("\n")
        );
      },
      faculty: () => {
        return (
          "📞 Faculty Contacts:\n" +
          Object.entries(facultyContacts)
            .map(([subject, contact]) => `${subject}: ${contact}`)
            .join("\n")
        );
      },
      timetable: () =>
        "🗓️ Check your timetable on the dashboard under the Time Table section.",
      leave: () =>
        "🏖️ To apply for leave, visit the leave application portal in your dashboard.",
      password: () =>
        "🔐 To reset your password, go to the login page and click on 'Forgot Password'.",
    };
  
    // Toggle chatbot visibility
    chatbotToggle.addEventListener("click", () => {
      chatbotWindow.style.display =
        chatbotWindow.style.display === "block" ? "none" : "block";
    });
  
    closeChatbot.addEventListener("click", () => {
      chatbotWindow.style.display = "none";
    });
  
    // Handle sending messages
    const sendMessage = (message, type) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", type);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };
  
    const handleUserMessage = (query) => {
      sendMessage(query, "user");
      const response =
        botResponses[query.toLowerCase()]?.() ||
        "🌈 Sorry, I couldn't understand that. Try asking about attendance, faculty contacts, timetable, leave, or password.";
      setTimeout(() => sendMessage(response, "bot"), 500);
    };
  
    sendButton.addEventListener("click", () => {
      const query = userInput.value.trim().toLowerCase();
      if (query) {
        handleUserMessage(query);
        userInput.value = "";
      }
    });
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const query = question.getAttribute("data-question");
        handleUserMessage(query);
      });
    });
  });
  