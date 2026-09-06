// Fakes a slow 3rd-party script (like an analytics tag) by busy-waiting
// the main thread for 3 seconds before letting anything else happen.
console.log("slow.js started");

const start = Date.now();
while (Date.now() - start < 3000) {
  // busy loop - deliberately blocks the thread to simulate a slow download+run
}

console.log("slow.js finished after ~3s");
