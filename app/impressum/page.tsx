'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ImpressumPage() {
    return (
        <section className="relative z-10 py-16 sm:pt-24 overflow-hidden bg-black">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-8 text-gray-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Diensteanbieter & Medieninhaber
                            </h2>
                            <p className="mb-1">Noel Hermann &amp; Michael Prietl</p>
                            <p className="mb-1">Gesellschaft bürgerlichen Rechts (GesbR)</p>
                            <p className="mb-1">Verwendete Geschäftsbezeichnung: NoNext</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Anschrift (zustellfähig)
                            </h2>
                            <address className="not-italic">
                                Bundesstraße 101
                                <br />
                                6923 Lauterach, Vorarlberg, Österreich
                            </address>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">Kontakt</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    E-Mail:{' '}
                                    <a
                                        href="mailto:nh@nonext.at"
                                        className="underline underline-offset-4 hover:no-underline"
                                    >
                                        nh@nonext.at
                                    </a>
                                </li>
                                <li>
                                    Telefon:{' '}
                                    <a
                                        href="tel:+436504721448"
                                        className="underline underline-offset-4 hover:no-underline"
                                    >
                                        +43 650 4721448
                                    </a>
                                </li>
                                <li>
                                    Kontaktformular:{' '}
                                    <Link
                                        href="/kontakt"
                                        className="underline underline-offset-4 hover:no-underline"
                                    >
                                        nonext.at/kontakt
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Unternehmensgegenstand
                            </h2>
                            <p>
                                Entwicklung und Betrieb von webbasierten Kommunikations- und
                                Softwarelösungen (SaaS), insbesondere Videomeeting-Dienste.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Gewerbe & Aufsicht (sofern einschlägig)
                            </h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    Gewerbeberechtigung: Dienstleistungen in der automatischen
                                    Datenverarbeitung und Informationstechnik (freies Gewerbe)
                                </li>
                                <li>
                                    Standort der Gewerbeberechtigung (Noel): Bundesstraße 101,
                                    6923 Lauterach
                                </li>
                                <li>Standort der Gewerbeberechtigung (Michael): [Adresse/Ort]</li>
                                <li>Zuständige Behörde: Bezirkshauptmannschaft Bregenz</li>
                                <li>GISA-Zahl(en): [Noel: …] [Michael: …]</li>
                                <li>Mitgliedschaft: Wirtschaftskammer Vorarlberg</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Umsatzsteuer / UID
                            </h2>
                            <p>
                                Umsatzsteuerfrei gemäß § 6 Abs. 1 Z 27 UStG
                                (Kleinunternehmerregelung); es wird keine Umsatzsteuer
                                ausgewiesen. [Derzeit keine UID vergeben.]
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Medienrechtliche Offenlegung (klein, § 25 Abs. 5 MedienG)
                            </h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Medieninhaber: Noel Hermann</li>
                                <li>Anschrift: Bundesstraße 101, 6923 Lauterach, Vorarlberg</li>
                                <li>Unternehmensgegenstand: wie oben</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Haftungshinweis
                            </h2>
                            <p>
                                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                                Für die Inhalte externer Links wird keine Haftung übernommen; für
                                den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber
                                verantwortlich.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Urheberrecht
                            </h2>
                            <p>
                                Alle Inhalte, Grafiken und das Layout von nonext.at sind
                                urheberrechtlich geschützt. Jede Nutzung außerhalb der Grenzen
                                des Urheberrechts bedarf der vorherigen schriftlichen
                                Zustimmung.
                            </p>
                        </div>

                        <div className="pt-2 text-sm text-gray-400">
                            <p>Stand: 01.09.2025</p>
                            <p className="mt-1">
                                Rechtsgrundlagen: § 5 ECG, § 63 GewO (falls einschlägig), § 25
                                MedienG (kleine Offenlegung)
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
