"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Lojas virtuais completas com pagamento, carrinho e painel admin.",
  },
  {
    icon: "🏢",
    title: "Sites Institucionais",
    desc: "Sites profissionais com SEO, blog e portal do cliente.",
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "Páginas de alta conversão, rápidas e responsivas.",
  },
  {
    icon: "☁️",
    title: "Automação AWS",
    desc: "Soluções serverless, integrações e processamento em cloud.",
  },
];

const certifications = [
  "AWS Cloud Practitioner",
  "Desenvolvimento Web Full Stack",
  "Desenvolvimento de Software",
  "Análise de Dados",
  "AWS re/Start",
  "Oracle Cloud Foundations",
];

const awsBadges = [
  { src: "/assets/aws-certified-cloud-practitioner.png", alt: "AWS Certified Cloud Practitioner" },
  { src: "/assets/badge-connect-ai-fundamentals.png", alt: "AWS Knowledge: Amazon Connect AI Fundamentals" },
  { src: "/assets/badge-connect-communications.png", alt: "AWS Knowledge: Amazon Connect Communications Specialist" },
  { src: "/assets/badge-connect-communications-2.png", alt: "AWS Knowledge: Amazon Connect Communications Specialist" },
  { src: "/assets/Badge_AI-ML_Fundamentals_23_out_2025_6960437f.png", alt: "AI/ML Fundamentals" },
  { src: "/assets/Cloud_Optimization_Fundamentals_23_out_2025_27ec95da.png", alt: "Cloud Optimization Fundamentals" },
  { src: "/assets/Modern_Contact_Center_Fundamentals_6_nov_2025_49d717d3.png", alt: "Modern Contact Center Fundamentals" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-medium mb-2">Olá, eu sou</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Vanessa Mendes
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Desenvolvedora Web &{" "}
              <span className="text-brand">Cloud AWS</span>
            </p>
            <p className="text-gray-400 mb-8 max-w-lg">
              Transformo ideias em soluções digitais — e-commerce, sites
              institucionais, landing pages e automação em cloud. Pronta para o
              seu próximo projeto.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contato"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Fale comigo
              </Link>
              <Link
                href="/projetos"
                className="border border-brand text-brand hover:bg-brand/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver projetos
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/perfil-2026.png"
              alt="Vanessa Mendes"
              width={400}
              height={400}
              className="rounded-full border-4 border-brand/30 shadow-2xl shadow-brand/10"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-gray-300 space-y-4">
                <p>
                  Após mais de uma década na área comercial, encontrei na
                  engenharia de software o ambiente perfeito para unir lógica,
                  criatividade e propósito.
                </p>
                <p>
                  Atualmente faço parte do time <strong>Data e GenIA</strong>,
                  explorando soluções inteligentes e escaláveis. Sou certificada{" "}
                  <strong>AWS Cloud Practitioner</strong> e estudo Engenharia de
                  Software com especialização em cloud.
                </p>
                <p>
                  Como freelancer, atuo em projetos de e-commerce, sites
                  institucionais, landing pages e automação com serviços AWS.
                </p>
              </div>
              <div>
                <h3 className="text-brand font-semibold mb-4">
                  Certificações
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-gray-300">
                      <span className="text-brand">✓</span> {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {awsBadges.map((badge) => (
                <Image
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  width={100}
                  height={100}
                  className="rounded"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços resumo */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            O que eu faço
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand/50 transition-colors"
              >
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="text-brand hover:text-brand font-medium"
            >
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vamos construir algo juntos?
          </h2>
          <p className="text-gray-400 mb-8">
            Estou disponível para projetos freelance. Entre em contato e vamos
            conversar sobre como posso ajudar seu negócio.
          </p>
          <Link
            href="https://wa.me/5511960001427"
            target="_blank"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
          >
            💬 Chamar no WhatsApp
          </Link>
          <div className="flex justify-center gap-6 mt-8">
            <Link href="https://www.linkedin.com/in/vanessam-mendes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link href="https://github.com/vanessamdev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link>
            <Link href="https://www.instagram.com/dev.vanessamendes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
