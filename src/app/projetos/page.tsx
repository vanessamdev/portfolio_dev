"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Completo",
    description:
      "Loja virtual com catálogo, carrinho, checkout com gateway de pagamento (PIX + cartão) e painel administrativo.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    status: "Em desenvolvimento",
    link: "#",
  },
  {
    title: "Site Institucional",
    description:
      "Site profissional com área pública, blog, portal do cliente com login e upload de documentos via AWS S3.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "SES"],
    status: "Em desenvolvimento",
    link: "#",
  },
  {
    title: "Landing Page de Produto",
    description:
      "Página de alta conversão para SaaS com design moderno, animações, CTA para WhatsApp e Lighthouse 95+.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    status: "Em desenvolvimento",
    link: "#",
  },
  {
    title: "Automação AWS Lambda + Notificações",
    description:
      "Sistema serverless que lê planilhas e dispara notificações automáticas via email/SMS por agendamento.",
    tags: ["AWS Lambda", "EventBridge", "SES", "DynamoDB", "SAM"],
    status: "Em desenvolvimento",
    link: "#",
  },
  {
    title: "OCR de Documentos com AWS Textract",
    description:
      "API que extrai dados de notas fiscais e boletos (PDF/imagem) e retorna JSON estruturado.",
    tags: ["Python", "FastAPI", "AWS Textract", "S3", "Lambda"],
    status: "Em desenvolvimento",
    link: "#",
  },
  {
    title: "Mulheres em Foco",
    description:
      "E-commerce responsivo com React + TypeScript, TailwindCSS e Spring Boot. Arquitetura MVC e RESTful.",
    tags: ["React", "TypeScript", "Spring Boot", "Tailwind"],
    status: "Concluído",
    link: "https://mulheresemfoco.netlify.app/",
  },
  {
    title: "Monitoramento e Observabilidade",
    description:
      "Stack AWS (CloudWatch, CloudTrail, X-Ray, Grafana). Arquitetura otimizada para baixo custo e escalabilidade.",
    tags: ["AWS", "CloudWatch", "Grafana", "X-Ray"],
    status: "Concluído",
    link: "https://canva.link/xapzmj0wr8ec4bk",
  },
];

export default function ProjetosPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Projetos</h1>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Projetos desenvolvidos para demonstrar competências em
            desenvolvimento web full stack e cloud AWS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand/50 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Concluído"
                      ? "bg-brand/20 text-brand"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-brand hover:text-brand text-sm font-medium"
                >
                  Ver projeto →
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
