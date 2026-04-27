import { useLocation } from "react-router-dom";
import PageShell from "../components/PageShell";

const inputClassName =
  "w-full rounded-2xl border border-white/15 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30";

const selectClassName =
  "w-full rounded-2xl border border-white/15 bg-neutral-900/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30";

function Checkout() {
  const location = useLocation();
  const selectedPlan = location.state?.plan || {
    name: "custom plan",
    price: "0",
  };

  return (
    <PageShell
      eyebrow="checkout"
      title="complete your hosting order"
      subtitle="review your selected plan and share deployment details so we can provision the environment exactly as required."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="glass-card p-6 md:p-8 fade-up delay-1 h-fit">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55 m-0">
            selected plan
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight lowercase">
            {selectedPlan.name}
          </h2>
          <p className="mt-3 text-3xl font-medium tracking-tight">
            ₹{selectedPlan.price}
            <span className="ml-1 text-sm text-white/60">/month</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            after payment confirmation, provisioning starts immediately and a
            deployment summary is shared over email.
          </p>
        </aside>

        <form className="glass-card p-6 md:p-8 space-y-5 fade-up delay-2">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                full name
              </label>
              <input
                type="text"
                className={inputClassName}
                placeholder="enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                email
              </label>
              <input
                type="email"
                className={inputClassName}
                placeholder="enter your email"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                server name
              </label>
              <input
                type="text"
                className={inputClassName}
                placeholder="enter your server name"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                server description
              </label>
              <input
                type="text"
                className={inputClassName}
                placeholder="enter a short description"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                server software
              </label>
              <select className={selectClassName} defaultValue="bungeecord">
                <option value="bungeecord">bungeecord</option>
                <option value="vanilla">vanilla</option>
                <option value="paper">paper</option>
                <option value="spigot">spigot</option>
                <option value="forge">forge</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                server version
              </label>
              <select className={selectClassName} defaultValue="1.21.4">
                <option>1.8.8</option>
                <option>1.8.9</option>
                <option>1.12.2</option>
                <option>1.16.5</option>
                <option>1.17</option>
                <option>1.17.1</option>
                <option>1.18.1</option>
                <option>1.20</option>
                <option>1.21</option>
                <option>1.21.4</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
              payment method
            </label>
            <select className={selectClassName} defaultValue="no-gateway">
              <option value="select">select</option>
              <option value="no-gateway">no payment gateway found</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
          >
            proceed to payment
          </button>
        </form>
      </div>
    </PageShell>
  );
}

export default Checkout;
