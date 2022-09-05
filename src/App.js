import logo from "./logo.svg";
import "./App.css";

function App() {
  const showNotification = () => {
    // create a new notification
    try {
      console.log("1");
      const notification = new Notification("Innroad Guest Message", {
        body: "on res cre 22807778. If you do not wish to receive messages, you can opt-out at any time by replying “STOP”. Please note, message and data rates may apply.",
        icon: logo,
        vibrate: true,
      });
      console.log("2", notification);

      // close the notification after 10 seconds
      setTimeout(() => {
        notification.close();
      }, 10 * 1000);

      console.log("3");
      // navigate to a URL
      notification.addEventListener("click", () => {
        window.open("https://www.qainnroad.com/", "_blank");
      });
      console.log("4");
    } catch (error) {
      console.log(error);
    }
  };

  setInterval(() => showNotification(), 7000);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="App-link"
          onClick={showNotification}
          rel="noopener noreferrer"
        >
          Show Notification
        </div>
        or you will get notifications after every 7 seconds
      </header>
    </div>
  );
}

export default App;
