Explique com suas palavras o que é tree shaking e como isso pode beneficiar os desenvolvedores que fazem uso de módulos no Javascript.

Resposta:

O termo tree shaking refere-se a remoção de “código morto” em nossa aplicação, o nome se popularizou com o Rollup — um empacotador de módulos ES2015. O tree shaking é uma técnica que analisa estaticamente o código que é importado de algum módulo e durante o bundle remove trechos não usados. Esse passo é bastante importante quando vamos preparar um build para produção, gerando arquivos menores.

Ferramentas como Webpack ou o próprio Rollup citado acima detectam esses códigos que não estão sendo usados na aplicação e removem do pacote gerado no final.

O código que, por exemplo, o Webpack não vê você usando, ele vai seguir a trilha de imports e exports ao longo de nossa aplicação, caso ele encontre algum módulo importado que não esteja sendo usado no módulo que o importou o Webpack vai considerar como “código morto”.