"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🛒",
    title: "E-commerce",
    description:
      "Lojas virtuais completas com catálogo de produtos, carrinho, checkout integrado com gateways de pagamento (PIX, cartão), cálculo de frete e painel administrativo.",
    features: [
      "Integração com Stripe / Mercado Pago",
      "Painel admin com gestão de pedidos e estoque",
      "Responsivo e otimizado para conversão",
      "SEO e performance",
    ],
  },
  {
    icon: "🏢",
    title: "Sites Institucionais",
    description:
      "Sites profissionais para empresas com área pública, blog, formulário de contato e portal do cliente com autenticação.",
    features: [
      "Design moderno e responsivo",
      "Blog integrado com CMS",
      "Portal do cliente com login seguro",
      "SEO otimizado (meta tags, sitemap, Open Graph)",
    ],
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para produtos e serviços, com foco em performance, design impactante e CTAs estratégicos.",
    features: [
      "Lighthouse 95+ (performance e SEO)",
      "Animações e micro-interações",
      "Integração com WhatsApp e analytics",
      "A/B testing ready",
    ],
  },
  {
    icon: "⚡",
    title: "Automação com AWS",
    description:
      "Soluções serverless para automação de processos — notificações agendadas, processamento de dados e integrações entre sistemas.",
    features: [
      "AWS Lambda + EventBridge",
      "Integração com APIs externas",
      "Notificações via email (SES) e SMS",
      "Infraestrutura como código (SAM/Terraform)",
    ],
  },
  {
    icon: "📄",
    title: "Processamento de Documentos (OCR)",
    description:
      "APIs para extração automática de dados de documentos (notas fiscais, boletos, contratos) usando AWS Textract.",
    features: [
      "Upload e processamento de PDF/imagens",
      "Extração de campos estruturados em JSON",
      "Armazenamento seguro no S3",
      "Interface web para demonstração",
    ],
  },
  {
    icon: "🔗",
    title: "Integrações e APIs",
    description:
      "Desenvolvimento de APIs REST, integração entre sistemas, webhooks e automação de fluxos de dados.",
    features: [
      "APIs RESTful com Node.js ou Python",
      "Autenticação OAuth2 / JWT",
      "Webhooks e eventos em tempo real",
      "Documentação e testes automatizados",
    ],
  },
];

export default function ServicosPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Serviços</h1>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Soluções sob medida para o seu negócio — do desenvolvimento web ao
            cloud computing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand/50 transition-colors"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-brand mt-0.5">•</span> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interessado em algum serviço? Vamos conversar!
          </p>
          <Link
            href="https://wa.me/5511960001427"
            target="_blank"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            💬 Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
