# CClab-DataPortrait
✤ Dual Time Data Clock ✤

**Concept Summary**

  * A 24-hour dual time clock that visualizes the rhythm of my cross-time communication.
  * Data points from real conversations are translated into light, orbit, and time — tracing the invisible connection between two cities.

------------------------------

**Structure**

  * 24-hour circular clock divided evenly around the canvas.
  * Two live hour hands representing **New York (NYC)** and **Seoul (SEL)** time zones.
  * Outer tick marks: one tick per hour; brighter marks at 0 / 6 / 12 / 18 hours.
  * Bubbles placed along the circular orbit according to each chat session’s start time.

------------------------------

**Data Mapping**

  *Each bubble = one chat session**
  * Position → conversation start time (mapped on 24h clock).
  * Orbit ring → corresponding day (Day 1 / 2 / 3).
  * Size → total number of messages (sent + received).
  * Transparency → ratio of emojis used in that session.
  * Number of concentric rings → number of media files (photos, videos, etc.).
  * Subtle pulsation → ongoing communication flow (animated by `frameCount`).

------------------------------

**Color System**

  * **NYC mode (EST):** Neon yellow `#bbe309`
  * **SEL mode (KST):** Deep blue `#001CB4`
  * Each person’s favorite k-pop group’s official color ✌hehehe✌
  * Bubbles gradually shift color from yellow → blue as time mode transitions.

------------------------------

**User Interface (HUD)**

* **Top-left corner:**

  * `PRESS [← → / Spacebar]` — instruction hint.
* **Bottom center:**

  * `Day: All / 1 / 2 / 3` — current data day filter.
  * `Time Mode: EST / KST` — current timezone reference for all bubbles.
  
------------------------------

**Keyboard Interaction**

  * **← / →** : Cycle through Day filters (All → 1 → 2 → 3).
  * **Spacebar** : Toggle between **NYC (EST)** and **Seoul (KST)** modes.
