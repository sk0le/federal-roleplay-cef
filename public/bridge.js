let attempt = 0;
// Handle events from client
function trigger(eventName, args) {
  try {
    var handlers = window.EventManager.events[eventName];
    handlers.forEach((handler) => handler(JSON.parse(args)));
    attempt = 0;
  } catch (e) {
    console.error("failed to execute event " + eventName, args, e);
    if (attempt > 3) return;
    setTimeout(() => {
      trigger(eventName, args);
      attempt++;
    }, 500);
  }
}
