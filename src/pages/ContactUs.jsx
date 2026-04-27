import { useState } from "react";
import PageShell from "../components/PageShell";

const inputClassName =
  "w-full rounded-2xl border border-white/15 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30";

const contactPoints = [
  {
    label: "email",
    value: "support@onebyt.systems",
  },
  {
    label: "phone",
    value: "+91 7367036311",
  },
  {
    label: "address",
    value: "bh3 panchsakha nagar, bhubaneswar, odisha, india, 751020",
  },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + (data.error || "unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Network error processing submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell
      eyebrow="contact"
      title="tell us what you need to deploy"
      subtitle="share your project details and we will map the right hosting setup, performance targets, and rollout timeline for your application."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <form
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-8 space-y-5 fade-up delay-1"
        >
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
              full name
            </label>
            <input
              type="text"
              className={inputClassName}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your full name"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
              message
            </label>
            <textarea
              className={`${inputClassName} min-h-36 resize-y`}
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="tell us your use-case, traffic expectation, and preferred stack"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "sending..." : "send message"}
          </button>
        </form>

        <aside className="glass-card p-6 md:p-8 fade-up delay-2 space-y-5">
          <p className="text-sm leading-relaxed text-white/78">
            we handle infra planning, deployment automation, and managed hosting
            support for production workloads.
          </p>
          <div className="space-y-3">
            {contactPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/12 bg-black/35 px-4 py-3"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/55 m-0">
                  {item.label}
                </p>
                <p className="text-sm text-white m-0 mt-1 break-words">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

export default ContactUs;
