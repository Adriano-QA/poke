<a href="https://reactpokedexapi.netlify.app/">DEMO LIVE</a>
## Tecnologias

<ul>
    <li>React 17.0.1</li>
    <li>Axios 0.21.1</li>
    <li>Redux 4.0.5</li>
    <li>Lodash 4.17.20</li>
    <li>React-Paginate 7.0.0</li>
</ul>

<h1>Ciclo de vida React</h1 >

Este é um recurso extremanente importante dentro do REACT, existe uma série de funções para cada ciclo de vida.

<h2>Ciclo de vida de um componente</h2>
    <p>O ciclo de vida de um componente poussui basicamente e etapas:</p>
    <ul>
        <li>Mounting - Montado</li>
        <li>Updating - Atualizado</li>
        <li>Unmounting - Desmontado</li>
    </ul>
    <h3>Eventos de montagem</h3>
        <h4>ComponentWillMount</h4>
            <p>Logo apó executar o método <i>constructor</i> é executado o <i>componentWillMount</i> esse método é excutado toda vez que ocorre alguma alteação nas propriedades ou estado do componente. </p>
        <h4>ComponentDidMount</h4>
            <p>Ao finalizar o <i>componentWillMount</i> indica que a renderização inicial do componente foi finalizada, então o método <i>render</i> é executado o <i>componentDidMount</i> este método é executado uma vez em um ciclo de vida de um componente e será após a primeira renderização.</p>
    <h3>Eventos de atualização</h3>
        <h4>ComponentDidUpdate</h4>
            <p>Este é executado indicando que o componente foi atualizado com sucesso.</p>
    <h3>Eventos de desmontagem</h3>
        <h4>ComponentWillUnmount</h4>
            <p>Este por sua vez é o último método do ciclo de vida do componente e é executado antes do componente ser removido da DOM</p>
    <h3>Outros métodos</h3>
            <p>Existem outros métodos que podem ser usados como: <i>componentWillRecieveProps</i>, <i>shouldComponentUpdate</i> entre outros, os citados anteriormente são basicamente os mais usados de forma simplificada, os outros tem suas espcificidades dentro da implementação desejada. </p>
