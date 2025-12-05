// Data Array -----------------------------------------------
const sessions = [
  {day:1, start:"00:44", end:"00:54", recv:{msg:3, emo:0, media:0}, send:{msg:1, emo:0, media:0}},
  {day:1, start:"08:59", end:"09:28", recv:{msg:58, emo:3, media:0}, send:{msg:41, emo:1, media:3}},
  {day:1, start:"09:41", end:"10:29", recv:{msg:38, emo:2, media:3}, send:{msg:35, emo:8, media:1}},
  {day:1, start:"11:35", end:"11:37", recv:{msg:2, emo:0, media:0}, send:{msg:2, emo:0, media:0}},
  {day:1, start:"11:51", end:"11:58", recv:{msg:5, emo:0, media:0}, send:{msg:0, emo:1, media:0}},
  {day:1, start:"14:51", end:"15:05", recv:{msg:0, emo:0, media:0}, send:{msg:7, emo:0, media:4}},
  {day:1, start:"19:31", end:"19:45", recv:{msg:14, emo:0, media:1}, send:{msg:11, emo:0, media:1}},
  {day:1, start:"20:16", end:null, recv:{msg:0, emo:0, media:0}, send:{msg:1, emo:0, media:0}},
  {day:1, start:"20:47", end:"20:53", recv:{msg:6, emo:0, media:0}, send:{msg:5, emo:1, media:0}},
  {day:1, start:"21:09", end:"21:12", recv:{msg:3, emo:1, media:0}, send:{msg:2, emo:0, media:0}},
  {day:1, start:"21:24", end:"21:33", recv:{msg:2, emo:0, media:0}, send:{msg:2, emo:2, media:0}},
  {day:1, start:"23:00", end:"23:04", recv:{msg:0, emo:0, media:0}, send:{msg:5, emo:0, media:1}},
  {day:1, start:"23:25", end:"23:48", recv:{msg:22, emo:0, media:0}, send:{msg:37, emo:2, media:0}},

  {day:2, start:"00:38", end:null, recv:{msg:0, emo:0, media:0}, send:{msg:1, emo:0, media:0}},
  {day:2, start:"00:50", end:null, recv:{msg:19, emo:1, media:1}, send:{msg:14, emo:3, media:0}},
  {day:2, start:"01:45", end:"02:40", recv:{msg:125, emo:0, media:1}, send:{msg:127, emo:22, media:8}},
  {day:2, start:"03:02", end:null, recv:{msg:4, emo:0, media:0}, send:{msg:0, emo:0, media:0}},
  {day:2, start:"05:54", end:null, recv:{msg:4, emo:0, media:1}, send:{msg:0, emo:0, media:0}},
  {day:2, start:"10:16", end:"10:22", recv:{msg:11, emo:0, media:0}, send:{msg:16, emo:0, media:1}},
  {day:2, start:"10:35", end:"11:01", recv:{msg:12, emo:0, media:0}, send:{msg:11, emo:0, media:0}},
  {day:2, start:"11:33", end:"11:34", recv:{msg:4, emo:0, media:0}, send:{msg:0, emo:0, media:0}},
  {day:2, start:"11:48", end:null, recv:{msg:2, emo:0, media:0}, send:{msg:0, emo:0, media:0}},
  {day:2, start:"12:06", end:"12:07", recv:{msg:3, emo:0, media:0}, send:{msg:3, emo:0, media:0}},
  {day:2, start:"12:59", end:null, recv:{msg:0, emo:0, media:0}, send:{msg:3, emo:0, media:0}},
  {day:2, start:"19:06", end:null, recv:{msg:1, emo:0, media:0}, send:{msg:0, emo:0, media:0}},
  {day:2, start:"20:53", end:"22:11", recv:{msg:162, emo:0, media:2}, send:{msg:103, emo:9, media:11}},
  {day:2, start:"22:28", end:null, recv:{msg:0, emo:1, media:0}, send:{msg:0, emo:0, media:0}},
  {day:2, start:"22:50", end:"23:11", recv:{msg:28, emo:1, media:0}, send:{msg:11, emo:58, media:0}},
  {day:2, start:"23:36", end:"23:40", recv:{msg:1, emo:0, media:0}, send:{msg:1, emo:1, media:0}},

  {day:3, start:"23:59", end:"00:04", recv:{msg:8, emo:1, media:0}, send:{msg:14, emo:0, media:1}},
  {day:3, start:"00:43", end:"00:44", recv:{msg:1, emo:1, media:0}, send:{msg:2, emo:0, media:0}},
  {day:3, start:"01:15", end:"01:20", recv:{msg:0, emo:0, media:0}, send:{msg:5, emo:0, media:0}},
  {day:3, start:"01:49", end:null, recv:{msg:0, emo:3, media:0}, send:{msg:0, emo:0, media:0}},
  {day:3, start:"04:23", end:"04:27", recv:{msg:8, emo:1, media:0}, send:{msg:0, emo:0, media:0}},
  {day:3, start:"09:08", end:null, recv:{msg:0, emo:0, media:0}, send:{msg:6, emo:0, media:0}},
  {day:3, start:"09:50", end:null, recv:{msg:4, emo:0, media:0}, send:{msg:0, emo:0, media:0}},
  {day:3, start:"11:25", end:"11:56", recv:{msg:51, emo:0, media:0}, send:{msg:44, emo:0, media:0}},
];
// -----------------------------------------------

