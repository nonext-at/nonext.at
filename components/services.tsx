import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function ServicesSection({ services, activeService, setActiveService }) {
    return (
        <section id="services" className="py-20 sm:py-16 relative z-10 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Unsere Dienstleistungen</h2>
                <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
                    <TabsList className="grid bg-black grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
                        {services.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className="flex flex-col items-center text-center p-2 data-[state=active]:bg-black data-[state=active]:text-white text-gray-500 rounded-lg text-xs sm:text-sm"
                            >
                                {service.icon}
                                <span className="mt-1 sm:mt-2 text-xs">{service.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {services.map((service) => (
                        <TabsContent key={service.id} value={service.id} className="mt-10 sm:mt-15 lg:mt-2">
                            <Card className="bg-black border-white/20">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-4">{service.description}</p>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <ArrowRight className="h-4 w-4 mr-2 text-white" />
                                                <span className="text-sm text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </motion.div>
        </section>
    )
}