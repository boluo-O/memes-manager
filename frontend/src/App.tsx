import TrpcApiProvider from './api/TrpcApiProvider'
import Memes from './pages/Memes'

const App = () => {
    return (
        <TrpcApiProvider>
            <Memes />
        </TrpcApiProvider>
    )
}

export default App
