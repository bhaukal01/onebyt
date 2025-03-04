import "./MinecraftServices.css";

function MinecraftServices() {
  return (
    <div className="minecraft-services-container">
      <header className="minecraft-services-header">
        <h1>Our Minecraft Services</h1>
        <p>
          We provide top-notch Minecraft server solutions, custom plugins, and
          optimized hosting to enhance your gameplay experience.
        </p>
      </header>

      <div className="minecraft-services-grid">
        {/* BungeeCord Setup */}
        <div className="service-card">
          <h2>BungeeCord Server Setup</h2>
          <p>
            We set up and configure BungeeCord networks, allowing multiple
            servers to be linked together for a seamless player experience.
          </p>
        </div>

        {/* Custom Game Modes */}
        <div className="service-card">
          <h2>Survival & Other Game Modes</h2>
          <p>
            We offer pre-configured and custom survival, factions, skyblock,
            prison, and other game modes with full bug testing.
          </p>
        </div>

        {/* Custom Mobs & Items */}
        <div className="service-card">
          <h2>Custom Mobs & Items</h2>
          <p>
            Bring your world to life with unique custom mobs, items, abilities,
            and enchantments tailored to your gameplay style.
          </p>
        </div>

        {/* Optimized Plugins & Performance */}
        <div className="service-card">
          <h2>Optimized Plugins & Performance</h2>
          <p>
            Our servers come with fully optimized plugin configurations to
            ensure minimal lag and high performance.
          </p>
        </div>

        {/* Anti-Cheat & Security */}
        <div className="service-card">
          <h2>Anti-Cheat & Security</h2>
          <p>
            We implement advanced anti-cheat solutions and security patches to
            keep your server fair and protected.
          </p>
        </div>

        {/* Full Server Management */}
        <div className="service-card">
          <h2>Full Server Management</h2>
          <p>
            From setup to maintenance, we provide 24/7 support and server
            management so you can focus on growing your community.
          </p>
        </div>
      </div>

      <div className="minecraft-combined-info">
        <h2>💡 Combine Minecraft Hosting & Services</h2>
        <p>
          You can purchase Minecraft hosting and our Minecraft services together
          for a complete, hassle-free server experience.
        </p>
      </div>
    </div>
  );
}

export default MinecraftServices;
