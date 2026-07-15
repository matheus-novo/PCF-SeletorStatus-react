import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";

export class SeletorStatus implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private valorAtual: string | null;

    constructor() {
        // Construtor vazio intencional
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        // Lemos as duas propriedades que definimos no Manifesto
        const props: IHelloWorldProps = {
            statusAtual: context.parameters.statusAtual.raw ?? "",
            opcoes: context.parameters.opcoes.raw ?? "",
            onChange: (novoValor: string) => {
                this.valorAtual = novoValor;
                this.notifyOutputChanged();
            }
        };

        return React.createElement(HelloWorld, props);
    }

    public getOutputs(): IOutputs {
        return {
            statusAtual: this.valorAtual ?? "" // Devolvemos o botão que o usuário clicou
        };
    }

    public destroy(): void {
        // Não há recursos pendentes para limpar
    }
}