export default function ExperienceCard({ title, company, period, description }) {
  return (
    <div className="bg-gray-900 border border-white p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{company} • {period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
