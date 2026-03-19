export default function ExperienceCard({ title, company, period, description }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{company} • {period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
