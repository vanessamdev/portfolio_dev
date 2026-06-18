import Link from "next/link";

const socials = [
  { href: "https://www.linkedin.com/in/vanessam-mendes", label: "LinkedIn" },
  { href: "https://github.com/vanessamdev/", label: "GitHub" },
  { href: "https://www.instagram.com/dev.vanessamendes/", label: "Instagram" },
  { href: "https://wa.me/5511960001427", label: "WhatsApp" },
  { href: "https://skillsprofile.skillbuilder.aws/user/vanessam-mendes/certification-badges", label: "AWS Skillbuilder" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2026 Vanessa Mendes. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand transition-colors text-sm"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
