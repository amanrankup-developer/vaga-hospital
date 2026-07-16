import { doctors } from "@/data/doctors";

export function Doctors() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            Doctors
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Meet clinicians who combine expertise with empathy.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-24px_rgba(15,23,42,0.25)]"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-sky-600">
                  {doctor.rating}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {doctor.specialty}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  {doctor.experience} of experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
