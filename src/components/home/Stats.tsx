const stats = [
  { value: "24/7", label: "Emergency response" },
  { value: "300+", label: "Medical specialists" },
  { value: "4.9/5", label: "Patient rating" },
  { value: "15+", label: "Specialty centers" },
];

export function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            Hospital Stats
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Advanced care delivered with calm precision.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
            >
              <p className="text-3xl font-semibold text-slate-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
