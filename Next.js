import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("landing");
  const [avatar, setAvatar] = useState(null);
  const [jewels, setJewels] = useState(100000);
  const [diamonds, setDiamonds] = useState(10);
  const [reward, setReward] = useState("");

  const spinWheel = () => {
    const rewards = [
      { text: "5 Diamond Tokens", d: 5 },
      { text: "15 Diamond Tokens", d: 15 },
      { text: "50,000 Gold Jewels", j: 50000 },
      { text: "10 Free Spins" },
      { text: "Cloak Cosmetic" }
    ];
    const win = rewards[Math.floor(Math.random() * rewards.length)];
    if (win.d) setDiamonds(diamonds + win.d);
    if (win.j) setJewels(jewels + win.j);
    setReward(win.text);
  };

  if (screen === "landing") {
    return (
      <div style={styles.page}>
        <h1>Mystical Casino Rush</h1>
        <button onClick={() => setScreen("avatar")}>
          Enter the Velvet Realm
        </button>
      </div>
    );
  }

  if (screen === "avatar") {
    const creatures = ["Grim Reaper", "Widow Witch", "Skeleton", "Vampire"];
    const zodiac = [
      "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
      "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
    ];

    return (
      <div style={styles.page}>
        <h2>Choose Your Identity</h2>

        <h3>Creatures</h3>
        {creatures.map((c) => (
          <button key={c} onClick={() => {setAvatar(c); setScreen("wheel");}}>
            {c}
          </button>
        ))}

        <h3>Zodiac</h3>
        {zodiac.map((z) => (
          <button key={z} onClick={() => {setAvatar(z); setScreen("wheel");}}>
            {z}
          </button>
        ))}
      </div>
    );
  }

  if (screen === "wheel") {
    return (
      <div style={styles.page}>
        <h2>🎡 Wheel of Fortune</h2>
        <button onClick={spinWheel}>Spin</button>
        <p>{reward}</p>
        <button onClick={() => setScreen("lobby")}>Enter Lobby</button>
      </div>
    );
  }

  if (screen === "lobby") {
    return (
      <div style={styles.page}>
        <h2>Game Lobby</h2>
        <p>Avatar: {avatar}</p>
        <p>💛 Gold Jewels: {jewels}</p>
        <p>💎 Diamond Tokens: {diamonds}</p>

        <h3>Games</h3>
        <ul>
          <li>Dark Fire Link</li>
          <li>Black Widow Rush</li>
          <li>Love Potion Keno</li>
        </ul>

        <button onClick={() => setScreen("dj")}>
          🎧 DJ’s Turntables
        </button>
      </div>
    );
  }

  if (screen === "dj") {
    return (
      <div style={styles.page}>
        <h2>🎧 DJ’s Turntables</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
          width="300"
          height="380"
          allow="encrypted-media"
        ></iframe>
        <br />
        <button onClick={() => setScreen("lobby")}>Back</button>
      </div>
    );
  }
}

const styles = {
  page: {
    background: "black",
    color: "violet",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px"
  }
};
