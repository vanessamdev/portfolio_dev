"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contacts = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "(11) 96000-1427",
    href: "https://wa.me/5511960001427",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "/vanessam-mendes",
    href: "https://www.linkedin.com/in/vanessam-mendes",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "/vanessamdev",
    href: "https://github.com/vanessamdev/",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@dev.vanessamendes",
    href: "https://www.instagram.com/dev.vanessamendes/",
  },
];

export default function ContatoPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-gray-400 mb-12">
            Pronta para novos projetos! Entre em contato para discutirmos como
            posso ajudar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Links de contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-6">Fale comigo</h2>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-brand/50 transition-colors"
                >
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-6">Envie uma mensagem</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors resize-none"
                  placeholder="Descreva seu projeto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-medium transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