let dayFilter = 0;      // 0 = All, 1, 2, 3...

let myFont;

function preload() {
  myFont = loadFont('assets/PretendardJP-Regular.otf');
}

const COL_NYC = '#bbe309';
const COL_SEL = '#001CB4';
const ORBIT_BASE = 202;
const ORBIT_STEP = 30;
const DIAL_RADIUS = 440;
const TICK_INNER = 195;
const TICK_OUTER = 218;
// Time offset animation (0 = EST, 195 = KST)
let targetOffsetDeg = 0;
let currentOffsetDeg = 0;
const SHIFT_DEG = 195;        // +13 hours
const SHIFT_SPEED = 0.08;

function setup(){
  createCanvas(600, 600);
  angleMode(DEGREES);
  textFont(myFont);
}

function draw(){
  background(10);

  // Coordinate system centered at the middle
  translate(width/2, height/2);

  blendMode(ADD);

  // Dial & Dual hour hands
  drawDialGuides();
  drawDualHourHands();

  // +13h offset animation
  const delta = targetOffsetDeg - currentOffsetDeg;
  if (abs(delta) > 0.1) currentOffsetDeg += delta * SHIFT_SPEED;
  else currentOffsetDeg = targetOffsetDeg;

  // Render bubbles
  let idx = 0;
  for (const s of sessions){
    if (dayFilter !== 0 && s.day !== dayFilter) continue;
    drawBubble(s, idx++);
  }

  // HUD
  blendMode(BLEND);
  drawHUD();
}

/* Clock dial */
function drawDialGuides(){
  // Outer circle
  push();
  noFill(); stroke(40); circle(0,0,DIAL_RADIUS); pop();

  // 24-hour tick marks
  for (let h=0; h<24; h++){
    const ang = map(h, 0, 24, -90, 270);
    push();
    rotate(ang);
    stroke(h%6===0 ? 110 : 60);
    line(TICK_INNER, 0, TICK_OUTER, 0);
    pop();
  }
}

/* Dual hour hands (real time) */
function drawDualHourHands(){
  const est  = getTimeParts('America/New_York');
  const kst = getTimeParts('Asia/Seoul');

  const estMin = est.h*60 + est.m + est.s/60;
  const kstMin = kst.h*60 + kst.m + kst.s/60;

  const estAng  = map(estMin,  0,1440, -90, 270);
  const kstAng = map(kstMin, 0,1440, -90, 270);

  const L = 225;
  const cap = 8;

  // EST hand
  push();
  rotate(estAng);
  stroke(color(COL_NYC)); strokeWeight(5);
  line(0, 0, L-5, 0);
  noStroke(); fill(COL_NYC); circle(L-5, 0, cap);
  textAlign(LEFT, CENTER);
  fill(255);
  text('NYC', L+5, 0);
  pop();

  // KST hand
  push();
  rotate(kstAng);
  stroke(color(COL_SEL)); strokeWeight(5);
  line(0, 0, L-5, 0);
  noStroke(); fill(COL_SEL); circle(L-5, 0, cap);
  textAlign(LEFT, CENTER);
  fill(255);
  text('SEL', L+5, 0);
  pop();

  // Center cap
  noStroke(); fill(255, 230);
  circle(0, 0, 8);
}

