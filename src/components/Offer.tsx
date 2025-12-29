"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

const inclusions = [
    "Chatbot Intelligent 24/7",
    "Gestion des Comptes Clients",
    "Réservation Express (30s)",
    "Système de Fidélité Automatique",
    "Panel de Gestion Complet",
    "Génération de Factures PDF",
    "Tableau de Bord Statistique",
    "Hébergement Première Année",
    "Formation sur Site incluse",
];

export default function Offer() {
    return (
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -z-10 blur-[120px]" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)]"
                >
                    <div className="grid md:grid-cols-[1.2fr_1fr]">
                        <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full">
                                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Offre Partenaire Pilote</span>
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Exclusivité <br /> Hôtel Kyrline.</h2>
                            <p className="text-zinc-500 font-medium text-lg mb-12 max-w-sm">
                                Bénéficiez du statut de pionnier et de notre tarif de lancement exceptionnel.
                            </p>

                            <div className="flex flex-col gap-2 mb-12">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl md:text-7xl font-black tracking-tighter">400,000</span>
                                    <span className="text-xl font-bold text-zinc-600">DA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-red-500 line-through">650,000 DA</span>
                                    <span className="text-xs font-black text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded tracking-widest uppercase">Économisez 250k</span>
                                </div>
                            </div>
                            <div className="mt-12 p-6 rounded-3xl bg-red-500/5 border border-red-500/20 flex flex-col items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">Offre Limitée dans le Temps</span>
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-black text-white">31</span>
                                        <span className="text-[8px] font-bold text-zinc-500 uppercase">Janvier</span>
                                    </div>
                                    <div className="text-2xl font-black text-zinc-800">/</div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-black text-white">2026</span>
                                        <span className="text-[8px] font-bold text-zinc-500 uppercase">Année</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center">
                                    Passée cette date, le tarif standard de 650,000 DA sera appliqué.
                                </p>
                            </div>
                        </div>

                        <div className="p-12 md:p-20 bg-black/40">
                            <h3 className="text-xs font-black uppercase text-zinc-500 tracking-[0.3em] mb-12">Ce qui est inclus :</h3>
                            <ul className="grid grid-cols-1 gap-6">
                                {inclusions.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4 text-sm font-bold text-zinc-300"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-blue-500" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-16 pt-10 border-t border-zinc-800 space-y-6">
                                <div className="p-6 rounded-3xl bg-zinc-950/50 border border-zinc-800/50 space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">Coûts d'Exploitation (Post-An 1)</h4>

                                    <div className="flex justify-between items-center group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight">Maintenance Suivi</span>
                                        </div>
                                        <span className="text-sm font-black text-white">15,000 DA<span className="text-[10px] text-zinc-600 font-bold">/MOIS</span></span>
                                    </div>

                                    <div className="flex justify-between items-center group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight">Hébergement Cloud</span>
                                        </div>
                                        <span className="text-sm font-black text-white">70,000 DA<span className="text-[10px] text-zinc-600 font-bold">/2 ANS</span></span>
                                    </div>
                                </div>

                                <div className="space-y-3 px-2">
                                    <div className="flex gap-3">
                                        <div className="w-1 h-1 rounded-full bg-blue-500/20 mt-1.5 shrink-0" />
                                        <p className="text-[10px] text-zinc-500 leading-relaxed font-medium italic">
                                            Le chatbot utilise les services <span className="text-zinc-300 font-bold">Google AI</span> (Frais API env. 3k-5k DA/mois selon volume).
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-1 h-1 rounded-full bg-green-500/20 mt-1.5 shrink-0" />
                                        <p className="text-[10px] text-zinc-500 leading-relaxed font-medium italic">
                                            Infrastructure Cloud sécurisée <span className="text-green-500/60 font-bold">incluse la 1ère année</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
