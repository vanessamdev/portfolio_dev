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
        </div>
      </section>
    </>
  );
}