// Hour / minute / second by timezone
function getTimeParts(tz){
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour12: false,
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  const parts = dtf.formatToParts(new Date());
  let h=0, m=0, s=0;
  for (const p of parts){
    if (p.type === 'hour')   h = int(p.value);
    if (p.type === 'minute') m = int(p.value);
    if (p.type === 'second') s = int(p.value);
  }
  return {h, m, s};
}

/* Bubble rendering */
function toMinutes(hhmm){
  if(!hhmm) return 0;
  const [H, M] = hhmm.split(':').map(n=>int(n));
  return H*60 + M;
}

function drawBubble(s, i){
  const total = s.recv.msg + s.send.msg;
  const emo   = s.recv.emo + s.send.emo;
  const media = s.recv.media + s.send.media;

  // Start time → angle (based on NY) + offset
  const startMin = toMinutes(s.start);
  let ang = map(startMin, 0, 1440, -90, 270);
  ang += currentOffsetDeg;

  // ✴︎ Messages = Size of Bubble ✴︎ & pulse effect
  const baseR = map(total, 0, 200, 6, 45);
  const pulse = 1 + 0.08 * sin(frameCount*2 + i*13);
  const r     = baseR * pulse;

  // ✴︎ Ratio of Emoticons = Opacity ✴︎
  const emoRatio = total>0 ? emo/total : 0;
  const alpha    = map(emoRatio, 0, 0.5, 80, 255, true);

  // Color interpolation (NYC → SEL)
  colorMode(RGB);
  const cNY = color(COL_NYC), cKR = color(COL_SEL);
  const t = constrain(currentOffsetDeg / SHIFT_DEG, 0, 1); // 0..1
  const cMix = lerpColor(cNY, cKR, t);
  cMix.setAlpha(alpha);

  // Orbit radius per day
  const orbit = ORBIT_BASE + ORBIT_STEP * (s.day - 1);

  push();
  rotate(ang);
  translate(orbit, 0);

  // Main bubble
  noStroke();
  fill(cMix);
  circle(0, 0, r*2);

  // ✴︎ Media = Number of Concentric Rings ✴︎
  const ringCount = constrain(media, 0, 8);
  const ringGap   = 4;
  for (let j=1; j<=ringCount; j++){
    noFill();
    stroke(255, 230);
    strokeWeight(1);
    circle(0, 0, r*2 + j*ringGap);
  }

  // ✴︎ Emoticons = Sparkle Effect ✴︎
  if (emo > 0){
    const n = constrain(emo, 0, 20);
    for (let k=0; k<n; k++){
      push();
      const a = random(360);
      const d = r*0.62 + random(-3, 3);
      const x = cos(a)*d, y = sin(a)*d;
      noStroke(); fill(255, 230);
      circle(x, y, 2 + random(1,2));
      pop();
    }
  }

  pop();
}

/* HUD */
function drawHUD(){
  // Bottom center
  resetMatrix();
  fill(230); noStroke();
  textAlign(CENTER);

  const timeModeLabel = (targetOffsetDeg === 0) ? 'EST' : 'KST';
  text(`Day: ${dayFilter===0?'All':dayFilter}`, width/2, height - 30);
  text(`Time Mode: ${timeModeLabel}`,          width/2, height - 18);

  // Top-left
  textAlign(LEFT, TOP);
  text('PRESS [← → / Spacebar]', 12, 10);
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW) dayFilter = (dayFilter+1)%4; // 0..3
  if(keyCode===LEFT_ARROW)  dayFilter = (dayFilter+3)%4;
  if(key === ' '){
    targetOffsetDeg = (targetOffsetDeg === 0) ? SHIFT_DEG : 0;
  }
}
