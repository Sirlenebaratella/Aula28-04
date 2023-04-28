// criando um componente, e dentro dele uma função com um botão dentro. construindo o botão

import styles from './ButtonFatec.module.css'

function ButtonFatec(props) {
    const {type, label} = props // para acessar direto . se chama se destruturação. ( não precisa ficar chamando a var. todas as vezes)
    return(
        <button className={styles.ButtonFatec} type={type}>
            Fatec : {label}
        </button>
    )
}

export default ButtonFatec