import { services } from "@/data/services";

export function Services() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            Quick Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Care that feels effortless from the first touchpoint.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_20px_60px_-24px_rgba(14,165,233,0.45)]"
            >
              <div
                className={`inline-flex rounded-2xl bg-linear-to-br ${service.accent} p-3 text-2xl text-white transition duration-300 group-hover:scale-105`}
              >
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
