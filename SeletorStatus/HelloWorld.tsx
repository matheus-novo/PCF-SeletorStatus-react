import * as React from 'react';
// Importamos os botões e o alinhador da versão 8 do Fluent UI (que não dá erro)
import { Stack, PrimaryButton, DefaultButton } from '@fluentui/react';

// 1. O nosso contrato com o index.ts
export interface IHelloWorldProps {
    statusAtual: string;
    opcoes: string;
    onChange: (novoStatus: string) => void;
}

// 2. O Componente Funcional
export const HelloWorld: React.FC<IHelloWorldProps> = ({ statusAtual, opcoes, onChange }) => {
    
    // Pegamos a string "Novo, Em Andamento, Fechado" e transformamos num Array/Tabela
    const listaOpcoes = React.useMemo(() => {
        if (!opcoes) return [];
        return opcoes.split(',').map(opcao => opcao.trim()).filter(opcao => opcao.length > 0);
    }, [opcoes]);

    // 3. A Interface Visual
    return (
        // O Stack é o equivalente ao "Contêiner Horizontal" do Canvas App
        <Stack horizontal tokens={{ childrenGap: 8 }} verticalAlign="center">
            
            {/* Fazemos um Loop (Gallery) na nossa lista de opções para desenhar os botões */}
            {listaOpcoes.map((opcao, index) => {
                const isSelecionado = opcao === statusAtual;

                // Se o botão for o status atual, ele fica colorido (PrimaryButton). 
                // Se não, fica branco (DefaultButton)
                if (isSelecionado) {
                    return (
                        <PrimaryButton 
                            key={index} 
                            text={opcao} 
                            onClick={() => onChange(opcao)} 
                        />
                    );
                } else {
                    return (
                        <DefaultButton 
                            key={index} 
                            text={opcao} 
                            onClick={() => onChange(opcao)} 
                        />
                    );
                }
            })}
        </Stack>
    );
};