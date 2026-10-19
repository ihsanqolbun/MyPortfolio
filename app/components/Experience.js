"use client";

export default function Experience() {
  const entries = [
    {
      index: "01",
      type: "Internship",
      role: "Solo developer",
      title: "Backend Developer Intern",
      org: "Pengadilan Agama",
      dates: "Aug 2025 – Nov 2025",
      body: "Built an internal system integrating two national government databases. Designed 8 REST API endpoints and implemented caching, delivered solo end to end.",
      metric: "5-10s",
      metricCaption: "per case recap, down from minutes to days",
      stack: ["Native PHP", "MySQL", "REST API"],
      image: null,
      caseStudy: null,
    },
    {
      index: "02",
      type: "Organization",
      role: "Event Lead",
      title: "Head of Sports & Health Division",
      org: "BEM",
      dates: "2024 – 2025",
      body: "Led university-wide sports festival — managed schedule, budget, logistics, and cross-team coordination.",
      metric: null,
      metricCaption: null,
      stack: [],
      image: null,
      caseStudy: null,
    },
  ];

  return (
    <section
      id="trainings"
      className="py-16 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-[960px] px-6">
        <header className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-[36px] leading-[1.1] text-[var(--color-text-primary)] md:text-[40px]">
            Experience
          </h2>
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            Internship and organization
          </span>
        </header>

        <div>
          {entries.map((entry, i) => (
            <article
              key={entry.index}
              className="flex flex-wrap items-center gap-8 border-t border-[var(--color-bg-card-border)] py-8"
              style={{
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div className="w-full md:w-[40%] md:flex-shrink-0">
                <div
                  className="overflow-hidden rounded-md border border-[var(--color-bg-card-border)] bg-[var(--color-bg-card)]"
                  style={{ aspectRatio: "16/10", maxHeight: "220px" }}
                >
                  <div className="flex h-7 items-center gap-1.5 border-b border-[var(--color-bg-card-border)] px-3">
                    <div className="h-2 w-2 rounded-full bg-[var(--color-bg-card-border)] opacity-60"></div>
                    <div className="h-2 w-2 rounded-full bg-[var(--color-bg-card-border)] opacity-60"></div>
                    <div className="h-2 w-2 rounded-full bg-[var(--color-bg-card-border)] opacity-60"></div>
                  </div>
                  {entry.image ? (
                    <img
                      src={entry.image}
                      alt={`${entry.title} at ${entry.org}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        [add screenshot]
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 md:w-[calc(60%-2rem)] md:flex-shrink-0">
                <p className="font-mono text-xs text-[var(--color-text-muted)]">
                  {entry.index} / {entry.type} · {entry.role}
                </p>

                <h3 className="font-serif text-[24px] leading-[1.1] text-[var(--color-text-primary)] md:text-[26px]">
                  {entry.title}
                </h3>

                <p className="font-mono text-xs text-[var(--color-text-muted)]">
                  {entry.org} · {entry.dates}
                </p>

                <p className="font-sans text-[15px] leading-[1.6] text-[var(--color-text-muted)]">
                  {entry.body}
                </p>

                {entry.metric && (
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-[32px] leading-none text-[var(--color-text-primary)]">
                      {entry.metric}
                    </span>
                    <span className="font-sans text-xs text-[var(--color-text-muted)]">
                      {entry.metricCaption}
                    </span>
                  </div>
                )}

                {entry.stack.length > 0 && (
                  <p className="font-mono text-xs text-[var(--color-text-muted)]">
                    {entry.stack.join(" · ")}
                  </p>
                )}

                {entry.caseStudy && (
                  <a
                    href={entry.caseStudy}
                    className="mt-1 inline-block w-fit border-b border-[var(--color-bg-card-border)] font-sans text-[15px] text-[var(--color-text-primary)] transition-colors duration-150 hover:border-[var(--color-text-muted)]"
                  >
                    Read the case study →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
