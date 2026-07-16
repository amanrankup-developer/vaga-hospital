import { departments } from "@/data/departments";

export function Departments() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            Departments
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Specialized care for every stage of life.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {departments.map((department) => (
            <div
              key={department.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)]"
            >
              <div className="inline-flex rounded-2xl bg-sky-50 p-3 text-4xl transition duration-300 group-hover:scale-105">
                {department.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {department.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {department.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-600">
                {department.stats}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
