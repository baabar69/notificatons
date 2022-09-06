import "./App.css";
import logo from "./logo.svg";

function App() {
  const NotificationIsSupported = !!(
    (
      window.Notification /* W3C Specification */ ||
      window.webkitNotifications /* old WebKit Browsers */ ||
      navigator.mozNotification
    ) /* Firefox for Android and Firefox OS */
  );

  const options = {
    body: "on res cre 22807778. If you do not wish to receive messages, you can opt-out at any time by replying “STOP”. Please note, message and data rates may apply.",
    icon: logo,
    vibrate: [200, 100, 200, 100, 200, 100, 200],
  };
  const showNotification = async () => {
    if (NotificationIsSupported) {
      Notification.requestPermission((status) => console.log({ status }));

      if (Notification.permission === "granted") {
        navigator.serviceWorker.register("service-worker.js");
        const reg = await navigator.serviceWorker.getRegistration();
        console.log({ reg });
        reg.showNotification("Innroad GM", options);
      }
    }
  };

  setInterval(() => showNotification(), 7000);

  return (
    <div className="App">
      <header className="App-header">
        {NotificationIsSupported ? (
          <div
            className="App-link"
            onClick={showNotification}
            rel="noopener noreferrer"
          >
            click to Show Notification
          </div>
        ) : (
          <div className="App-link" rel="noopener noreferrer">
            Notifications not supported
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
