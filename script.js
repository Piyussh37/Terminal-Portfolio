document.addEventListener("DOMContentLoaded", function () {
 const terminalOutput = document.querySelector(".output");
 const commandInput = document.querySelector("#commandInput");

 // Function to execute a command
 function executeCommand(command) {
  terminalOutput.innerHTML += "<p class='command'>> " + command + "</p>";


  switch (command) {
   case "Help":
    terminalOutput.innerHTML += "<p>Welcome.</p>";

    terminalOutput.innerHTML += "<p>This is a static terminal-like application.</p>";

    terminalOutput.innerHTML += "<p>You can use the following commands:</p>";

    terminalOutput.innerHTML += "<ul>";
    terminalOutput.innerHTML += "<li><strong>Help</strong> - Displays an overview of the application and commands.</li>";
    terminalOutput.innerHTML += "<li><strong>About</strong> - Displays information about the application.</li>";
    terminalOutput.innerHTML += "<li><strong>Contact</strong> - Provides contact details to get in touch.</li>";
    terminalOutput.innerHTML += "<li><strong>Skills</strong> - Displays technical skills</li>";
    terminalOutput.innerHTML += "<li><strong>Projects</strong> - Showcases expertise through hands-on-work</li>";
    terminalOutput.innerHTML += "<li><strong>CV</strong> - Displays your CV.</li>";
    terminalOutput.innerHTML += "</ul>";

    terminalOutput.innerHTML += "<p>Feel free to try out these commands by typing them in the input box below.</p>";
    break;
   case "About":
    terminalOutput.innerHTML += "<p>About:</p>";

    terminalOutput.innerHTML += "<p>This application was developed by Piyush Patil, a MERN Developer based in Maharashtra, India.</p>";

    terminalOutput.innerHTML += "<p>Piyush Patil is a B-Tech graduate from R.C.Patel Institute of Technology and a self-taught coder with a passion for web development. He specializes in building web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</p>";

    terminalOutput.innerHTML += "<p>With a keen interest in solving problems and building intuitive user interfaces, Piyush strives to create efficient and elegant solutions.</p>";
    break;
   case "Contact":
    terminalOutput.innerHTML += "<h3>Contact details:</h3>";
  
    terminalOutput.innerHTML += "<p>Email: <a href='mailto:example@example.com'>patilpiyush3788@gmail.com</a></p>";
    
    terminalOutput.innerHTML += "<p>GitHub: <a href='https://github.com/Piyussh37' target='_blank'>Piyussh37</a></p>";
  
    terminalOutput.innerHTML += "<p>LinkedIn: <a href='https://www.linkedin.com/in/ankur-auti-37/' target='_blank'>piyush-patil</a></p>";
    break;

    case "Skills":
      terminalOutput.innerHTML += "<ul style='list-style-type: square; padding-left: 20px; color: #3498db; font-weight: bold;'>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔹</span> Java</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔹</span> Python</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔹</span> ReactJs</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔹</span> MySQL</li>";
      terminalOutput.innerHTML += "</ul>";
      break;

      case "Projects":
      terminalOutput.innerHTML += "<ul style='list-style-type: square; padding-left: 20px; color: #3498db; font-weight: bold;'>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔸 </span> Extract Stock Sentiment From News Headlines and Forecasting</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔸</span> Wanderlust Web (React Responsive Website)</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔸</span> Agricultural Bootstrap Website</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔸</span> Text to HTML using Django</li>";
      terminalOutput.innerHTML += "<li style='list-style-type: none;'><span style='color: #e67e22;'>🔸</span> Student Management System</li>";
      terminalOutput.innerHTML += "</ul>";
      break;

   case "CV":
    terminalOutput.innerHTML += "<p>Click button to download CV:</p>";
  
    terminalOutput.innerHTML += "<button onclick='downloadCV()'>Download CV</button>";
    break;
   default:
    terminalOutput.innerHTML += "<p class='error'>Command not found</p>";
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
 }

 // Execute the Help command on startup
 executeCommand("Help");

 commandInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
   const command = commandInput.value;
   executeCommand(command);

   commandInput.value = "";
   terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
 });

 window.addEventListener("load", function () {
  const savedCommand = sessionStorage.getItem("command");
  if (savedCommand && performance.navigation.type !== 1) {
   // Check if the page is not being reloaded from the cache
   executeCommand(savedCommand);
   sessionStorage.removeItem("command");
  }
 });
});

// Function to handle the download button click event
function downloadCV() {
 // Create a temporary link element
 const link = document.createElement('a');
 link.href = 'https://drive.google.com/file/d/1muBC4rTKtT0DBwr64JUgrwhoSmyHX3F0/view?usp=drive_link';  
 link.download = 'Piyush_Patil_9689990948.pdf';  
 
 // Simulate a click event on the link
 link.click();
}
