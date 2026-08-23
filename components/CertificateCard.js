export default function CertificateCard({
  name,
  issuer,
  date,
  description,
  file,
  image,
  credentialUrl,
}) {
  const link = file || credentialUrl;
  const linkLabel = file ? 'View certificate (PDF)' : 'View credential';

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-md">
      <div className="flex items-start gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-400 mb-2">
            {issuer}
            {issuer && date && ' • '}
            {date}
          </p>
          {description && <p className="text-gray-300">{description}</p>}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-white underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {linkLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {image && (
          <a
            href={link || image}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block shrink-0 w-24 md:w-28 rounded-sm overflow-hidden border border-white/10 bg-white hover:opacity-80 transition-opacity"
            aria-label={`Open ${name}`}
          >
            <img src={image} alt={`${name} certificate`} className="w-full h-auto block" />
          </a>
        )}
      </div>
    </div>
  );
}
