import React from "react";
   
const Notifications = ({ notifications, onRefresh }) => {
  return (
    <section className="notifications">
      <h2>Notifications</h2>
      <button
        type="button"
        className="button"
        onClick={() => {
          if (typeof onRefresh === "function") onRefresh();
        }}
      >
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {notifications.length === 0 ? null : (
          <div>
            {notifications.map((n) => (
              <div key={n.id} className="notification-item">
                {n.message}
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Notifications;
