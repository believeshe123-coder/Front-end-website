export default function EmbeddedGoogleForm({ src, title }) {
  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
      <iframe
        src={src}
        title={title}
        className="min-h-[720px] w-full rounded-xl border border-blue-100 bg-slate-50"
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
}
