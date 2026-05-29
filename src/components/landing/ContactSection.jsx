import { InteractiveCard, ScrollSection } from "./SectionShell";

function ContactSection({ formData, setFormData, onSubmit, isSubmitting }) {
  return (
    <ScrollSection
      id="contact"
      eyebrow="contact"
      title="talk to the deployment operations team"
      subtitle="share your current stack and traffic goals, and we will propose the provider layout, deployment lane, and maintenance scope."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <InteractiveCard>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight lowercase m-0">
            direct channels
          </h3>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            <p className="m-0">email: support@onebyt.systems</p>
            <p className="m-0">phone: +91 7367036311</p>
            <p className="m-0">
              location: bh3 panchsakha nagar, bhubaneswar, odisha, india
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/14 bg-black/40 px-4 py-4 text-sm text-white/72 leading-relaxed">
            onboarding response time is usually within 6 hours for deployment
            requests and within 12 hours for minecraft development requests.
          </div>
        </InteractiveCard>

        <InteractiveCard>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                placeholder="your name"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                placeholder="your email"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                requirement
              </label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25 resize-y"
                placeholder="tell us your app type, stack, expected traffic, and timeline"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "submitting..." : "submit request"}
            </button>
          </form>
        </InteractiveCard>
      </div>
    </ScrollSection>
  );
}

export default ContactSection;
