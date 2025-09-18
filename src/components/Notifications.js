
import preDefinedNotifications from "../data/preDefinedNotifications";

export default function Notifications({ notifications, setNotifications }) {
  const handleRefresh = () => {
    setNotifications(preDefinedNotifications);
  };

  return (
    <section>
      <h2>Notifications</h2>
      <button onClick={handleRefresh} data-cy="refresh-btn">
        Refresh Notifications
      </button>
      <div>
        {notifications.length === 0 ? (
          <p>No notifications yet</p>
        ) : (
          notifications.map((n) => (
            <div key={n.id}>
              <strong>{n.user}</strong> {n.message}
              <p>
                <i>{new Date(n.time).toLocaleTimeString()}</i>
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
