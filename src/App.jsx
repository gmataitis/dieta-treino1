import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

export default function DietaTreinoDashboard() {
  const [tab, setTab] = useState('dieta');

  const dieta = [
    { hora: '05h00', refeicao: 'Pré-treino', detalhes: '1 banana (90g) + 15g pasta de amendoim + café preto' },
    { hora: '07h40', refeicao: 'Pós-treino / Café', detalhes: '3 claras + 1 ovo (180g) + 40g aveia + 1 banana + 10g chia + 200ml leite vegetal' },
    { hora: '10h00', refeicao: 'Lanche manhã', detalhes: '150g mamão + 25g castanhas' },
    { hora: '12h30', refeicao: 'Almoço', detalhes: '120g arroz integral + 150g carne magra + 150g legumes + azeite (10g)' },
    { hora: '15h30', refeicao: 'Lanche tarde', detalhes: '170g iogurte + 100g fruta ou 40g pão integral' },
    { hora: '17h30', refeicao: 'Jantar', detalhes: '150g carne magra + 100g arroz integral + 150g legumes' },
    { hora: '20h30', refeicao: 'Ceia (opcional)', detalhes: '200ml leite vegetal + canela ou 150g mamão + 10g chia' }
  ];

  const treino = [
    { dia: 'Segunda', treino: 'Musculação + Core', duracao: '60min', intensidade: 'Moderada', descricao: 'Grupos grandes + abdômen' },
    { dia: 'Terça', treino: 'Cardio HIIT', duracao: '45min', intensidade: 'Alta', descricao: 'Corrida ou bike (10x1min forte/leve)' },
    { dia: 'Quarta', treino: 'Natação técnica', duracao: '60min', intensidade: 'Leve', descricao: 'Recuperação e técnica' },
    { dia: 'Quinta', treino: 'Full Body', duracao: '60min', intensidade: 'Alta', descricao: 'Circuitos metabólicos' },
    { dia: 'Sexta', treino: 'Cardio longo', duracao: '60–90min', intensidade: 'Moderada', descricao: 'Corrida ou bike contínua' },
    { dia: 'Sábado', treino: 'Brick (bike + corrida)', duracao: '60min', intensidade: 'Moderada', descricao: 'Simulação de triatlo' },
    { dia: 'Domingo', treino: 'Descanso ativo', duracao: '30–40min', intensidade: 'Leve', descricao: 'Caminhada ou alongamento' }
  ];

  const alarmes = [
    '05h00 – Pré-treino',
    '07h40 – Café / Pós-treino',
    '10h00 – Lanche manhã',
    '12h30 – Almoço',
    '15h30 – Lanche tarde',
    '17h30 – Jantar',
    '20h30 – Ceia'
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 className="text-3xl font-bold mb-6 text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        Plano de Dieta e Treino – Gustavo Mataitis
      </motion.h1>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="dieta">Dieta</TabsTrigger>
          <TabsTrigger value="treino">Treino</TabsTrigger>
          <TabsTrigger value="alarmes">Alarmes</TabsTrigger>
        </TabsList>

        <TabsContent value="dieta">
          <div className="grid gap-4">
            {dieta.map((item, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-4">
                  <h2 className="font-semibold text-lg">{item.hora} – {item.refeicao}</h2>
                  <p className="text-gray-600">{item.detalhes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="treino">
          <div className="grid gap-4">
            {treino.map((item, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-4">
                  <h2 className="font-semibold text-lg">{item.dia}</h2>
                  <p><b>{item.treino}</b> – {item.duracao}, {item.intensidade}</p>
                  <p className="text-gray-600">{item.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alarmes">
          <div className="grid gap-4">
            {alarmes.map((item, i) => (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-3 text-center text-gray-700 font-medium">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
