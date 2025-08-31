import teamData from "./../data/team.json";
import "./OurTeam.css";

function OurTeam() {
  const team = Array.isArray(teamData) ? teamData : teamData.members || [];

  return (
    <section className="our-team py-5">
      <div className="container">
        <header className="text-center mb-4">
          <h1 className="our-team__title display-5 fw-semibold mb-2">
            Our Team
          </h1>
          <p className="our-team__subtitle lead text-secondary m-0">
            Meet the dedicated professionals behind OneByt Cloud Systems.
          </p>
        </header>

        <div className="row g-4">
          {team.map((m) => (
            <div
              key={m.id || m.name}
              className="col-12 col-sm-6 col-lg-4 d-flex"
            >
              <article className="card team-card flex-fill h-100 shadow-sm border-0">
                <div className="ratio ratio-4x3 team-card__media">
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.post}`}
                    className="card-img-top object-fit-cover"
                  />
                </div>
                <div className="card-body team-card__body">
                  <h3 className="card-title h5 mb-1 team-card__name">
                    {m.name}
                  </h3>
                  <p className="card-text text-secondary small team-card__post">
                    {m.post}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
