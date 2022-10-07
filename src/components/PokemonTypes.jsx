
const PokemonTypes = (tipo) =>(
    <div className={`pokemon-typelist ${tipo.type.name}`}>
        {tipo.type.name}
    </div>
)


export default PokemonTypes;

