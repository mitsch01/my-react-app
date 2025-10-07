export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="font-semibold">Amrei Fiedler</div>
          <div className="text-sm text-gray-600">Hamburg, Germany</div>
          <div className="mt-2 text-sm">Email: <a href="mailto:hello@example.com" className="underline">hello@example.com</a></div>
        </div>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
        </div>
        <div className="text-sm">
          <a className="block" href="/datenschutz">Datenschutz</a>
          <a className="block" href="/impressum">Impressum</a>
        </div>
      </div>
    </footer>
  )
}