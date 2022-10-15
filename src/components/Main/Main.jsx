import {Container} from 'reactstrap'

const Main = ({children}) => {
 
    return(
        <Container className='container py-5 d-flex flex-column gap-5 justify-content-center align-items-center'>
            {children}
        </Container>
    )
}

export default Main