import "./App.css";
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

function App() {
  const showNotification = async () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
    // Notification.requestPermission((status) => console.log({ status }));
    // if (Notification.permission === "granted") {
    //   navigator.serviceWorker.register("sw.js");
    //   const reg = await navigator.serviceWorker.getRegistration();
    //   console.log({ reg });
    //   reg.showNotification("Go go");
    // }
    // Notification.requestPermission().then(function (permission) {
    //   const notification = new Notification("Innroad Guest Message", {
    //     body: "on res cre 22807778. If you do not wish to receive messages, you can opt-out at any time by replying “STOP”. Please note, message and data rates may apply.",
    //     icon: "./logo.svg",
    //     vibrate: true,
    //   });
    //   setTimeout(() => {
    //     notification.close();
    //   }, 10 * 1000);
    //   notification.addEventListener("click", () => {
    //     window.open("https://www.qainnroad.com/", "_blank");
    //   });
    // });
  };

  setInterval(() => showNotification(), 7000);

  return (
    <div className="App">
      <Notifications />
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
