<p align="center"><a href="https://bigdayco.com.br" target="_blank"><img style="width: 120px; height:120px; border-radius:99999px; overflow:hidden;" src="public/logo-bd.png" alt="logo bigday"></a></p>



<p align="center">
<a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="commitizen"></a>
</p>


# Template Default - Nextjs + Tailwind -- v1.0
**Dependências:**
- Nextjs: v13.1.6
- Typescript: v4.9.5
- Postcss: v8.4.21,
- Tailwindcss: v3.2.6
- Eslint: v8.33.0

**Improvements**
- Husky pre-commit
- Eslint rules

## Organização do versionamento - Git flow
***Branch Main***
- Principal branch, aqui é onde temos todo o código de produção. Todas as novas funcionalidades que estão sendo desenvolvidas, em algum momento, serão mescladas ou associadas a Master. As formas de interagir com essa branch são através de uma Hotfix ou de uma nova Release.

***Branch Dev***
- É a branch onde fica o código do próximo deploy. Ela serve como uma linha do tempo com os últimos desenvolvimentos, isso significa que ela possui funcionalidades que ainda não foram publicadas e que posteriormente vão ser associadas com a branch Main.

***Branch Feat***
- São branches utilizadas para o desenvolvimento de funcionalidades específicas. É recomendável que essas branches sigam uma convenção de nome, a convenção mais utilizada é iniciar o nome das branches com feature, por exemplo, _"feat/dropdown-component_". É importante saber que essas features branches são criadas ***sempre a partir da branch Dev***.

***Branch Hotfix***
- É uma branch criada a partir da main para realizar correções imediatas encontradas no sistema em **produção**. Quando concluída, ela é excluída após realizar o merge com as branches Main e Develop.
Hotfix são criados a partir da Branch Main e quando os finalizamos, eles são mesclados tanto na Branch Main quanto na branch de desenvolvimento
Temos uma branch de hotfix para cada hotfix que precisamos implementar!

## Padronização dos Commits:

Mensagems de commit deverá ser realizadas com a especificação do [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/). Ela define um conjunto de regras para criar um histórico de commit explícito.
