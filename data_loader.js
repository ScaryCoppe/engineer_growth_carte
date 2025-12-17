"use strict";

// Loads ./data.json and returns a Promise that resolves to { APP_VERSION, LABELS, STAGES }.
// Note: when opened via file://, many browsers block fetch(). Serve this folder over http(s).

window.loadAppData = function loadAppData() {
  return fetch("./data.json", { cache: "no-store" }).then((res) => {
    if (!res.ok) {
      throw new Error("data.json の取得に失敗しました: HTTP " + res.status);
    }
    return res.json();
  });
};
